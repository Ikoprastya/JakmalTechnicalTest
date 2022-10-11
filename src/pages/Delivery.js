import React from 'react';
import '../index.css';
import {toogleDropshiper, validateAddress, validateEmail, validateName, validatePhoneDropshiper, validatePhoneNumber} from '../validation/validationDev';

import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';




const Delivery = () => {
    
        const nav = useNavigate();

        const handleSubmit = (e) => {
            var x = document.getElementById("drop-list");
            var y = document.getElementById("drop-lists");
            e.preventDefault();
            
            if (x.style.visibility === "visible" && y.style.visibility === "visible")  {
                
                if (validateEmail() && validatePhoneNumber() && validateAddress() && validateName() && validatePhoneDropshiper() ) {
                    console.log("test2")
                    return nav('/payment');

                }
              
            } else {
                if (validateEmail() && validatePhoneNumber() && validateAddress()) {
                    console.log("test2")
                    return nav('/payment');
                }
            }
            

        }

   


        return (
            
            <>
            
                <div className="container">
                    <div className='button-back'>
                        <Link to='/' className='link-back'>
                            <BiArrowBack className='back-icon' /> 
                            <label className='back-text'>Back to chart</label>
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                       
                        <div className="content-out">
                                <div className="left-bar">
                                    <div className="head-content">
                                        <h1>Delivery details &nbsp;</h1>
                                        <div className="check-drop">
                                            <input type="checkbox" name="dropshipper" onClick={() => toogleDropshiper()} />
                                            <label for="dropshipper"> Send as dropshipper</label>

                                        </div>
                                    </div>
                                    <div className="content">
                                            <div className="dev-form-75 dev-form-left">
                                                <div className='form-group' name="email">
                                                    <input className='form-control' type="email" name="email" placeholder='Email' id='user-emails' onKeyUp={() => validateEmail()}/>
                                                    <label for="email" className='form-label' id='label-email'>Email</label>
                                                    <FaTimes className='x-icon' id='x-email-icon' />
                                                    <BsCheckLg className='v-icon' id='v-email-icon'/> 
                                                    
                                                    
                                                </div>

                                                <div className='form-group' name="phone-number" id="div-phone-number">
                                                    <input className='form-control' type="text" name="phone-number" placeholder="Phone Number" id='phone-number' onKeyUp={() => validatePhoneNumber()}/>
                                                    <label className='form-label' for="phone-number" id='label-phone'>Phone Number</label>
                                                    <FaTimes className='x-icon' id='x-phone-icon' />
                                                    <BsCheckLg className='v-icon' id='v-phone-icon'/> 
                                                </div>

                                                <div className='form-group' id="div-dev-address">
                                                    <textarea className='form-control form-control-textarea' name="dev-address" rows="4" cols="50" placeholder='Delivery Address' id='dev-address' onKeyUp={() => validateAddress()}/>                                           
                                                    <label className='form-label form-label-textarea' for="dev-address"id='label-address'>Delivery Address</label>
                                                    <FaTimes className='x-icon icon-address' id='x-address-icon'/>
                                                    <BsCheckLg className='v-icon icon-address y-add' id='v-address-icon'/>
                                            
                                                </div>

                                            </div>

                                            <div className="dev-form-25 dev-form-left" >
                                                <div id='drop-list'>
                                                    <div className='form-group' id="div-drop-name">
                                                        <input className='form-control' type="text" name="drop-name" placeholder="Dropshipper name" id='drop-name' onKeyUp={() => validateName()}/>
                                                        <label className='form-label' for="drop-name" id='label-name'>Dropshipper name</label>
                                                        <FaTimes className='x-icon icon-drop' id='x-drop-name-icon'/>
                                                        <BsCheckLg className='v-icon y-drop' id='v-drop-name-icon'/>
                                                    </div>

                                                    <div className='form-group' id="div-drop-phone">
                                                        <input className='form-control' type="text" name="drop-phone" placeholder="Dropshipper phone number" id='drop-phone' onKeyUp={() => validatePhoneDropshiper()}/>
                                                        <label className='form-label' for="drop-phone" id='label-phone-drop'>Dropshipper phone number</label>
                                                        <FaTimes className='x-icon icon-drop' id='x-drop-phone-icon'/>
                                                        <BsCheckLg className='v-icon y-drop' id='v-drop-phone-icon'/>
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

                                        </div>
                                    </div>
                                    <div className="item-price">
                                        <div className="bil-item">
                                            <label>Coost of goods</label>
                                            <span>500.000</span>
                                        </div>
                                        <div className="bil-item" id='drop-lists'>
                                            
                                                <label>Dropshipping Fee</label>
                                                <span>5900</span>

                                            
                                        </div>
                                    </div>
                                    <div className="bil-item">
                                        <h2>Total</h2>
                                        <h2>505.900</h2>
                                    </div>
                                <input id="submit" type="submit" value="Continue to Payment" />
                                <span id="submit-error"></span>
                                </div>
                        </div>
                    </form>
                </div>
                
                
            </>
        )
    
}

export default Delivery;