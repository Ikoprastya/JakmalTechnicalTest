import React from 'react';
import '../index.css';


import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Finish = () => {
    
    function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    }

    var rString = randomString(5, '23456789abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ');
    


        return (
            <>
                 <div className="container">
                    
                        <div className="content-out ">
                                <div className="left-bar conten-finish">
                                    <div className="head-content-finish">
                                        <h1>Thank you 
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </h1>
                                        <div className="order-id">
                                            <strong>
                                                Order ID: {rString}
                                            </strong>
                                            <br/>
                                            <label>Your order will be delivered tody with GO-SEND</label>
                                        </div>
                                    </div>
                                    <div className='button-back-homepage'>
                                        <Link to='/' className='link-back-homepage'>
                                            <BiArrowBack className='back-icon-homepage' /> 
                                            <label className='back-text-homepage'>Back to homepage</label>
                                        </Link>
                                    </div>
                                </div>
                                <div className="right-bar">
                                    <div className="item-purchased">
                                        <h2>Summary</h2>
                                        <div className="item-purchased item-finish">
                                            <p>10 items purchased</p>
                                            <div>
                                                <hr/>   
                                                <label>Delivery estimation</label>
                                                <div className='dev-name'>
                                                    today by
                                                    <span>GO-SEND</span>
                                                </div>
                                            </div>
                                            <div>
                                                <hr/>   
                                                <label>Payment method</label>
                                                <div className='dev-name'>
                                                    <span>Bank Transfer</span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="item-price item-finish">
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
                                                <strong>GO-SEND</strong>
                                                <label>&nbsp;Dropshipping Fee</label>
                                            </div>
                                            <span>5900</span>
                                        </div>
                                    </div>
                                    <div className="bil-item">
                                        <h2>Total</h2>
                                        <h2>505.900</h2>
                                    </div>
                                
                                </div>
                        </div>
                   
                </div>
            </>
        )
    
}

export default Finish;