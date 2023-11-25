
itemCounter();
displayMensItem();

function displayMensItem(){
    let itemsContainerElement = document.querySelector('.item-container');

    if(itemsContainerElement){
        let mensWear = items.filter(item=> item.category === 'MensWear');
    
        mensWear.forEach(item =>{
            let displayDiv = document.createElement('div');
            displayDiv.innerHTML = `
            <div class="item">
                <img src="${item.image}" alt="" class="item-img">
                <div class="info-container"> 
                <div class="company-name">${item.company_name}</div>
                <div class="product-name">${item.product_name}</div>
                <div class="price">
                    <span class="current-price">Rs${item.current_price}</span>
                    <span class="original-price">Rs${item.original_price}</span>
                    <span class="discount">${item.discount_percentage}%Off</span>
                </div>
                <button class="btn-add-to-cart" onclick="addToBag(${item.id})">Add to Cart</button>
                </div>
            </div>
            `;
            itemsContainerElement.appendChild(displayDiv);

        });

        searchItemsInMens();




        
    
    }
    else{
        console.log('not working')
    }
       
}


// code for search : 

// searchItemsInMens();

// function searchItemsInMens(){



// document.addEventListener('DOMContentLoaded' ,function(){
//     let searchInput =document.querySelector('.input');
//     searchInput.addEventListener('input', function(){
        
//         let searchQuery = searchInput.value.toLowerCase();
//         let filteredItems = items.filter(item=>
//             item.product_name.toLowerCase().includes(searchQuery) ||
//             item.company_name.toLowerCase().includes(searchQuery) ||
//             item.category.toLowerCase().includes(searchQuery)

//         );
//         DisplayItems(filteredItems);

//     })
// })
// }



// function DisplayItemsInMens(itemsToDisplay) {
//     let itemsContainerElement = document.querySelector(".item-container");
//     if (!itemsContainerElement) {
//         return;
//     }
//     let innerHTML = "";
//      (itemsToDisplay || items).forEach((item) => {
//         innerHTML += `
//             <div class="item">
//                 <img src="${item.image}" alt="" class="item-img">
//                 <div class="info-container"> 
//                     <div class="company-name">${item.company_name}</div>
//                     <div class="product-name">${item.product_name}</div>
//                     <div class="price">
//                         <span class="current-price">Rs${item.current_price}</span>
//                         <span class="original-price">Rs${item.original_price}</span>
//                         <span class="discount">${item.discount_percentage}%Off</span>
//                     </div>
//                     <button class="btn-add-to-cart" onclick="addToBag(${item.id})">Add to Cart</button>
//                 </div>
//             </div>
//             `;
//     });

//     itemsContainerElement.innerHTML = innerHTML;
// }



