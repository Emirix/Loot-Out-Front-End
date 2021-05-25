import React,{useEffect} from 'react'

function Canvas() {

    useEffect(()=>{ 
        var ctx = document.querySelector("canvas").getContext("2d");
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(20, 20);
        ctx.lineTo(200, 20);
        ctx.stroke();
    },[])

    return (
        <canvas width="500" height="300"></canvas>
    )
}

export default Canvas
