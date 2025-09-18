// load category button
const loadCategory = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

const displayCategory = (cate) => {
  const catContainer = document.getElementById("categories-container");
  catContainer.innerHTML = "";

  for (let catBtn of cate) {
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
          <button id="cat-btn-${catBtn.id}" onclick="loadPlants(${catBtn.id})" class="btn w-full px-4  text-gray-700 transition:all duration-100 ease-in-out hover:bg-[#15803D] hover:text-white hover:scale-100 cursor-pointer btn-category">${catBtn.category_name}</button>
        `;
    catContainer.append(categoryBtn);
  }
};

// load plants by categories
const loadPlants = (id) => {
  //step-1 loading-spinner portion here
  document.getElementById("cart-container").classList.add("hidden");
  document.getElementById("loading-spinner").classList.remove("hidden");
  //step-1  above loading-spinner portion

  const url = `https://openapi.programming-hero.com/api/category/${id}`;

  // this portion for active button
  // first part active class remove
  const catbtn = document.querySelectorAll(".btn-category");
  catbtn.forEach((btn) => btn.classList.remove("active"));
  // second part
  const currentBtn = document.getElementById(`cat-btn-${id}`);
  currentBtn.classList.add("active");
  // above portion for active button

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const displayPlants = (plant) => {
  const cartConainer = document.getElementById("cart-container");
  cartConainer.innerHTML = "";

  for (let tree of plant) {
    const cartPlant = document.createElement("div");
    cartPlant.innerHTML = `
        <div class="bg-white p-2 h-120 rounded-lg shadow flex flex-col">
             <img src="${tree.image}" alt="" class="w-full h-1/2 bg-cover rounded-lg shadow" >
             <div class="py-2 px-4 flex flex-col flex-grow">
             <p onclick="loadPlantDetails(${tree.id})" class="text-lg font-semibold my-2 plant-name">${tree.name}</p>
             <p class="text-[11px] text-start font-light flex-grow overflow-hidden line-clamp-3">${tree.description}</p> 
             <div class="flex justify-between items-center my-4">
                 <button class="bg-green-100 border-green-500 border-1 px-2 py-1 lg:py-0 xl:p-1 text-[12px]  w-auto rounded-full cursor-pointer hover:scale-102">${tree.category}</button>
                 <p class="font-semibold">$<span class="tree-price">${tree.price}</span></p>
             </div>
             <button onclick="addtoCart(this)" class="bg-green-900 text-white px-4 w-full rounded-full py-1  cursor-pointer hover:scale-101 hover:bg-green-700">Add to Cart</button>
             </div>
         </div>`;

    cartConainer.append(cartPlant);
  }
  //step-2 loading-spinner portion here
  document.getElementById("cart-container").classList.remove("hidden");
  document.getElementById("loading-spinner").classList.add("hidden");
  //step-2 above loading-spinner portion
};

// Bydefault all plants show
const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const loadPlantDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.plants));
};

const displayDetails = (trees) => {
  const plantDetails = document.getElementById("plant-details-container");
  plantDetails.innerHTML = `
                    <div  class="bg-white p-3 h-115 md:h-105 w-auto rounded-lg shadow mt-4 space-y-1">
                       <h1 class="font-bold">${trees.name}</h1>
                       <img src="${trees.image}" alt="" class="w-full h-1/2 bg-cover rounded-lg shadow mb-4">
                       <p class="text-sm font-semibold">Category: <span class="text-sm font-light">${trees.category}</span></p>
                       <p class="text-sm font-semibold">Price: <span class="text-sm font-light">$</span><span class="text-sm font-light">${trees.price}</span></p>
                       <p class="text-sm font-semibold">Description: <span class="text-[13px] font-light">${trees.description}</p>
                    </div>

  `;
  document.getElementById("my_modal_3").showModal();
};

loadCategory();
loadAllPlants();

let cart = [];
let total = 0;

// dom Manupulate to add  My Cart
const addtoCart = (btn) => {
  const card = btn.parentNode.parentNode;
  const treeName = card.querySelector(".plant-name").innerHTML;
  const treePrice = card.querySelector(".tree-price").innerHTML;
  const price = Number(treePrice);
  // console.log(treeName, price);
  const selectedItem = {
    treeName: treeName,
    treePrice: price,
  };

  cart.push(selectedItem);
  total += price;
  displayMyCart(cart);
  alert(`${treeName} has been added to your cart ✅`);
  displayTotal(total);
};

const displayTotal = (value) => {
  document.getElementById("total-amount").innerHTML = value;
};

const displayMyCart = (cart) => {
  const cartContainer = document.getElementById("my-cart");
  cartContainer.innerHTML = "";

  for (let item of cart) {
    const myCart = document.createElement("div");
    myCart.innerHTML = `
  
               <div class="flex justify-between items-center p-2 px-4 bg-green-100 rounded-xl">
                    <div>
                        <p class="text-base font-medium tree-title">${item.treeName}</p>
                        <p class="text-sm">$<span class="item-price">${item.treePrice}</span> x <span>1</span></p>
                    </div>
                    <p onclick="removeCart(this)" class="cursor-pointer">x</p>
                </div>

  `;
    cartContainer.append(myCart);
  }
};

const removeCart = (btn) => {
  const item = btn.parentNode;
  const treeName = item.querySelector(".tree-title").innerHTML;
  const treePrice = Number(item.querySelector(".item-price").innerHTML);

  cart = cart.filter((item) => item.treeName != treeName);
  total = 0;
  cart.forEach((item) => (total += item.treePrice));
  displayMyCart(cart);
  displayTotal(total);
};
