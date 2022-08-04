
//popup start 
function openForm() {
    document.getElementById("myForm").style.display = "block";
   
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function Continue(){
   var mb= document.getElementById("phonenumber").value;
    if( mb.length!=0){
      event.preventDefault();
        document.getElementById("otpform").style.display = "block";
        var full= document.getElementById("phonenumber").value;
        document.getElementById("number").innerText="We have sent you a 4 digit OTP on " +full+" edit";
      
    }
  
  }

  