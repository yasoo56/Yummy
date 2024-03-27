
export async function getDataOfArea(){
    let area = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let response = await area.json()
    // console.log(response.meals);
    showData(response.meals)
    let cards = document.querySelectorAll("#cards")
    for(let i = 0 ; i <cards.length ; i++){
        cards[i].addEventListener("click",function(e){
            let area = e.target.getAttribute("area-name")
            // console.log(area)
            document.querySelector('#rowArea').classList.add('d-none')
            getAreaMeals(area)
        })
    }
}

function showData(element){
    let temp = ''
    for(let i = 0 ; i < element.length ; i++){
        temp += `
                    <div id="cards"  class="col-md-3 text-center cursor" area-name = ${element[i].strArea}>
                            <i class="fa-solid fa-house-laptop fs-1" area-name = ${element[i].strArea}></i>
                            <h3 area-name = ${element[i].strArea}>${element[i].strArea}</h3>
                    </div>
        `
    }
    document.getElementById('rowArea').innerHTML = temp
}
function showDetailsOfArea(element){
    let temp = ''
    for(let i = 0 ; i < element.length ; i++){
        temp += `
               
                    <div class="col-md-3 cursor" card-area-name= ${element[i].idMeal}>
                        <div class="area position-relative overflow-hidden rounded-2" card-area-name= ${element[i].idMeal}>
                            <img src="${element[i].strMealThumb}" class="w-100" alt="photo of meal" card-area-name= ${element[i].idMeal}>
                            <div class="layer d-flex align-items-center p-2 text-black position-absolute top-100" card-area-name= ${element[i].idMeal}>
                                <h3 card-area-name= ${element[i].idMeal}>${element[i].strMeal}</h3>
                            </div>
                        </div>
                    </div>
                
        `
    }
    document.getElementById('detailsArea').innerHTML = temp
}
async function getAreaMeals(area) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()
    console.log(response);

    showDetailsOfArea(response.meals)
    let cardArea = document.querySelectorAll(".area")
    for(let i = 0 ; i <cardArea.length ; i++){
        cardArea[i].addEventListener("click",function(e){
            let area = e.target.getAttribute("card-area-name")
            console.log(area)
            document.querySelector('#detailsArea').classList.add('d-none')
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
                                <button class="btn btn-success text-white"><a target="_blank" class="text-decoration-none text-white" href=${element.strSource}>Source</a></button>
                                <button class="btn btn-danger"><a target="_blank" class="text-decoration-none text-white" href=${element.strYoutube}>Youtube</a></button>
                            </div>
                    </div>`
    
    document.getElementById('dataDetailsArea').innerHTML = temp 
}


