import $ from 'jquery';


export const validateEmail = () => {
           
    var names = document.getElementById('user-emails').value;
   
    if (names == "") {
        $("#label-email").css('color', 'orange');
        $("#x-email-icon").css('visibility', 'visible');
        $("#v-email-icon").css('visibility', 'hidden');
        $("#user-emails").css('border-color', 'orange');
        
        
        return false;

    } else if (!names.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
        $("#label-email").css('color', 'orange');
        $("#x-email-icon").css('visibility', 'visible');
        $("#v-email-icon").css('visibility', 'hidden');
        $("#user-emails").css('border-color', 'orange');
        
        
        return false;

    } 
        $("#label-email").css('color', 'green');
        $("#x-email-icon").css('visibility', 'hidden');
        $("#v-email-icon").css('visibility', 'visible');
        $("#user-emails").css('border-color', 'green');
        
       
        return true;

}

export const validatePhoneNumber = () => {

    var phoneNumber = document.getElementById('phone-number').value;
    const a = phoneNumber.length;
    if ((a <= 6) || (a >= 20)){
        $("#label-phone").css('color', 'orange');
        $("#x-phone-icon").css('visibility', 'visible');
        $("#v-phone-icon").css('visibility', 'hidden');
        $("#phone-number").css('border-color', 'orange');
        
        return false;

    } else if (!phoneNumber.match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i)) {
        $("#label-phone").css('color', 'orange');
        $("#x-phone-icon").css('visibility', 'visible');
        $("#v-phone-icon").css('visibility', 'hidden');
        $("#phone-number").css('border-color', 'orange');
       
        return false;
    } 
        $("#label-phone").css('color', 'green');
        $("#x-phone-icon").css('visibility', 'hidden');
        $("#v-phone-icon").css('visibility', 'visible');
        $("#phone-number").css('border-color', 'green');
        
       
        return true;

}

export const validateAddress = () => {
           
    var names = document.getElementById('dev-address').value;
    const a = names.length;
    if (names == "") {
        $("#label-address").css('color', 'orange');
        $("#x-address-icon").css('visibility', 'visible');
        $("#v-address-icon").css('visibility', 'hidden');
        $("#dev-address").css('border-color', 'orange');
         
        return false;

    } else if (a >= 120) {
        $("#label-address").css('color', 'orange');
        $("#x-address-icon").css('visibility', 'visible');
        $("#v-address-icon").css('visibility', 'hidden');
        $("#dev-address").css('border-color', 'orange');
        
        return false;

    } 
        $("#label-address").css('color', 'green');
        $("#x-address-icon").css('visibility', 'hidden');
        $("#v-address-icon").css('visibility', 'visible');
        $("#dev-address").css('border-color', 'green');

          
        return true;

}

export const validateName = () => {
           
    var names = document.getElementById('drop-name').value;
    const a = names.length;

    if (a <= 4) {
        $("#label-name").css('color', 'orange');
        $("#x-drop-name-icon").css('visibility', 'visible');
        $("#v-drop-name-icon").css('visibility', 'hidden');
        $("#drop-name").css('border-color', 'orange');
        
        
        return false;

    } else if (!names.match(/^[a-zA-Z ]{2,40}$/)) {
        $("#label-name").css('color', 'orange');
        $("#x-drop-name-icon").css('visibility', 'visible');
        $("#v-drop-name-icon").css('visibility', 'hidden');
        $("#drop-name").css('border-color', 'orange');
        
        
        return false;

    } 
        $("#label-name").css('color', 'green');
        $("#x-drop-name-icon").css('visibility', 'hidden');
        $("#v-drop-name-icon").css('visibility', 'visible');
        $("#drop-name").css('border-color', 'green');

        
       
        return true;

}

export const validatePhoneDropshiper = () => {

    var phoneNumber = document.getElementById('drop-phone').value;
    const a = phoneNumber.length;
    if ((a <= 6) || (a >= 20)) {
        $("#label-phone-drop").css('color', 'orange');
        $("#x-drop-phone-icon").css('visibility', 'visible');
        $("#v-drop-phone-icon").css('visibility', 'hidden');
        $("#drop-phone").css('border-color', 'orange');
        
        return false;
    } else if (!phoneNumber.match(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i)) {
        $("#label-phone-drop").css('color', 'orange');
        $("#x-drop-phone-icon").css('visibility', 'visible');
        $("#v-drop-phone-icon").css('visibility', 'hidden');
        $("#drop-phone").css('border-color', 'orange');
        
        return false;
    } 
        $("#label-phone-drop").css('color', 'green');
        $("#x-drop-phone-icon").css('visibility', 'hidden');
        $("#v-drop-phone-icon").css('visibility', 'visible');
        $("#drop-phone").css('border-color', 'green');
       
        return true;

}

export const toogleDropshiper = () => {
    console.log("test");
    var x = document.getElementById("drop-list");
    var y = document.getElementById("drop-lists");
    var valids = document.getElementById("v-drop-name-icon");
    var invalids = document.getElementById("x-drop-name-icon");
    var valid = document.getElementById("v-drop-phone-icon");
    var invalid = document.getElementById("x-drop-phone-icon");
   
    if (x.style.visibility === "visible" && y.style.visibility === "visible")  {
      x.style.visibility = "hidden";
      y.style.visibility = "hidden";
      valid.style.visibility = "hidden";
      invalid.style.visibility = "hidden";
      valids.style.visibility = "hidden";
      invalids.style.visibility = "hidden";
    } else {
      x.style.visibility = "visible";
      y.style.visibility = "visible";
    }
}