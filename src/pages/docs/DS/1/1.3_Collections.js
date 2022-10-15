import styles from '@/css/DocsTemplate.module.css';

export default function UDT(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Collections </h3>
    </div>

    <p> Up to now, we have discussed data structures that represent a single entity, be it the simplistic, individual atomic 
      data type built in to languages, to structs and classes comprised of various attributes to form complex entities. As 
      important as this may be, the biggest challenge in data structures arises when we must maintain a collection of entities. 
      Collections comprise the most important and most complicated set of data structures. In fact, you will rarely hear anyone 
      call a single entity as a data structure. The term is almost always used to refer to collections exclusively. </p>

    <div className={styles.subsection}>
      <h4>How important are collections?</h4>
      <p> Collections are extremely important to computing, being present in the majority of programs that have any complexity. 
        One can even argue that no non-trivial program is written without collections. After all, every program must store some 
        data in memory, and call functions which requires maintaining a stack frame. Memory is essentially an array of bytes, with 
        a region arranged as a stack. Dynamic memory managers must keep track of the blocks it has allocated, and it does so by 
        maintaining a linked list of headers that store info about the allocated blocks of data. Verily, to write a program that 
        uses memory means that your program is interfacing with a collection. </p>
      <p> Aside from the system using collections underneath your program, the majority of programs also need collections at the 
        problem domain level. Console programs need the arguments stored as a collection in the form of arrays, file systems use 
        trees and linked lists, networking requires FIFO queues and graphs, algebraic applications require vectors and matrices, 
        and geometric applications use trees and graphs. </p>
        
      <h4>Why are collections so important and complex?</h4>
      <p> Collection Data Structures (or hence forth, simply data structures as is the standard usage of the term) are important 
        because they maintain a collection of entities in such a way that is optimal for the task(s) at hand, in that the data 
        structure enforces constraints and performs operations that prove most efficient for the task at hand. In fact, once the 
        appropriate data structure is selected, some problems are even trivialized to merely using a data structure properly to fit 
        the problem domain. </p>
      <p> In this value of data structures also lie its complexity. The tasks which a data structure must accomplish may be complicated 
        and many, and may vary greatly across problem domains. Even the elements and operating environment can vary, be it in the range 
        of the values to support, to the quantity of elements, and the constraint on resources available to your program. </p>
    </div>

    <div>
      <h4>Data Structure Design</h4>
      <p> As suggested earlier, data structures provide value by being specially fit for the tasks at hand and even to fit the 
        problem domain. Thus various factors must be accounted for when designing or selecting a data structure. </p>

      <div className={styles.subsection}>
        <h5>{props.ctr}1. Operations</h5>
        <p> The most important factor to consider when designing data structures is the operations that it will undergo, as well as the 
          frequency of those operations. We simplify these operations in this introduction by placing them all under 4 categories, which 
          are analogous to CRUD (Create, Read, Update, Delete — the four basic operations for data stored in persistence). For data 
          structures which are stored in memory, we will categorize operations as Access, Insert, Delete, and Update. </p>
        
        <div className={styles.subsection}>
          <h5>{props.ctr}1.1. Access </h5>
          <p> The most basic operation is accessing the elements of the data structure. A data structure may provide direct access to 
            any element within the collection through the use of a sort of index &mdash; this is called <b>random access</b>. In the 
            case of dictionary data structures, it may also store things as key-value pairs and provide access to each value through 
            its key. Alternatively, some data structures might not provide arbitrary access to every element in the collection, but only
            a select element or subset of elements at a time. FIFO and LIFO structures will provide immediate access only to the oldest 
            or the newest inserted item in the collection respectively. It may also only give access to minimum and/or maximum values 
            in the case of the priority queue and heaps. </p>

          <p> The extent of access may also vary. Aside from fully returning the value to give full access to an element, a structure 
            might merely need to answer the question "Does the collection have this element?" for sets, or "Does the collection have 
            element that start with <i>x</i>?" in the case of a prefix tree. In other cases, we might want to access metadata instead 
            of the value itself, such as the number of times the element was inserted in the case of the Counter structure. </p>

          <p> Regardless of the type of access, a structure might also plainly offer an <b>iterator</b> &mdash; an interface the allows 
            a client to iterate through the entire data structure, providing access to all elements in the collection. As iterators give 
            access to the entire structure in any order that the structure wants to impose, iterators may be provided in place of direct 
            access operations when the internal representation makes facilitating random access cumbersome. </p>

          <p> The efficiency of the access operation tends to be the most important of the four, mainly since it tends to either be ran 
            the most times, or ran at separate states that, if the collection were not structured properly, would amount to a great cost. 
            Thus, to avoid this cost, most of the work is often offloaded to insetion and deletion operations. Furthermore, the data 
            structure may arrange the collection in such a way, and possibly store necessary metadata, in order to facilitate rapid 
            access operations. </p>

          <p> Take for example accessing the minimum value in a collection. A naive approach would be to go through the whole collection 
            to find the mininum. If we have to repeat the operation as elements come and go, then this means that we must read all 
            elements in the collection multiple times, even when we already know that a large element is definitely not the minimum. </p>

          <p> A more efficient approach then, might be to store the minimum at the current state which gets updated upon each insertion. 
            With constant time increase in insertion, and a resulting constant time access operation we can access the minimums quickly. 
            However when we introduce deletions, the approach would require finding the minimum once again, by reading the entire list. </p>

          <p> To solve facilitate both reasonable insertion and deletion times, while keeping rapid access operations of the minimum, we 
            can enforce an order in the elements. Though insertion and deletion are slightly costlier, maintaining rapid access of the 
            min can often justify this, and we may find approaches that minimize the added costs to insertion and deletion through the 
            constraints and arrangment of our internal structure (namely, by using a tree-based structure known as a heap, which we will 
            discuss later on in the series). </p>
        </div>
        
        <div className={styles.subsection}>
          <h5>{props.ctr}1.2. Insert </h5>
          <p> The next, equally significant operation is insertion. As noted earlier, since access will be the most used, or would cost 
            too much when using a naive approach, work must be offloaded to insertion and in the internal structure. The main 
            responsibility of the insertion operation (aside from the obvious) is to maintain the proper arrangement of the internal 
            representation. It must also enforce any constraints that must be imposed on the type of data structure selected. </p>

          <p> Again, the insertion operation might maintain metadata about the data stored within it. It might keep track of the size 
            of the collection, the minimum and maximum value. The operation may also be responsible for maintaining the arrangement of 
            the data. Duplicates may be ignored if elements must be unique. The structure may be reordered or the operation may have 
            to seek the proper position thst retains the order of the underlying collection. </p>

          <p> There are cases however, when insertion and deletion operations are more commonplace and more costly than access 
            operations, or access may be infrequently. In these cases, optimizing insertion and deletion may take higher priority 
            than access. Take for example a scenario where elements must be inserted and removed rapidly, such as when we maintain 
            a mere line (or more approariately, queue, as we will go over later) of workers that want to use a resource. Workers 
            constantly come and go, and we do not need to ask "who is the Kth worker in line?" Instead, whoever is next in line 
            immediately gets the privilege to use the resource. </p>

          <p> In this case, the access operation is as trivial as always getting the head of the line, or the first element in our 
            collection. What will be expensive however, in naive approaches, is the insertion and deletion operations. We have to 
            constantly add to the back of the line, and delete from the front. Insertion and deletions must then be greatly optimized. 
            If the structure must be resized to fit more workers in the line (as in an array) the cost would be to expensive as this 
            is tantamount to first creating a new line that has enough room first then moving all workers from the old to the new one. 
            Instead of this expensive system, we use one that more naturally accomodates adding new workers without needing to create 
            new lines due to size constraints. In this structure, we give up random access for faster insertions (and deletions). 
            Hence we can no longer ask, "who is the kth worker in line?". Since the situation does not need us to ask such a 
            question, we will easily give up this access operation for the faster insertion. </p>
        </div>

        <div className={styles.subsection}>
          <h5>{props.ctr}1.3. Delete </h5>
          <p> The delete operation follows insertion in significance. It has similar responsibilities as insertion in that work is 
            offloaded to it to maintain the internal structure of the collection. However, the deletion operation is highly dependent 
            on the insertion strategy chosen. Furthermore, as an implementation for insertion is developed, the process of developing 
            a deletion operation becomes as simple as drawing parallels to what was done during insertion and undoing it, or execute 
            similar structure maintainance operations as those done during insertion. </p>
            
          <p> The consideration of when to optimize for deletion is also a simpler decision to make than for access and insertion. 
            This is because deletion is accompanied by insertion, meaning that frequent deletion is only a concern when there is 
            frequent insertion as well. Hence, if one is anticipating frequent insertions and must optimize for it, the only question 
            left is "do we expect deletions?". If there is, then we must optimize it as much as we do insertion. </p>
        </div>

        <div className={styles.subsection}>
          <h5>{props.ctr}1.4. Update </h5>
          <p> The update operation often warrants the least concern. Firstly, the update operation can be made as trivial as a 
            deletion of the old copy followed by an insertion of the newly updated copy. This may be more practical in cases when 
            certain constraints are enforced, such as on element order. To find the proper position of e<sub>new</sub> is easier 
            than, or at worst equivalent to, finding the proper position of e<sub>new</sub> with respect to e<sub>old</sub>. For a 
            tree, the latter requires traversal upward to ancestor nodes, compared to the former which merely requires pure downward 
            traversals from the root to find the new position. </p>

          <p> Furthermore, when the update has no implications on the placement of the element and does not affect access, insertion, 
            and deletion operations, then the update operation may be merely an access operation to an pointer to the element, which 
            then allows direct updates to be made outside of the structures concerns. </p>

        </div>
      </div>

      <div className={styles.subsection}>
        <h5>{props.ctr}2. Abstractions</h5>
        <p> Another design consideration for data structures is the layer of abstraction it provides and the separation of concerns 
          that it facilitates. This is done by providing functions properly named with respect to the data structure type, as well as 
          by hiding the internal representation of data structure. </p>

        <p> Recall that all data is stored in memory as a series of addressable bytes. However, high level programs are rarely 
          programmed around addresses and raw pointer arithmetics. Accessing the kth element of an array is notated as A[k-1], an 
          intuitive notation. Though internally, the computing must perform &lt;Start address of A&gt; + &lt;Size of elements of 
          A&gt; &times; (k-1) &mdash; a calculation thats tedious to write. Furthermore, we must somehow facilitate linkages between 
          non-consecutive blocks of data, with relationships varying from linear linkages (linked lists), trees, or complex networks 
          (graphs). </p>

        <p> To allow users to develop programs that use these high level constructs, data structures must provide sufficient 
          abstractions that hide how data is stored in memory and reduce user concerns to how they can properly use the data 
          structure's operations in an algorithm or within a problem domain. </p>

        <p> Note that as just described, data structure have varying degrees of abstraction. Some are very physical such as array, 
          linked lists, and trees. Such low level abstractions view data as what it is: A contiguous block for an array, linearly 
          connected blocks for linked lists, and as nodes connected to child nodes for trees. Other data structures however, are 
          very high level, only truly caring about the constraints enforced on the internal structure: A stack is any structure that 
          can remove what was most recently inserted, a queue is a structure that removes what was inserted in the queue first, and 
          a set is a collection where elements are unique. These high level data structures must be realized internally using a low 
          level data structure. This allows a separation of concern between the levels, but also adds to the challenge as a high 
          level data structure can be realized in many different ways depending on the needs. </p>
      </div>

      <div className={styles.subsection}>
        <h5>{props.ctr}3. Constraints</h5>
        <p> A data structure must also enforce constraints, either specific to the type of data structure selected or because the 
          problem domain necessitates it. An example of a constraint would be of uniqueness, which is used in sets and maps / 
          dictionaries. Others are more complex &mdash; keeping trees balanced internally, maintaining a load factor to keep a data 
          structure operating optimally, retaining order of element within the collection. </p>

        <p> Generally, structure-specific constraints find themselves as part of the implementation of data structures. Problem-domain 
          specific constraints are left to users to build wrappers and abstractions around the provided data structures to then 
          enforce problem-specific constraints and to further provide abstraction between the data structure and the problem domain. </p>
      </div>
    </div>
  </div>);
}