let bagItem;

OnLoad();

function OnLoad(){
    let bagItemString = localStorage.getItem('bagitems');
    bagItem = bagItemString ? JSON.parse(bagItemString): []
    DisplayItems();
    itemCounter();
}


function addToBag(itemId){
    bagItem.push(itemId);
    localStorage.setItem('bagitems' , JSON.stringify(bagItem))
    itemCounter();
}

function itemCounter(){
    let itemCounterElement = document.querySelector('.itemCount');
    if(bagItem.length>0){
        itemCounterElement.style.visibility="visible"
        itemCounterElement.innerText = bagItem.length;
    }
    else{
        itemCounterElement.style.visibility = "hidden";
    }
    
}

function Msg(){
    let messageContainer = document.querySelector('.message');
    messageContainer.style.display = "block";

    setTimeout(function() {
        messageContainer.style.display = "none";
    }, 3000);

}

function DisplayItems() {
  let itemsContainerElement = document.querySelector(".item-container");
  if(!itemsContainerElement){
    return;
  }
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `
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
            <button class="btn-add-to-cart" onclick="addToBag(${item.id}) ; Msg()">Add to Cart</button>
            </div>
        </div>
        `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}



// code for search item: 


searchItems();

function searchItems(){



document.addEventListener('DOMContentLoaded' ,function(){
    let searchInput =document.querySelector('.input');
    searchInput.addEventListener('input', function(){
        let searchQuery = searchInput.value.toLowerCase();
        let filteredItems = items.filter(item=>
            item.product_name.toLowerCase().includes(searchQuery) ||
            item.company_name.toLowerCase().includes(searchQuery) ||
            item.category.toLowerCase().includes(searchQuery)

        );
        DisplayItems(filteredItems);

    })
})
}



function DisplayItems(itemsToDisplay) {
    let itemsContainerElement = document.querySelector(".item-container");
    if (!itemsContainerElement) {
        return;
    }
    let innerHTML = "";
     (itemsToDisplay || items).forEach((item) => {
        innerHTML += `
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
    });

    itemsContainerElement.innerHTML = innerHTML;
}




