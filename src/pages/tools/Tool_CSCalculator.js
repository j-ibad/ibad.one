import React from 'react';

import styles from '@/css/pages/tools/Tool_CSCalculator.module.css'


export default class Tool_CSCalculator extends React.Component {
	constructor(props){
		super(props);
    this.state = {}
  }

  componentDidMount(){
    const katexScript = document.createElement('script');
    katexScript.defer = true;
    katexScript.async = true;
    katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.js';
    katexScript.integrity = 'sha384-YFVvRUwgqxkAVN9bmAVLsKilmOKfQLyUx0ZlmDNs0aBUTsvMLnRxE3Km0NrZa0i9';
    katexScript.crossOrigin = 'anonymous';
    document.getElementById('mainScript').appendChild(katexScript);

    const script = document.createElement('script');
    script.type = 'module';
    script.async = true;
    script.src = '/js/tools/cs_calculator/main.js';
    document.getElementById('mainScript').appendChild(script);
  }

  render(){
    return (<div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.css" integrity="sha384-qCEsSYDSH0x5I45nNW4oXemORUZnYFtPy/FqB/OjqxabTMW5HVaaH9USK4fN3goV" crossOrigin="anonymous" />

      <div className="ib-header ib-dense no-animate">
        <h1>CS Calculator</h1>
      </div>

      <div className={`ib-body ib-dense ${styles['ib-dense']}`}>
        <div className={`ib-card ${styles['ib-card']}`}>
          <h3>Output:</h3><br/>
          <h4 id="results" className={styles.results} style={{fontSize: '24pt'}}><span>&nbsp;</span></h4>
        </div>
        <div className={`ib-card ${styles['ib-card']}`}>
          <h3>Inputs:</h3><br/>
          <h4 id="latexInput" className={styles.latexInput}>&nbsp;</h4>
          <input type="text" id="user_input" className={styles.user_input} autoFocus 
            placeholder="Input expression here.... Ex: 1 + 0xff - 0o77  * 0b1010"/>
          <div className={`button-grid ${styles['button-grid']}`}>
            <h4>Input flags:</h4>
            <button id="btnInNorm" className={`active ${styles.active}`}>Normal</button>
            <button id="btnInIEEE754_32">IEEE 754 32-Bit</button>
            <button id="btnInIEEE754_64">IEEE 754 64-Bit</button>
          </div>
          
          <div className={`button-grid ${styles['button-grid']}`}>
            <h4>Output flags:</h4>
            <button id="btnOutDec" className={`active ${styles.active}`}>Decimal</button>
            <button id="btnOutBin">Binary</button>
            <button id="btnOutHex">Hexadecimal</button>
            <button id="btnOutCustom">
              Base <input type="text" id="out_custom_base" className={styles.out_custom_base}/>
            </button>
          </div>
          
          <div className={`button-grid ${styles['button-grid']}`} id="specialOutOps" style={{display: 'none'}}>
            <h4>Special flags:</h4>
            <button id="btnOutNorm" className={`active ${styles.active}`}>Normal</button>
            <button id="btnOutIEEE754_32">IEEE 754 32-Bit</button>
            <button id="btnOutIEEE754_64">IEEE 754 64-Bit</button>
          </div>
        </div>

        <div className={`ib-card ${styles['ib-card']}`}>
          <h3>Usage:</h3>
          <p>Type out an expression in the text field located in the Inputs 
          section.</p>
          <div>
            <h4>Inputs</h4>
            <ul>
              <li>For hexadecimal, prefix the number with "0x".</li>
              <li>For binary, prefix the number with "0b".</li>
              <li>For octal, prefix the number with "0o"</li>
            </ul>
            <p> Click on the respective toggle buttons to specify how inputs and
            outputs should be interpretted by the calculator. </p>
          </div>
          <div>
            <h4>Operators</h4>
            <ul>
              <li>Use the operators +, -, (* or ×), and (/ or ÷) for addition, subtraction, multiplication, and division, respectively.</li>
              <li>Use ** for exponentiation, and % for modulus.</li>
              <li>Use the operators &, |, and ^ for logic bitwise AND, OR, and XOR, respectively.</li>
            </ul>
          </div>
          <div>
            <h4>Functionality</h4>
            <ul>
              <li><i>History Navigation</i> - Press Enter to record a formula. Use the up and down arrows to navigate through your history.</li>
              <li><i>History Variable</i> - Use $res to retrieve the immediate previous result. To retrieve historical results, use the system variable $resX, where X is the index of the result in history (index starts with 1). I.e. for the first result, use $res1. </li>
              <li><i>Memory</i> - Assign variables using the syntax $&lt;var&gt;=&lt;expr&gt;. Ex: $x=1+2. Press enter to save the assignment. To retrieve the saved values in memory, simply use $&lt;var&gt;. Ex: 1+$x.</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="mainScript"></div>
    </div>
    );
  }
}