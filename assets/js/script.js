//////////////TASK1///////////////////////

const section1 = document.querySelector(".section1")
section1.innerHTML = `
                <div class="part">
                    <div class="part1">
                        <h1 class="section1-h1">iPhone 13 pro max</h1>
                        <p class="section1-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas alias, natus fugit quae magnam perferendis?
                            Voluptas alias, natus fugit quae magnam perferendis
                        </p>
                    </div>
                    <div class="part2">
                        <img class="img" src="./assets/images/0.png" alt="iphone1">
                    </div>
                </div>
                <div class="images">
                    <img onclick="change(this)" id="image" class="img1" src="./assets/images/0.png" alt="iphone1">
                    <img onclick="change(this)" id="image" class="img2" src="./assets/images/1.png" alt="iphone2">
                    <img onclick="change(this)" id="image" class="img3" src="./assets/images/2.png" alt="iphone3">
                    <img onclick="change(this)" id="image" class="img4" src="./assets/images/3.png" alt="iphone4">
                    <img onclick="change(this)" id="image" class="img5" src="./assets/images/4.png" alt="iphone5">
                </div>`

const img = document.querySelector(".img")
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")
const img4 = document.querySelector(".img4")
const img5 = document.querySelector(".img5")
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

const section2 = document.querySelector(".section2")
section2.innerHTML = `
                <i onclick="showMoon()" class="fa-regular fa-moon moon"></i>
                <i onclick="showSun()" class="fa-regular fa-sun sun"></i>
                <div class="contents">
                    <h2 class="section2-h2">Hello World</h2>
                    <p class="section2-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptate? Animi commodi sit earum quibusdam culpa iure numquam eos magnam inventore voluptates officiis aperiam, rerum ipsum veniam, impedit possimus eligendi!</p>
                </div> `

const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")
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

const section3 = document.querySelector(".section3")
section3.innerHTML = `
                <div class="contents">
                    <div class="content">
                        <div class="para">
                            <p>How many team members can I invite ? </p>
                            <i  class="fa-solid fa-chevron-down chevron-down"></i>
                            <i class="fa-solid fa-chevron-up chevron-up"></i>
                        </div>
                        <div class="para-hiden">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis voluptatibus recusandae sapiente officiis hic aliquid adipisci officia inventore eius deleniti animi ratione, soluta, incidunt quae? At illum deserunt saepe!
                        </div>
                    </div>
                    <div class="content">
                        <div class="para">
                            <p>What is the maximum file upload size ?</p>
                            <i  class="fa-solid fa-chevron-down chevron-down"></i>
                            <i class="fa-solid fa-chevron-up chevron-up"></i>
                        </div>
                        <div class="para-hiden">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis voluptatibus recusandae sapiente officiis hic aliquid adipisci officia inventore eius deleniti animi ratione, soluta, incidunt quae? At illum deserunt saepe!
                        </div>
                    </div>
                    <div class="content">
                        <div class="para">
                            <p>How do I reset my password ?</p>
                            <i  class="fa-solid fa-chevron-down chevron-down"></i>
                            <i class="fa-solid fa-chevron-up chevron-up"></i>
                        </div>
                        <div class="para-hiden">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas omnis voluptatibus recusandae sapiente officiis hic aliquid adipisci officia inventore eius deleniti animi ratione, soluta, incidunt quae? At illum deserunt saepe!
                        </div>
                    </div>
                </div> `

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

const section4 = document.querySelector(".section4")
section4.innerHTML = `
                <div class="contents">
                    <p class="p1">How was your experience</p>
                    <div class="stars">
                        <i onclick="showStar(1)" class="fa-solid fa-star star"></i>
                        <i onclick="showStar(2)" class="fa-solid fa-star star"></i>
                        <i onclick="showStar(3)" class="fa-solid fa-star star"></i>
                        <i onclick="showStar(4)" class="fa-solid fa-star star"></i>
                        <i onclick="showStar(5)" class="fa-solid fa-star star"></i>
                    </div>
                    <p class="p2">It is awesome</p>
                </div> `

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