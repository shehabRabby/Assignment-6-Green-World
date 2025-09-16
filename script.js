const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};
loadCategories()




// now display categories
const displayCategories = (category) => {
    // console.log(category);
    const categoriesContainer = document.getElementById('categories-container');
    categoriesContainer.innerHTML='';
    for(let cate of category){
        const categroyDiv = document.createElement('div');
        categroyDiv.innerHTML = `
           <button  onclick="loadPlant(${cate.id})" class="btn w-53 px-4  text-gray-700 transition:all duration-300 ease-in-out hover:bg-[#15803D] hover:text-white hover:scale-105 cursor-pointer">${cate.category_name}</button>`;
        categoriesContainer.append(categroyDiv)
    }
};





const loadAllPlants =()=>{
     fetch("https://openapi.programming-hero.com/api/plants")
     .then((res) => res.json())
     .then((treeInfo) => displayAllPlants(treeInfo.plants));
};
loadAllPlants();




const displayAllPlants = (plants) =>{
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML="";
    for(let plant of plants){
        const cardDiv = document.createElement("div");
        cardDiv.innerHTML = `
                           <div class="bg-white rounded-xl shadow-md p-4 space-y-3 w-80 h-full">
                                <div class="w-full h-40 bg-gray-200 rounded-lg overflow-hidden">
                                    <img src="${plant.image}" alt="Mango Tree" class="w-full h-full object-cover">
                                </div>

                                <h1 class="text-lg font-semibold text-gray-800">${plant.name}</h1>

                                <p class="text-sm text-gray-600"> ${plant.description}</p>

                                <div class="flex justify-between items-center">
                                    <span class="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full"> ${plant.category}</span>
                                    <p class="text-gray-800 font-semibold">৳<span>${plant.price}</span></p>
                                </div>

                                <button class="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-2 rounded-full transition">
                                    Add to Cart
                                </button>
                            </div>

        `
        cardContainer.append(cardDiv)
    }
};



// card-container
const loadPlant = (id) => {
  // console.log(id);
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  // console.log(url)
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllPlants(data.plants));
};

