
export const metadata = {
  title: 'Maven and Gradle',
  description: 'Notes on Maven and Gradle',
};

export default function MavenGradle() {
  return (
    <>
      {/* Overview */}
      <section>
        <h2 className='page-header' id='overview'>
          Overview
        </h2>
        <p>
          Maven and Gradle are build automation tools for Java and other JVM languages like Kotlin, Groovy, and Scala.
          Help with compiling, testing, manage dependencies and build processes.
        </p>
        <h3 className='section-header' id='maven'>Maven</h3>
        <ul>
          <li>
            Build config file: <code>pom.xml</code>
          </li>
          <li>XML-based</li>
          <li>Older and more stable</li>
        </ul>
        <hr />

        <h3 className='section-header' id='gradle'>Gradle</h3>
        <ul>
          <li>
            Build config file: <code>build.gradle</code> or <code>build.gradle.kts</code>
          </li>
          <li>Groovy or Kotlin DSL-based</li>
          <li>Use incremental builds and caching for faster builds</li>
          <li>Popular for Android and Spring Boot projects</li>
        </ul>
      </section>
    </>
  );
}
