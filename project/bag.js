let ItemObject ;
onload();
function onload(){
    BagItemObject();
    displayBagItems();
    OrderSummary();
    
}

function OrderSummary(){
    let OrderSummaryElement = document.querySelector('.bag-price');
    let totalItems = ItemObject.length;
    let totalMRP = 0;
    let discountMRP = 0;
    let FinalMRP = 0;

    ItemObject.forEach(bagItem=>{
        totalMRP+= bagItem.original_price;
        discountMRP+= bagItem.original_price - bagItem.current_price;
    })

    FinalMRP = totalMRP - discountMRP + 20;
    OrderSummaryElement.innerHTML = `
    <div class="bag-details-container">
                <div class="price-header">PRICE BREAKUP (${totalItems})</div>

                <div class="price-item">
                  <span class="tag">Total MRP</span>
                  <span class="value">${totalMRP}</span>
                </div>

                <div class="price-item">
                  <span class="tag">Disount on MRP</span>
                  <span class="value">-${discountMRP}</span>
                </div>

                <div class="price-item">
                  <span class="tag">Convience fee</span>
                  <span class="value">20</span>
                </div>
                <hr>

                <div class="price-footer">
                  <span class="tag">Total Amount</span>
                  <span class="value"> ${FinalMRP}</span>
                </div>

                <button class="btn-place-order">
                  <div class="order-btn" onclick="OrderItems()";>PLACE ORDER</div>
                </button>


              </div>
    `
}

function BagItemObject(){
    console.log(bagItem)
    ItemObject = bagItem.map(itemId =>{
        for(let i=0;i<items.length ; i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    })
    console.log(ItemObject)
}
   

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    ItemObject.forEach(bagItem => {
      innerHTML += generateItemHTML(bagItem);
    });
    containerElement.innerHTML = innerHTML;
  }

  function removeFromBag(itemId){
     bagItem = bagItem.filter( bagItemId => bagItemId != itemId);
     
     localStorage.setItem('bagitems' , JSON.stringify(bagItem))
     BagItemObject();
     itemCounter()
     displayBagItems();
     OrderSummary();
  }

function generateItemHTML(item){
return `
<div class="bag-item-container">

    <div class="item-left-part">
    <img class="bag-item-img" src="${item.image}">
    </div>
    <div class="item-right-part">
    <div class="${item.company_name}">Nike</div>
    <div class="item-name">${item.product_name}</div>
    <div class="return-period">
    <span class="return-period-days">${item.return_period}</span> return available
    </div>
    <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${item.delivery_date}</span>
    </div>
    <div class="price-container">
    <span class="current-price">${item.current_price}</span>
    <span class="original-price">${item.original_price}</span>
    <span class="discount-percentage">${item.discount_percentage} OFF</span>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
    </div>
    </div>
    `;
}

function OrderItems(){
    alert('your order has been placed successfully');
}