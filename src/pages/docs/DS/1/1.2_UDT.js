import CodeSnippet, {Code} from '@/component/CodeSnippet.js';
import styles from '@/css/DocsTemplate.module.css';

export default function UDT(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} User-Defined Types </h3>
    </div>

    <p> Now that we're discussed the atomic data types, we now move on to User-Defined Types (UDTs). User defined types are defined 
      outside of the language specifications, be it by the standard library, or third party libraries, or as the name suggests, the 
      users (developers) themselves. UDTs allow developers to create abstractions with semantics, structures, properties, or 
      sometimes even functionalities, that is appropriate for the task at hand. UDTs range from simply renaming the atomic data 
      types, to creating a structure who's hierarchy or composition is made of various atomic data types, for the purpose of better 
      reflecting entities of the problem domain. </p>

    <div>
      <h4>{props.ctr}1. Single Element UDTs &mdash; Aliases and Enumerations</h4>
      <p> Some UDTs are as simple as being a mere renaming, be it of the data type name, or of the values that the data type can
        take. These UDTs are called aliases (typedefs in C-based languages) and enumerations. </p>

      <div className={styles.subsection}>
        <h5>{props.ctr}1.1. Aliases</h5>
        <p> The simplest UDTs are mere aliases of the atomic data types. By creating an alias, developers can invoke an atomic data 
          type built in to the language, but with a name or alias that reflects the needs of the problem domain. Furthermore, aliases 
          are not limited to atomic data types, but also to other UDTs, even complex structs and classes. </p>

        {/* TODO: Give concrete example verbally */}

        {/* TODO: Write code example  */}
        <CodeSnippet>
          <Code label="C" 
            code={`
              `}
          />
          <Code label="C++"
            code={`
              `}
          />
          <Code label="Java"
            code={`
              `}
          />
          <Code label="Rust"
            code={`
              `}
          />
          <Code label="JS"
            code={`
              `}
          />
          <Code label="Python"
            code={`
              `}
          />
        </CodeSnippet>
      </div>

      <div className={styles.subsection}>
        <h5>{props.ctr}1.2. Enumerations</h5>
        <p> The next UDT is also simple &mdash; Enumerations. Enumerations, or in short, enums, are called so because they enumerate 
          a list of possible values that a user-defined type can take on. In most languages, an enum is stored as an integral type. 
          Each integer value however, maps to a certain value defined in the enumeration, whether it be an auto-incrementing digit 
          1,2,3,... or a value that the user enforced on the enum-value. </p>

        <p> This is useful for creating custom type that has a limited range of qualitative values in the problem domain. Take for 
          example direction. We can define a Direction enum, with value Up, Down, Left, Right. It is then possible to write code 
          with respect to the explicit direction instead of the mysterious and illegible integer values that a developer would have 
          to hunt down or be obliged to memorize. </p>
        
        {/* TODO: Provide example */}

        <p> Note that enums must be defined at compile time. It follows then that a limitation of enums is that it can't be 
          edited at runtime. It is meant for writing static code that may branch based on the enum value, or to represent a finite 
          qualitative range that remains static.  Another limitation of enums is that it must be serialized in files or I/O as the 
          physical data type that represent it, often an integer value. This means that when stored in persistence or writing to a 
          terminal, there will be overhead in converting from the enum's integer value to a form fit for serialization such as the 
          enum value's name for printing. You may also have to convert back from integers or strings to the enum. </p>

        <div className={styles.subsection}>
          <h5>Emulating Enumerations</h5>
          <p> Enumerations do not exist in all languages. However, it is possible to emulate enumerations by simply creating a series 
            of constants. This works even better when the constants are placed under a namespace so as to logically categorize them 
            and prevent conflicts or ambiguity. The data type of the constant can further be aliased to abstract away from the 
            physical data type, to a customized one that fits the problem domain. </p>
        </div>
      </div>
    </div>
    
    <div>
      <h4>{props.ctr}2. Complex UDTs &mdash; Structs and Classes</h4>
      <p> Up to now, we have only discussed atomic data types and types that abstract a singular atomic data type. But how do we 
        represent a complex object, comprised of various attributes. </p>

      <p> Take for example a File, which was written by a certain user, created and modified at certain times, stored at a given 
        location, with a name and type, whose contents are a certain size and with a given encoding. Each attribute described can 
        be easily stored in an atomic data type, however the File entity as a whole does not fit in an atomic data type. It is 
        completely practical however, and highly preferred, to store all a File's attributes under a single File entity which can 
        be treated as one unit that can be passed across functions. </p>

      <p> To represent such an entity as a single unit, we must now introduce more complex UDTs. Specifically, we will now discuss 
        the constructs of <b>structs</b> and <b>classes</b>. </p>

      <div className={styles.subsection}>
        <h5>{props.ctr}2.1. Structs</h5>
        <p> Aa </p>
        
        {/* TODO */}
      </div>

      <div className={styles.subsection}>
        <h5>{props.ctr}2.2. Classes</h5>
        <p> Aa </p>
        
        {/* TODO */}
      </div>
    </div>
  </div>);
}