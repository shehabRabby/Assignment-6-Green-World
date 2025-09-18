
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

  // {
  // "id": 1,
  // "category_name": "Fruit Tree",
  // "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
  // }
  for (let catBtn of cate) {
    const categoryBtn = document.createElement("div");
    categoryBtn.innerHTML = `
          <button onclick="loadPlants(${catBtn.id})" class="btn w-full px-4  text-gray-700 transition:all duration-300 ease-in-out hover:bg-[#15803D] hover:text-white hover:scale-105 cursor-pointer">${catBtn.category_name}</button>
        `;
    catContainer.append(categoryBtn);
  }
};



// load plants by categories
const loadPlants = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

const displayPlants = (plant) => {
  const cartConainer = document.getElementById("cart-container");
  cartConainer.innerHTML = "";

  // {
  // "id": 4,
  // "image": "https://i.ibb.co.com/1YzsVWjm/Gulmohar-min.jpg",
  // "name": "Gulmohar",
  // "description": "Known as the ‘Flame of the Forest’, this tree bursts into a vibrant display of red flowers every summer. Perfect for beautifying avenues and gardens.",
  // "category": "Flowering Tree",
  // "price": 400
  // }

  for (let tree of plant) {
    const cartPlant = document.createElement("div");
    cartPlant.innerHTML = `
        <div class="bg-white p-2 h-105 rounded-lg shadow">
             <img src="${tree.image}" alt="" class="w-full h-1/2 bg-cover rounded-lg shadow" >
             <p class="text-lg font-semibold my-2">${tree.name}</p>
             <p class="text-sm font-light">${tree.description}</p>
             <div class="flex justify-between items-center my-3">
                 <button class="bg-green-200 px-2 w-auto rounded-full cursor-pointer">${tree.category}</button>
                 <p class="font-semibold">$<span>${tree.price}</span></p>
             </div>
             <button class="bg-green-900 text-white px-4 w-full rounded-full py-1 cursor-pointer">Add to Cart</button>
         </div>`;
         
    cartConainer.append(cartPlant);
  }
};

// Bydefault all plants show 
const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};


loadCategory();
loadAllPlants();