
$(document).ready(
    function() {
        $("#submitinfo").click(
            function(){
             
        
                var custCompNam=$("#custCompName").val();
                var compOwner=$("#compOwner").val();
                var emlAdr=$("#emlAdr").val();
                var phoneNum=$("#phoneNum").val();
                var annSales =$("#annSales").val();
                var brrAmt=$("#brrAmt").val();
                var terms=$("#terms").val();
           
            
            localStorage.setItem("compName",JSON.stringify(custCompNam));
            localStorage.setItem("compOwner",JSON.stringify(compOwner));
            localStorage.setItem("emlAdr",JSON.stringify(emlAdr));
            localStorage.setItem("phoneNum",JSON.stringify(phoneNum));
            localStorage.setItem("annSales",JSON.stringify(annSales));
            localStorage.setItem("brrAmt",JSON.stringify(brrAmt));
            localStorage.setItem("terms",JSON.stringify(terms));
           
           
          // window.location.href="approval.html"; 
           
                  
         
            
              
        })
       

       
    }     
    
);

  