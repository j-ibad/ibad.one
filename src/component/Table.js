import styles from '@/css/components/Table.module.css'

export default function Table(props) {
	return ( <table className={`${styles.truthTable} ${styles['ib-table']}`} style={props.style || {}}>
		{props.cols && <colgroup>
			{props.cols.map((e, i)=>{
				return (<col key={i} span={e.span || 1} className={e.header ? styles.rowHeader : ''} />);
			})}
		</colgroup>}

		{props.header && <thead>
			{props.header.map((row,i)=>{
				return (<tr key={'row' + i}>
					{row.map((e,i)=>{
						return (<th key={'cell'+i}>{e || ''}</th>);
					})}
				</tr>);
			})}
		</thead>}

		{props.body && <tbody>
			{props.body.map((row,i)=>{
				return (<tr key={'row' + i}>
					{row.map((e,i)=>{
						return (<td key={'cell'+i}>{e || ''}</td>);
					})}
				</tr>);
			})}
		</tbody>}
</table>);
}