import styles from '@/css/DocsTemplate.module.css';

export default function Template(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Lists</h3>
    </div>

    <div>
      <p> The most basic data structures (more verbosely, collection data structure), is the List. The term <b>List</b>, generic 
        and unmodified, simply refers to a data structure that holds a collection of data linearly and sequentially. As the term is 
        often used in implementation-specific contexts, others prefer to use the term <b>sequence</b> to describe this category of
        linear data structures. As mere containers of a sequence of items, it is the simplest in terms of logical abstraction.
        Moreover, because memory itself is arranged as a List of bytes, Lists are also the simplest data structures in terms of 
        physical implementation. </p>

      <p> List data structures can be split apart into two buckets &mdash; low-level Lists that directly define how a list is 
        implemented in memory; as well as high-level Lists, which are abstracted as a sequence of elements, but are not necessarily,
        implemented as such so as long as it provides the sufficient functionalities that characterize the data structure. Before we
        dive deep into how these structures work and how they are implemented, we will briefly discuss each of these from a high-level
        view: </p>
    </div>
    
    <div>
      <h4>{props.ctr}0.1. Low-level Lists: Arrays & Linked-Lists </h4>
      <p> There are two main low-level Lists: Arrays and Linked-Lists. </p>

      <p> Arrays are consecutive blocks of data. This makes its elements easily accessible through simple address arithmetic,
        providing efficient random access. However, arrays also tend to be fairly static in container size, limiting its insertion
        and deletion efficiency. Arrays are often provided as built-in constructs in many programming languages. </p>

      <p> Linked Lists store data as a series of nodes that point from one node to the next one in the sequence. The container itself
        then only has to keep track of the very first (and sometimes the very last) nodes in the list. This limits element access as
        immediate access is only offered in the front and possibly the back of the list. To access an element in the middle however,
        one would have to traverse the chain on linked nodes before reaching the desired element. However, lists are very efficient
        at insertions and deletions, as one can simply insert a node in the middle then readjust pointers to maintain the sequence. </p>
    </div>
    
    <div>
      <h4>{props.ctr}0.2. High-level Lists: Stacks and Queues </h4>
      <p> There are two main high-level Lists: Stacks and Queues. These can be further specified into implementation specific
        version such as Circular Queues, Priority Queues, Double-Ended Queues (Deques), etc. </p>
      
      <p> Stacks are generic containers whose elements follow LIFO (Last-In, First-Out) order. Specifically, one only has access
        to the top of the stack, from which they may push (insert) an element, or pop (remove) an element. By limiting
        access to these operations, the very first element pushed would be at the bottom of the stack, to be popped last, and the
        most recently pushed element would be the first in line to be popped, proving to be a LIFO structue. Stacks are often 
        implemented as Singly-Linked Lists. </p>

      <p> Queues are generic containers whose elements follow FIFO (First-In, First-Out) order, like a line (hence the name &mdash;
        queue is synonymous to line in Commonwealth english). Specifically, one has access to the front of the queue, from which they
        may only dequeue (remove) an element from; and the back of the queue, from which they may only enqueue (insert) an element
        to. By limiting access to these operations, the very first element enqueued will also be the very first element to be dequeued,
        and the most recently enqueued element will be the last to be dequeued, proving to be a FIFO structure. Queues are often
        implemented as a Singly-Linked List w/ Tail pointer. </p>

      <p> Double-Ended Queues, also known as Deques, merely combine the Stack and Queue to offer access to both ends of the queue,
        and allowing insertions and removals from both ends. Being called a queue, insertion and removals may still be called,
        enqueue and dequeue, but for brevity, may simply be called push and pops, with specifiers to show the location by which
        the operation is performed. Dequeues are usually implemented as Doubly-Linked Lists w/ Tail pointer. </p>

      <p> Circular Queues are queues that have a limited capacity. Once capacity is reached, the queue will then begin to overwrite
        the oldest elements, or it may block new insertions. Circular queues are still FIFO as queues are, and can be used in applications
        such as  retrieving the last K elements in a stream, or track a schedule of limited tasks. Circular queues are often implemented
        as an array, with fixed-size if the queue has a fixed capacity. </p>

      <p> Priority Queues are queues wherein each element is assigned a priority or rank. The elements in the queue then is ordered by
        its priority (often with lower value ranks having a higher priority). This is extremely useful for ordered associative
        collections. Often, priority queues are implemented not as Lists, but internally as Trees, however the structure is well
        abstracted to look like a simple sequence of elements (a List) ordered by priority. Regardless, we will show a List-implementation
        within this chapter, and will defer the Tree-based version to the next chapter. </p>
    </div>

    <div>
      <br/>
      <p> Now that we have introduced the List data structures that we will cover in this chapter, let's now dive deep into the
        fine details of each of these. Throughout this chapter, we will discuss the high-level abstractions, as well as potential 
        implementation details of each of the aforementioned structures. We'll also discuss design considerations and look at the
        efficiency of each operation. </p>
    </div>
  </div>);
}