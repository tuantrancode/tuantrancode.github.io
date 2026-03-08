import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Diagrams',
  description: 'Notes on Diagrams in Development',
};

export default function Diagram() {
  return (
    <>
      {/* UML CLASS DIAGRAM  */}
      <section>
      <h3 className='section-header' id='uml-class'>UML Class Diagram</h3>
      <p>Design the <u>application structure</u>, how the classes are related, and the following:</p>
      <ul>
        <li>Class names</li>
        <li>Attributes and methods</li>
        <li>Visibility: public (+), private (-), protected (#)</li>
        <li>Inheritance relationships - "is-a" relation (Dog --------▷ Animal )</li>
        <li>Association relationships - "uses / has a reference to" relation (Product {`------->`} ProductCategory)</li>
        <li>Aggregation relationships - weak "has a" relation (Car {`◇------`} Engine)</li>
        <li>Composition relationships - strong "has a" relation (House {`◆------`} Room)</li>
      </ul>
      <img src="/assets/images/uml-arrows.webp" alt="UML Class Arrows Example" style={{width: '100%', padding: '5px 20px'}}/>
      <hr/>
      </section>

      {/* ERD DIAGRAM  */}
      <section>
      <h3 className='section-header' id='erd'>ERD Diagram</h3>
      <p>Shows the structure of the <u>database</u> and has the following:</p>
      <ul>
        <li>Entities (tables)</li>
        <li>Attributes (columns)</li>
        <ul>
            <li>PK: primary key</li>
            <li>FK: foreign key</li>
            <li>UNIQUE: unique constraint</li>
            <li>NOT NULL: not null constraint</li>
        </ul>
        <li>Relationships between entities</li>
        <ul>
            <li>One-to-One (1:1)</li>
            <li>One-to-Many (1:N)</li>
            <li>Many-to-Many (N:M)</li>
        </ul>
      </ul>
      <img src="/assets/images/erd-arrows.jpg" alt="ERD Arrows Example" style={{width: '100%', padding: '5px 20px'}}/>
      <hr/>
      </section>

      {/* RAG AND WAIT-GRAPH  */}
      <section>
      <h3 className='section-header' id='rag-and-wait-graph'>RAG and Wait-Graph</h3>
      <p>RAG (Resource Allocation Graph): Shows resource allocation to help identify deadlocks in multithread systems:</p>
      <ul>
        <li>Arrows indicate either the processor requesting the resource (P &rarr; R), or resource allocated to a processor (R &rarr; P)</li>
      </ul>
      <figure>
          <img src="/assets/images/rag-with-deadlock.jpg" alt="RAG with deadlock" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
          <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>RAG Diagram with a deadlock. P2, P3, P4 can not finish their tasks.</figcaption>
      </figure>
      <br/>
      <figure>
          <img src="/assets/images/rag-without-deadlock.jpg" alt="RAG without deadlock" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
          <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>RAG Diagram without deadlock. P3 can finish its task and free R1 so P1 can finish and the system cascade to the rest of the processors.</figcaption>
      </figure>
      <br/>
      <p><b><u>RAG to Wait-Graph</u></b></p>
      <p>To convert a RAG diagram to a wait-graph by removing all resource nodes and collapsing the appropriate arrows/edges. If a cycle can be formed with any set of processors, then there is a deadlock</p>
      <figure>
          <img src="/assets/images/rag-and-wait-graph.jpg" alt="RAG to wait-graph" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
          <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>RAG diagram (left). Wait-graph (right). There are cycles in the wait-graph so deadlocks exist.</figcaption>
      </figure>
      </section>
    </>
  );
}