let prdtUrl = 'prdt.json'
fetch(prdtUrl)
 .then(res => res.json())
 .then(res =>{
     card(res)
 });


function card(prdt){
    let prdtCard = document.querySelector('.prdt-cart');

    let user = ' ';

    prdt.forEach(value=>{

        user += html(value)
    })
    prdtCard.innerHTML = user ;
}

function html(prdt){
    const {img, title, price} = prdt;
   
   
        const code  = `
   
           <div class="prdt-sec">
               <img src='${img}'/>
               <h3>${title}</h3>
               <span>${price}</span>
               <button onclick="alt()">Add To Cart </button>
            
   
           </div>
        
        `;
   
        return code;
    }

function alt(){
    alert('Product Added To Cart')
}



