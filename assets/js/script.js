// Tambahkan class ke <html> untuk JavaScript
document.documentElement.classList.add('js-enabled');

// Nonaktifkan scroll sementara saat halaman dimuat
document.body.classList.add('loading');

// Deteksi scroll untuk navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Jika di-scroll lebih dari 50px
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// Animasi fade-up dengan IntersectionObserver
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan delay 100ms sebelum animasi dimulai
                setTimeout(() => {
                    entry.target.classList.add('show');
                }, 100);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Aktifkan scroll setelah halaman selesai dimuat
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 500); // Delay 500ms untuk memastikan semua elemen sudah dimuat
});