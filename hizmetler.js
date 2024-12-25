// Hizmetlerin üzerine gelindiğinde description kutucuğunu göster
document.querySelectorAll('.hizmet').forEach(hizmet => {
    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = hizmet.getAttribute('data-description');
    hizmet.appendChild(description);

    // Hizmet kutucuğuna tıklanınca ilgili sayfaya yönlendir
    hizmet.addEventListener('click', () => {
        window.location.href = hizmet.querySelector('a').getAttribute('href');
    });

    // Mouse ile üzerine gelindiğinde description kutucuğunu göster
    hizmet.addEventListener('mouseenter', () => {
        description.style.opacity = '1';
        description.style.transform = 'translateY(0)';
        description.style.transitionDelay = '0.2s';
    });

    // Mouse ile üzerinden çıkıldığında description kutucuğunu gizle
    hizmet.addEventListener('mouseleave', () => {
        description.style.opacity = '0';
        description.style.transform = 'translateY(20px)';
        description.style.transitionDelay = '0s';
    });
});
document.querySelectorAll('.hizmet').forEach(hizmet => {
    const description = hizmet.querySelector('.description');

    hizmet.addEventListener('mouseenter', () => {
        document.querySelectorAll('.hizmet').forEach(otherHizmet => {
            if (otherHizmet !== hizmet) {
                otherHizmet.style.filter = 'blur(3px)';
            }
        });
    });

    hizmet.addEventListener('mouseleave', () => {
        document.querySelectorAll('.hizmet').forEach(otherHizmet => {
            otherHizmet.style.filter = 'none';
        });
    });

    description.addEventListener('mouseenter', () => {
        document.querySelectorAll('.hizmet').forEach(otherHizmet => {
            if (otherHizmet !== hizmet) {
                otherHizmet.style.filter = 'blur(3px)';
            }
        });
    });

    description.addEventListener('mouseleave', () => {
        document.querySelectorAll('.hizmet').forEach(otherHizmet => {
            otherHizmet.style.filter = 'none';
        });
    });
});
