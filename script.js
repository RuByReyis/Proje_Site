const sliderContainer = document.querySelector('.kaydirici-ana_kapsayici');
const sliderImages = document.querySelectorAll('.kaydirici-resim');
const prevBtn = document.getElementById('oncekiBtn');
const nextBtn = document.getElementById('sonrakiBtn');

let currentIndex = 0;

function showImage(index) {
    const offset = -index * 100;
    sliderContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : sliderImages.length - 1;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < sliderImages.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});

// Başlangıçta ilk görüntüyü göster
showImage(currentIndex);