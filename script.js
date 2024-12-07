// Slider Testimonial
$(document).ready(function () {
    let slideIndex = 1;
    const totalSlides = 3;
    const changeSlide = () => {
        $(`#slide_${slideIndex}`).prop('checked', true);
        slideIndex = (slideIndex % totalSlides) + 1;
    };
    setInterval(changeSlide, 3000);
});

// Nav - animate
let ulSpace = document.getElementById("ul-active");
let btn = ulSpace.getElementsByClassName("btn");
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Image Change
let mainDog = document.getElementById("mainDog");
let dogName = document.getElementById("dogName");
let dogAbt = document.getElementById("dogAbt");
let dogNum = document.getElementById("dogNum");
let dogBal = document.getElementById("dogBal");
let knowMoreBtn = document.getElementById("KnowMore-btn");
let youTubemore = document.getElementById("youTubemore");

let labBtn = document.getElementById("labBtn");
labBtn.addEventListener("click", function () {
    knowMoreBtn.href = "https://en.wikipedia.org/wiki/Labrador_Retriever";
    youTubemore.href = "https://youtu.be/CbAh8_i8mTM?si=klfIGwObHtQTByYK";
    let labrador = document.getElementById('d-labrador');
    let husky = document.getElementById('d-husky');
    labrador.classList.add("scro-act");
    mainDog.src = "./Image/labraador-dog.jpg";
    dogName.innerText = "LABRADOR";
    dogAbt.innerText = "The Labrador Retriever or simply Labrador is a British breed of retriever gun dog. It was developed in the United Kingdom from St. John's water dogs imported from the colony of Newfoundland (now a province of Canada), and was named after the Labrador region of that colony. It is among the most commonly kept dogs in several countries, particularly in the European world."
    dogNum.innerText = "01";
    dogBal.innerText = "/5";
    rott.classList.remove("scro-act");
    labrador.classList.add("scro-act");
    shitzu.classList.remove("scro-act");
    poddle.classList.remove("scro-act");
    husky.classList.remove("scro-act");
})

let HuskyBtn = document.getElementById("HuskyBtn");
HuskyBtn.addEventListener("click", function () {
    knowMoreBtn.href = "https://en.wikipedia.org/wiki/siberian husky";
    youTubemore.href = "https://youtu.be/EqilTiobZbs?si=q0SXPN_NwyNDJOvc";
    let husky = document.getElementById('d-husky');
    mainDog.src = "./Image/husky-dog.jpg";
    dogName.innerText = "SIBERIAN HUSKY";
    dogAbt.innerText = "The Siberian Husky is a medium-sized working sled dog breed.it belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.Siberian Huskies originated in Northeast Asia where they are bred by the Chukchi people of Siberia for companionship."
    dogNum.innerText = "02";
    dogBal.innerText = "/5";
    husky.classList.add("scro-act");
    poddle.classList.remove("scro-act");
    rott.classList.remove("scro-act");
    labrador.classList.remove("scro-act");
    shitzu.classList.remove("scro-act");
})


let podleBtn = document.getElementById("poodleBtn");

podleBtn.addEventListener("click", function () {
    knowMoreBtn.href = "https://en.wikipedia.org/wiki/poodle";
    youTubemore.href = "https://youtu.be/CxvQy6yIQPM?si=iMygmi5ZyLac0fYX";
    let poddle = document.getElementById('d-poddle');
    poddle.classList.add("scro-act");
    mainDog.src = "./Image/poodle-dog.jpg";
    dogName.innerText = "POODLE"
    dogAbt.innerText = "The Poodle, called the Pudel in German and the Caniche in French, is a breed of water dog. The breed is divided into four varieties based on size, the Standard Poodle, Medium Poodle, Miniature Poodle and Toy Poodle, although the Medium Poodle is not universally recognised.Poodles are active and intelligent, and are particularly able to learn from humans."
    dogNum.innerText = "03";
    dogBal.innerText = "/5";
})

let rotteBtn = document.getElementById("rotteBtn");

rotteBtn.addEventListener("click", function () {
    knowMoreBtn.href = "https://en.wikipedia.org/wiki/rottweiler";
    youTubemore.href = "https://youtu.be/CxvQy6yIQPM?si=iMygmi5ZyLac0fYX";
    mainDog.src = "./Image/rot.png";
    mainDog.style.width = "100%"
    dogName.innerText = "ROTTWEILER"
    dogAbt.innerText = "The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.The dogs were known in German as Rottweiler Metzgerhund, meaning Rottweil butchers' dogs because their main use was to herd livestock and pull carts laden with butchered meat to market.Rottweilers are now also used as search and rescue dogs, guard dogs, and police dogs.";
    dogNum.innerText = "04";
    dogBal.innerText = "/5";
    let rott = document.getElementById('d-rott');
    rott.classList.add("scro-act");
    labrador.classList.remove("scro-act");
    shitzu.classList.remove("scro-act");
    poddle.classList.remove("scro-act");
    husky.classList.remove("scro-act");
})

let shitzuBtn = document.getElementById("shitzuBtn");

shitzuBtn.addEventListener("click", function () {
    knowMoreBtn.href = "https://en.wikipedia.org/wiki/Shih_Tzu";
    youTubemore.href = "https://youtu.be/M8Oq27cV-Us?si=gRO49TEBe4pv-oAO";
    mainDog.src = "./Image/shitzu-dog.jpg";
    dogName.innerText = "SHITZU";
    dogAbt.innerText = "The Shih Tzu is a sturdy little dog with a small snout and normally has large dark brown eyes. The Chinese have described their head shapes as 'owl head' and 'lion head', and their mouth as 'frog mouths'.A Shih Tzu should stand no more than 26.7 cm (101⁄2') at the withers and with an ideal weight of 4.0 to 7.5kg (9 to 17 lbs).";
    dogNum.innerText = "05";
    dogBal.innerText = "/5"
    let shitzu = document.getElementById('d-shitzu');
    shitzu.classList.add("scro-act");
    labrador.classList.remove("scro-act");
    rott.classList.remove("scro-act");
    poddle.classList.remove("scro-act");
    husky.classList.remove("scro-act");
})

let catego = document.getElementById("catego")
function viewPortWeb() {
    let val = scrollY;
    catego.style.marginTop = val * 0.1 + "px";
}
function viewPortmbl() {
    let val = scrollY;
    catego.style.marginTop = val * 0.03 + "px";
}

window.addEventListener("scroll", () => {
    if (window.matchMedia("(min-width:1024px").matches) {
        viewPortWeb();
    }
    else if (window.matchMedia("(min-width:320px").matches) {
        viewPortmbl();
    }
})

// parallax-Container
let prlDog = document.getElementById('prl-dog');
let prlrbt = document.getElementById('prl-rbt');
let prlcat = document.getElementById('prl-cat');
let prlparrot = document.getElementById('prl-parrot');
// window.addEventListener("scroll", () => {
//     let prlxVal = scrollY;
//     console.log(prlxVal * 1 + "px");
//     prlDog.style.scrollBehavior = "smooth";
//     prlDog.style.top = prlxVal * 0.1 + "px";
//     prlDog.style.left = prlxVal * 0.05 + "px";

//     prlrbt.style.scrollBehavior = "smooth"
//     prlrbt.style.bottom = prlxVal * 0.05 + "px";
//     prlrbt.style.left = prlxVal * 0.05 + "px";

//     prlcat.style.scrollBehavior = "smooth"
//     prlcat.style.top = prlxVal * 0.1 + "px";

//     prlparrot.style.scrollBehavior = "smooth"
//     prlparrot.style.bottom = prlxVal * 0.04 + "px";
//     prlparrot.style.right = prlxVal * 0.05 + "px";
// })


function viewPortMobile() {
    let prlxVal = window.scrollY;
    let viewportHeight = window.innerWidth;
    prlDog.style.scrollBehavior = "smooth";
    prlDog.style.top = (prlxVal * 0.01 / viewportHeight) * 150 + "vh";
    prlDog.style.left = (prlxVal * 0.01 / viewportHeight) * 100 + "vw";
    prlrbt.style.bottom = (prlxVal * 0.01 / viewportHeight) * 150 + "vh";
    prlrbt.style.left = (prlxVal * 0.01 / viewportHeight) * 100 + "vw";
    prlcat.style.top = (prlxVal * 0.01 / viewportHeight) * 150 + "vh";
    prlcat.style.right = (prlxVal * 0.01 / viewportHeight) * 100 + "vw";
    prlparrot.style.bottom = (prlxVal * 0.01 / viewportHeight) * 150 + "vh";
    prlparrot.style.right = (prlxVal * 0.01 / viewportHeight) * 100 + "vw";
}
function deFalut() {
    let prlxVal = window.scrollY;
    let viewportHeight = window.innerWidth;
    prlDog.style.scrollBehavior = "smooth";
    prlDog.style.scrollBehavior = "smooth";
    prlDog.style.top = (prlxVal * 1/ viewportHeight) * 100 + "px";
    prlDog.style.left = (prlxVal * 1.5 / viewportHeight) * 100 + "px";

    prlrbt.style.scrollBehavior = "smooth"
    prlrbt.style.bottom = (prlxVal *1/ viewportHeight) * 100 + "px";
    prlrbt.style.left = (prlxVal * 1.5/ viewportHeight) * 100 + "px";

    prlcat.style.scrollBehavior = "smooth"
    prlcat.style.top = (prlxVal * 1/ viewportHeight) * 100 + "px";
    prlcat.style.right = (prlxVal * 1.5/ viewportHeight) * 100 + "px";

    prlparrot.style.scrollBehavior = "smooth"
    prlparrot.style.bottom = (prlxVal * 1/ viewportHeight) * 100 + "px";
    prlparrot.style.right = (prlxVal * 1.5/ viewportHeight) * 100 + "px";
}

function viewPortXXlScreen() {
    let prlxVal = window.scrollY;
    let viewportHeight = window.innerWidth;
    prlDog.style.scrollBehavior = "smooth";
    prlDog.style.top = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlDog.style.left = (prlxVal * 0.04 / viewportHeight) * 100 + "vw";

    prlrbt.style.scrollBehavior = "smooth";
    prlrbt.style.bottom = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlrbt.style.left = (prlxVal * 0.04 / viewportHeight) * 100 + "vw";

    prlcat.style.scrollBehavior = "smooth";
    prlcat.style.top = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlparrot.style.scrollBehavior = "smooth";

    prlparrot.style.bottom = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlparrot.style.right = (prlxVal * 0.04 / viewportHeight) * 100 + "vw";
}
function viewPortXlScreen() {
    let prlxVal = window.scrollY;
    let viewportHeight = window.innerWidth;
    prlDog.style.scrollBehavior = "smooth";
    prlDog.style.top = (prlxVal * 0.115 / viewportHeight) * 100 + "vh";
    prlDog.style.left = (prlxVal * 0.1 / viewportHeight) * 100 + "vw";

    prlrbt.style.scrollBehavior = "smooth";
    prlrbt.style.bottom = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlrbt.style.left = (prlxVal * 0.1 / viewportHeight) * 100 + "vw";

    prlcat.style.scrollBehavior = "smooth";
    prlcat.style.top = (prlxVal * 0.110 / viewportHeight) * 100 + "vh";
    prlcat.style.right = (prlxVal * 0.1 / viewportHeight) * 100 + "vw";
    prlparrot.style.scrollBehavior = "smooth";

    prlparrot.style.bottom = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlparrot.style.right = (prlxVal * 0.09 / viewportHeight) * 100 + "vw";
}

function viewPortXXXlScreen() {
    let prlxVal = window.scrollY;
    let viewportHeight = window.innerWidth;
    prlDog.style.scrollBehavior = "smooth";
    prlDog.style.transitionDuration='0.1s';
    prlDog.style.transitionTimingFunction='linear';
    prlDog.style.top = (prlxVal * 0.2 / viewportHeight) * 100 + "vh";
    prlDog.style.left = (prlxVal * 0.05 / viewportHeight) * 100 + "vw";

    prlrbt.style.scrollBehavior = "smooth";    
    prlrbt.style.bottom = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlrbt.style.left = (prlxVal * 0.06 / viewportHeight) * 100 + "vw";

    prlcat.style.scrollBehavior = "smooth";
    prlcat.style.top = (prlxVal * 0.2 / viewportHeight) * 100 + "vh";
    prlcat.style.right = (prlxVal * 0.06 / viewportHeight) * 100 + "vw";

    prlparrot.style.scrollBehavior = "smooth";

    prlparrot.style.bottom = (prlxVal * 0.1 / viewportHeight) * 100 + "vh";
    prlparrot.style.right = (prlxVal * 0.06 / viewportHeight) * 100 + "vw";
}
let deFlt = "(min-width:1301px) and (max-width:1400px)";
let mediaQuery = "(min-width:768px) and (max-width:900px)";

window.addEventListener("scroll", () => {

    if (window.matchMedia(deFlt).matches) {
        deFalut();
    }
    else if (window.matchMedia("(min-width: 1024px").matches) {
        viewPortXXXlScreen();
    }
    else if (window.matchMedia(mediaQuery).matches) {
        viewPortXlScreen();
    }
    else if (window.matchMedia("(min-width: 601px").matches) {
        viewPortXXlScreen();
    }
    else if (window.matchMedia("(min-width: 320px").matches) {
        viewPortMobile();
    }
    else {
        deFalut();
    }
});



// Accordian

$(document).ready(function () {
    let $accoItemHead = $(".accordion-item-header");

    $accoItemHead.on("click", function () {
        let $ActiveItemHeader = $(".accordion-item-header.ac-active");

        if ($ActiveItemHeader.length && !$ActiveItemHeader.is($(this))) {
            $ActiveItemHeader.removeClass("ac-active");
            $ActiveItemHeader.next().css("max-height", "0");
        }

        $(this).toggleClass("ac-active");
        let $accordionItemBody = $(this).next();
        if ($(this).hasClass("ac-active")) {
            $accordionItemBody.css("max-height", "50px");
        } else {
            $accordionItemBody.css("max-height", "0px");
        }
    });
});

// Toast
