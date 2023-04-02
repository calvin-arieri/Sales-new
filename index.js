//grabbing our form
document.querySelector('#ourform').addEventListener('submit', submitting);

function submitting(e){
    e.preventDefault();
    let f1Cars={
        name:e.target.name.value,
        image:e.target.url.value,
        description:e.target.description.value,
        likes:0
    }
    displayProducts(f1Cars);
    addCars(f1Cars);


}

// fetching data
const url ="http://localhost:3000/f1Cars"
fetch(url)
.then(res => res.json())
.then(f1Cars => f1Cars.forEach(cars=> displayProducts(cars)))

// Displaying products in html
function displayProducts(cars){
    const products = document.createElement("p")
    products.className = "card"
    products.innerHTML =`
    <img src=${cars.image}><br>
    <p>${cars.name}</p><br>
    <p>${cars.description}</p><br>
    <p>${cars.likes}</p>
    `
    document.querySelector("#displayProducts").appendChild(products)
}

function addCars (f1Cars){
    fetch('http://localhost:3000/f1Cars',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body:JSON.stringify(f1Cars)
    })
    .then (res => res. json())
    .then (cars => console. log(cars))
}

 