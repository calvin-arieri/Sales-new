
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
    <p>
        <span class = “likesCount”>${cars.likes}</span> likes
    </p>
    <button id=“likes”>Like</button>
     <div id="button">
    <button id="Delete">Delete</button>    
  </div>
    `


  products.querySelector('#Delete').addEventListener('click', () => {
    products.remove()
    deleteProduct(cars.id)
  })

    document.querySelector("#displayProducts").appendChild(products);  

}
function deleteProduct(id) {
    fetch(`http://localhost:3000/f1Cars/${id}`,{
   method:'DELETE',
    headers:{
        'content-Type':'application/json'
        }})
        .then(res => res.json())
        .then (cars => console.log(cars))
} 

document.querySelector('#ourform1').addEventListener('click', submitting());
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

fetch(`http://localhost:3000/f1Cars`,{
    method: `POST`,
    headers: {
        'Content-Type': `application/json`
    },
    body:JSON.stringify(f1Cars)
    })
    .then(res => res.json())
    .then(cars => console.log(cars))


