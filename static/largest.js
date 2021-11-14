
 function largest() {
         var n1,n2,n3,large;
         n1 = Number(document.getElementById("fn").value);
         n2 = Number(document.getElementById("sn").value);
         n3 = Number(document.getElementById("tn").value);
         if(n1>n2 && n1>n3)
          {
           large=n1;
           document.getElementById("answer").value=large;    
          }
         if(n2>n1 && n2>n3)
          {
            large=n2; 
            document.getElementById("answer").value=large;       
          }
         if(n3>n1 && n3>n2)
          {
            large=n3;
            document.getElementById("answer").value=large;      
          }
        
}
$('#reset').trigger("reset");