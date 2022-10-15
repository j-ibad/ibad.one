import styles from '@/css/DocsTemplate.module.css';
import UMLClass from '@/component/UMLDiagram';

export default function LinkedLists(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Linked Lists</h3>
    </div>

    <div>
      <p> The second low-level List data structure is the Linked List. A Linked List stores data as a series of nodes that point from 
        one node to the next in the sequence. The Linked List container only keeps track of the very first node, the <u>head</u> (and 
        sometimes, the very last node, or the <u>tail</u>). To access an internal node, one must traverse the chain of linked nodes 
        starting from the head. As a result, linked lists have slower random access at O(n) complexity. However, linked lists are very 
        efficient at insertion and deletions, as this can be simply done by adding or removing nodes in-place from the existing list, 
        then simply readjusting the pointers of adjacent nodes in the list. </p>

      <p> A Linked List can be implemented in various different ways. Each node can be singly-linked by having a pointer to the next node, 
        or it can be doubly-linked by also having a pointer to the previous node. A Linked List can also use dummy nodes at the head or 
        tails sucu that there will always be a node in the linked list, removing concerns of null pointers. Regardless, for this series, 
        all Linked Lists will share the following interface </p>
        
      <UMLClass classTitle="LinkedList<T>"
        ops={[
          '+ size(): size_t',
          '+ at(index: size_t): T',
          '+ insert(index: size_t, elem: T): T',
          '+ insert(elem: T): T',
          '+ remove(index: size_t): T',
        ]}/>
    </div>
    
    <div>
      <h4>{props.ctr}1. Aa </h4>
      <p> Aa </p>
    </div>
    
    <div>
      <h4>{props.ctr}2. Aa </h4>
      <p> Aa </p>
      <div className={styles.subsection}>
        <h5>{props.ctr}2.1. Aa</h5>
        <p> Aa </p>
      </div>
    </div>
  </div>);
}