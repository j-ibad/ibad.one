import {lazy} from 'react';

import DocsComponent from '@/component/DocsComponent.js';

function WIP(){
  return (<div>
    <p style={{marginTop: '5em', textAlign: 'center'}}>This page is a work in progress. Please come check us out later :)</p>
  </div>)
}

const sections = [
  {label: 'Introduction', route: '.', path: '/', component: lazy(()=>import('@/pages/docs/DS/1/1_Introduction.js')),
    sections: [
      {label: 'Atomic Data Types', route: 'intro/atomic_data_types', component: lazy(()=>import('@/pages/docs/DS/1/1.1_AtomicDT.js'))},
      {label: 'User-Defined Types', route: 'intro/udts', component: lazy(()=>import('@/pages/docs/DS/1/1.2_UDT.js'))},
      {label: 'Collections', route: 'intro/collections', component: lazy(()=>import('@/pages/docs/DS/1/1.3_Collections.js'))},
    ]
  },
  {label: 'Lists', route: 'lists', component: lazy(()=>import('@/pages/docs/DS/1/2_Lists.js')),
    sections: [
      {label: 'Arrays', route: 'lists/arrays', component: lazy(()=>import('@/pages/docs/DS/1/2.1_Arrays.js'))},
      {label: 'Dynamic Arrays (Vectors & ArrayLists)', route: 'lists/vectors', component: lazy(()=>import('@/pages/docs/DS/1/2.2_Vectors.js'))},
      {label: 'Linked Lists', route: 'lists/linked_list', component: lazy(()=>import('@/pages/docs/DS/1/2.3_LinkedLists.js')),
        sections: [
          {label: 'Singly Linked List', route: 'lists/linked_list/singly_linked', component: lazy(()=>import('@/pages/docs/DS/1/2.3.1_SLL.js'))},
          {label: 'Doubly Linked List', route: 'lists/linked_list/doubly_linked', component: lazy(()=>import('@/pages/docs/DS/1/2.3.2_DLL.js'))},
          {label: 'Dummy Nodes', route: 'lists/linked_list/dummy_nodes', component: lazy(()=>import('@/pages/docs/DS/1/2.3.3_DummyNodes.js'))},
          {label: 'Multilevel Linked List', route: 'lists/linked_list/multilevel_linked', component: lazy(()=>import('@/pages/docs/DS/1/2.3.4_MultilevelLinkedList.js'))},
          {label: 'Skiplist', route: 'lists/linked_list/skiplist', component: lazy(()=>import('@/pages/docs/DS/1/2.3.5_Skiplist.js'))},
        ]
      },/*
      {label: 'Stacks', route: 'lists/stacks', component: WIP},
      {label: 'Queues', route: 'lists/queues', component: WIP,
        sections: [
          {label: 'Simple Queue', route: 'lists/queues/simple', component: WIP},
          {label: 'Dequeue (Double-ended Queue)', route: 'lists/queues/dequeue', component: WIP},
          {label: 'Circular Queue', route: 'lists/queues/circular', component: WIP},
          {label: 'Priority Queue', route: 'lists/queues/priority', component: WIP},
        ]
      },*/
    ]
  },
  /* {label: 'Trees', route: 'trees', component: WIP,
    sections: [
      {label: 'BST (Binary Search Tree)', route: 'trees/bst', component: WIP,
        sections: [
          {label: 'Simple BST', route: 'trees/bst/simple', component: WIP},
          {label: 'AVL Tree', route: 'trees/bst/avl', component: WIP},
          {label: 'Red-Black', route: 'trees/bst/red_black', component: WIP},
          {label: 'B & B+ Trees', route: 'trees/bst/b_trees', component: WIP},
        ]
      },
      {label: 'Trie (Prefix Tree)', route: 'trees/trie', component: WIP},
      {label: 'Heaps', route: 'trees/heaps', component: WIP,
        sections: [
          {label: 'Max-Heaps & Min-Heaps', route: 'trees/heaps/maxheap_minheap', component: WIP},
          {label: 'Min-Max Heap', route: 'trees/heaps/min-max', component: WIP},
          {label: 'Fibonacci Heap', route: 'trees/heaps/fibonacci', component: WIP},
          {label: 'Treap', route: 'trees/heaps/treap', component: WIP},
        ]
      },
      {label: 'Sets & Multisets', route: 'trees/sets', component: WIP},
      {label: 'Maps & Dictionaries', route: 'trees/maps', component: WIP},
    ]
  },
  {label: 'Hash', route: 'hash', component: WIP,
    sections: [
      {label: 'Intro - Hashing', route: 'hash/hashing', component: WIP},
      {label: 'Collision Resolution', route: 'hash/collision_resolution', component: WIP},
      {label: 'HashSets & HashMaps', route: 'hash/hashset_hashmap', component: WIP},
    ]
  }, */
  {label: '...Work in Progress...', route: 'WIP', component: WIP},
];

export default function DS1Switch(){
  return (<DocsComponent sections={sections} title={'Data Structures I'}/>);
}