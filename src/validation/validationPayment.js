import $ from 'jquery';




export const selectGoSend = () => {

    var names = document.getElementById('content-gosend').value;
    var shiDetail = document.getElementById('shipment-detail');
    var shiCheck = document.getElementById('shipment-check');
    var shiPrice = document.getElementById('shipment-price');

    if (names == "") {
        $("#box-content-gosend").css('border-color', '#orange').css('background-color', 'orange');  
        return false;
    } else {
        $("#box-content-gosend").css('border-color', '#3bec27').css('background-color', '#72f1643d');     
        $("#gosend-check").css('visibility', 'visible');
        $("#content-gosend").css('background-color', '#65e4a400') 
      

        $("#box-content-jne").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#jne-check").css('visibility', 'hidden');
        $("#box-content-courier").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#courirer-check").css('visibility', 'hidden');

        shiDetail.innerHTML = "today by GO-SEND";
        shiCheck.innerHTML = "GO-SEND ";
        shiPrice.innerHTML = "15000";

        return true;
    }


}

export const selectJne = () => {

    var names = document.getElementById('content-jne').value;
    var shiDetail = document.getElementById('shipment-detail');
    var shiCheck = document.getElementById('shipment-check');
    var shiPrice = document.getElementById('shipment-price');

    if (names == "") {
        $("#box-content-jne").css('border-color', '#orange').css('background-color', 'orange');  
        return false;
    } else {
        $("#box-content-jne").css('border-color', '#3bec27').css('background-color', '#72f1643d');     
        $("#jne-check").css('visibility', 'visible');
        $("#content-jne").css('background-color', '#65e4a400') 
      

        $("#box-content-gosend").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#gosend-check").css('visibility', 'hidden');
        $("#box-content-courier").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#courirer-check").css('visibility', 'hidden');

        shiDetail.innerHTML = "2 day by JNE";
        shiCheck.innerHTML = "JNE ";
        shiPrice.innerHTML = "9000";

        return true;
    }


}

export const selectCourier = () => {

    var names = document.getElementById('content-courier').value;
    var shiDetail = document.getElementById('shipment-detail');
    var shiCheck = document.getElementById('shipment-check');
    var shiPrice = document.getElementById('shipment-price');

    if (names == "") {
        $("#box-content-courier").css('border-color', '#orange').css('background-color', 'orange');     
        return false;
    } else {
        $("#box-content-courier").css('border-color', '#3bec27').css('background-color', '#72f1643d');     
        $("#courirer-check").css('visibility', 'visible');
        $("#content-courier").css('background-color', '#65e4a400') 
      

        $("#box-content-gosend").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#gosend-check").css('visibility', 'hidden');
        $("#box-content-jne").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#jne-check").css('visibility', 'hidden');

        shiDetail.innerHTML = "1 day by Personal Courier";
        shiCheck.innerHTML = "Personal Courier ";
        shiPrice.innerHTML = "29000";

        return true;
    }


}

export const payEwallet = () => {

    var names = document.getElementById('content-ewallet').value;
    var submit = document.getElementById('submit');

    if (names != "") {
        $("#box-content-ewallet").css('border-color', '#3bec27').css('background-color', '#72f1643d');     
        $("#ewallet-check").css('visibility', 'visible');
        $("#content-ewallet").css('background-color', '#65e4a400') 
        $("#content-ewallets").css('background-color', '#65e4a400') 

        $("#box-content-banktrans").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#banktrans-check").css('visibility', 'hidden');
        $("#box-content-viraccount").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#viraccount-check").css('visibility', 'hidden');

        submit.value = "Pay with e-Wallet";

        return true;
    } else {
        return false;
    }


}

export const payBankTransfer = () => {

    var names = document.getElementById('content-banktrans').value;
    var submit = document.getElementById('submit');


    if (names != "") {
        $("#box-content-banktrans").css('border-color', '#3bec27').css('background-color', '#72f1643d');     
        $("#banktrans-check").css('visibility', 'visible');
        $("#content-banktrans").css('background-color', '#65e4a400') 
      

        $("#box-content-ewallet").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#ewallet-check").css('visibility', 'hidden');
        $("#box-content-viraccount").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#viraccount-check").css('visibility', 'hidden');

        submit.value = "Pay with Bank Transfer";

        return true;
    } else {
        return false;
    }


}

export const payVirtualAccount = () => {

    var names = document.getElementById('content-viraccount').value;
    var submit = document.getElementById('submit');

    if (names != "") {
        $("#box-content-viraccount").css('border-color', '#3bec27').css('background-color', '#72f1643d');     
        $("#viraccount-check").css('visibility', 'visible');
        $("#content-viraccount").css('background-color', '#65e4a400') 
        

        $("#box-content-ewallet").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#ewallet-check").css('visibility', 'hidden');
        $("#box-content-banktrans").css('border-color', 'rgba(128, 128, 128, 0.26)').css('background-color', 'white');     
        $("#banktrans-check").css('visibility', 'hidden');

        submit.value = "Pay with Virtual Account";

        return true;
    } else {
        return false;
    }


}