
function arthematic(btn) {
    choice=btn.id
    var n1,n2,n3;
    n1 = Number(document.getElementById("fn").value);
    n2 = Number(document.getElementById("sn").value);
    if(choice ==='add')
     {
       n3=n1+n2;  
      document.getElementById("answer").value= n3;     
     }
    if(choice ==='sub')
     {
      n3=n1-n2;  
      document.getElementById("answer").value= n3;      
     }
    if(choice ==='mul')
     {
      n3=n1*n2;  
      document.getElementById("answer").value= n3;      
     }
    if(choice ==='div')
     {
      n3=n1/n2;  
      document.getElementById("answer").value= n3;      
     }
    if(choice ==='mod')
     {
      n3=n1%n2; 
      document.getElementById("answer").value= n3;      
     }
   
}
$('#reset').trigger("reset");