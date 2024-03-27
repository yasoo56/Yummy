
import { getDetailsMeal } from "./home.module.js";
import { searchByName, showSearchInputs, searchByLetter } from './search.module.js'
import validation from './validation.module.js'
import { showCategory } from './category.module.js'
import { getDataOfArea } from './area.module.js'
import { getIng } from './ingerd.module.js'
// Validation
validation()
// show Category
showCategory()

// get Data of Area
getDataOfArea()



getIng()


// To run Home
getDetailsMeal()



// To run Category
showCategory()



// To run search
showSearchInputs()
var searchNameInput = document.getElementById("searchInput")
var searchLetterInput = document.getElementById("searchFLE")

searchNameInput.addEventListener("keypress", function () {
    searchByName(searchNameInput.value)
})

searchLetterInput.addEventListener("keypress", function () {
    searchByLetter(searchLetterInput.value)
})
$('#clickSearch').on('click', function () {
    $('#data').addClass('d-none')
    $('#categbage').addClass('d-none')
    $('#formclick').addClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#dataDetailsArea').addClass('d-none')
    $('#dataDetailsIng').addClass('d-none')
    $('#detailsArea').addClass('d-none')
    $('#ingredDetails').addClass('d-none')
    $('#searchremove').removeClass('d-none')
    $('#dataDetailsCategory').addClass('d-none')
})
$('#clickCateg').on('click', function () {
    $('#formclick').addClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#categbage').removeClass('d-none')
    $('#dataDetailsIng').addClass('d-none')
    $('#dataDetailsArea').addClass('d-none')
})
$('#clickArea').on('click', function () {
    $('#formclick').addClass('d-none')
    $('#areaClick').removeClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#categbage').addClass('d-none')
    $('#dataDetailsIng').addClass('d-none')
    $('#dataDetailsCategory').addClass('d-none')
})
$('#clickCont').on('click', function () {
    $('#formclick').removeClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').addClass('d-none')
    $('#categbage').addClass('d-none')
    $('#dataDetailsArea').addClass('d-none')
    $('#dataDetailsIng').addClass('d-none')
    $('#dataDetailsCategory').addClass('d-none')
    $('#detailsArea').addClass('d-none')
})
$('#clickIng').on('click', function () {
    $('#formclick').addClass('d-none')
    $('#areaClick').addClass('d-none')
    $('#searchremove').addClass('d-none')
    $('#data').addClass('d-none')
    $('#ingclick').removeClass('d-none')
    $('#categbage').addClass('d-none')
    $('#dataDetailsArea').addClass('d-none')
    $('#detailsArea').addClass('d-none')
})




// to open side-nav
function openNav() {
    $('.side-menu').animate({
        left: '0px'
    }, 500)
    $(".open").removeClass("fa-align-justify");
    $(".open").addClass("fa-x");
    $(".side-navbar li").animate({
        top: 0
    }, 500)
}
let width = $('.sideBar').outerWidth()
$('.side-menu').css('left', `-${width}`)
function closeNav() {
    $('.side-menu').animate({
        left: `-${width}px`
    }, 500)
    $(".open").addClass("fa-align-justify");
    $(".open").removeClass("fa-x");
    $(".side-navbar li").animate({
        top: 300
    }, 500)
}
$(".side-menu i.open").click(() => {
    if ($(".side-menu").css("left") == "0px") {
        closeNav()

    } else {
        openNav()
    }
})
