import React,{useRef,useState,useEffect} from 'react'
import img from "../../assets/img/sneaker-add-product.png"

export default function OnSaleItem({name,price,tarih}) {

    const priceText = useRef()
    const priceText2 = useRef()
    const inputx = useRef()
    const inputy = useRef()
    const [confirmPopup,setConfirmPopup] = useState(false);
    const [mode,setMode] = useState(0)
    const [newPrice,setNewPrice] = useState(price)


    function textToInput(e){
        if(mode == 0){
            setMode(1);
        }else{
            if(newPrice == 0 || newPrice == undefined || newPrice == null){
                alert("Please do not leave blank")
            }else{
                setConfirmPopup(true);
            }
        }
    }
    
    function removeOrCancel(e){
        if(mode == 0){
            
        }else{
            // İptal modu
            setMode(0)
        }
    }

    return (
        <div className="on-sale-item">
            <img src={img} alt="" />
            <div className="about ps-2">
                <div className="urun-adi">{name}</div>
                <div className="added-date">Added On {tarih}</div>
                <div className="mobile-fer-fiyat" ref={priceText}>{mode == 0 ? price + " TL" : <input placeholder="New price" type="number" value={newPrice} onChange={e=>{setNewPrice(e.target.value)}}  />}</div>
            </div>

            <div className="fiyat " ref={priceText2}> {mode == 0 ? price +" TL" : <input placeholder="New price" type="number" value={newPrice} onChange={e=>{setNewPrice(e.target.value)}} />}   </div>
            <div className="edit otuzbir" onClick={textToInput}>{mode == 0 ? "Edit" : "Confirm"}</div>
            <div className="remove otuzbir" onClick={removeOrCancel}>{mode == 0 ? "Remove" : "Cancel"}</div>
            <div className="mobile-fer">
            <div className="otuzbir" onClick={textToInput}>Edit</div>
            <div className="otuzbir" onClick={removeOrCancel}>{mode == 0 ? "Remove" : "Cancel"}</div>
          
            </div>

            {confirmPopup ? <div className="confirm-popup">
                <div className="confirm-popup__container">
                    <h4>Confirmation</h4>
                    <p>The price of the product named {name} will be updated as {newPrice} TL</p>
                    <div className="d-flex justify-content-center mt-4">
                        <button onClick={()=>{
                            console.log("ONAYLANDI")
                            setConfirmPopup(false);
                        }}>Confirm</button>
                        <button onClick={()=>{
                            setConfirmPopup(false);
                        }}>Back</button>
                    </div>
                </div>
            </div> : ""}

        </div>
    )
}
