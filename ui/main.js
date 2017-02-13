//counter
var button=document.getElementById('counter');

button.onclick=function(){
    
    
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            
            if(request.status === 200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
    span.innerHTML=counter; 
            }
        }
    }
   request.open('GET','http://http://user-14ce065.imad.hasura-app.io/',true);
   request.send(null);
    
}
