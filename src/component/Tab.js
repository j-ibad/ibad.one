import React from 'react';

import styles from '@/css/components/Tab.module.css'


export function TabSection(props){
	return (<div className={styles.tabSection}>
		{props.header && (<h4 className={styles.secHeader}>{props.header}</h4>)}
		{props.right && (<h5 className={styles.secRight}>{props.right}</h5>)}
		{props.subheader && [].concat(props.subheader).map((e,i)=>{
			return (<h5 className={styles.secSubheader} key={i}>{e}</h5>)
		})}
		{props.children}
	</div>);
}


export function TabContent(props){
	return (<div> {props.children} </div>);
}


export default class Tab extends React.Component {
	constructor(props){
		super(props);
		this.state = { content: [].concat(this.props.children) || [], active: this.props.active || 0 };
	}
	
	tabClickHandler(i){
		this.setState((prev)=>({active: i})).then(()=>{
			this.props.onClick && this.props.onClick(i);
		});
	}
	
	render(){
		let tabContainerClass = `${styles.ibTabContainer} ${styles[this.props.ver ? 'ibTabContainerVer' : 'ibTabContainerHor'] || ''}`;

		let tabBarClass = `ib-tabs ${(this.props.ver ? 'ib-tabs-ver' : 'ib-tabs-hor')} ${this.props.className || ''} `;
		tabBarClass += (this.props.solid) ? 'ib-solid' : 'ib-light';

		return ( <div style={this.props.style} className={tabContainerClass}>
			<div className={tabBarClass} style={{flexDirection: 'column'}}>
				{!this.props.noTab && <ul className={this.props.tabHeaderClass || ''}>{this.state.content.map((elem, i)=>{
					let tabClass = `${this.props.tabClass || ''} ${(i === this.state.active) ? (this.props.activeClass || `active ${styles.active}`) : ''}`;
					return ( <li key={i} onClick={()=>{this.tabClickHandler(i)}}>
						<button className={tabClass}>{elem.props.label}</button> 
					</li> );
				})}</ul>}
			</div>
			
			<div className={(this.props.noPadPane) ? '' : styles.ibTabPane}>
				{this.state.content[ this.state.active ]}
			</div>
		</div>);
	}
}