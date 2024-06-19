displayElectronicsItems();

function displayElectronicsItems(){
    let itemsContainerElement = document.querySelector('.item-container');

    if(displayElectronicsItems){
        let electronicsItem = items.filter(items => items.category === 'Electronics');

        electronicsItem.forEach(item =>{
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
    }
    else{
        console.log('not working');
    }
}