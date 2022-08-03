
  var cartpage = JSON.parse(localStorage.getItem("items")) || [];
  var total=0;
  displaydata(cartpage);

  displayprice(cartpage);

  function displaydata(cp) {
    cp.map(function (elem) {
      var namediv = document.createElement("div");
      namediv.setAttribute("id", "namediv");
      var name = document.createElement("h5");
      var pricediv = document.createElement("div");
      var plusminusdiv = document.createElement("div");
      var plus = document.createElement("p");
      var minus = document.createElement("p");
      var num = document.createElement("p");
      var divforprice = document.createElement("div");
      var price = document.createElement("p");
      var sp = document.createElement("p");
      var hr = document.createElement("hr");
      name.innerText = elem.name;
      plus.innerText = "+";
      num.innerText = "1";
      minus.innerText = "-";
      price.innerText = "₹" + elem.price;
      console.log(elem.strikeprice);
      sp.innerText = "₹" + elem.strikeprice;
      plusminusdiv.append(minus, num, plus);
      divforprice.append(price, sp);
      pricediv.append(plusminusdiv, divforprice);
      plusminusdiv.setAttribute("id", "price");
      namediv.append(name, pricediv);

      var seconddiv = document.createElement("div");
      seconddiv.setAttribute("id", "list");

      var thread1p = document.createElement("p");
      if (elem.thread1 != "") {
        thread1p.innerText = "• " + elem.thread1 + " x1";
      } else {
        thread1p.innerText = elem.thread1;
      }

      var thread2p = document.createElement("p");
      if (elem.thread2 != "") {
        thread2p.innerText = "• " + elem.thread2 + " x1";
      } else {
        thread2p.innerText = elem.thread2;
      }

      var thread3p = document.createElement("p");
      if (elem.thread3 != "") {
        thread3p.innerText = "• " + elem.thread3 + " x1";
      } else {
        thread3p.innerText = elem.thread3;
      }

      var thread4p = document.createElement("p");
      if (elem.thread4 != "") {
        thread4p.innerText = "• " + elem.thread4 + " x1";
      } else {
        thread4p.innerText = elem.thread4;
      }

      var thread5p = document.createElement("p");
      if (elem.thread5 != "") {
        thread5p.innerText = "• " + elem.thread5 + " x1";
      } else {
        thread5p.innerText = elem.thread5;
      }

      var edit = document.createElement("button");
      edit.innerText = "Edit package";
      edit.setAttribute("class", "edit");
      seconddiv.append(thread1p, thread2p, thread3p, thread4p, thread5p, edit);

      document.getElementById("container").append(namediv, hr, seconddiv);
    });

  }

function displayprice(dp){
  dp.map(function(elem){
   total=parseInt(total)+parseInt(elem.price);
  })

  document.getElementById("total").innerText="₹"+total;

  var discount=-50;
  document.getElementById("discount").innerText="₹"+discount;

  var fee=49;
  document.getElementById("confee").innerText="₹"+fee;

  var tfinal=((parseInt(total)-parseInt(discount))+parseInt(fee));
  document.getElementById("totalfinal").innerText="₹"+tfinal;
}
