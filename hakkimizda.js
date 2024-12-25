// JavaScript ile Slider
const slider = document.querySelector('.kaydirici');
const images = document.querySelectorAll('.kaydirici img');

let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Son resimden sonra başa döner
    const offset = -currentIndex * 100; // Her resim için %100 kaydırma
    slider.style.transform = `translateX(${offset}%)`;
}

// Her 3 saniyede bir geçiş yap
setInterval(showNextImage, 3000);