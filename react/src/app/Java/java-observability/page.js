import CodeBlock from '@/components/shared/CodeBlock';
import { Code } from '@mui/icons-material';

export const metadata = {
  title: 'Observability in Java',
  description: 'Notes on implementing observability in Java applications, including logging, monitoring, and tracing.',
};

export default function JavaObservability() {
  return (
    <>
      {/* Observability  */}
      <section>
        <h3 className='section-header' id='observability'>
          Observability
        </h3>
        <p>Observability is the ability to understand the internal state of a system based on the data it produces, such as logs, metrics, and traces. In Java applications, observability can be achieved through various tools and libraries that help developers monitor and debug their applications effectively.</p>
        <ul>
            <li><code>Traces</code> : Data that shows the path and time of a request as it moves through different services.</li>
            <li><code>Metrics</code> : Data that provide information about the system's health, performance, and behavior.</li>
        </ul>
        <p>Examples: showing the time the parts of a request take and aggregating them</p>
        <CodeBlock>{`
POST /internal/anime                    420ms
│
├── anime.insert                        130ms
│   ├── postgres                        18ms
│   └── character.insert                72ms
│
└── anime.index                         270ms
    ├── postgres queries                 45ms
    ├── anime.index.build-documents      21ms
    └── solr update                     196ms    
        `}</CodeBlock>
        <hr />
      </section>


      {/* Simple Setup  */}
      <section>
        <h3 className='section-header' id='simple-setup'>
          Simple Setup
        </h3>
        <p>A simple setup to use with Spring Boot is with the following setup:</p>
        <ul>
            <li><code>Spring Micrometer</code> : An observability abstraction that simplifies the process of adding metrics to your application.</li>
            <ul>
                <li><code>OpenTelemetry</code> : a framework Micrometer can integrate with for tracing</li>
                <li><code>Actuator</code> : provides health checks, metrics, and operational information of your Spring system during runtime</li>
                <li><code>Grafana Alloy</code> : collect logs from <code>Logback/SLF4J</code> and send them to a </li>
                <ul>
                    <li>Can also collect system operation information: CPU, RAM, disk, and Solr/ZooKeeper/PostgreSQL metrics so it can be used to monitor database performance</li>
                </ul>
            </ul>
            <li><code>Tempo</code> : stores the trace produced by OpenTelemetry.</li>
            <li><code>Prometheus</code> : stores the metrics produced by Spring Micrometer.</li>
            <li><code>Loki</code> : stores the logs produced by Logback/SLF4J.</li>
            <li><code>Grafana</code> : visualizes the traces, metrics, and logs stored in their respective systems.</li>
        </ul>
        <CodeBlock>{`// Simple Architecture for Observability in Spring Boot

                              Spring Boot
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
          TRACES               METRICS               LOGS
             │                    │                    │
      OpenTelemetry           Micrometer          Logback/SLF4J
             │                    │                    │
             │                    │              Grafana Alloy
             │                    │                    │
             ▼                    ▼                    ▼
           Tempo              Prometheus              Loki
             │                    │                    │
             └────────────────────┼────────────────────┘
                                  │
                                  ▼
                               Grafana
        `}</CodeBlock>
        <hr />

        <h4 className='sub-section-header'>Implementation:</h4>
        <p>Dependencies:</p>
        <CodeBlock>{`
<!-- Observability -->

<!-- Spring Micrometer -->
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-tracing-bridge-otel</artifactId>
</dependency>

<!-- OpenTelemetry -->
<dependency>
    <groupId>io.opentelemetry</groupId>
    <artifactId>opentelemetry-exporter-otlp</artifactId>
</dependency>

<!-- Actuator -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

<!-- Lombok/SLF4J -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
        `}</CodeBlock>
        <p>Code Implementation:</p>
        <ul>
            <li>use <code>@Observed(name = "trace-name")</code> annotation to mark methods for observability</li>
            <li>use <code>log.error("Error occurred", exception)</code> for logging errors</li>
            <ul>
                <li><code>Grafana Alloy</code> : needs to be run as a separate service on the same server as the Spring Boot application to collect the logs</li>
            </ul>
            <li>metrics doesn't need any code implementation for basic usage</li>
        </ul>
        <CodeBlock language='java'>{`
// Trace Implementation Example

@Observed(name = "anime.index")
public void indexBatch(Map<Integer, Set<Integer>> requests) {
    ...
}
    
@Observed(name = "anime.index.build-documents")
private List<SolrInputDocument> buildDocuments(...) {
    ...
}

// ================================================================

// Logging Implementation Example

@Slf4j
public class ... {

try {
    solrClient.index(documents);
} catch (Exception e) {
    log.error("Failed to index documents", e);
    throw e;
}
        `}</CodeBlock>
        <hr/>
        </section>

        {/* DOCKER COMPOSE SETUP  */}
         <section>
        <h3 className='section-header' id='grafana-docker-compose-configuration'>
          Grafana Docker Compose Configuration
        </h3>
        <p>A sample docker-compose configuration for Tempo, Prometheus, Loki, and Grafana:</p>
        <p><code>docker-compose.yml</code></p>
        <CodeBlock>{`
services:

  grafana:
    image: grafana/grafana:latest
    container_name: grafana

    ports:
      # HOST:CONTAINER
      # Open Grafana at http://localhost:3000
      - "3000:3000"

    volumes:
      # Persist Grafana dashboards, users, data-source configuration, etc.
      - grafana-data:/var/lib/grafana

    depends_on:
      - prometheus
      - tempo
      - loki


  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus

    ports:
      # Prometheus web UI/API:
      # http://localhost:9090
      - "9090:9090"

    volumes:
      # Prometheus configuration.
      # Determines WHERE Prometheus gets metrics from.
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro

      # Persist collected metric/time-series data.
      - prometheus-data:/prometheus

    command:
      # Tell Prometheus which configuration file to load.
      - "--config.file=/etc/prometheus/prometheus.yml"


  tempo:
    image: grafana/tempo:latest
    container_name: tempo

    ports:
      # Tempo HTTP API.
      # Grafana uses this to query Tempo.
      - "3200:3200"

      # OpenTelemetry OTLP gRPC receiver.
      # Applications/collectors can send traces here.
      - "4317:4317"

      # OpenTelemetry OTLP HTTP receiver.
      # Applications/collectors can send traces here.
      - "4318:4318"

    volumes:
      # Tempo configuration.
      - ./tempo.yml:/etc/tempo.yml:ro

      # Persist trace data.
      - tempo-data:/var/tempo

    command:
      - "-config.file=/etc/tempo.yml"


  loki:
    image: grafana/loki:latest
    container_name: loki

    ports:
      # Loki HTTP API.
      #
      # Alloy sends logs to this API.
      # Grafana also queries Loki through this port.
      - "3100:3100"

    volumes:
      # Loki configuration.
      - ./loki.yml:/etc/loki/local-config.yaml:ro

      # Persist logs/index data.
      - loki-data:/loki

    command:
      - "-config.file=/etc/loki/local-config.yaml"


volumes:
  grafana-data:
  prometheus-data:
  tempo-data:
  loki-data:
        `}</CodeBlock>
        <br/>
        <p>It exposes the following endpoints:</p>
        <CodeBlock>{`
Grafana       http://localhost:3000
Prometheus    http://localhost:9090
Tempo API     http://localhost:3200

OTLP gRPC     localhost:4317
OTLP HTTP     http://localhost:4318

Loki API      http://localhost:3100        
        `}</CodeBlock>
        <hr/>
        </section>

        {/* PROMETHEUS SETUP  */}
         <section>
        <h3 className='section-header' id='prometheus-configuration'>
          Prometheus Configuration
        </h3>
        <p><code>prometheus.yml</code></p>
        <CodeBlock>{`
global:

  # How often Prometheus requests metrics from targets.
  scrape_interval: 15s


scrape_configs:

  - job_name: "spring-backend"

    # URL path Prometheus requests for metrics.
    #
    # Spring Boot Actuator + Micrometer exposes:
    #
    # GET /actuator/prometheus
    #
    metrics_path: "/actuator/prometheus"

    static_configs:

      # Spring is running on the host machine while
      # Prometheus is inside Docker.
      #
      # Prometheus will therefore request:
      #
      # http://host.docker.internal:8080/actuator/prometheus
      #
      - targets:
          - "host.docker.internal:8080"
        `}</CodeBlock>

        <hr />
      </section>


        {/* TEMPO SETUP  */}
         <section>
        <h3 className='section-header' id='tempo-configuration'>
          Tempo Configuration
        </h3>
        <p><code>tempo.yml</code></p>
        <CodeBlock>{`
server:

  # Tempo's own HTTP API.
  #
  # Grafana queries Tempo through this port.
  http_listen_port: 3200


distributor:

  receivers:

    # Enable the OpenTelemetry Protocol (OTLP) receiver.
    otlp:

      protocols:

        grpc:

          # Receive OTLP traces using gRPC.
          #
          # Port 4317 is the standard OTLP gRPC port.
          #
          # 0.0.0.0 means listen on all interfaces
          # inside the container.
          endpoint: 0.0.0.0:4317

        http:

          # Receive OTLP traces using HTTP.
          #
          # Port 4318 is the standard OTLP HTTP port.
          endpoint: 0.0.0.0:4318


storage:

  trace:

    # Store traces on the local filesystem.
    #
    # Good for a simple single-server/dev setup.
    backend: local

    local:

      # Directory where Tempo writes trace data.
      #
      # docker-compose maps /var/tempo to
      # the tempo-data Docker volume.
      path: /var/tempo/traces
        `}</CodeBlock>

        <hr />
      </section>


       {/* LOKI SETUP  */}
         <section>
        <h3 className='section-header' id='loki-configuration'>
          Loki Configuration
        </h3>
        <p><code>loki.yml</code></p>
        <CodeBlock>{`
# Disable multi-tenant authentication.
#
# Convenient for local development.
# Don't expose this publicly as-is.
auth_enabled: false


server:

  # Loki HTTP API.
  #
  # Alloy sends logs here.
  # Grafana queries logs here.
  http_listen_port: 3100


common:

  # Base directory Loki uses for local data.
  #
  # docker-compose maps /loki to loki-data.
  path_prefix: /loki

  # We only have one Loki instance.
  replication_factor: 1

  ring:

    # Address used by this Loki instance.
    instance_addr: 127.0.0.1

    kvstore:

      # Keep the ring information in memory.
      #
      # Fine for a simple single-instance setup.
      store: inmemory


schema_config:

  configs:

    - from: 2024-01-01

      # Use Loki's TSDB index format.
      store: tsdb

      # Store log chunks on the local filesystem.
      object_store: filesystem

      # Current Loki schema version used by this config.
      schema: v13

      index:

        # Prefix used for Loki's indexes.
        prefix: index_

        # Create index periods of 24 hours.
        period: 24h


storage_config:

  filesystem:

    # Actual log chunk storage location.
    #
    # Because /loki is persisted by Docker,
    # logs survive container restarts.
    directory: /loki/chunks
        `}</CodeBlock>

        <hr />
      </section>


        {/* GRAFANA ALLOY SETUP  */}
         <section>
        <h3 className='section-header' id='grafana-alloy-configuration'>
          Grafana Alloy Configuration
        </h3>
        <p>Grafana Alloy has to be run on the same server as the application it's monitoring.</p>
    
        <br/>
        <h4 className='sub-section-header'>Alloy with Docker Compose:</h4>
        <p>Sample Docker Compose file to setup Grafana Alloy with Spring <code>docker-compose.yml</code></p>
        <CodeBlock>{`
services:

  spring-backend:
    image: your-spring-backend
    container_name: spring-backend

  alloy:
    image: grafana/alloy:latest
    container_name: alloy
    volumes:
      # Alloy configuration
      - ./alloy/config.alloy:/etc/alloy/config.alloy:ro

      # Gives Alloy access to Docker container logs.
      - /var/lib/docker/containers:/var/lib/docker/containers:ro

    command:
      - run
      - /etc/alloy/config.alloy
        `}</CodeBlock>
        <br/>

        <h4 className='sub-section-header'>Alloy on Ubuntu:</h4>
        <p><a href="https://grafana.com/docs/alloy/latest/setup/install/" target="_blank" rel="noopener noreferrer">Grafana Alloy Installation Guide</a></p>

        <p>Sample commands to setup Grafana Alloy on Ubuntu:</p>
        <CodeBlock>{`
sudo apt install gpg

sudo mkdir -p /etc/apt/keyrings

sudo wget -O /etc/apt/keyrings/grafana.asc \
  https://apt.grafana.com/gpg-full.key

sudo chmod 644 /etc/apt/keyrings/grafana.asc

echo "deb [signed-by=/etc/apt/keyrings/grafana.asc] https://apt.grafana.com stable main" \
  | sudo tee /etc/apt/sources.list.d/grafana.list

sudo apt update
sudo apt install alloy        
        `}</CodeBlock>
        <br/>
        <p>Sample config file: <code>/etc/alloy/config.alloy</code></p>
        <CodeBlock>{`
// Read logs from the Solr systemd service.
loki.source.journal "solr" {
    // Only collect logs belonging to solr.service.
    matches = "_SYSTEMD_UNIT=solr.service"

    // Add a useful label to every log.
    labels = {
        service = "solr",
        server  = "solr-prod",
    }

    // Send collected logs to the Loki writer below.
    forward_to = [
        loki.write.central.receiver,
    ]
}


// Send logs to your central Loki server.
loki.write "central" {
    endpoint {
        // Replace this with your Loki server's private IP/DNS name.
        //
        // 3100 = Loki HTTP port
        // /loki/api/v1/push = Loki log ingestion endpoint
        url = "http://10.0.0.10:3100/loki/api/v1/push"
    }
}
        `}</CodeBlock>

        <hr />
      </section>


     
    </>
  );
}