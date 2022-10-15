// import Tab, {TabContent} from '@/component/Tab';
import Table from "@/component/Table";

export default function UMLClass(props){
  let ulStyle = {
    listStyleType: 'none', 
    paddingLeft: 0,
    marginBlockStart: '0.25em', 
    marginBlockEnd: '0.25em'
  };
  return (<Table style={{}}
    header={[[props.classTitle]]}
    body={[
      [<ul style={ulStyle}>
        {(props.fields || []).map((e, i)=>{
          return (<li key={i}>{e}</li>);
        })}
      </ul>],
      [<ul style={ulStyle}>
        {(props.ops || []).map((e, i)=>{
          return (<li key={i}>{e}</li>);
        })}
      </ul>]
    ]}
  />);
  
  
  
  /*<table style={{textAlign: 'center'}}>
  <thead>
    <tr><th> Vector&lt;T&gt; </th></tr>
  </thead>
  <tbody>
    <tr><td><ul style={{listStyleType: 'none', paddingLeft: 0}}>
      <li>- sz: size_t</li>
      <li>- cap: size_t</li>
      <li>- data: array&lt;T&gt;</li>
    </ul></td></tr>
    <tr><td><ul style={{listStyleType: 'none', paddingLeft: 0}}>
      <li>+ Vector&lt;T&gt;</li>
      <li>+ size(): size_t</li>
      <li>+ at(index: size_t): T</li>
      ...
    </ul></td></tr>
  </tbody>
</table>);*/
}