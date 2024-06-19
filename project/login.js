 
 function display(){
    let inputElement = document.querySelector('#name')
    let search = inputElement.value

    let displayElements = document.querySelector('#display');
    displayElements.textContent = search.charAt(0).toUpperCase();

   
 }
 

