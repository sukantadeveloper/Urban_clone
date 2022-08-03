
//popup start 
function openForm() {
    document.getElementById("myForm").style.display = "block";
    myWindow.focus();
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  function Continue(){
   var mb= document.getElementById("phonenumber").value;
    if( mb.length!=0){
      event.preventDefault();
        document.getElementById("otpform").style.display = "block";
        myWindow.focus();
      
    }
  
  }
  