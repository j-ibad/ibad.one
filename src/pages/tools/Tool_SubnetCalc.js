import React from 'react';
import InputMask from 'react-input-mask';

import styles from '@/pages/tools/Tool_SubnetCalc.module.css'

const MASKS = {
  DDN: "999.999.999.999",
  BIN: "11111111.11111111.11111111.11111111",
  HEX: "FF.FF.FF.FF"
};
const FORMAT_CHARS = {
  '1': '[0-1]',
  'F': '[A-Fa-f0-9]'
};

export default class Tool_SubnetCalc extends React.Component{
  constructor(props){
    super(props);
    this.state = {base: 10, input: "0.0.0.0", ip: "", baseMask: 10, inputMask: '', mask: '', borrowedBits: 0}
  }

  componentDidMount(){
    this.handleChangeIP({target: {value: '000.000.000.000'}});
    this.handleChangeMask({target: {value: '000.000.000.000'}});
  }

  toIP(val, base=10){
    let newIP = val.split('.').map((s)=>parseInt(s.replace(/_/g, '0'), base)).filter((e)=>!isNaN(e));
    newIP = newIP.join('.');
    if(val.endsWith('.')){newIP += '.';}
    return newIP;
  }
  fromIP(val, base=10){
    let padding = (base == 10) ? 3 : ((base == 2) ? 8 : 2);
    let newIP = val.split('.').map((s)=>parseInt(s).toString(base).toUpperCase().padStart(padding, '0')).filter((e)=>e != 'NAN');
    newIP = newIP.join('.');
    if(val.endsWith('.')){newIP += '.';}
    return newIP;
  }

  handleChangeIP(event, base=10){
    let val = event.target.value;
    let newIP = this.toIP(val, base);
    this.setState({input: val, ip: newIP, base});
  }
  ip(base=10){
    if(base == this.state.base){ return this.state.input; }
    let val = this.state.ip;
    return this.fromIP(val, base);
  }

  fromCIDR(val, base=10){
    val = parseInt(val.replace(/_/g, ''));
    let mask = [];
    let padding = (base==10) ? 3 : ((base==2) ? 8 : 2);
    while(val > 0){
        let blockVal = 0;
        for(let i=128; i>0 && val >0; i>>=1, val--){
            blockVal += i;
        }
        mask.push(blockVal.toString(base))
    }
    while(mask.length < 4) mask.push('0')
    return mask.map((s)=>s.padStart(padding, '0')).join('.');
  }
  toCIDR(val){
    let mask = val.split('.').map((e)=>parseInt(e));
    let bitmask = Math.pow(2,mask.length*8-1);
    mask = mask.reduce((l,r)=>l*256+r);
    let cidr = 0;
    while(mask & bitmask){
        cidr++;
        bitmask >>>= 1;
    }
    return cidr || '';
  }

  handleChangeMask(event, base=10){
    let val = event.target.value;
    if(base == 0){
      let newMask = this.fromCIDR(val);
      this.setState({inputMask: newMask, mask: newMask, baseMask: 10});
    }else{
      let newMask = this.toIP(val, base);
      this.setState({inputMask: val, mask: newMask, baseMask: base});
    }
  }
  mask(base=10){
    if(base == 0) return this.toCIDR(this.state.inputMask, this.state.baseMask);
    if(base == this.state.baseMask){ return this.state.inputMask; }
    let val = this.state.mask;
    return this.fromIP(val, base);
  }
  

  getData(){
    let ipDDN = (this.ip(10) || '').replace(/_/g, '').replace(/\.+/g, '.');
    let ip = ipDDN.split('.').map((s)=>parseInt(s.replace(/_/g, '0'))).filter((e)=>!isNaN(e));
    while(ip.length<4) ip.push(0);
    ipDDN = ip.join('.');
    let cidr = this.mask(0) || 0;
    let maskDDN = this.fromCIDR(`${cidr}`);
    let mask = maskDDN.split('.').map((s)=>parseInt(s.replace(/_/g, '0'))).filter((e)=>!isNaN(e));
    while(mask.length<4) mask.push(0);
    maskDDN = mask.join('.');
    return [ipDDN, ip, cidr, maskDDN, mask];
  }

  calcSubnet(ip, mask, cidr){
    let networkID = ip.map((e,i)=>e & mask[i]);
    let hostID = ip.map((e,i)=>e & (255-mask[i]));
    let specAddr = 'N/A';
    let specDetail = '';

    if(ip[0] === 10){
      specAddr = 'Private / Class A';
      specDetail = 'Class A: 10.0.0.0/8 (10.0.0.0 - 10.255.255.255)'
    }else if(ip[0] === 172 && ip[1] >=16 && ip[1]<=31){
      specAddr = 'Private / Class B';
      specDetail = 'Class B: 172.16.0.0/12 (172.16.0.0 - 172.31.255.255)'
    }else if(ip[0] === 192 && ip[1] === 168){
      specAddr = 'Private / Class C';
      specDetail = 'Class C: 192.168.0.0/16 (192.168.0.0 - 192.168.255.255)'
    }else if(ip[0] === 127){
      specAddr = 'Loopback';
      specDetail = 'Localhost: 127.0.0.0/8 (127.0.0.0 - 127.255.255.255)'
    }else if(ip[0] === 169 && ip[1] === 254){
      specAddr = 'APIPA';
      specDetail = 'Automatic Privae IP Addressing (APIPA): 169.254.0.0/16 (169.254.0.0 - 169.254.255.255). Used when DHCP not available.'
    }

    let blockSize = Math.pow(2, 32-cidr);
    let availableHosts = blockSize-2;

    let firstHost = [...networkID];
    firstHost[3]++;
    firstHost = firstHost.join('.');

    let lastHost = networkID.reduce((l,r)=>l*256+r);
    let i = 32-cidr, mult = 1;
    while(i>0){
      lastHost += mult;
      mult <<= 1; i--;
    }
    lastHost--;
    let lastHostArr = [];
    for(i=0; i<4; i++){
      lastHostArr.push(lastHost % 256);
      lastHost = Math.floor(lastHost/256);
    }
    lastHost = lastHostArr.reverse().join('.');

    return [networkID, hostID, specAddr, specDetail, blockSize, availableHosts, firstHost, lastHost];
  }


  render(){
    let ipDDN, ip, cidr, maskDDN, mask;
    [ipDDN, ip, cidr, maskDDN, mask] = this.getData();

    let networkID, hostID, specAddr, specDetail, blockSize, availableHosts, firstHost, lastHost;
    [networkID, hostID, specAddr, specDetail, blockSize, availableHosts, firstHost, lastHost] = this.calcSubnet(ip, mask, cidr);

    return (<div className={styles.page}>
      <div className="ib-header ib-dense no-animate">
        <h1>Subnet Calculator</h1>
      </div>

      <div className="ib-body ib-dense">
        <div className="ib-card" style={{display: 'flex', justifyContent: 'center'}}>
          <div className={styles.sectionDiv}>
            <div className={styles.ipInputs}>
              <h4>IP:</h4>
              <label>DDN:</label>
              <InputMask value={this.ip()} onChange={(e)=>{this.handleChangeIP(e, 10)}} mask={MASKS.DDN}/><br/>
              <label>Bin:</label>
              <InputMask value={this.ip(2)} onChange={(e)=>{this.handleChangeIP(e, 2)}}  mask={MASKS.BIN} formatChars={FORMAT_CHARS}/><br/>
              <label>Hex:</label>
              <InputMask value={this.ip(16)} onChange={(e)=>{this.handleChangeIP(e, 16)}}  mask={MASKS.HEX} formatChars={FORMAT_CHARS}/><br/>
            </div>

            <div className={`${styles.maskInputs} ${styles.cidrInput}`}>
              <h4>Mask:</h4>
              <label>CIDR: </label> 
              <InputMask value={this.mask(0)} onChange={(e)=>{this.handleChangeMask(e, 0)}} mask="99" style={{width: '2.5em'}}/><br/>
            </div>

            <div className={styles.maskInputs}>
              <h4 style={{textDecoration: 'none'}}>&nbsp;</h4>
              <label>DDN:</label>
              <InputMask value={this.mask()} onChange={(e)=>{this.handleChangeMask(e, 10)}} mask={MASKS.DDN}/><br/>
              <label>Bin:</label>
              <InputMask value={this.mask(2)} onChange={(e)=>{this.handleChangeMask(e, 2)}}  mask={MASKS.BIN} formatChars={FORMAT_CHARS}/><br/>
              <label>Hex:</label>
              <InputMask value={this.mask(16)} onChange={(e)=>{this.handleChangeMask(e, 16)}}  mask={MASKS.HEX} formatChars={FORMAT_CHARS}/><br/>
            </div>
          </div>
        </div>

        <div className="ib-card" style={{display: 'flex', justifyContent: 'center'}}>
          <div className={styles.sectionDiv}>
            <table>
              <tbody>
                <tr>
                  <td>DDN:</td>
                  <td>{ipDDN}{(cidr) ? `/${cidr}` : ''}</td>
                </tr>
                <tr>
                  <td>Mask:</td>
                  <td>{mask.join('.')}</td>
                </tr>
                <tr>
                  <td>Network ID:</td>
                  <td>{networkID.join('.')}</td>
                </tr>
                <tr>
                  <td>Host ID:</td>
                  <td>{hostID.join('.')}</td>
                </tr>
                <tr>
                  <td>Special:</td>
                  <td title={specDetail || ''}  style={(specDetail) ? {cursor: 'help'} : null}>{specAddr || 'N/A'}</td>
                </tr>
              </tbody>
            </table>

            {(cidr) && <table>
              <tbody>
                <tr>
                  <td>Subnet:</td>
                  <td>{networkID.join('.')}/{cidr}</td>
                </tr>
                <tr>
                  <td>Block Size:</td>
                  <td>{blockSize}</td>
                </tr>
                <tr>
                  <td title="2 Addresses are non assignable: The network address, where all host bits are set to 0, and the direct broadcast address, where all host bits are set to 1" style={{cursor: 'help'}}>
                    Available Hosts:
                  </td>
                  <td>{availableHosts}</td>
                </tr>
                <tr>
                  <td>First Host:</td>
                  <td>{firstHost}</td>
                </tr>
                <tr>
                  <td>Last Host:</td>
                  <td>{lastHost}</td>
                </tr>
              </tbody>
            </table> || ''}
          </div>
        </div>
      </div>
    </div>
    );
  }
}