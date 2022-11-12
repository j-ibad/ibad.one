import styles from '@/css/components/TagList.module.css'


export function Tag(props){
  return (<li> {props.label} </li>)
}

export default function TagList(props) {
  return(<div>
    {props.header && (<h4 className={styles.ibTagListHeader}>{props.header}</h4>)}
    <ul className={styles.ibTagList}>
    {(props.tags) ? [].concat(props.tags).map((e,i)=>{
      return <Tag key={i} label={e} />
    })
      : (props.children || '')}
    </ul>
  </div>);
}