import styles from '@/css/DocsTemplate.module.css';
import CodeSnippet, {Code} from '@/component/CodeSnippet';

export default function OOPConcepts(){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>Object Oriented Programming - Concepts, SOLID Principles, &amp; UML Class Diagrams </h3>
    </div>

    <div>
      <p> Objected Oriented Programing is a programming paradigm that focuses around abstracting entities of the problem 
        domain as objects of a certain class. </p>
    </div>
    
    <div>
      <h4>1. Encapsulation</h4>
      <p> Entities of the problem domain are first broken down into their key members of interest: their attributes, functions, and relationships. These members are then aggregated through a process called <b>encapsulation</b> to form a <b>class</b>. Each instance of this class is then know as an object. </p>
      <p> Proper encapsulation should result in classes that resemble entities of the problem domain. Each class should only take on the responsibility of representing a single entity. This is known as a <b>single-responsibility principle (SRP)</b>. By encapsulating only members that make up a single entity, this principle often results in <b>high cohesion</b>. </p>
    </div>
    
    <div>
      <h4>2. Abstraction</h4>
      <p> When designing classes, we must consider the interface we are providing to clients to communciate with. Clients only need access to a subset of members of a class, but some implementation details should be hidden for convenience and safety. The process of creating the high-level interface separate from the concrete implementation is known as <b>abstraction</b>. </p>

      <br/>

      <p> ...work in progress... </p>
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