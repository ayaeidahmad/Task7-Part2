//////////////TASK1///////////////////////

const img = document.querySelector(".img")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")
const img5 = document.querySelector(".img5")
const section1 = document.querySelector(".section1")
const section1_h1 = document.querySelector(".section1-h1")
const section1_p = document.querySelector(".section1-p")

function change(elememt) {
    img.src=elememt.src
    if (elememt.src==img1.src) {
        section1.style.backgroundColor = "#e60000";
        section1_h1.style.color= "white"
        section1_p.style.color= "white"
    }
    else if (elememt.src==img2.src) {
        section1.style.backgroundColor = "#454440";
        section1_h1.style.color= "white"
        section1_p.style.color= "white"
    }
    else if (elememt.src==img3.src) {
        section1.style.backgroundColor = "#e7d2b5";
        section1_h1.style.color= "black"
        section1_p.style.color= "black"
    }
    else if (elememt.src==img4.src) {
        section1.style.backgroundColor = "#93abc3";
        section1_h1.style.color= "white"
        section1_p.style.color= "white"
    }
    else if (elememt.src==img5.src) {
        section1.style.backgroundColor = "#a38840";
        section1_h1.style.color= "white"
        section1_p.style.color= "white"
    }
}

/////////////////////TASK2////////////////////

const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
const section2 = document.querySelector(".section2")
const section2_h2 = document.querySelector(".section2-h2")
const section2_p = document.querySelector(".section2-p")

function showMoon(elememt) {
    sun.style.display = "inline"
    sun.style.color = "white"
    moon.style.display = "none"
    section2.style.backgroundColor = "black"
    section2_h2.style.color = "white"
    section2_p.style.color = "white"
}
function showSun(elememt) {
    sun.style.display = "none"
    moon.style.display = "inline"
    section2.style.backgroundColor = "white"
    section2_h2.style.color = "black"
    section2_p.style.color = "black"
}

////////////////TASK3///////////////////

let content = document.querySelectorAll(".content")

content.forEach(element => {
    element.addEventListener("click" , ()=> {

//// طريقة تانيه للتنفيذ بشكل مختلف : إذا علقت الاسطر 88 87 86 بصير التنفيذ كالتالي : لما اضغط بيظهر المحتوى المخفي ولما اضغط مرة تانيه عليه بيرجع بيختفي النص وهيك لكل العناصر التلاته

        content.forEach(item => {
            item.classList.remove("active")
        });
        element.classList.toggle("active")
    })
});


/////////////////////TASK4/////////////////////////

let stars = document.querySelectorAll(".star")

function showStar(num) {
    stars.forEach((star, index) => {
        if (index < num) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'black';
        }
    });
}