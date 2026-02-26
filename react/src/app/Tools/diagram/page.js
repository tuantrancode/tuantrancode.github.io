import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'Diagrams',
  description: 'Notes on Diagrams in Development',
};

export default function Diagram() {
  return (
    <>
      <h2 className='section-header'>REST API</h2>

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
      </section>
    </>
  );
}