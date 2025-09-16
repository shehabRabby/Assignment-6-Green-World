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
           <button  onclick="loadPlant('${cate.category_name}')" class="btn w-53 px-4  text-gray-700 transition:all duration-300 ease-in-out hover:bg-[#15803D] hover:text-white hover:scale-105 cursor-pointer">${cate.category_name}</button>`;
        categoriesContainer.append(categroyDiv)
    }
}


// card-container
const loadPlant=(id)=>{
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadPlant(data.id))
}


// display Tree 
const displayLoadPlant = (plant)=> {
console.log(plant);

}