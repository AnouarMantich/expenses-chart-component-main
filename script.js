const days=document.querySelectorAll('.day');
const balance=document.querySelector('.myBalance');
const total=document.querySelector('.total');
let data;
let currentDay=new Date().getDay();




(async function(){
    let dat=await fetch('./data.json');
    data= await dat.json();
   days.forEach((day,index)=>{

    const priceTag =day.querySelector('.price-tag');
    const candle=day.querySelector('.candal');
   if(currentDay===index+1){
    candle.style.background='var( --Cyan)';
   }



    candle.addEventListener('mouseover',()=>{
        candle.style.background='var(--Medium-brown)';
        priceTag.hidden=false;
    })
    candle.addEventListener('mouseout',()=>{
        if(currentDay===index+1)
            candle.style.background='var( --Cyan)';
           else
        candle.style.background='var(--Soft-red)';
        priceTag.hidden=true;
    })
    candle.style.height=`${data[index].amount*2}px`
     priceTag.textContent=`$${data[index].amount}`
   })

}
)()


