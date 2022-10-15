import React from "react";

export default function HamburgerIcon(props){
  const newNode = document.createElement('canvas');
  newNode.width = newNode.height = props.sz || 40;
  const ctx = newNode.getContext("2d");
  ctx.fillStyle = props.fill || "#E0E1DD";
  const padding = props.padding || 6;
  const gap = props.gap || 5;
  const barWidth = newNode.width - (padding*2);
  const barHeight = Math.floor((newNode.height - (padding*2)) / 3) - gap;

  for(let y=padding*1.5, i=0; i<3; i++, y+=barHeight+gap){
    ctx.fillRect(padding, y, barWidth, barHeight);
  }

  return (<div className="icon" style={props.style || {}}
    ref={(e) => {e && (e.childNodes.length === 0) && e.appendChild(newNode)}}
    onClick={props.onClick || (()=>{})}
  />);
}