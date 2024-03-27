export async function showCategory() {
    let category = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let response = await category.json()
    console.log(response)
    getDataOfCategory(response.categories)
    let carrds = document.querySelectorAll("#carrds")
    for (let i = 0; i < carrds.length; i++) {
        carrds[i].addEventListener("click", function (e) {
            let categ = e.target.getAttribute("category-name")
            filterCategory(categ)

        })
    }
}
function getDataOfCategory(category = '') {
    let temp = ''
    for (let i = 0; i < category.length; i++) {
        temp += `<div class="col-md-3 cursor text-center" category-name="${category[i].strCategory}">
                    <div category-name="${category[i].strCategory}" class="category position-relative overflow-hidden rounded-2">
                        <img src="${category[i].strCategoryThumb}" class="w-100" alt="photo of category" category-name="${category[i].strCategory}">
                        <div  id="carrds" class="layer p-2 text-black position-absolute top-100" category-name="${category[i].strCategory}">
                            <h3 category-name="${category[i].strCategory}">${category[i].strCategory}</h3>
                            <p category-name="${category[i].strCategory}" style="font-size: 14px;">${category[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}</p>
                        </div>
                    </div>
                </div>
    `
    }
    document.getElementById('categoryData').style.display = "block"
    document.getElementById('categoryData').innerHTML = temp
}

function showDetailsOfCategory(element) {
    let temp = ''
    for (let i = 0; i < element.length; i++) {
        temp += `
                    <div class="col-md-3 cursor" card-categorrry-name="${element[i].idMeal}">
                        <div id="${element[i].idMeal}" class="categorrry position-relative overflow-hidden rounded-2" card-categorrry-name="${element[i].idMeal}">
                            <img src="${element[i].strMealThumb}" class="w-100" alt="photo of meal" card-categorrry-name="${element[i].idMeal}">
                            <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" card-categorrry-name="${element[i].idMeal}">
                                <h3 card-categorrry-name="${element[i].idMeal}">${element[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>
                
        `}
    
    document.getElementById('categoryData').innerHTML = temp

}
async function filterCategory(nameCategory) {
    let category = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCategory}`)
    let response = await category.json()
    console.log(response.meals);
    showDetailsOfCategory(response.meals)
    let cardArea = document.querySelectorAll(".categorrry")
    for(let i = 0 ; i <cardArea.length ; i++){
        cardArea[i].addEventListener("click",function(e){
            let area = e.target.getAttribute("card-categorrry-name")
            console.log(area)
            document.querySelector('#categoryData').classList.add('d-none')
            getDetailsOfMealArea(area)
        })
    }

}
async function getDetailsOfMealArea(mealID) {
    let detailsMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    let resposne = await detailsMeal.json()
    console.log(resposne.meals);
    showDetailsMeal(resposne.meals[0])
}
function showDetailsMeal(element) {
    let ingrediant = ``
    for(let i = 1 ; i <= 20 ; i++){
        if(element[`strIngredient${i}`]){
            ingrediant += `<li class="alert alert-info m-2 p-1">${element[`strMeasure${i}`]} ${element[`strIngredient${i}`]}</li>`
        }
    }
    let tags = element.strTags?.split(',')
    if(!tags) tags = []
    let tagsStr = ``
    for(let i = 0 ; i < tags.length ; i++){
        tagsStr += `<li class="alert alert-danger m-2 p-1">${tags[i]}</li>`
    }
    let temp = `<div  class="col-md-4">
                            <img src="${element.strMealThumb}" class="w-100 rounded-3"  alt="photo of Details Meal">
                    </div>
                    <div class="col-md-7 text-white">
                            <h1>Instructions</h1>
                            <p>${element.strInstructions}
                            </p>
                            <h2>Area: <span>${element.strArea}</span></h2>
                            <h2>Category : <span>${element.strCategory}</span></h2>
                            <h3>Recipes :</h3>
                            <ul class="list-unstyled d-flex flex-wrap g-3">
                                ${ingrediant}
                            </ul>
                            <h3 class="mb-4">Tags :</h3>
                            <ul class="list-unstyled d-flex flex-wrap g-3">
                                ${tagsStr}
                            </ul> 
                            <div class="my-4">
                                <button class="btn btn-success text-white"><a class="text-decoration-none text-white" href=${element.strSource}>Source</a></button>
                                <button class="btn btn-danger"><a class="text-decoration-none text-white" href=${element.strYoutube}>Youtube</a></button>
                            </div>
                    </div>`
    
    document.getElementById('dataDetailsCategory').innerHTML = temp 
}


