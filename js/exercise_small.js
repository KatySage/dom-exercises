
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")

button1.addEventListener('click', function (event) {
    event.preventDefault();
    const headerElement = document.getElementById("heading")
    headerElement.innerText = "Toppings"
})

button2.addEventListener('click', function (event) {
    event.preventDefault();
    const burger = document.getElementById("burger")
    burger.className = "list-item"
})
button3.addEventListener('click', function (event) {
    event.preventDefault();
    const bodyList = document.getElementById("list")
    const newListItem = document.createElement('li')
    bodyList.append(newListItem)
    newListItem.innerText = "Onions"
    newListItem.className = "list-item"
})

//  document.addEventListener('DOMContentLoaded', function (event) {
//      console.log('the DOM is loaded!')
//      const foodList = document.getElementById('list');
//      const fries = document.createElement('li');
//      fries.innerHTML = "Fries";
//      foodList.appendChild(fries)
//  })