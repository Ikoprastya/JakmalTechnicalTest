import React from 'react';
import '../index.css';

import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import { payBankTransfer, payEwallet, payVirtualAccount, selectCourier, selectGoSend, selectJne } from '../validation/validationPayment';



const Payment = () => {

        

        const nav = useNavigate();

        const handleSubmit = (e) => {
            var x = document.getElementById("gosend-check");
            var y = document.getElementById("jne-check");
            var z = document.getElementById("courirer-check");

            var a = document.getElementById("ewallet-check");
            var b = document.getElementById("banktrans-check");
            var c = document.getElementById("viraccount-check");

            console.log("test")
            e.preventDefault();
            
            if ((x.style.visibility === "visible" || y.style.visibility === "visible" || z.style.visibility === "visible") &&
                (a.style.visibility === "visible" || b.style.visibility === "visible" || c.style.visibility === "visible"))  {
                    console.log("test2")
                    return nav('/finish');

                
              
            }
     

        }



        return (
            <>
                  <div className="container">
                    <div className='button-back'>
                        <Link to='/' className='link-back'>
                            <BiArrowBack className='back-icon' /> 
                            <label className='back-text'>Back to delivery</label>
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="content-out">
                                <div className="left-bar">
                                    <div className="head-content">
                                        <h1>Shipment 
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </h1>
                                    </div>
                                    <div className="payment">
                                            <div className="content">
                                                <div className='box-content' id='box-content-gosend' onClick={() => selectGoSend()}>
                                                    <div className='box-content-child'>
                                                        <label for="go-send" >GO-SEND</label>
                                                        <input type="text" name="go-send" value={15000} id='content-gosend' readOnly />
                                                    </div>
                                                    <div>
                                                        <BsCheckLg className='check-icon' id='gosend-check'/> 
                                                    </div>
                                                </div>

                                                <div className='box-content' id='box-content-jne' onClick={() => selectJne()}>
                                                    <div className='box-content-child' >
                                                        <label for="jne" >JNE</label>
                                                        <input type="text" name="jne" value={9000} id='content-jne' readOnly />
                                                    </div>
                                                    <div>
                                                        <BsCheckLg className='check-icon' id='jne-check'/> 
                                                    </div>
                                                </div>  

                                                 <div className='box-content' id='box-content-courier' onClick={() => selectCourier()}>
                                                    <div className='box-content-child' >
                                                        <label for="personal-courier" >Personal Courier</label>
                                                        <input type="text" name="personal-courier"  value={29000} id='content-courier' readOnly />
                                                    </div>
                                                    <div>
                                                        <BsCheckLg className='check-icon' id='courirer-check' /> 
                                                    </div>
                                                </div>                                      
                                            </div>
                                    </div>
                                    <div className="head-content">
                                        <h1>Payment 
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </h1>
                                    </div>
                                    <div className="payment">
                                            <div className="content">
                                                <div className='box-content first-box-pay' id='box-content-ewallet' onClick={() => payEwallet()}>
                                                    <div className='box-content-child'>
                                                        <label for="e-wallet" >e-wallet</label>
                                                        <div className='e-wallet-left'>
                                                            <input type="text" name="e-wallet" value={15000000} id='content-ewallet' readOnly />
                                                            <label for="e-wallet" id='content-ewallets'>left</label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <BsCheckLg className='check-icon' id='ewallet-check'/> 
                                                    </div>
                                                </div>

                                                <div className='box-content' id='box-content-banktrans' onClick={() => payBankTransfer()}>
                                                    <div className='box-content-child seccond-box-pay'>
                                                        <input className='bank-vir' type="text" name="text"  value={"Bank Transfer"} id='content-banktrans' readOnly/>                                          
                                                    </div>
                                                    <div>
                                                        <BsCheckLg className='check-icon' id='banktrans-check'/> 
                                                    </div>      
                                                </div>   

                                                <div className='box-content thrid-box-pay' id='box-content-viraccount' onClick={() => payVirtualAccount()}>
                                                    <div className='box-content-child'>
                                                        <input className='bank-vir' type="text" name="text" value={"Virtual Account"} id='content-viraccount' readOnly/>
                                                    </div>
                                                    <div >
                                                        <BsCheckLg className='check-icon' id='viraccount-check'/> 
                                                    </div>
                                                    
                                                    
                                                    
                                                </div>                                   
                                            </div>
                                            

                                    </div>
                
                                </div>
                                <div className="right-bar">
                                    <div className="item-purchased">
                                        <h2>Summary</h2>
                                        <div className="item-purchased">
                                            <p>10 items purchased</p>
                                            <div>
                                                <hr/>   
                                                <label>Delivery estimation</label>
                                                <div className='dev-name'>
                                                    
                                                    <span id='shipment-detail'></span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="item-price">
                                        <div className="bil-item">
                                            <label>Coost of goods</label>
                                            <span>500.000</span>
                                        </div>
                                        <div className="bil-item">
                                            <label>Dropshipping Fee</label>
                                            <span>5900</span>
                                        </div>
                                        <div className="bil-item">
                                            <div>
                                                <strong id='shipment-check'></strong>
                                                <label>shipment</label>
                                            </div>
                                            <span id='shipment-price'></span>
                                        </div>
                                    </div>
                                    <div className="bil-item">
                                        <h2>Total</h2>
                                        <h2>505.900</h2>
                                    </div>
                                <input type="submit" value="Payment" id='submit'/>
                                </div>
                        </div>
                    </form>
                </div>
            </>
        )
    
}

export default Payment;