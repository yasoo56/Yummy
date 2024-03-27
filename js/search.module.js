$(document).ready(function () {
    $('.bg').fadeOut(2000, function () {
        $('.bg').removeClass('d-flex')
    })
})
export function showSearchInputs() {
    let temp = `
            <div class="col-md-6">
                <input type="text"  placeholder="Search By Name" class="form-control bg-transparent text-white" id="searchInput">
            </div>
            <div class="col-md-6">
                <input type="text" placeholder="Search By First Letter" class="form-control bg-transparent text-white" id="searchFLE">
            </div>
    `
    document.getElementById('searchData').style.display = "block"
    document.getElementById('searchData').innerHTML = temp
}

export async function searchByName(name = '') {
    let nameSearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let response = await nameSearch.json()
    console.log(response);
    showDataOfSearch(response.meals)
}

export async function searchByLetter(letter) {
    let letterSearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let response = await letterSearch.json()
    console.log(response);
    showDataOfSearch(response.meals)
}

function showDataOfSearch(element) {
    let temp = ''
    for (let i = 0; i < element.length; i++) {
        temp += `
                <div class="col-md-3 cursor text-center">
                        <div  class="searchMeal position-relative overflow-hidden rounded-2">
                            <img src="${element[i].strMealThumb}" class="w-100" alt="photo of category">
                            <div class="layer p-2 text-black position-absolute top-100">
                                <h3>${element[i].strMeal}</h3>
                            </div>
                        </div>
                </div>
    `
    }
    document.getElementById('rowDataSearch').style.display = "block"
    document.getElementById('rowDataSearch').innerHTML = temp
}
