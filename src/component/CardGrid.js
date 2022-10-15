import {Link} from "react-router-dom";

import DomHelper from '@/util/domHelper';
import styles from '@/css/components/CardGrid.module.css'


export function Card(props){
  return (<div className={styles.gridEntry}>
    <div>
      {props.title && (<h4 className={styles.entryTitle}>{props.title}</h4>)}
      {props.desc && (<p className={styles.entryDesc}>{props.desc}</p>)}
    </div>
    <div className={styles.entryButtons}>
      {props.link && (<a className={styles.entryLink} href={props.link}>{props.linkLabel || 'Visit here'}</a>)}
      {props.route && (<Link className={styles.entryLink} to={props.route} onClick={DomHelper.scrollToTop}>{props.linkLabel || 'Visit here'}</Link>)}
      {props.writeupLink && (<a className={styles.entryWriteup} href={props.writeupLink}>{props.writupLinkLabel || 'Write-up'}</a>)}
      {props.writeupRoute && (<Link className={styles.entryWriteup} to={props.writeupRoute} onClick={DomHelper.scrollToTop}>{props.writupLinkLabel || 'Write-up'}</Link>)}
    </div>
  </div>);
}

export default function CardGrid(props) {
  return (<div className={`${styles.ibCardGrid} ${props.className}`}>
    {props.children}
  </div>);
}