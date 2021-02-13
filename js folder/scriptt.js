var custNam=JSON.parse(localStorage.compName);
var compOwn=JSON.parse(localStorage.compOwner);
 var emlAdr=JSON.parse(localStorage.emlAdr);
 var brrAm=JSON.parse(localStorage.brrAmt);
 var payterm=JSON.parse(localStorage.terms);

$( window ).on( "load", function() {
   
 
      
       $("#p1").html(custNam);
       $("#p2").html(compOwn);
       $("#p3").html(emlAdr);
       $("#p4").html(brrAm);
      $("#p5").html(payterm);

  
  /*var invout = JSON.parse(localStorage.storeIn);
  alert(invout);
var arr=JSON.stringify(invout[1]);

alert(arr); 
alert(Object.keys(info));
*/  
  });

  $(document).ready(
    function() {
        $("#btnfnl").click(
            function(){
              var decis=$("#de").val();
              var interes=(brrAm*payterm*0.03)/12;
              var a=parseFloat(`${interes}`);
              var b=parseFloat(`${brrAm}`);
             
              var payment=a+b;
              
              var pro=payment-brrAm;
              var interest=interes.toFixed(2);
              var profit=pro.toFixed(2);


              localStorage.setItem("interest",JSON.stringify(interest));
              localStorage.setItem("payment",JSON.stringify(payment));
              localStorage.setItem("profit",JSON.stringify(profit));
              localStorage.setItem("dec",JSON.stringify(decis));

              var p=JSON.parse(localStorage.dec);
              
             

              
       $("#int").html("Interest=: " + interest);
       $("#pay").html("Payment=: " + payment);
       $("#profit").html("Profit=: " + profit);
       $("#de").html("Decision=: " + p);
       
       


            })});