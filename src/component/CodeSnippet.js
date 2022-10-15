import Tab, {TabContent} from '@/component/Tab.js';
import styles from '@/css/components/CodeSnippet.module.css'


export function Code(props){
  return (<TabContent label={props.label}> 
    <table className={styles.Code}>
      <colgroup>
        <col span="1" className={styles.codeLineNo} />
      </colgroup>
      <tbody>
        {props.code.split('\n').map((line, i)=>{
          return (<tr key={i}>
            <td className={`${styles.codeLineNo} unselectable`}>{i+1}</td>
            <td><span className={styles.CodeLine}>{line.trim().replaceAll('\\t', '  ')}</span></td>
          </tr>);
        })}
      </tbody>
    </table> 
  </TabContent>);
}

export default function CodeSnippet(props){
  return (<div className={styles.codeSnippetContainer}>
    <Tab style={{width: '90%', margin: '1em 5%'}}
      className={styles.codeSnippet}
      activeClass={styles.activeLang}
      tabHeaderClass={styles.tabHeader}
      tabClass={styles.tab}
      noPadPane>
      {props.children}
    </Tab>
  </div>);
}