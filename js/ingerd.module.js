$(document).ready(function () {
    $('.bg').fadeOut(2000, function () {
        $('.bg').removeClass('d-flex')
    })
})
export async function getIng(){
    let ingData = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let response = await ingData.json()
    // console.log(response);
    showDataIng(response.meals.slice(0, 20))
    let cardsIng = document.querySelectorAll("#cardsIng")
    for(let i = 0 ; i <cardsIng.length ; i++){
        cardsIng[i].addEventListener("click",function(e){
            let ingre = e.target.getAttribute("ing-name")
            // console.log(ingre)
            document.querySelector('#ingred').classList.add('d-none')
            getIngrMeals(ingre)
        })
    }
}
function showDataIng(element){
    let temp = ''
    for(let i = 0 ; i < element.length ; i++){
        temp += `
                    <div id="cardsIng"  class="col-md-3 text-center cursor text-white" ing-name = ${element[i].strIngredient}>
                            <i class="fa-solid fa-drumstick-bite fs-1" ing-name = ${element[i].strIngredient}></i>
                            <h3 ing-name = ${element[i].strIngredient}>${element[i].strIngredient}</h3>
                            <p ing-name = ${element[i].strIngredient}>${element[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
        `
    }
    document.getElementById('ingred').innerHTML = temp
}
// 
async function getIngrMeals(inger='') {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inger}`)
    response = await response.json()
    console.log(response.meals);
    showDetailsOfIng(response.meals)
    let cardInge = document.querySelectorAll("#ingerdtant")
    for(let i = 0 ; i <cardInge.length ; i++){
        cardInge[i].addEventListener("click",function(e){
            let ingredt = e.target.getAttribute("card-ingrede-name")
            console.log(ingredt)
            document.querySelector('#ingredDetails').classList.add('d-none')
            getDetailsOfMealInge(ingredt)
        })
    }
}
function showDetailsOfIng(element){
    let temp = ''
    for(let i = 0 ; i < element.length ; i++){
        temp += `
               
                    <div id="ingerdtant" class="col-md-3 cursor" card-ingrede-name= ${element[i].idMeal}>
                        <div class="ingred position-relative overflow-hidden rounded-2" card-ingrede-name= ${element[i].idMeal}>
                            <img src="${element[i].strMealThumb}" class="w-100" alt="photo of meal" card-ingrede-name= ${element[i].idMeal}>
                            <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" card-ingrede-name= ${element[i].idMeal}>
                                <h3 card-ingrede-name= ${element[i].idMeal}>${element[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>
                
        `
    }
    document.getElementById('ingredDetails').innerHTML = temp
}

async function getDetailsOfMealInge(mealID) {
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
                                <button class="btn btn-success text-white"><a target="_blank" class="text-decoration-none text-white" href=${element.strSource}>Source</a></button>
                                <button class="btn btn-danger"><a target="_blank" class="text-decoration-none text-white" href=${element.strYoutube}>Youtube</a></button>
                            </div>
                    </div>`
    
    document.getElementById('dataDetailsIng').innerHTML = temp 
}
