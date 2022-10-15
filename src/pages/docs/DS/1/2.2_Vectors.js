import styles from '@/css/DocsTemplate.module.css';
import CodeSnippet, {Code} from '@/component/CodeSnippet';
import UMLClass from '@/component/UMLDiagram';

export default function Vectors(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Dynamic Arrays (Vectors & ArrayLists)</h3>
    </div>

    <div>
      <p> As mentioned previously, most low level arrays are fixed in capacity. However, there are many cases where we need an array 
        to have dynamic size, and to grow and shrink as needed by a program. </p>

      <p> Take for example the previous task of letting a user input a list of numbers. Recall, that we now required our user to input 
        the size of their list. Imagine they were inputting 100 numbers, but midway, realized that they actually needed to only input 
        99 numbers. As our program is fixed to their inputted size, our program is now a burden to the user. Hence we need a way to 
        grow our array as necessary, without asking our user how many items there are in their list before inputting it. </p>
    </div>
    
    <div>
      <h4>{props.ctr}1. Designing a Vector </h4>
      <p> We now expand upon the list, by encapsulating it around an object, to create our first User Defined data structure. We shall 
        called this object, a Vector, as is one common term for dynamic arrays (others call them ArrayLists, such as in Java, while 
        some have no distinction and plainly offer the dynamic arrays as their Array construct). Henceforth, just as we default to 
        referring to fixed arrays when simply using the unmodified term Array, we will now call dynamic arrays a Vector. </p>

      <p> (Recall, that very high level languages such as Javascript and Python have a vector as their default Array construct, hence 
        the examples for those language will be redundant, as simply used to illustrate how vectors work.) </p>

      <p> Firstly, we must start by creating the dynamically allocated, fixed array which truly holds our Vector's data. Around it, we
         will also keep track of its size (# of elements inserted) and capacity (# of elements that the internal array has space for). 
         We will offer a simple access operator and give access to the size. </p>

      <p> As a start, we have the following signatures: </p>
      
      <UMLClass classTitle="Vector<T>"
        fields={[
          '- sz: size_t', 
          '- cap: size_t', 
          '- data: array<T>'
        ]}
        ops={[
          '+ Vector<T>()',
          '+ size(): size_t',
          '+ at(index: size_t): T',
          '...'
        ]}/>

      <p> Using these signatures and the descriptions above, we devise the following implementation: </p>

      {/* TODO: */}
      <CodeSnippet>
        <Code label="C" 
          code={`TBD`}
        />
        <Code label="C++"
          code={`TBD`}
        />
        <Code label="Java"
          code={`TBD`}
        />
        <Code label="Rust"
          code={`TBD`}
        />
        <Code label="JS"
          code={`TBD`}
        />
        <Code label="Python"
          code={`TBD`}
        />
      </CodeSnippet>

      <p> Now, to complete our basic implementation, we create the insertion and removal functions. Insertions will insert the new 
        element into the specified index. Before doing so, however, all elements at the given index and all to the right of it (that 
        is, with index greater than or equal) must be shifted right by one. If an insertion would exceed the capacity of the internal
        array, then the array is reallocated to double its size. Likewise, deletions will shift every righthand elements to the left
        by one. (Often, we do not scale down in size from deletion since the likelihood of needing to expand again is too great to
        warrant the expensive reallocation operation of reducing in size.)</p>
        
      {/* TODO: Code */}

      {/** TODO: Implement iterators */}
    </div>
    
    <div>
      <h4>{props.ctr}2. Standard Library Vectors </h4>
      <p> TBD </p>
      <div className={styles.subsection}>
        <h5>{props.ctr}2.1. Aa</h5>
        <p> TBD </p>
      </div>
    </div>
  </div>);
}