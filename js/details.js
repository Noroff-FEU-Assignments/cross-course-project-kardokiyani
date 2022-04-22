const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const cors = "https://noroffcors.herokuapp.com/";
const url = "https://kardokiyani.one/rainydays/wp-json/wc/store/products/" + id;

const corsUrl = cors +  url;

console.log(corsUrl);

const productContainer = document.querySelector(".productContainer");

function error(message="error") {
  return `<div class"error">${message}</div>`;
}

console.log(corsUrl);

async function getProducts(){
  try{
    const response = await fetch(corsUrl);
    const results = await response.json();
    const product = results;

    console.log(product);
    productContainer.innerHTML += `
        <div class="details">
          <h2>${product.name}</h2>
          <img src="${product.images[0].src}" />
          <p>Description: Rainy Days, perfect jacket for you who like to do outdoor activities. ${product.description}</p>
        <p>Price: ${product.prices.price}kr</p>
      </div>`;

  } catch (error) {
    console.log(error);
  }
}

getProducts();