// Carosel
let carouselItem = document.querySelectorAll(".carousel-item")
console.log(carouselItem);
let counts = 1;
carouselItem.forEach(
    (item, index) => {
        item.style.right = `${index * 200}%`
    }
)
let next = () => {
    counts++;
    if (counts >= carouselItem.length) {
        counts = 0;
    }
    carousel();
};
let pre = () => {
    counts--;
    if (counts < 0) {
        counts = carouselItem.length - 1;
    }
    carousel();
};

let carousel = () => {
    carouselItem.forEach(
        (item) => {
            item.style.transform = `translateX(${counts * 200}%)`
        }
    )
}
let autoScroll = () => {
    setInterval(next, 3000); // Change image every 3 seconds
};
window.onload = autoScroll;
// Toast
document.addEventListener('DOMContentLoaded', () => {
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastContainer = document.getElementById('toastContainer');
    const closeToastBtn = document.getElementById('closeToastBtn');
    if (toastTrigger) {
        toastTrigger.addEventListener('click', () => {
            toastContainer.style.display = 'block';
            setTimeout(() => {
                toastContainer.style.display = 'none';
            }, 5000);
        });
    }

    if (closeToastBtn) {
        closeToastBtn.addEventListener('click', () => {
            toastContainer.style.display = 'none';
        });
    }
});
// // Yoast Progress line
let progress = document.querySelector(".progress");
let timer2;
button.addEventListener("click", () => {
    progress.classList.add("pgrs-active");
    timer2 = setTimeout(() => {
        progress.classList.remove("pgrs-active");
    }, 5500);
});
closeToastBtn.addEventListener("click", () => {
    setTimeout(() => {
        progress.classList.remove("pgrs-active");
    }, 500);
    clearTimeout(timer2);
});
