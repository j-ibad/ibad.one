import CodeSnippet, {Code} from '@/component/CodeSnippet.js';
import Table from '@/component/Table.js';
import styles from '@/css/DocsTemplate.module.css';

export default function AtomicDataTypes(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Atomic Data Types</h3>
    </div>

    <div>
      <p> Now that we know the absolute basics of how a program stores data in memory, we now discuss the most basic 
        data structures &mdash; atomic data types. Atomic data types are known as atomic since they cannot be broken down further 
        into smaller logical components. These types are often built in to a specific programming language's syntax. </p>

      <p> Atomic data types can be broken down into 4 main types: <b>boolean</b>, <b>numeric</b>, <b>characters</b>, and <b>addresses</b>.
        Note that these types aren't always present in all programming languages, and may be further broken down to subtypes. </p>
    </div>

    <div>
      <h4>{props.ctr}1. Boolean</h4>
      <p> The most basic atomic data types is the Boolean type. Booleans only take on two values: <b>True</b> or <b>False</b>,
        which are often keywords in a language. Some languages support the conversion of other values into Boolean values, 
        while others depend on this conversion when the language does not natively have a concept of Boolean types. In these
        cases, values of a different type such as an integer are known to be <b>falsy</b> if it has a zero-like value, or is 
        <b> truthy</b> otherwise. The truthyness of the value then determines if it is tantamount to a Boolean True or False. </p>

      <CodeSnippet>
        <Code label="C" 
          code={`// C does not have boolean types. 
            // Non-zero values count as true, while zero-like values are false
            int falsy_int = 0;
            int truthy_int = 1;`}
        />
        <Code label="C++"
          code={`// Data type: bool. Boolean literals: 'true' and 'false'
            bool true_bool = true;
            bool falsy_bool = false;`}
        />
        <Code label="Java"
          code={`// Data type: boolean. Boolean literals: 'true' and 'false'
            boolean true_bool = true;
            boolean falsy_bool = false;`}
        />
        <Code label="Rust"
          code={`// Rust can derive types, but its best to be explicit
            // Data type: bool. Boolean literals: 'true' and 'false'
            let true_bool: bool = true;
            let false_bool: bool = false;`}
        />
        <Code label="JS"
          code={`// Javascript is a loosely typed language. Types don't need to be declared
            // Boolean literals: 'true' and 'false'
            let true_bool = true;
            let falsy_bool = false;`}
        />
        <Code label="Python"
          code={`# Python is a loosely typed language. Types don't need to be declared
          # Boolean literals: 'True' and 'False'
          true_bool = True
          falsy_bool = False`}
        />
      </CodeSnippet>

      <p> Boolean values are not always used as raw True of False literals, but as the product of other operations. The most basic
        of these are the relational operators. Relational operators compare two values, checking for equality, comparing which of 
        the two values is larger or smaller, and finding the relation between the two values. </p>

      <CodeSnippet>
        <Code label="C" 
          code={`// Equals: a == b
          int is_equal = (2 == 2);  // is_equal = 1
          is_equal = (2 == 3);  // is_equal = 0
          
          // Not equals: a != b
          int is_ne = (2 != 2);  // is_ne = 0
          is_ne = (2 != 3);  // is_ne = 1
          
          // Less than: a < b
          int is_lt = (2 < 2);  // is_lt = 0
          is_lt = (2 < 3);  // is_lt = 1
          is_lt = (3 < 2);  // is_lt = 0
          
          // Less than or equal to : a <= b
          int is_lte = (2 <= 2);  // is_lte = 1
          is_lte = (2 <= 3);  // is_lte = 1
          is_lte = (3 <= 2);  // is_lte = 0
          
          // Greater than: a > b
          int is_gt = (2 > 2);  // is_gt = 0
          is_gt = (2 > 3);  // is_gt = 0
          is_gt = (3 > 2);  // is_gt = 1

          // Greater than or equal to: a >= b
          int is_gte = (2 >= 2);  // is_gte = 1
          is_gte = (2 >= 3);  // is_gte = 0
          is_gte = (3 >= 2);  // is_gte = 1`}
        />
        <Code label="C++"
          code={`// Equals: a == b
          bool is_equal = (2 == 2);  // is_equal = true
          is_equal = (2 == 3);  // is_equal = false

          // Not equals: a != b
          bool is_ne = (2 != 2);  // is_ne = false
          is_ne = (2 != 3);  // is_ne = true

          // Less than: a < b
          bool is_lt = (2 < 2);  // is_lt = false
          is_lt = (2 < 3);  // is_lt = true
          is_lt = (3 < 2);  // is_lt = false

          // Less than or equal to : a <= b
          bool is_lte = (2 <= 2);  // is_lte = true
          is_lte = (2 <= 3);  // is_lte = true
          is_lte = (3 <= 2);  // is_lte = false

          // Greater than: a > b
          bool is_gt = (2 > 2);  // is_gt = false
          is_gt = (2 > 3);  // is_gt = false
          is_gt = (3 > 2);  // is_gt = true

          // Greater than or equal to: a >= b
          bool is_gte = (2 >= 2);  // is_gte = true
          is_gte = (2 >= 3);  // is_gte = false
          is_gte = (3 >= 2);  // is_gte = true`}
        />
        <Code label="Java"
          code={`// Equals: a == b
          boolean is_equal = (2 == 2);  // is_equal = true
          is_equal = (2 == 3);  // is_equal = false

          // Not equals: a != b
          boolean is_ne = (2 != 2);  // is_ne = false
          is_ne = (2 != 3);  // is_ne = true

          // Less than: a < b
          boolean is_lt = (2 < 2);  // is_lt = false
          is_lt = (2 < 3);  // is_lt = true
          is_lt = (3 < 2);  // is_lt = false

          // Less than or equal to : a <= b
          boolean is_lte = (2 <= 2);  // is_lte = true
          is_lte = (2 <= 3);  // is_lte = true
          is_lte = (3 <= 2);  // is_lte = false

          // Greater than: a > b
          boolean is_gt = (2 > 2);  // is_gt = false
          is_gt = (2 > 3);  // is_gt = false
          is_gt = (3 > 2);  // is_gt = true

          // Greater than or equal to: a >= b
          boolean is_gte = (2 >= 2);  // is_gte = true
          is_gte = (2 >= 3);  // is_gte = false
          is_gte = (3 >= 2);  // is_gte = true`}
        />
        <Code label="Rust"
          code={`// Equals: a == b
          let mut is_equal: bool = 2 == 2;  // is_equal = true
          is_equal = 2 == 3;  // is_equal = false

          // Not equals: a != b
          let mut is_ne: bool = 2 != 2;  // is_ne = false
          is_ne = 2 != 3;  // is_ne = true

          // Less than: a < b
          let mut is_lt: bool = 2 < 2;  // is_lt = false
          is_lt = 2 < 3;  // is_lt = true
          is_lt = 3 < 2;  // is_lt = false

          // Less than or equal to : a <= b
          let mut is_lte: bool = 2 <= 2;  // is_lte = true
          is_lte = 2 <= 3;  // is_lte = true
          is_lte = 3 <= 2;  // is_lte = false

          // Greater than: a > b
          let mut is_gt: bool = 2 > 2;  // is_gt = false
          is_gt = 2 > 3;  // is_gt = false
          is_gt = 3 > 2;  // is_gt = true

          // Greater than or equal to: a >= b
          let mut is_gte: bool = 2 >= 2;  // is_gte = true
          is_gte = 2 >= 3;  // is_gte = false
          is_gte = 3 >= 2;  // is_gte = true`}
        />
        <Code label="JS"
          code={`// Equals: a == b
          let is_equal = (2 == 2);  // is_equal = true
          is_equal = (2 == 3);  // is_equal = false
          
          // Not equals: a != b
          let is_ne = (2 != 2);  // is_ne = false
          is_ne = (2 != 3);  // is_ne = true
          
          // Less than: a < b
          let is_lt = (2 < 2);  // is_lt = false
          is_lt = (2 < 3);  // is_lt = true
          is_lt = (3 < 2);  // is_lt = false
          
          // Less than or equal to : a <= b
          let is_lte = (2 <= 2);  // is_lte = true
          is_lte = (2 <= 3);  // is_lte = true
          is_lte = (3 <= 2);  // is_lte = false
          
          // Greater than: a > b
          let is_gt = (2 > 2);  // is_gt = false
          is_gt = (2 > 3);  // is_gt = false
          is_gt = (3 > 2);  // is_gt = true

          // Greater than or equal to: a >= b
          let is_gte = (2 >= 2);  // is_gte = true
          is_gte = (2 >= 3);  // is_gte = false
          is_gte = (3 >= 2);  // is_gte = true`}
        />
        <Code label="Python"
          code={`# Equals: a == b
          is_equal = (2 == 2)  # is_equal = True
          is_equal = (2 == 3)  # is_equal = False
          
          # Not equals: a != b
          is_ne = (2 != 2)  # is_ne = False
          is_ne = (2 != 3)  # is_ne = True
          
          # Less than: a < b
          is_lt = (2 < 2)  # is_lt = False
          is_lt = (2 < 3)  # is_lt = True
          is_lt = (3 < 2)  # is_lt = False
          
          # Less than or equal to : a <= b
          is_lte = (2 <= 2)  # is_lte = True
          is_lte = (2 <= 3)  # is_lte = True
          is_lte = (3 <= 2)  # is_lte = False
          
          # Greater than: a > b
          is_gt = (2 > 2)  # is_gt = False
          is_gt = (2 > 3)  # is_gt = False
          is_gt = (3 > 2)  # is_gt = True
          
          # Greater than or equal to: a >= b
          is_gte = (2 >= 2)  # is_gte = True
          is_gte = (2 >= 3)  # is_gte = False
          is_gte = (3 >= 2)  # is_gte = True`}
        />
      </CodeSnippet>

      <p> Boolean types are typically found with logical operators. Logical operators include AND, OR, XOR, NOT, and the negative 
        counterpart NAND, NOR, XNOR. Logical operators follow the rules of boolean algebra and have simple truth tables that describe 
        its behaviour. A truth table shows the outputted by an operation by the different combination of inputs. </p>
      <ul>
        <li><b>NOT</b> - Returns the boolean complement. That is, return true if the input is false, and returns false if the input is true. </li>
        <li><b>AND</b> - True if both values are True. Evaluates as false if any values are false.</li>
        <li><b>OR</b> - True if any values are True. Evaluates as false if both values are false.</li>
        <li><b>XOR</b> - "Exclusive OR". True if and only if one value is true. False is both values are false, or if both are true.</li>
        <li><b>NAND</b> - Not AND</li>
        <li><b>OR</b> - Not OR</li>
        <li><b>XOR</b> - Exclusive NOR, or Not XOR</li>
      </ul>

      <Table cols={[{}, {header: true}, {span: 2}, {header: true}]}
        header={[
          ['', '', 'AND', 'OR', 'XOR', 'NOT', 'NAND', 'NOR', 'XNOR'],
          ['A', 'B', 'A && B', 'A || B', 'A ^ B', '!A', '!(A && B)', '!(A || B)', '!(A ^ B)']
        ]}
        body={[
          ['0', '0', '0', '0', '0', '1', '1', '1', '1'],
          ['0', '1', '0', '1', '1', '1', '1', '0', '0'],
          ['1', '0', '0', '1', '1', '0', '1', '0', '0'],
          ['1', '1', '1', '1', '0', '0', '0', '0', '1']
        ]} />

      <CodeSnippet>
        <Code label="C" 
          code={`// Logical NOT operator: !
            int res_not = !0;  // res_not = 1
            
            // Logical AND operator: &&
            int res_and = 0 && 1;  // res_and = 0

            // Logical OR operator: ||
            int res_or = 0 || 1;  // res_or = 1

            // There is no logical XOR operator. Instead, there is a bitwise XOR operator: ^
            // This only works if we are guaranteed only 0 and 1. Otherwise we get the following:
            //   1 ^ 2 = 3  // True XOR True = True [Bad Logic] 
            // For a safer XOR operator we implement it ourselves using one of the following
            //   !(A) != !(B)  // Wrapping A and B around not operator enforces boolean 0 or 1
            //   A ? !B : B
            int res_xor = !(0) != !(1);  // res_xor = 1

            // NAND, NOR, XNOR can be performed by prepending the results
            // of the corresponding operation with !.
            int res_nand = !(1 && 0);  // 1 NAND 0
            int res_nor = !(1 || 0);  // 1 NOR 0
            int res_xnor = !(1) == !(0);  // 1 XNOR 0`}
        />
        <Code label="C++"
          code={`// Logical NOT operator: !
          bool res_not = !false;  // res_not = true
          
          // Logical AND operator: &&
          bool res_and = false && true;  // res_and = false

          // Logical OR operator: ||
          bool res_or = false || true;  // res_or = true

          // There is no logical XOR operator. Instead, there is a bitwise XOR operator: ^
          // This only works if we are guaranteed only false and true. Otherwise we get the following:
          //   1 ^ 2 = 3  // True XOR True = True [Bad Logic] 
          // For a safer XOR operator we implement it ourselves using one of the following
          //   !(A) != !(B)  // Wrapping A and B around not operator enforces boolean false or true
          //   A ? !B : B
          // When dealing with pure boolean values however, we can safely use A != B
          bool res_xor = false != true;  // res_xor = true

          // NAND, NOR, XNOR can be performed by prepending the results
          // of the corresponding operation with !.
          bool res_nand = !(true && false);  // true NAND false
          bool res_nor = !(true || false);  // true NOR false
          bool res_xnor = true == false;  // true XNOR false`}
        />
        <Code label="Java"
          code={`// Logical NOT operator: !
          boolean res_not = !false;  // res_not = true
          
          // Logical AND operator: &&
          boolean res_and = false && true;  // res_and = false

          // Logical OR operator: ||
          boolean res_or = false || true;  // res_or = true

          // Formally, there is no logical XOR operator. Instead, there is a bitwise XOR operator: ^
          // This only works if we are guaranteed only false and true. Otherwise we get the following:
          //   1 ^ 2 = 3  // True XOR True = True [Bad Logic] 
          // For a safer XOR operator we implement it ourselves using one of the following
          //   !(A) != !(B)  // Wrapping A and B around not operator enforces boolean false or true
          //   A ? !B : B
          // When dealing with pure boolean values however, we can safely use A != B
          boolean res_xor = false != true;  // res_xor = true

          // NAND, NOR, XNOR can be performed by prepending the results
          // of the corresponding operation with !.
          boolean res_nand = !(true && false);  // true NAND false
          boolean res_nor = !(true || false);  // true NOR false
          boolean res_xnor = true == false;  // true XNOR false`}
        />
        <Code label="Rust"
          code={`// Logical NOT operator: !
          let mut res_not: bool = !false;  // res_not = true
          
          // Logical AND operator: &
					// Logical AND in Rust uses the same operator as bitwise AND
          let mut res_and: bool = false & true;  // res_and = false

          // Logical OR operator: |
					// Logical OR in Rust uses the same operator as bitwise OR
          let mut res_or: bool = false | true;  // res_or = true

          // Logical XOR operator: ^
					// Logical XOR in Rust uses the same operator as bitwise XOR
          let mut res_xor: false ^ true;  // res_xor = true

          // NAND, NOR, XNOR can be performed by prepending the results
          // of the corresponding operation with !.
          let mut res_nand: bool = !(true & false);  // true NAND false
          let mut res_nor: bool = !(true | false);  // true NOR false
          let mut res_xnor: bool = !(true ^ false);  // true XNOR false`}
        />
        <Code label="JS"
          code={`// Logical NOT operator: !
          let res_not = !false;  // res_not = true
          
          // Logical AND operator: &&
          let res_and = false && true;  // res_and = false

          // Logical OR operator: ||
          let res_or = false || true;  // res_or = true

          // There is no logical XOR operator. Instead, there is a bitwise XOR operator: ^
          // This only works if we are guaranteed only false and true. Otherwise we get the following:
          //   1 ^ 2 = 3  // True XOR True = True [Bad Logic] 
          // For a safer XOR operator we implement it ourselves using one of the following
          //   !(A) != !(B)  // Wrapping A and B around not operator enforces boolean false or true
          //   A ? !B : B
          // When dealing with pure boolean values however, we can safely use A != B
          let res_xor = false != true;  // res_xor = true

          // NAND, NOR, XNOR can be performed by prepending the results
          // of the corresponding operation with !.
          let res_nand = !(true && false);  // true NAND false
          let res_nor = !(true || false);  // true NOR false
          let res_xnor = true == false;  // true XNOR false`}
        />
        <Code label="Python"
          code={`# Logical NOT operator: not 
          res_not = not False  # res_!= True
          
          # Logical AND operator: and
          res_and = False and True  # res_and = False

          # Logical OR operator: or
          res_or = False or True  # res_or = True

          # There is no logical XOR operator. Instead, there is a bitwise XOR operator: ^
          # This only works if we are guaranteed only False and True. Otherwise we get the following:
          #   True ^ 2 = 3  # True XOR True = True [Bad Logic] 
          # For a safer XOR operator we implement it ourselves using one of the following
          #   not (A) != not (B)  # Wrapping A and B around not operator enforces boolean False or True
          #   A ? not B : B
          # When dealing with pure boolean values however, we can safely use A != B
          res_xor = False != True  # res_xor = True

          # NAND, NOR, XNOR can be performed by prepending the results
          # of the corresponding operation with not .
          res_nand = not (True and False)  # True NAND False
          res_nor = not (True or False)  # True NOR False
          res_xnor = True == False  # True XNOR False`}
        />
      </CodeSnippet>

      <p> Boolean types are also found as the conditions for conditional statements and loops. For conditional statements, a true 
        or truthy value evaluates to the if body, and otherwise goes to the else statement. For loops, the loop continues while the 
        condition evaluates to be true or a truthy value. </p>
        
      <CodeSnippet>
        <Code label="C" 
          code={`int sz = 12;

          /**
           * Conditional statements / Branches
           *| if(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute if condition is true>
           *| }else{
           *| \\t<execute if condition is false>
           *| }
           */
          
          if(sz > 10){  // sz > 10 = 1 (boolean true)
            \\tprintf("Size %d is greater than 10\\n", sz);
          }else{
            \\tprintf("Size %d is less than or equal to 10\\n", sz);
          }
          
          
          /**
           * Loops - While
           *| while(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute while condiiton is true>
           *| }
           * \\t OR
           *| do{
           *| \\t<execute until condition is false>
           *| while(<condition>);
           */
          
          while(sz >= 10){
            \\tprintf("Reduce size %d by 1\\n", sz);
            \\tsz--;  // Decrement by 1
          }
          
          
          /**
           * Loops - For
           *| for(<init>; <condition>; <increment>){
           *| \\t<execute while condition holds true>
           *| }
           */
          
          for(int i=0; i<sz; i++){
            \\tprintf("%d\\n", i);
          }`}
        />
        <Code label="C++"
          code={`int sz = 12;

          /**
           * Conditional statements / Branches
           *| if(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute if condition is true>
           *| }else{
           *| \\t<execute if condition is false>
           *| }
           */
          
          if(sz > 10){  // sz > 10 = true
            \\tstd::cout << "Size " << sz << " is greater than 10" << std::endl;
          }else{
            \\tprintf("Size %d is less than or equal to 10\\n", sz);
          }
          
          
          /**
           * Loops - While
           *| while(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute while condiiton is true>
           *| }
           * \\t OR
           *| do{
           *| \\t<execute until condition is false>
           *| while(<condition>);
           */
          
          while(sz >= 10){
            \\tstd::cout << "Reduce size " << sz << " by 1" << std::endl;
            \\tsz--;  // Decrement by 1
          }
          
          
          /**
           * Loops - For
           *| for(<init>; <condition>; <increment>){
           *| \\t<execute while condition holds true>
           *| }
           */
          
          for(int i=0; i<sz; i++){
            \\tstd::cout << i << std::endl;
          }`}
        />
        <Code label="Java"
          code={`int sz = 12;

          /**
           * Conditional statements / Branches
           *| if(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute if condition is true>
           *| }else{
           *| \\t<execute if condition is false>
           *| }
           */
          
          if(sz > 10){  // sz > 10 = true
            \\tSystem.out.printf("Size %d is greater than 10\\n", sz);
          }else{
            \\tSystem.out.printf("Size %d is less than or equal to 10\\n", sz);
          }
          
          
          /**
           * Loops - While
           *| while(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute while condiiton is true>
           *| }
           * \\t OR
           *| do{
           *| \\t<execute until condition is false>
           *| while(<condition>);
           */
          
          while(sz >= 10){
            \\tSystem.out.printf("Reduce size %d by 1\\n", sz);
            \\tsz--;  // Decrement by 1
          }
          
          
          /**
           * Loops - For
           *| for(<init>; <condition>; <increment>){
           *| \\t<execute while condition holds true>
           *| }
           */
          
          for(int i=0; i<sz; i++){
            \\tSystem.out.println(i);
          }`}
        />
        <Code label="Rust"
          code={`let mut sz: u32 = 12;

          /**
           * Conditional statements / Branches
           *| if <condition> {  // <condition> will be evaluated as a boolean
           *| \\t<execute if condition is true>
           *| } else {
           *| \\t<execute if condition is false>
           *| }
           */
          
          if sz > 10 {  // sz > 10 = true
            \\tprintln!("Size {} is greater than 10", sz);
          }else{
            \\tprintln!("Size {} is less than or equal to 10", sz);
          }
          
          
          /**
           * Loops - While
           *| while <condition> {  // <condition> will be evaluated as a boolean
           *| \\t<execute while condiiton is true>
           *| }
           * \\t\\tOR
           *| loop {
           *| \\t<execute until condition is false>
           *| \\tif !condition { break; }
           *| };
           */
          
          while sz >= 10 {
            \\tprintln!("Reduce size {} by 1", sz);
            \\tsz -= 1;  // Decrement by 1 [Rust has no -- or ++ operator]
          }
          
          
          /**
           * Loops - For
           * In rust, the for-loops do not use conditional statements.
           * It is shown here simply for consistency.
           *| for <var> in <range> {
           *| \\t<Executes per value in range. NOT based on condition>
           *| }
           */
          
          for i in 0..sz {
            \\tprintln!("{}", i);
          }`}
        />
        <Code label="JS"
          code={`let sz = 12;

          /**
           * Conditional statements / Branches
           *| if(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute if condition is true>
           *| }else{
           *| \\t<execute if condition is false>
           *| }
           */
          
          if(sz > 10){  // sz > 10 = true
            \\tconsole.log(\`Size \${sz} is greater than 10\`);
          }else{
            \\tconsole.log(\`Size \${sz} is less than or equal to 10\`);
          }
          
          
          /**
           * Loops - While
           *| while(<condition>){  // <condition> will be evaluated as a boolean
           *| \\t<execute while condiiton is true>
           *| }
           * \\t OR
           *| do{
           *| \\t<execute until condition is false>
           *| while(<condition>);
           */
          
          while(sz >= 10){
            \\tconsole.log(\`Reduce size \${sz} by 1\`);
            \\tsz--;  // Decrement by 1
          }
          
          
          /**
           * Loops - For
           *| for(<init>; <condition>; <increment>){
           *| \\t<execute while condition holds true>
           *| }
           */
          
          for(let i=0; i<sz; i++){
            \\tconsole.log(i);
          }`}
        />
        <Code label="Python"
          code={`sz = 12

          '''
          Conditional statements / Branches
          | if <condition>:  # <condition> will be evaluated as a boolean
          | \\t<execute if condition is true>
          | else:
          | \\t<execute if condition is false>
          | 
          '''
          
          if sz>10:  # sz > 10 = True
            \\tprint("Size %d is greater than 10" % sz)
          else:
            \\tprint("Size %d is less than or equal to 10" % sz)
          
          
          '''
          Loops - While
          | while <condition>:  # <condition> will be evaluated as a boolean
          | \\t<execute while condiiton is true>
          (Python has no do-while construct)
          '''
          
          while sz >= 10:
            \\tprint("Reduce size %d by 1" % sz)
            \\tsz -= 1  # Decrement by 1 [Python has no -- or ++ operators]
          
          
          '''
          Loops - For
          In python, the for-loops do not use conditional statements.
          It is shown here simply for consistency.
          | for <var> in <range>:
          | \\t<Executes per value in range. NOT based on condition>
          '''
          
          for i in range(0, sz):
            \\tprint(i)`}
        />
      </CodeSnippet>

      <p> There is more to boolean algebra and logical calculus than the topics discussed here that is out of the scope of how
        data is represented. Boolean algebra goes deeper into the properties of the boolean operators showing how boolean expressions
        can be transformed using laws such as DeMorgan's Theorem, and using forms suitable for electrical engineering applications such
        as min-term or max-term expressions. Logical calculus extends Boolean Algebra topics into the logic of statements and inference.
        Readers interested in such topics are encouraged to research these topics on their own. </p>

      <div className={styles.subsection}>
        <h5> Three-Valued Logic (3VL) </h5>
        <p> Before moving on from boolean logic, it is worth noting that up to now, we have been using boolean logic with two possible
          values: True or False. However, there are logic systems that exists for systems of more possible values, generically called 
          many-value logic. Of the various systems, we will focus our discussion on <b>Three-Valued Logic (3VL)</b> due to its relevance
          in some prominent high level languages as well as in database query languages. </p>

        <p> In 3VL, one can have the value of True, False, or Unknown (T, F, or U). Alternatively, it can also be viewed as taking on
          the values 1, 0, or -1. 3VL has different logic systems that can govern a system, such as Kleene, Priest, and Łukasiewicz 
          Logic, along wiht many others. For simplicity, we will focus on Kleene &amp; Priest logics since it is used in SQL. </p>
          
        <p> These logic systems can be derived by doing the following: for any operation, create a truth table, where each variable
          takes one of three values: &#123;F, U, T&#125;. We then do the following:</p>
        <span className={styles.center}>Let A &#8862; B be a 3VL expression where &#8862; is an operator. </span>
        <ul>
          <li>If both A &amp; B are in the range &#123;F, T&#125;, then evaluate A &#8862; B as a regular boolean expression</li>
          <li>If at least one variable, say A, is Unknown, then evalute two expressions: one where A is T, the other where A is F.
            That is:
          </li>
          <ul>
            <li>Evalute T &#8862; B and F &#8862; B.</li>
            <li>If (T &#8862; B) == (F &#8862; B), then A &#8862; B = (T &#8862; B) = (F &#8862; B) .</li>
            <li>Else, since (T &#8862; B) != (F &#8862; B), then A &#8862; B = U</li>
          </ul>
        </ul>
        <p> Take for example F AND U. Since F AND F and F AND T are both F, we know for sure that F AND U = F. However, for T AND U,
          T AND F = F, but T AND T = T. Since the result is different when the unknown value varies, the result is Unknown.
          As another example, take F OR U. F OR F = F, but F OR T = T, Since the result is different when the unknown value varies, 
          the result is Unknown. However, for T OR U, since we have both T OR F = T and T OR T = T, then know for sure that T OR U = T. </p>
        <p> Using this system, we can now derive the three most basic logic operations: NOT, AND, OR. </p>
        <ul>
          <li><b>NOT</b> - Returns the complement (!T = F, !F = T). The complement of unknown is also unknown (!U = U)</li>
          <li><b>AND</b> - True if both values are True. Evaluates as false if any values are false. Otherwise, unknown.</li>
          <li><b>OR</b> - True if any values are True. Evaluates as false if both values are false. Otherwise, unknown </li>
        </ul>

        <div style={{textAlign: 'center'}}>
          <Table style={{display: 'inline-block', padding: '1em 2em'}} cols={[{header: true}]}
            header={[
              ['NOT', '!A'],
            ]}
            body={[
              ['F', 'T'],
              ['U', 'U'],
              ['T', 'F'],
            ]} />

          <Table style={{display: 'inline-block', padding: '1em 2em'}} cols={[{header: true}]}
            header={[
              ['AND', 'F', 'U', 'T'],
            ]}
            body={[
              ['F', 'F', 'F', 'F'],
              ['U', 'F', 'U', 'U'],
              ['T', 'F', 'U', 'T'],
            ]} />
        
          <Table style={{display: 'inline-block', padding: '1em 2em'}} cols={[{header: true}]}
            header={[
              ['OR', 'F', 'U', 'T'],
            ]}
            body={[
              ['F', 'F', 'U', 'T'],
              ['U', 'U', 'U', 'T'],
              ['T', 'T', 'T', 'T'],
            ]} />
        </div>
      </div>
    </div>

    <div>
      <h4>{props.ctr}2. Numeric</h4>
      <p> The next atomic data type that we will discuss is the numeric type. As the name suggests, numeric types represent numbers 
        and can undergo arithmetic operations. There are two main types: <b>Integral</b> and <b>Real</b> types. Some high level 
        languages have a generic Number or Numeric type that can take the form of an integral or real number, while others have 
        explicit and distinct integral and real data types. Regardless, it is important to know how both numeric sub-types work under-the-hood 
        to effectively and accurately use them in mathematical applications. </p>

      <div className={styles.subsection}>
        <h5>{props.ctr}2.1. Integral</h5>
        <p> The Integral numeric type comprises the simplest numeric data type. Integral types only deal with Integer values, that 
          is, numbers with no decimal points. They are easily represented in simple binary format. Recall that we discussed how 
          binary numbers work in <b><i>1. Introduction</i></b>, under the section <b><i>1.2.1. Aa</i></b> </p>

        <div className={styles.subsection}>
          <h5>Signed and Unsigned Integrals</h5>
          <p> The first concept that adds complexity to numeric data types is a number's sign: whether its positive or negative. 
            We've already seen how positive numbers are represented in binary, but how do we represent a negative number? </p>

          <p> To do so, we must first assume that a given data type has a set <b>bit-width</b> or size. Given this bit-width, we 
            may then represent the number in 2s complement format. In 2s complement, the most-significant bit is known as the sign 
            bit, and it represent the negative version of itself. For an 8-bit 2s complement representation, the 8th bit has the 
            value of -1&times;2<sup>7</sup> = -128. The rest are still treated as positive and we merely sum up the value. The result 
            is a data type with a way to represent a range of values between [-1 &times; 2<sup>(N-1)</sup>, 2<sup>(N-1)</sup>-1] given N-bits 
            of size. </p>
          <div className={styles.subsection}>
            <h6>Examples:</h6>
            <p> Take an 8-bit number in 2s complement. Thus, this falls between the range [-2<sup>(7)</sup>, 2<sup>(7)</sup>-1] =
              [-128, 127]. The following binary numbers have these decimal values:</p>
            <ul>
              {/* TODO: Provide simple 2s complement examples */}
            </ul>
            <p> Note that because of this, in moving forward, unless we are dealing with fixed-width binary digits, we will prefer 
              to have an extra zero before positive numbers to be unambiguous. </p>
          </div>

          <p> When a value is declared as an unsigned type, it is treated as a plain binary number with the most significant bit 
            representing a postive value. However when a value is declared as a signed type, it is treated as a 2s complemented 
            number with the most significant bit representing a negative value, hence acting like a sign bit. </p>

          <p> When declaring a variable by a certain type, it often defaults to the signed version of the type. Many languages do 
            not even offer the unsigned qualifier. However, for languages that do offer both unsigned and signed types, it is 
            crucial to understand how they interact. When an signed number undergoes an operation with a unsigned number, both are 
            treated as a unsigned number. The result is that negative numbers can accidentally be treated as very large positive 
            numbers. </p>

          {/* TODO: Show C example of unsigned type conversion */}
        </div>

        <div className={styles.subsection}>
          <h5>Size</h5>
          <p> Each integral type is associated with a size which determines the range of values that the integer can take. </p>

          {/* TODO: <Insert size range chart> */}
        </div>

        <div className={styles.subsection}>
          <h5>Arithmetic Operations</h5>
          <p> The primary set of operations that numeric types go through is the arithmetic operations. These are given by the 
            +, -, *, and / operations, as well % for modulus. </p>

          {/* TODO: Example arithmetic */}
        </div>
      </div>

      <div className={styles.subsection}>
        <h5>{props.ctr}2.2. Real Numbers - Fixed & Floating Point</h5>
        <p> The next concept that adds complexity to how we represent numbers is the concept of decimal points, which is
          necessary when we begin representing Real numbers (approximately) instead of just Integers. As the computer stores
          everything in raw bits of 0's and 1's, it is not so straightforward to represent a value that is only a fraction of 1.
          To do so, we must define a new way of storing and interpretting these binary digits to represent real numbers. There are
          two primary ways of storing real numbers: as Fixed Point or Floating Point. Note that for both types, we are forced to
          approximate, with to a predefined <b>precision</b>. Precision is analogous to sig-figs or significant figures in math. It
          merely indicate how many digits we want to store.</p>

        <div className={styles.subsection}>
          <h5>Fixed Point</h5>
          <p> Aa {/* TODO:  */} </p>
        </div>

        <div className={styles.subsection}>
          <h5>Floating Point</h5>
          <p> Aa {/* TODO: */} </p>
        </div>

        <div className={styles.subsection}>
          <h5>Rational representations</h5>
          <p> It is possible to develop a representation of real numbers that can precisely represent rational numbers. To do so,
            we must in some way, store the numbers as a fraction &mdash; with both integer numerator and denominator, and possibly
            as a series of fractions. Rational representations of real numbers are beyond the scope of this series. It suffices the 
            reader to know however, that there are implementations are continual developments in precise representing numbers as 
            rational numbers as well as larger subsets of the real set of numbers using complex algebraic properties and equations. </p>
            
          <p> In the meanwhile, the precision of approximate representations such as fixed and floating point representations have
            sufficed us in running calculations. Fixed point numbers have been used to represent money as financial institutions
            track the flow of money, and the rules set in place to approximate these numbers through rigorous calculations have
            proven effective and precise enough to continue running the financial world. Floating point digits, especially with
            double precision as well as customized high-precision formats have also been used in complex scientific computation
            situations. Hence, for the present, there is no pressing need to seek a non-approximate representation of real numbers
            that the world depends on. </p>
        </div>
      </div>
    </div>

    <div>
      <h4>{props.ctr}3. Characters</h4>
      <p> The next data type is the character. Since the representation of characters differ greatly between languages, we will 
        first discuss the simplest representation of characters which serves as the foundation of simplified representations of 
        the data type. </p>

      <div className={styles.subsection}>
        <h5>{props.ctr}3.1. Representing Characters &mdash; Encoding as Integers</h5>
        <p> In essence, a character is merely an integer which is encoded and interpretted so as to represent letters, symbols, 
          and reserved characters. Simply put, characters are stored a plain series of 1's and 0's, with an associated integer
          value that fall within a range defined by the type's bit-width. The integer value is then mapped to a specific character,
          depending on the format and encoding of the character. The most famous character encodings are for ASCII and Unicode.</p>

        <div className={styles.subsection}>
          <h5>ASCII</h5>
          <p> The most basic character representation is an encoding format called ASCII (American Standard Code for Information 
            Interchange). ASCII has the most basic english laters, numbers, and symbols. It also has the essential control characters. 
            Control characters are used by computers to perform special operations with respect to text printing or processing. This 
            includes NULL characters which is used for string termination, tabs, line feeds (or more commonly, new-line), file 
            separators, carriage returns, and more. </p>
          
          <p> ASCII is 1 byte in size, with the 7 LSB bits being mapped to 128 possible characters. The remaining 1 MSB bit is reserved, 
            formerly used for error checking. In ASCII, values 0x00-0x1F (and 0x7F) map to control characters. Values 0x30-0x39 map to 
            numbers '0'-'9' (hence conversion from ASCII characters representing a number, to the integer value of said number, is as 
            simple as subtracting the character by 0x30). Values 0x41-0x5A map to capital letters 'A'-'Z', and values 0x61-0x07A map to 
            lowercase letters 'a'-'z'. Conversion between capital to lowercase letters is as simple as adding or subtracting 0x20. The 
            remaining characters are symbols scattered throughout the range. This mapping between the integer value of an ASCII character 
            and the character it represents can be easily found on an ASCII Table. </p>

          {/* TODO: <Show ASCII table, and cite source (https://cs.smu.ca/~porter/csc/ref/ascii.html)> */}
        </div>

        <div className={styles.subsection}>
          <h5>Unicode</h5>
          <p> ASCII, as the acronym indicates, is exclusively for the english alphabet and grammar. To support different characters 
            found in different languages, the ASCII format proved in adequate for unified international use. Different attempts then 
            began to create an 'Extended ASCII' format, which began to extend other western european languages through ISO Latin-1. 
            However, this continues to be inadeuqate for non-latin languages such as Greek, Cyrllic, Mandarin, Hindi, and the many 
            other alphabets and symbol sets. Thus, the Unicode standard was eventually developed as a means of encoding text amongst 
            many languages consistently. Unicode is capable of supporting many character sets, and thus allowed for using a single 
            standard to be used amongst the international community with little-to-no conversion overhead. </p>
          
          <p> Unicode defines the mapping between integer values and the character being represented. However, even with the same 
            mapping, a Unicode string can still have different encodings. Each encoding defines a different character size, using 
            smaller sizes for simplicity and compatibility with ASCII, and bigger sizes used to support greater ranges of character 
            sets amongst the international community. With sizes larges than one byte, the encoding must also define the order by 
            which data is arranged, in terms of endianness. Thus, we have the UTF encodings, the most common encodings of the Unicode 
            standard, (although not the only encodings). </p>

          <p> UTF encodings are specified by the bit-width of the encoding as well as the encoding, often named in the format of:
            <span className={styles.code}> UTF-&lt;BitWidth&gt;(ByteOrder) {/* TODO:  */} </span> </p>
        </div>
      </div>
      

      <div className={styles.subsection}>
        <h5>{props.ctr}3.2. Character Data Types</h5>
        <p> Now that we have discussed how characters are represented in hardware as well as how characters are encoded, we are
          now ready to discuss how characters are represented as an abstraction in programming languages. The way characters are
          treated and abstracted in each programming language may vary greatly between languages. However, we find that there are
          three main ways that characters can be represented: 1.) as an integral type, in which the developer has access to the integer
          value of the character, 2.) as its own type, where characters can't interact with numerics and exclusively represents 
          characters, and, 3.) as a string, where not only is the character incompatible with integer, but is already stored as a 
          collection of characters. </p>

        <div className={styles.subsection}>
          <h5>Characters as an Integer</h5>
          <p> In early languages and low level languages, characters are stored as the raw bytes, and hence, as an integral type.
            In such languages, characters are interchangeable and interoperable with integers, and may undergo arithmetic and 
            logical operators, which allow for quick, raw transformation between characters representing number to the number itself, 
            shifting characters, or converting to upper or lower case. </p>

          <p> In exchange for this flexibility, there is a risk of accidentally performing math with characters when the character is
            not meant to be used in math. There is also the risk of producing characters with integer values that fall in ranges that 
            make for invalid or incoherent characters. </p>
            
          {/* TODO: Example code in C & C++ */}
        </div>
        
        <div className={styles.subsection}>
          <h5>Characters as its Own Type</h5>
          <p> In other languages like Java, characters serve as a data type exclusively for characters. Deep inside, it is still just a 
            plain integer as described above, however the compiler does not allow arithmetic operations on the character type itself. 
            This creates a type safety preventing accidents of using characters in arithmetics, or using numbers as an incoherent or 
            invalid character. </p>

          {/* TODO: Example code in Java */}
        </div>
        
        <div className={styles.subsection}>
          <h5>Character as a String</h5>
          <p> In high level languages such as Python and Javascript, there is no character type. Instead, there is plainly a String. 
            We will discuss Strings and arrays in the future when we get to Array collections, but in brief, a string is an array, or 
            a sequential and linear collection, of characters. Hence, a 'character' in these languages is merely a one element string. </p>
            
          {/* TODO: Example code in JS & Python */}
        </div>
      </div>
    </div>

    <div>
      <h4>{props.ctr}4. Memory Addresses (References & Pointers)</h4>
      <p> The final atomic data type that we will discuss is the <b>memory address</b>. This is more commonly known as a pointer or a 
        reference. In fact, in subsequent sections we will refer to them by one of these terms. However, the term pointer or reference 
        suggests high level concepts that abstract away from addresses to illustrate an arrow to another element or something a vague 
        identifier of an element or object. For this part of the series, we want to understand how data is truly represented in memory, 
        hence we will use the term address to ground the reader's understanding of pointers and references, as mere memory addresses. </p>

      <p> An address is essentially another integral type, whose integer value is, as the name suggests, the address, or index, of an 
        element in memory. Recall, that memory is essentially an array, or sequential list, of bytes. Each byte can be addressed, or 
        accessed, through its distance from the very beginning of said list. This distance is called an index for generic arrays, but 
        in the special case of memory, is called the address. </p>

      <p> Through the address, a program can access a very specific element in memory directly. This is useful when we want to send a 
        large element that spans many bytes to another portion of the program. Without addresses, the element would have to be copied 
        over somewhere that the callee can access, which proves inefficient for large elements. When elements are passed into a function 
        by a copy of its value, then we say the variable is <b>passed-by-value</b> and the copy created is known as a <b>deep copy</b>. 
        When the deep copy is editted, the updates are kept local to the callee and does not propogate to the original data used by 
        the caller. </p>

      <p> With addresses however, instead of copying the whole element, we merely send a copy of the address to the callee. The callee 
        can then read memory at the given address to access the element itself, proving efficient for large elements. When elements 
        are passed to a function by its address, then we say the variable is <b>passed-by-reference</b> and the "copy" created is known 
        as a <b>shallow copy</b>. When a shallow copy is editted, the updates are made directly to the original element in the caller's 
        scope. </p>

      {/* TODO: <Insert example of by val and by copy> */}

      <p> Addresses are also useful when using a linear collection of items that conveniently fit in subsequent blocks of memory, known 
        as an array. The array as a whole is addressed by its first element. The other elements are then easily accessible by using its 
        index (the distance of the element from the first). Specifically, to access an element, we perform pointer arithmetic and add 
        the index to the first element's address to get the specified element's address. </p>

      <p> As addresses are merely integers, we can easily perform arithmetics on addresses. We can subtract addresses to find the 
        distance between them, the result of which is an integer. We can then add integers to addresses to obtain another address at 
        a position relative to the former. </p>

      {/* TODO: <Insert example> */}
      
      <div className={styles.subsection}>
        <h5>Address Data Types</h5>

        <div className={styles.subsection}>
          <h5>Addess - Raw Integer</h5>
          <p> In some, addresses are stored as raw integers and used directly as raw integer types. Most high level programming 
            languages today do not use this system, though it goes without saying that in assembly languages, addresses are loaded 
            into registers in the same way one would with an integer type. </p>

          <p> This representation of addresses have the benefit of simplicity as there are less types to worry about, but comes with 
            the ambiguity of what a variable represents. This exposes the program to risk of accidentally referencing an invalid 
            address. When a program attempts to access an address it doesnt have permissions to access, the system throws an error and 
            the program fails in a segmentation fault (segfault). </p>

          <p> This representation is convenient for very low level language which already lack a type system and works of generalized 
            registers, bytes, or words, and already rely on the developer to ensure that data is used properly with the correct 
            operations. </p>
        </div>
        
        <div className={styles.subsection}>
          <h5>Pointers - Low Level Abstraction</h5>
          <p> As storing addresses in the same data type as integers is extremely risky and not a readable way of coding, we now 
            discuss the simplest address data type that is a low level abstraction &mdash; the pointer. </p>

          <p> Pointers are still stored as integer address values, but take on its own data type. In being its own data type, we may 
            now limit address operations to pointers exclusively, and may reinterpret certain operations with respect to pointers. </p>

          <p> For example, in C & C++, you may only dereference a pointer &mdash; attempting to do so on variable declared as an integer 
            will throw a compile time error. This provides a degree of type safety compared to raw address types. Furthermore, the 
            addition operation on pointers is interpretted by the compiler as pointer arithmetic rather than integer arithmetic, the 
            difference of which lies in the size of the pointer's type. </p>

          <p> Pretend we have two integers next to each other, and the integers are 4 bytes in size. The address of the first integer 
            is 0x80. If we want to access the integer after it, we will need to access address 0x84. Note that, this address is one 
            element away, but 4 bytes away in integer value. To get to the second integer using arithmetics, in the case of raw integer 
            arithmetic, we would have to perform the following: </p>

          <p style={{textAlign: 'center'}} className={styles.code}> Start Address + SizeOf(Element) * Index </p>

          <p> However, for pointer arithmetic, we merely do the following: </p> 

          <p style={{textAlign: 'center'}} className={styles.code}> Start Pointer + Index </p>

          <p> The compiler understands that addition operations on pointers implies pointer arithmetic, where we want to reach a 
            certain element a given index away from the former pointer. Thus, adding an integer to a pointer is automatically converted 
            by the compiler into the first equation. </p>

          {/* TODO */}
        </div>
        
        <div className={styles.subsection}>
          <h5>References - High Level Abstraction</h5>
          <p> Aa </p>
          {/* TODO */}
        </div>
      </div>
    </div>
  </div>);
}