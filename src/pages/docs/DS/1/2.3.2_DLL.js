import styles from '@/css/DocsTemplate.module.css';
import CodeSnippet, {Code} from '@/component/CodeSnippet';

export default function DLL(props){
  return (<div className={styles.docsTemplate}>
    <div className={styles.title}>
      <h3>{props.ctr} Aa</h3>
    </div>

    <div>
      <p> Aa </p>

      <p> Aa </p>
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