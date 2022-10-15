import styles from '@/css/DocsTemplate.module.css';
import CodeSnippet, {Code} from '@/component/CodeSnippet';

export default function Introduction(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Introduction</h3>
    </div>

    <div>
      <p> Data structures are constructs that maintain a collection of entities in a way that is optimal for a given task. Using
        data structures, some algorithms are merely reduced to properly using the data structure's functions in a way that fits 
        the problem domain. Data structures are present in every non-trivial program. In fact, it can be argued that any program
        that runs on a modern computer using a modern OS will use a data structure &mdash; memory is essentially a massive array
        of bytes, with a stack section that uses push and pop operations. Dynamic memory is managed using a linked list in which
        allocated blocks are tracked by headers pointing to each other. File systems use a tree representation. Verily, data
        structures are used to support everyday computation, as well as facilitate the creation of coomplex applications.</p>

      <p> Throughout this series, we will be focusing on designing &amp; implementing data structures, as well as analyzing the
        use cases in which these data structure are best fit in. In essence, we will essentially be discussing how to best arrange
        data used by programs. To properly do so, we must first discuss how data is stored and used by a program in general. We 
        will then discuss the basic types of data arranged in memory, followed by more complex data types that fit abstractions of 
        the problem domain. Only when we have understood these concepts can we begin to discuss how we want to arrange a collection 
        of data in a way best suited for our needs, whether it be for frequent modifications, fast access of minimum and maximum 
        values, retaining order, etc. </p>
    </div>
    
    <div>
      <h4>{props.ctr}0.1. How is data stored? </h4>
      <p> All data is stored by the computer in binary format. Each digit of 1 or 0 is known as a bit, and these bits are arranged 
        into an addressable group of 8 bits known as a byte. </p>
        
      <p> The data that is immediately usable by a program or process is stored in primary memory, often called RAM. Primary memory 
        is essentially a large array of bytes, indexed by the memory address (we'll get to arrays and addresses later). Once data is 
        to be used by the program in some operation, it is then copied over from primary memory to registers (and often enough caches 
        in between). Once data is ready to be kept in persistence, it is stored in secondary storage in disks. </p>

      <p> Being stored as a series of 1s and 0s, data in the computer undergo a simple subset of operations defined by boolean 
        algebra. In the next section, when we discuss atomic data types, specifically, integer data types, we will be discussing 
        the logical operations performed on binary data, as well as how boolean logical operators can be used in conjunction to 
        form more complicated operations such as the arithmetic operations that is commonplace in program written in high level 
        languages.
      </p>
    </div>
    
    <div>
      <h4>{props.ctr}0.2. The Binary and Hexadecimal Number Systems </h4>
      <p> When we think of numbers, we often think of decimal numbers &mdash; numbers with the base of 10, in which each digit 
        can be any value between 0 and 9, and where each digit from the least significant digit signifies a power of 10. That is,
        the rightmost digit (the ones digit) has a weight of 10<sup>0</sup> = 1, the second rightmost digit (the tens digit) has 
        a weight of 10<sup>1</sup> = 10, the third rightmost digit (the hundreds digit) has a weight of 10<sup>2</sup> = 100, 
        etc. </p>

      <div className={styles.subsection}>
        <h5>{props.ctr}0.2.1. The Binary Number System</h5>
        
        <div>
          <h5>Calculating the decimal value of binary numbers</h5> 
          <p> Digital systems however can not represent numbers directly in decimal formats. This is because in a digital system, all
            data is arranged as a series of bits that are either on or off. Bits that are on have a value of 1, and those that are off
            have a value of 0. As each digit in this system falls under than range between 0 and 1 inclusive, this number system uses
            base 2, also known as the binary number system. Being base 2, each digit then also uses weights that are powers of 2. 
            The rightmost digit has a weight of 2<sup>0</sup> = 1, the second rightmost digit has a weight of 2<sup>1</sup> = 2, the 
            third rightmost digit has a weight of 2<sup>2</sup> = 4, etc.</p>

          <p> Note, that Throughout the series, we will prefix binary numbers with "0b". We follow this notation because it is used for 
            defining binary literals in code. Another common notation is to use a subscript of the base (2 for binary), i.e.  
            0101<sub>2</sub>). Another way is to postfix the number with b, i.e. 0101b </p>

          <p> Take for example the following binary number: <span className={styles.center}> 0b0101 </span></p>

          <p> To calculate the decimal value, we iterate through each digit, multiplying the digit's value with
            its weight, as we would decimal numbers or with any base. We then sum up these products to get the decimal value. 
            Specifically, for this example, we would have the following value: 
            <span className={styles.center}>
              1 &times; (2<sup>0</sup>) + 0 &times; (2<sup>1</sup>) + 1 &times; (2<sup>2</sup>) + 0 &times; (2<sup>3</sup>)
            </span> 
            <span className={styles.center}>
              = 1 &times; (1) + 0 &times; (2) + 1 &times; (4) + 0 &times; (8)
            </span> 
            <span className={styles.center}>
              = 1 + 0 + 4 + 0 = <b>5</b>
            </span> 
          </p>

          <div className={styles.subsection}>
            <h5>Pseudocode for calculating the decimal value from binary numbers</h5> 
            <CodeSnippet>
              <Code label="Pseudocode" 
                code={`sum = 0
                  for each ith digit in number:  // i starts at 0 for rightmost digit
                  \\tweight = 2**i  // ** means exponentiation
                  \\t// digit[i] is ith digit from right, where i=0 is rightmost
                  \\tsum += digit[i] * weight
                  return sum`}
              />
            </CodeSnippet>
          </div>
        </div>

        <div>
          <h5>Calculating binary from decimal</h5> 
          <p> To go backwards and calculate the binary number based off the decimal value of a number, we use the inverse
            operation. We start with our decimal number and divide it by 2. The remainder becomes our next rightmost binary
            number. Take for example the number 10. </p>
          <ol>
            <li>We start off with integer 10. We divide by 2 and get 5 remainder 0. This means that the rightmost digit is 0.
              <span className={styles.center}>0b...<b>0</b></span> </li>
            <li>We keep the 5. We then divide it by 2 and get 2 remainder 1. This means that the next rightmost digit is 1.
              <span className={styles.center}>0b..<b>1</b>0</span> </li>
            <li>We keep the 2. We then divide it by 2 and get 1 remainder 0. This means that the next rightmost digit is 0.
              <span className={styles.center}>0b.<b>0</b>10</span> </li>
            <li>We keep the 1. We then divide it by 2 and get 0 remainder 1. This means that the next rightmost digit is 1.
              <span className={styles.center}>0b<b>1</b>010</span> </li>
            <li>We are left with 0 signaling that we may stop. Our final result is <b>0b1010</b>.</li>
          </ol>

          <div className={styles.subsection}>
            <h5>Pseudocode for calculating binary from decimal</h5> 
            <p> From the aforementioned set of steps, we can formulate another algorithm for converting to decimal. </p>
            <CodeSnippet>
              <Code label="Pseudocode" 
                code={`let x = decimal value
                  strBin = ""
                  while x > 0:
                    \\t// Integer division truncates to integer
                    \\t// % means modulus, which obtains remainder
                    \\tx, rem = x/2, x%2
                    \\tstrBin = rem + strBin  // Concatenate rem to left of string strBin
                  return strBin`}
              />
              </CodeSnippet>
          </div>
        </div>
      </div>

      <div className={styles.subsection}>
        <h5>{props.ctr}0.2.2. The Hexadecimal Number System</h5>
        
        <p> As we now see, converting between binary and decimal can be a tedious task to do manually. The association between 
          a binary number and its decimal counterpart is further blurred by the fact that the decimal digit affected by a binary bit
          is not a completely uniform pattern. That is, the 4 rightmost binary bits affect the least significant decimal digit.
          Yet, there is overlap in that the 4th rightmost binary bit can also affect the second least significant decimal digit: </p> 
        <span className={styles.center}>0b<b>1</b>010 = <b>10</b></span>
        <span className={styles.center}>0b<b>0</b>010 = <b>02</b></span>
        <span className={styles.caption}>Note: 1 bit of change in binary causes 2 decimal digits to change
          in the decimal form, making conversions harder and unintuitive.</span>

        <p> Furthermore, as the number of bits increases, the length of the binary string also grows to a point that it becomes
          impractical to read or remember. This is especially true in modern computers which operate on 64 bit addresses. Therefore,
          we need another number system for human readability, that is better than the decimal system at associating with the 
          underlying binary value, while being easier to read and remember than a lengthy binary string. Hence, we use the 
          hexadecimal number system for visualizing bytes. </p>

        <div>
          <h5> Calculating the decimal value of hexadecimal numbers </h5>
          <p> The hexadecimal number system uses a base of 16, which means that each digit has a value in the range between 0 and 15
            inclusive. 0x0-0x9 have the same values as their decimal counterpart 0-9. To represent decimal 10-15 however, we use letters.
            0xA corresponds to 10, 0xB to 11, 0xC to 12, 0xD to 13, 0xE to 14, and 0xF to 15. Furthermore, in hexadecimal. each digit has 
            a weight that is a power of 16. The rightmost digit has a weight of 16<sup>0</sup> = 1, the second rightmost digit has a 
            weight of 16<sup>1</sup> = 16, the third rightmost digit has a weight of 16<sup>2</sup> = 256, and so on. </p>
          
          <p> Note, that throughout this series, we will prefix hexadecimal numbers with "0x". We follow this notation because it is 
            used for defining hexadecimal literals in code. Another common notation is to use a subscript of the base (16 for 
            hexadecimal), i.e.  9A6F<sub>16</sub>. Another way is to postfix the number with 'h' or 'H', i.e. 9A6Fh, however this is
            often confusing due the letter 'h' blending in with hexadecimal letters. </p>
            
          <p> Take for example the following hexadecimal number: <span className={styles.center}> 0x9A6F </span></p>

          <p> To calculate the decimal value, we iterate through each digit, multiplying the digit's value with its weight, then sum 
            up these products to get the decimal value, just as we did earlier with binary digits. Specifically, for this example, we 
            would have the following value: 
            <span className={styles.center}>
              0xF &times; (16<sup>0</sup>) + 0x6 &times; (16<sup>1</sup>) + 0xA &times; (16<sup>2</sup>) + 0x9 &times; (16<sup>3</sup>)
            </span> 
            <span className={styles.center}>
              = 15 &times; (1) + 6 &times; (16) + 10 &times; (256) + 9 &times; (4096)
            </span> 
            <span className={styles.center}>
              = 15 + 96 + 2560 + 36864 = <b>39535</b>
            </span> 
          </p>

          <div className={styles.subsection}>
            <h5>Pseudocode for calculating the decimal value of hexadecimal numbers</h5> 
            <CodeSnippet>
              <Code label="Pseudocode" 
                code={`sum = 0
                  for each ith digit in number:  // i starts at 0 for rightmost digit
                  \\tweight = 16**i  // ** means exponentiation
                  \\t// digit[i] is ith digit from right, where i=0 is rightmost
                  \\tsum += digit[i] * weight
                  return sum`}
              />
            </CodeSnippet>
          </div>
        </div>

        <div>
          <h5>Calculating hexadecimal from decimal</h5> 
          <p> To go backwards and calculate the hexadecimal number based off the decimal value of a number, we use the inverse
            operation just as we did with binary numbers. We start with our decimal number and divide it by 16. The remainder 
            becomes our next rightmost hexadecimal digit. Take for example the number 2652. </p>
          <ol>
            <li>We start off with integer 2652. We divide by 16 and get 165 remainder 12. This means that the rightmost digit
              is 12, or rather 0xC.
              <span className={styles.center}>0x..<b>C</b></span> </li>
            <li>We keep the 165. We then divide it by 16 and get 10 remainder 5. This means that the next rightmost digit is 5.
              <span className={styles.center}>0x.<b>5</b>C</span> </li>
            <li>We keep the 10. We then divide it by 16 and get 0 remainder 10. This means that the next rightmost digit is 10,
              or rather 0xA.
              <span className={styles.center}>0x<b>A</b>5C</span> </li>
            <li>We are left with 0 signaling that we may stop. Our final result is <b>0xAC5</b>.</li>
          </ol>

          <div className={styles.subsection}>
            <h5>Pseudocode for calculating binary from decimal</h5> 
            <p> From the aforementioned set of steps, we can formulate another algorithm for converting to decimal. </p>
            <CodeSnippet>
              <Code label="Pseudocode" 
                code={`let x = decimal value
                  strBin = ""
                  while x > 0:
                    \\t// Integer division truncates to integer
                    \\t// % means modulus, which obtains remainder
                    \\tx, rem = x/16, x%16
                    \\tstrBin = rem + strBin  // Concatenate rem to left of string strBin
                  return strBin`}
              />
              </CodeSnippet>
          </div>
        </div>

        <div> 
          <h5> Hexadecimal to and from Binary </h5> 
          <p> Converting between hexadecimal and binary is even easier than with decimal since there is a more direct
            relationship between their digits. The conversion between hexadecimal and binary is as simple as mapping each
            group of 4 bits (also known as a nibble), to a single hexadecimal digit, or vice versa. This works nicely because
            their bases happens to be a power of the other &mdash; hexadecimal is base 16 which is 2<sup>4</sup>. </p>

          <p> Take for example the earlier example of 0xA5C: </p>
          <ol>
            <li>Separate the hexadecimal digits into their own blocks <span className={styles.center}> 0xA 0x5 0xC</span> </li>
            <li>Map each hexadecimal digit to its binary counterpart, independently
              <span className={styles.center}>0b1010 0b0101 0b1100</span>
            </li>
            <li>Concatenate the binary numbers into one, to obtain the binary form
              <span className={styles.center}><b>0b101001011100</b></span>
            </li>
          </ol>

          <p> To go from binary to hexadecimal, we do the reverse: group up bits into nibbles (groups of 4), convert each nibble
            to its hexadecimal form, then concatenate the digits to form a single hexadecimal digit. </p>
          <ol style={{listStyleType: 'none'}}>
            <li> <span className={styles.center}> 0b1010 0b0101 0b1100 </span> </li>
            <li> <span className={styles.center}> 0xA 0x5 0xC </span> </li>
            <li> <span className={styles.center}><b>0xA5C</b></span> </li>
          </ol>
        </div>
      </div>
    </div>

    <div>
      <br/>
      <p> We now know that a program stores data in memory as a series of bits. The native representation of data in a computer therefore
        is in binary format. However, we know now how to convert between binary, decimal, as well as hexadecimal formats, which will allow
        us to properly interpret and communicate the data stored in memory. With this fundamental knowledge, we can now move forward with
        a discussion of the simplest data structures used by a computer &mdash; atomic data types. </p>
    </div>


  </div>);
}