import styles from '@/css/DocsTemplate.module.css';
import CodeSnippet, {Code} from '@/component/CodeSnippet';

export default function OOPConcepts(){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>A Primer on Object Oriented Programming - Concepts, SOLID Principles, &amp; UML Class Diagrams </h3>
    </div>

    <div>
      <p> Objected Oriented Programing is a programming paradigm that focuses around abstracting entities of the problem 
        domain as objects of a certain class. </p>
    </div>
    
    <div>
      <h4>1. Encapsulation</h4>
      <p> Entities of the problem domain are first broken down into their key members of interest: their attributes, functions, and relationships. These members are then aggregated through a process called <b>encapsulation</b> to form a <b>class</b>. Each instance of this class is then know as an object. </p>
      <p> Proper encapsulation should result in classes that resemble entities of the problem domain. Each class should only take on the responsibility of representing a single entity. This is known as the <b>single-responsibility principle (SRP)</b>. By encapsulating only members that make up a single entity, this principle often results in <b>high cohesion</b>. </p>
    </div>
    
    <div>
      <h4>2. Abstraction</h4>
      <div style={{marginBottom: '2.5em'}}>
        <p> In designing classes, we begin to think of each class as a <em>"server" component</em>, offering services to other classes or routines known as <em>"client" components</em>. For each service, we can formally define a <b>contract</b> between server and client with obligations and constraints for both sides. The contract specifies <b>preconditions</b> the client is obligated to meet by providing inputs to the service. The server is then obligated to render the service and provide outputs that meet <b>postconditions</b> defined in the contract. Finally, the contract also defines conditions that must be maintained between when the service starts and ends, known as <b>invariants</b>. To design components around the concept of formal contracts is known as <b>Design by Contract (DbC)</b>. Although we will not go into the rigidity and formality of DbC in this primer, we will continue to view classes as "server" components which will offer services to components via contracts. </p>

        <p> Continuing the thought of contracts, when a client is in need of a service, they often need a generic server to offer a generic service. Take for example when a client contracts a construction company for a project. The client only cares that the server is a construction company capable of building the project. As long as the postconditions of the contract are met and the quality can be assured, the client doesn't care how the construction company does the job, nor does it care what tools it uses. It also does not care about intermediary steps that the construction company may take independently in order to complete the contract. </p>

        <p> Likewise, in software, a client is only concerned about the contract of the services it needs from a server. It is not concerned with the low-level implementation details of these services, nor of intermediary procedures that the server must execute in rendering the service. The server can then separate out the services it publicly offers through an <b>interface</b>, comprised only of high level details that clients are concerned with. In the meanwhile, the server will hide low-level details for convenience and safety. The process of creating the high-level interfaces separate from the concrete implementation is known as <b>abstration</b>. The resulting interfaces are also generically called abstractions. The low-level implementation details on the other hand, are generically called <b>concretions</b>. </p>
      </div>

      <div style={{marginBottom: '2.5em'}}>
        <p> When a client needs methods or fields from a server's abstractions, the client is said to depend on the abstraction. It will depend on the abstraction as a whole, including all of the services it offers. The client may not simply "opt-out" of any of the abstraction's services.  </p>

        <p> Preferably, a client should only depend on the services it needs. It should never be forced to depend on unused services. This is known as the <b>Interface Segregation Principle (ISP)</b>. As the client may not opt-out of the abstraction's services, the solution is to minimize abstractions, ideally taking only on a single role as a <b>role interface</b>. Doing so may require breaking down large interfaces into many role interfaces. ISP results in low coupling by preventing dependencies to members that clients do not need. ISP also results in high cohesion amongst the role interfaces, and can be seen as the interface-version of SRP. </p>

        <p> Moreover, proper abstraction must be kept at a high-level. Abstractions should not contain nor depend on implementation details. How concretions meet the contract's conditions is inconsequential to the abstraction, so as long as they are met. Instead, it is the concretion that depends on the abstraction, as the concretion must meet the contracts conditions however it chooses to fulfill it. This is called the <b>Dependency Inversion Principle (DIP)</b>. By eliminitating dependencies of concretions by abstractions, DIP results in low coupling. </p>
      </div>
      <div className={styles.subsection}>
        <h5>2.1. Interfaces &amp; Abstract Classes</h5>

        <p> In many, but certainly not all programming languages, abstraction is implemented in two ways: <b>Interfaces</b> and <b>Abstract Classes</b>. We will discuss the <em>concepts</em> of interfaces and abstract classes, though they may very well be implemented in a language as an extension of the other. </p>

        <p> Interfaces are lightweight abstractions which are often only made up of the definitions or signatures of methods and fields. A class that concretizes an interface's methods is said to <b>implement</b> it. However, an interface that builds onto another interface is known to <b>extend</b> it.</p>

        {/* Insert example */}

        <p> Abstract Classes are abstractions that, like interfaces, contain declarations or signatures of methods and fields. However, unlike interfaces, they can also define implementations or partial implementations of its methods. This makes them a class in their own right. Being a class, an Abstract Class can build onto another and <b>extend</b> it, just as a concrete class that builds onto an abstract class <em>extends</em> it. An abstract class can also <b>implement</b> an interface. </p>

        {/* Insert example */}

        <p> ...work in progress... </p>
      </div>
    </div>
    
    {/*<div>
      <h4>2. Aa </h4>
      <p> Aa </p>
      <div className={styles.subsection}>
        <h5>2.1. Aa</h5>
        <p> Aa </p>
      </div>
    </div>*/}
  </div>);
}