var buttons=document.getElementsByTagName('button');
var expression=document.getElementById('expression');
var result=document.getElementById("result");
var curoperator=null;
var operator=null;
function isoperator(value){
    return value=="-" || value=="+" || value=="*" || value=="/" ;
}
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('value');
        console.log(value);
        if(curoperator!=null && isoperator(value)){
            expression.textContent=expression.textContent.slice(0,-1);

        }
        if(isoperator(value) ){
            operator=value;
            curoperator=value;
        }
        if(value=="="){

            result.textContent=(eval(expression.textContent));

        }else if(value=="clear"){
            expression.textContent="";

            result.textContent="";
            
        }else if(!isoperator(value)){
        
       expression.textContent=expression.textContent.concat(value);
       curoperator=null;
      }else{
            expression.textContent=expression.textContent.concat(operator);

        }
        

    });
}