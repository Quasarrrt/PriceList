let price1=document.querySelector(".price1");
let price2=document.querySelector(".price2");
let price3=document.querySelector(".price3");
let switcher=document.querySelector(".toggle-button");
switcher.addEventListener("click", clicker);

function clicker(){
   
    if(this.checked==true){
    price1.innerHTML="$199.99";
    price2.innerHTML="$249.99";
    price3.innerHTML="$399.99";
    }
    else{
    price1.innerHTML="$19.99";
    price2.innerHTML="$24.99";
    price3.innerHTML="$39.99";
    }
}
