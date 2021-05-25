import React from 'react'

function InputLabel({label,type="text",opt="yes",ney,className,options}) {
    return (
        <div className={className ? className : "col-12 col-md-6"}>
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
             <input className="fena-input" type={type} placeholder={"Enter your "+label.toLowerCase()+"..."} />


}
        </div>
    )
}

export default InputLabel
