import React from 'react'
import Disabled from "../../assets/svg/disabled.svg";

function InputLabel({label,type="text",opt="yes",ney,className,options,dis,value}) {
    return (
        <div className={className ? className : "col-12 col-md-6"} style={{position:"relative"}}>
             <label className="fena-label">{label}{opt == "yes" ? <span>*</span>:<></> }</label>
             {ney == "select" ?
             <select className="fena-select">
                 {!options ? "" : options.map(val=>{
                     return(
                        <option value={val}>{val}</option>
                     )
                 })}
             </select>
             :
             <div>
            {dis ?              <img src={Disabled} className="fena-disabled"/>
 : <></>}
             <input value={value} disabled={dis} className="fena-input" type={type} placeholder={"Enter your "+label.toLowerCase()+"..."} />
             </div>

}
        </div>
    )
}

export default InputLabel
