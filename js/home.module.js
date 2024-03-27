$(document).ready(function () {
    $('.bg').fadeOut(2000, function () {
        $('.bg').removeClass('d-flex')
    })
})
export async function getDetailsMeal(meal = '') {
    let mealList = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    let response = await mealList.json()
    getDataOfMeal(response.meals)
    let detailsData = document.querySelectorAll("#detailsData")
    for (let i = 0; i < detailsData.length; i++) {
        detailsData[i].addEventListener("click", function (e) {
            let mealID = e.target.getAttribute("home-detail")
            getDetailsOfMeal(mealID)
        })
    }
}
function getDataOfMeal(meal) {
    let temp = ''
    for (let i = 0; i < meal.length; i++) {
        temp += `<div id="detailsData" class="col-md-3 cursor" home-detail="${meal[i].idMeal}">
                    <div  class="meal position-relative overflow-hidden rounded-2" home-detail="${meal[i].idMeal}">
                        <img src="${meal[i].strMealThumb}" class="w-100" alt="photo of meal" home-detail="${meal[i].idMeal}">
                        <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" home-detail="${meal[i].idMeal}">
                            <h3 home-detail="${meal[i].idMeal}">${meal[i].strMeal}</h3>
                        </div>
                    </div>
                </div>
    `
    }
    document.getElementById('data').innerHTML = temp
}

async function getDetailsOfMeal(mealID) {
    $('.bg').addClass('d-flex')
    let detailsMeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    let resposne = await detailsMeal.json()
    console.log(resposne.meals);
    $('.bg').removeClass('d-flex')
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
                            <h1>${element.strMeal}</h1>
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
    
    document.getElementById('data').innerHTML = temp 
}

