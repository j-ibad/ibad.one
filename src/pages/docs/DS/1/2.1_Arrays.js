import styles from '@/css/DocsTemplate.module.css';
import CodeSnippet, {Code} from '@/component/CodeSnippet';

export default function Arrays(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} (Fixed) Arrays</h3>
    </div>

    <div>
      <p> Arrays are the simplest low-level List, often being provided as built-in constructs in most programming languages. Arrays are 
        simply consecutive blocks of data. Being consecutive, elements are easily accessible through simple address arithmetic, facilitating 
        efficient <u>random access</u>. </p>

      <p> Unmodified, arrays are often <u>fixed</u> in size, especially in lower-level languages such as C/C++, Rust, and Java. This means
        that the size of the array does not change after it has been defined. Other higher-level languages however, such as Javascript and
        Python, offer dynamic arrays as the default array constructs. This means that the size of the array can change after it has been
        declared or intialized. </p>
        
      <p> To fully understand how arrays truly work, we will first discuss fixed arrays. The following examples therefore make most
        sense in C/C++, Rust, and Java. Although Python and Javascript examples will be provided for completeness, readers are advised to
        refer to one of the lower-level languages for a better understanding. </p>

      <p> Henceforth, for the remainder of the series, when we user the term <b>Array</b> with no modifiers, we are referring to fixed
        arrays by default. We will be explicit when we discuss Dynamic Arrays in the next section. </p> 
    </div>
    
    <div>
      <h4>{props.ctr}1. Creating Arrays: Stack vs Heap Arrays </h4>
      <p> When creating an array, since it is essentially consecutive blocks of data, the size of the array must in some way be defined 
        beforehand to know how many consecutive blocks of memory must be allocated for the array.  </p>

      <div>
        <h5>Stack (Statically-allocated) Arrays</h5>
        <p> Arrays may be statically allocated in the stack. Static allocation is quick, as the compiler will already know how much 
          space it needs to allocate and knows exactly where to allocate the array: the next K blocks in the stack. However, this 
          limits us as we have to know the size upon compile-time &mdash; we cant use a variable size. We static allocation, we would 
          then have to estimate a maximum size the array will take, which will inefficiently waste space if the array during run time 
          will, on the average case, use up less space than is allocated for the array. We would also have to enforce a hard max 
          capacity on the List. </p>

        <p> Take for example a program that requires a user to input a list of numbers, that the program will then reverse. For a stack 
          allocated array implementation, we have no choice but to set a maximum capacity to the inputted list. </p>

        <CodeSnippet>
          <Code label="C" 
            code={`#include <stdio.h>  // scanf and printf


            int main(int argc, char** argv){
            \\t// Declare stack allocated array of integers, with a capacity of 16.
            \\tint arr[16];
            \\tint sz = 0;  // We must keep track of the size
            \\t
            \\tprintf("%s\\n", "Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop");
            \\t
            \\t// Scan for integers until capacity hit, or user inputs EOF character
            \\twhile(sz<16 && scanf("%d", arr+sz) != EOF){
            \\t\\tsz++;
            \\t}
            \\t
            \\tprintf("List size: %d\\n", sz--);
            \\t
            \\tprintf("%s", "Reversed list: ");
            \\tfor(; sz>=0; sz--){
            \\t\\tprintf("%d ", arr[sz]);
            \\t}
            \\tprintf("%s", "\\n");
            \\t
            \\treturn 0;
            }
            
            
            /**
             * Sample execution:
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| \\t<CTRL+D>
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="C++"
            code={`#include <iostream>  // std::cout, std::cin


            int main(int argc, char** argv){
            \\t// Declare stack allocated array of integers, with a capacity of 16.
            \\tint arr[16];
            \\tint sz = 0;  // We must keep track of the size
            \\t
            \\tstd::cout << "Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop" << std::endl;
            \\t
            \\t// Scan for integers until capacity hit, or user inputs EOF character
            \\twhile(sz<16 && std::cin >> arr[sz]){
            \\t\\tsz++;
            \\t}
            \\t
            \\tstd::cout << "List size: " << (sz--) << std::endl;
            \\t
            \\tstd::cout << "Reversed list: ";
            \\tfor(; sz>=0; sz--){
            \\t\\tstd::cout << arr[sz] << " ";
            \\t}
            \\tstd::cout << std::endl;
            \\t
            \\treturn 0;
            }
            
            
            /**
             * Sample execution:
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| \\t<CTRL+D>
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="Java"
            code={`import java.io.*;  // System.in, System.out
            import java.util.Scanner;  // Scanner
            
            
            public class Example{
            \\tpublic static void main(String[] args){
            \\t\\t// Java only has heap-allocated arrays. We initialize one with capacity 16.
            \\t\\tint[] arr = new int[16];
            \\t\\tint sz = 0;
            \\t\\t
            \\t\\tSystem.out.println("Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop");
            \\t\\t
            \\t\\tScanner scanner = new Scanner(System.in);
            \\t\\twhile(sz < 16 && scanner.hasNext()){
            \\t\\t\\tarr[sz++] = scanner.nextInt();
            \\t\\t}
            \\t\\t
            \\t\\tSystem.out.printf("List size: %d\\n", sz--);
            \\t\\t
            \\t\\tSystem.out.printf("%s", "Reversed list: ");
            \\t\\tfor(; sz>=0; sz--){
            \\t\\t\\tSystem.out.printf("%d ", arr[sz]);
            \\t\\t}
            \\t\\tSystem.out.println("");
            \\t}
            }
            
            
            /**
             * Sample execution:
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| \\t<CTRL+D>
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="Rust"
            code={`use std::io::{self, BufRead};


            fn main(){
            \\t// Declare stack allocated array of integers, with a capacity of 16.
            \\tlet mut arr: [i32; 16] = [0; 16];
            \\tlet mut sz: usize = 0;
            \\t
            \\tprintln!("Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop");
            \\t
            \\t
            \\t// Scan for integers until capacity hit, or user inputs EOF character
            \\tlet stdin = io::stdin();
            \\tfor line in stdin.lock().lines() {
            \\t\\tlet line = line.unwrap();
            \\t\\tlet nums = line.split_whitespace().map(|line| line.parse::<i32>());
            \\t\\tfor num in nums{
            \\t\\t\\tarr[sz] = num.unwrap();
            \\t\\t\\tsz += 1;
            \\t\\t\\tif sz >= 16 { break; }
            \\t\\t}
            \\t}
            \\t
            \\tprintln!("List size: {}", sz);
            \\t
            \\tprint!("Reversed list: ");
            \\tfor i in (0..sz).rev(){
            \\t\\tprint!("{} ", arr[i]);
            \\t}
            \\tprintln!("");
            }
            
            
            /*
             * Sample execution:
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| \\t<CTRL+D>
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="JS"
            code={`const readlineSync = require('readline-sync');  // npm install readline-sync

            // Like Java, javascript only has heap-allocated arrays. We initialize one with capacity 16.
            let arr = new Array(16);
            let sz = 0;
            
            let buff = "";
            
            console.log("Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop")
            
            while(sz<16){
            \\tbuff = readlineSync.question(' ');
            \\tif(buff.trim().length == 0){break;}
            \\t
            \\tlet nums = buff.trim().split(/\\s+/);
            \\tfor(let num of nums){
            \\t\\tarr[sz] = parseInt(num);
            \\t\\tsz += 1;
            \\t\\tif(sz >= 16){ break; }
            \\t}
            }
            
            console.log(\`List size: \${sz--}\`);
            
            process.stdout.write("Reversed list: ");
            for(; sz>=0; sz--){
            \\tprocess.stdout.write(\`\${arr[sz]} \`);
            }
            console.log("");
            
            
            /**
             * Sample execution:
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *|  1 5 3 9
             *| \\t<CTRL+D>
             *|  List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="Python"
            code={`from typing import List


            # Python abstracts away stack and heap usage. However, the default Python interpretter (CPython), uses a private heap, hence all objects are heap-allocated.
            # We initialize an array of initial-capacity 16
            arr: List[int] = [None] * 16
            sz: int = 0
            
            print("Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop")
            
            while sz < 16:
            \\ttry: 
            \\t\\tline = input('')
            \\texcept EOFError: break
            \\tnums: List[int] = [int(x) for x in line.strip().split()]
            \\tfor num in nums:
            \\t\\tarr[sz] = num
            \\t\\tsz += 1
            \\t\\tif sz >= 16: break
            
            print("List size: %d" % sz)
            
            print("Reversed list: ", end="")
            for i in range(sz-1, -1, -1):
            \\tprint(arr[i], end=" ")
            print("")
            
            
            #  Sample execution:
            #| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
            #| 1 5 3 9
            #| \\t<CTRL+D>
            #| List size: 4
            #| Reversed list: 9 3 5 1`}
          />
        </CodeSnippet>
        <span className={styles.caption}> Note: Only C/C++ and Rust explicitly have stack allocated arrays. The others are shown only 
          for completeness and to draw parallels. </span>
      </div>

      <div>
        <h5>Heap (Dynamically-allocated) Arrays</h5>
        <p> To improve upon this, we can use dynamic allocation which will store our array in heap. Dynamically allocated memory is 
          slightly slower to construct, as our program must interface with a dyanmic memory manager, which searches for the next block 
          of memory fit to hold our array. However, for this slight speed tradeoff, we can now define the array's capacity during 
          runtime as a variable size. Note that this variable size is still fixed. Once we have allocated the array in heap, we can 
          not directly shrink or grow our array. </p>

        <p> Note that when dynamic allocation is explicit and separate from stack allocation, then memory management is most likely 
          left up to the user. It is important then to remember that heap-allocated memory must be deallocated, lest we introduce
          memory leaks into our program. Of the languages used, this is the case for C, C++, and Rust. The others have garbage collectors
          which will deallocate memory when it detects that it is no longer being used, at a tradeoff of speed and depriving users of 
          control over dynamic memory allocation. </p>

        <p> Returning to our example earlier, we can now allocate only as much as space as will be needed by the user. We change our 
          program by prompting the user for the size of their list, then allocate an array of this given size during runtime, before 
          allowing the user to input their list of numbers. </p>
        
        <CodeSnippet>
          <Code label="C" 
            code={`#include <stdlib.h>  // malloc and free
            #include <stdio.h>  // scanf and printf
            
            
            int main(int argc, char** argv){
            \\tint sz = 0;
            \\tint i = 0;
            \\t
            \\tprintf("%s", "Input size of list: ");
            \\tscanf("%d", &sz);
            \\t
            \\t// Declare heap allocated array of integers, with a capacity of user's inputted size.
            \\tint* arr = malloc((sz) * sizeof(int));
            \\t
            \\tprintf("Input your a list of %d numbers:\\n", sz);
            \\t
            \\t// Scan for next sz numbers
            \\twhile(i<sz){
            \\t\\tscanf("%d", arr+(i++));
            \\t}
            \\t
            \\ti--;
            \\t
            \\tprintf("%s", "Reversed list: ");
            \\tfor(; i>=0; i--){
            \\t\\tprintf("%d ", arr[i]);
            \\t}
            \\tprintf("%s", "\\n");
            \\t
            \\tfree(arr);  // Remember to deallocate memory to avoid memory leaks!
            \\treturn 0;
            }
            
            
            /**
             * Sample execution:
             *| Input size of list: 4
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="C++"
            code={`#include <iostream>  // std::cout, std::cin


            int main(int argc, char** argv){
            \\tint sz = 0;
            \\tint i = 0;
            \\t
            \\tstd::cout << "Input size of list: " << std::flush;
            \\tstd::cin >> sz;
            \\t
            \\t// Declare heap allocated array of integers, with a capacity of user's inputted size.
            \\tint* arr = new int[sz];
            \\t
            \\tstd::cout << "Input your a list of " << sz << " numbers:" << std::endl;
            \\t
            \\t// Scan for integers until capacity hit, or user inputs EOF character
            \\twhile(i<sz){
            \\t\\tstd::cin >> arr[i++];
            \\t}
            \\t
            \\ti--;
            \\t
            \\tstd::cout << "Reversed list: ";
            \\tfor(; i>=0; i--){
            \\t\\tstd::cout << arr[i] << " ";
            \\t}
            \\tstd::cout << std::endl;
            \\t
            \\tdelete[] arr;  // Remember to deallocate memory to avoid memory leaks!
            \\treturn 0;
            }
            
            
            /**
             * Sample execution:
             *| Input size of list: 4
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="Java"
            code={`import java.io.*;
            import java.util.Scanner;
            
            
            public class Example{
            \\tpublic static void main(String[] args){
            \\t\\tScanner scanner = new Scanner(System.in);
            \\t\\t
            \\t\\tSystem.out.printf("%s", "Input size of list: ");
            \\t\\tint sz = scanner.nextInt();
            \\t\\tint i = 0;
            \\t\\t
            \\t\\t
            \\t\\t// Java only has heap-allocated arrays. We initialize one with capacity of user's inputted size.
            \\t\\tint[] arr = new int[sz];
            \\t\\t
            \\t\\tSystem.out.printf("Input your a list of %d numbers\\n", sz);
            \\t\\t
            \\t\\twhile(i<sz && scanner.hasNext()){
            \\t\\t\\tarr[i++] = scanner.nextInt();
            \\t\\t}
            \\t\\t
            \\t\\ti--;
            \\t\\t
            \\t\\tSystem.out.printf("%s", "Reversed list: ");
            \\t\\tfor(; i>=0; i--){
            \\t\\t\\tSystem.out.printf("%d ", arr[i]);
            \\t\\t}
            \\t\\tSystem.out.println("");
            \\t}
            }
            
            
            /**
             * Sample execution:
             *| Input size of list: 4
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *| 1 5 3 9
             *| List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="Rust"
            code={`use std::io::{self, BufRead, Write};


            fn main(){
            \\tlet stdin = io::stdin();
            \\tprint!("Input list size: ");
            \\tio::stdout().flush().unwrap();
            \\t
            \\tlet mut it_in = stdin.lock().lines();
            \\tlet line = it_in.next();
            \\tlet sz: usize = line.unwrap().expect("REASON").parse::<usize>().unwrap();
            \\tlet mut i: usize = 0;
            \\t
            \\t// Rust is obsessed with memory safety, thus it is hard to find a low-level, manual memory management solution
            \\t// Instead we use a vector (we will treat it as a fixed array for now), which is heap-allocated
            \\tlet mut arr = vec![0; sz];
            \\t
            \\t
            \\tprintln!("Input your a list of {} numbers", arr.len());
            \\tio::stdout().flush().unwrap();
            \\t
            \\t
            \\t// Scan for integers until capacity hit, or user inputs EOF character
            \\tfor line in it_in {
            \\t\\tlet line = line.unwrap();
            \\t\\tlet nums = line.split_whitespace().map(|line| line.parse::<i32>());
            \\t\\tfor num in nums{
            \\t\\t\\tarr[i] = num.unwrap();
            \\t\\t\\ti += 1;
            \\t\\t\\tif i >= sz { break; }
            \\t\\t}
            \\t}
            \\t
            \\tprint!("Reversed list: ");
            \\tfor i in (0..sz).rev(){
            \\t\\tprint!("{} ", arr[i]);
            \\t}
            \\tprintln!("");
            }
            
            
            /*
              * Sample execution:
              *| Input size of list: 4
              *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
              *| 1 5 3 9
              *| List size: 4
              *| Reversed list: 9 3 5 1
              */`}
          />
          <Code label="JS"
            code={`const readlineSync = require('readline-sync');  // npm install readline-sync

            let buff = readlineSync.question("Input list size: ");
            let sz = Number(buff.trim());
            let i = 0;
            
            // Like Java, javascript only has heap-allocated arrays. We initialize one with capacity the user's inputted size.
            let arr = new Array(sz);
            
            
            console.log(\`Input your a list of \${sz} numbers\`);
            
            while(i<sz){
            \\tbuff = readlineSync.question(' ');
            \\tif(buff.trim().length == 0){break;}
            \\t
            \\tlet nums = buff.trim().split(/\\s+/);
            \\tfor(let num of nums){
            \\t\\tarr[i] = parseInt(num);
            \\t\\ti += 1;
            \\t\\tif(i >= sz){ break; }
            \\t}
            }
            
            i--;
            
            process.stdout.write("Reversed list: ");
            for(; i>=0; i--){
            \\tprocess.stdout.write(\`\${arr[i]} \`);
            }
            console.log("");
            
            
            /**
             * Sample execution:
             *| Input size of list: 4
             *| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
             *|  1 5 3 9
             *|  List size: 4
             *| Reversed list: 9 3 5 1
             */`}
          />
          <Code label="Python"
            code={`from typing import List


            sz: int = int(input("Input list size: "))
            i: int = 0
            
            # Python abstracts away stack and heap usage. However, the default Python interpretter (CPython), uses a private heap, hence all objects are heap-allocated.
            # We initialize an array of user's inputted size.
            arr: List[int] = [None] * sz
            
            print("Input your a list of %d numbers" % sz)
            
            while i < sz:
            \\ttry: 
            \\t\\tline = input('')
            \\texcept EOFError: break
            \\tnums: List[int] = [int(x) for x in line.strip().split()]
            \\tfor num in nums:
            \\t\\tarr[i] = num
            \\t\\ti += 1
            \\t\\tif i >= sz: break
            
            print("Reversed list: ", end="")
            for i in range(sz-1, -1, -1):
            \\tprint(arr[i], end=" ")
            print("")
            
            
            #  Sample execution:
            #| Input size of list: 4
            #| Input your a list of numbers (up to 16 numbers), and enter EOF (CTRL+D) to stop
            #| 1 5 3 9
            #| List size: 4
            #| Reversed list: 9 3 5 1`}
          />
        </CodeSnippet>
      </div>
    </div>
    
    <div>
      <h4 style={{marginBottom: '1em'}}>{props.ctr}2. Operations </h4>
      <div>
        <h5>{props.ctr}2.1. Access </h5>
        <p> Arrays offer very efficient random access. This is because in the background, the array is basically described by the 
          address of its first element. We then perform arithmetic relative to this to obtain the address of the kth element. 
          Specifically, the following occurs: </p>

        <p> Let A be an array of type T. To obtain A[k], we do the following:
          <span className={styles.center} style={{marginTop: '1em'}}>A[k] = deref(  addr(A) + k * sizeof(T) )</span>
          <br/>
          Take for example in C, where pointers are exposed to the user:
          <br/>
          Let T be the type of an array, and let the variable arr be defined by:
          <span className={styles.center} style={{marginTop: '1em'}}>T arr[N];</span>
          To access the kth element of arr, where the 0th element is the leftmost element, we can do one of the following:
          <span className={styles.center} style={{marginTop: '1em'}}>T tmp = arr[k];</span>
          Or, we can use the equivalent expression:
          <span className={styles.center} style={{marginTop: '1em'}}>T tmp = *(arr + k)</span>
        </p>
        <p> Note that in C, pointer arithmetic automatically translates arr + k into addr(arr) + sizeof(k). To be more explicit we 
          could first cast as a void pointer, then perform the explicit arithmetic yourself:
          <span className={styles.center} style={{marginTop: '1em'}}>T tmp = *(T *)(((void *) arr) + sizeof(T)*k)</span>
        </p>
        <p> At that, using the access operator is very simple. As the access provides direct access to an array's elements, the 
          access operator facilitates both access when reading an element, as well as update when assigning to an element: </p>

        <CodeSnippet>
          <Code label="C" 
            code={`int arr[4] = {0, 1, 2, 3};
            int first_elem = arr[0];  // Accesses first element
            arr[2] = 0;  // Updates 3rd element`}
          />
          <Code label="C++"
            code={`int arr[4] = {0, 1, 2, 3};
            int first_elem = arr[0];  // Accesses first element
            arr[2] = 0;  // Updates 3rd element`}
          />
          <Code label="Java"
            code={`int[] arr = {0, 1, 2, 3};
            int first_elem = arr[0];  // Accesses first element
            arr[2] = 0;  // Updates 3rd element`}
          />
          <Code label="Rust"
            code={`let mut arr: [i32; 4] = [0, 1, 2, 3];
            let first_elem: i32 = arr[0];  // Accesses first element
            arr[2] = 0;  // Updates 3rd element`}
          />
          <Code label="JS"
            code={`let arr = [0, 1, 2, 3];
            let first_elem = arr[0];  // Accesses first element
            arr[2] = 0;  // Updates 3rd element`}
          />
          <Code label="Python"
            code={`arr = [0, 1, 2, 3]
            first_elem = arr[0]  # Accesses first element
            arr[2] = 0  # Updates 3rd element`}
          />
        </CodeSnippet>
      </div>

      <div>
        <h5>{props.ctr}2.2. Insertion and Deletion</h5>
        <p> Insertion & Deletion is not available in arrays due to its fixed capacity. To insert or delete an element from an array 
          would require growing or shrinking its size. One way to do this would be to create a new array from scratch and to copy 
          over all elements. Another way, if dynamic allocation is used and if the function is provided, is to use a reallocation 
          function, which will ask the memory manager to shrink or grow the array in-place to a new size if possible, or allocating 
          a new memory block and copying over data only when necessary. This strategy is used for building dynamic arrays, which we 
          will discuss shortly in the next section. </p>
      </div>

      <div>
        <h5>{props.ctr}2.3. Size</h5>
        <p> In some low level languages where arrays are treated as raw data, the size of the array is not stored with the array. 
          The user would have to keep track of the size of the array. For statically-allocated arrays in C, the sizeof array is 
          capable of seeing thr size of the array due to constant size being available to the compiler at compile time. In other 
          languages however, the Array construct are essentially objects that encapsulate the raw array. Thus, the Array object may 
          keep track of its own size as a member field, which it can then expose to users through a length field, or a length() or 
          size() function. </p>

        <CodeSnippet>
          <Code label="C" 
            code={`// sizeof operator only detects compile-time size of types
            // Explicitly declared stack-allocated array can be calculated by sizeof
            int arr[6] = {0, 1, 2, 3, 4, 5};
            int sz = sizeof(arr) / sizeof(int);  // Sizeof will return size in # of chars
            printf("Size of arr: %d\n", sz);  // Prints 6

            // Arrays casted as pointers or heap-allocated arrays CANT be calculated by sizeof`}
          />
          <Code label="C++"
            code={`// sizeof operator only detects compile-time size of types
            // Explicitly declared stack-allocated array can be calculated by sizeof
            int arr[6] = {0, 1, 2, 3, 4, 5};
            int sz = sizeof(arr) / sizeof(int);  // Sizeof will return size in # of chars
            std::cout << "Size of arr: " << sz << std::endl;  // Prints 6
            
            // Arrays casted as pointers or heap-allocated arrays CANT be calculated by sizeof`}
          />
          <Code label="Java"
            code={`// Java arrays are objects with a length field
            int[] arr = {0, 1, 2, 3, 4, 5};
            int sz = arr.length;
            System.out.printf("Size of arr: %d\n", sz);  // Prints 6`}
          />
          <Code label="Rust"
            code={`// Rust arrays are object-like, with a len() function
            let arr: [i32; 6] = [0, 1, 2, 3, 4, 5];
            let sz: usize = arr.len();
            println!("Size of arr: {}", sz);`}
          />
          <Code label="JS"
            code={`// JavaScript arrays are objects with a length field
            let arr = [0, 1, 2, 3, 4, 5];
            let sz = arr.length;
            console.log(\`Size of arr: \${sz}\`);  // Prints 6`}
          />
          <Code label="Python"
            code={`# Python arrays are objects with a private field storing length
            # This length is accessible indirectly through the use of the len() operator
            arr = [0, 1, 2, 3, 4, 5]
            sz = len(arr)
            print("Size of arr: %d" % sz);  # Prints 6`}
          />
        </CodeSnippet>
      </div>
    </div>
  </div>);
}