//START HEADER
// Start Navbar
//start burger to triangle and cross animation
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click', () => {
    if(!navbuttons.classList.contains('triangles')){
        navbuttons.classList.add('triangles');
        setTimeout(navchanges,500);
    }else{
        navbuttons.className = "navbar-toggler navbuttons";
    }
});

function navchanges(){
    navbuttons.classList.add('changes');
}
//end burger to triangle and cross animation

// for navbar
const navbar = document.querySelector('.navbar');
const navtexts = document.querySelector('.navtexts');

window.addEventListener('scroll', () => {
    const getscrolly = window.scrollY;

    if (getscrolly >= 200) {
        navbar.classList.add('navmenus');
        navtexts.style.color = "#d1788f";
    } else {
        navbar.classList.remove('navmenus');
        navtexts.style.color = "#201f41";
    }
});
// End Navbar

//Start Banner
const banner = document.querySelector('.banners');
const blocks = document.getElementsByClassName('blocks');


for (var i = 1; i < 400; i++) {
    banner.innerHTML += "<div class='blocks'></div>";
    blocks[i].style.animationDelay =`${i * 0.05}`;
    // blocks[i].style.animationDelay = ${i * 0.05}s;
}
//End Banner

//END HEADER

//START IMAGE CAROUSEL SECTION
const pagis = document.querySelectorAll('.page-item');
const carousels = document.querySelectorAll('.carousel-item');



pagis.forEach((pagi) => {
    pagi.addEventListener('click', () => {
        removeactive();
        pagi.classList.add('active');
        // console.log();
    });
});

function removeactive() {
    pagis.forEach((pagi) => {
        pagi.classList.remove('active');
    });

    carousels.forEach((carousel) => {
        carousel.classList.remove('active');
    })
}
//END IMAGE CAROUSEL SECTION

//START 1INC IMAGE SECTION
//END 1INC IMAGE SECTION



//START SERVICE SECTION
$(window).scroll(function(){
    let getscrolly = $(this).scrollTop();
    // console.log(getscrolly);

    if(getscrolly >= 1650){
        $('#card1').addClass('lefts');
        $('#card2').addClass('tops');
        $('#card3').addClass('bottoms');
        $('#card4').addClass('rights');
    }else{
        $('#card1').removeClass('lefts');
        $('#card2').removeClass('tops');
        $('#card3').removeClass('bottoms');
        $('#card4').removeClass('rights');
    }
});
//END SERVICE SECTION

// START CONTACT SECTION
const states = document.querySelectorAll("path");
const uls = document.querySelectorAll(".modals ul");
const modalel = document.querySelector(".modals");
const imagechange = document.querySelector(".img-cons");
const kachin = document.getElementById("kachin"),
    sagaing = document.getElementById("sagaing"),
    mandalay = document.getElementById("mandalay"),
    shan = document.getElementById("shan"),
    yangon = document.getElementById("yangon"),
    mon = document.getElementById("mon");


const closebtn = document.querySelector(".cancleicons");

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

closebtn.addEventListener("click", ()=>{
    changedisplay(modalel);
    uls.forEach( ul => ul.classList.replace("d-block", "d-none"));
});

states.forEach( state => {
        // console.log(state);

        state.addEventListener("click", (e)=> {
            const place = state.getAttribute("name");

            if(place === "Kachin"){
                changedisplay(modalel);
                imagechange.children[0].src= " ./assets/img/oneincimg/kachin.jpg";
                imagechange.children[1].innerText = "Kachin / MaNaw Festival";
                changedisplay(kachin);

            } else if(place === "Sagaing"){
                changedisplay(modalel);
                imagechange.children[0].src= "./assets/img/oneincimg/sagaing.jpg";
                imagechange.children[1].innerText = "Sagaing / Ayeyawaday River ";
                changedisplay(sagaing);
            } else if(place === "Shan"){
                changedisplay(modalel);
                imagechange.children[0].src= "./assets/img/oneincimg/shan.jpg";
                imagechange.children[1].innerText = "Shan / Innlay Lake";
                changedisplay(shan);
            } else if(place === "Mandalay"){
                changedisplay(modalel);
                imagechange.children[0].src= "./assets/img/oneincimg/mandalay.jpg";
                imagechange.children[1].innerText = "Mandalay / U Pain Bridge";
                changedisplay(mandalay);
            } else if(place === "Yangon"){
                changedisplay(modalel);
                imagechange.children[0].src= "./assets/img/oneincimg/yangon.jpg";
                imagechange.children[1].innerText = "Yangon / Shawe Dagon Pagoda";
                changedisplay(yangon);
            } else if(place === "Mon"){
                changedisplay(modalel);
                imagechange.children[0].src= "./assets/img/oneincimg/mon.jpg";
                imagechange.children[1].innerText = "Mandalay / Kyite Htee Yoe Pagoda";
                changedisplay(mon);
            }

        })
    }
)

function changedisplay(x){
    if(x.classList.contains("d-none")){
        x.classList.remove("d-none");
        x.classList.add("d-block");
    } else {
        x.classList.remove("d-block");
        x.classList.add("d-none");
    }
}

function changealldisplay(){
    changedisplay(kachin);
    changedisplay(sagaing);
    changedisplay(mandalay);
    changedisplay(yangon);
    changedisplay(shan);
    changedisplay(mon);
}




// END CONTACT SECTION

const copy = document.querySelector('.date');
const year = new Date().getFullYear();

copy.textContent = year;