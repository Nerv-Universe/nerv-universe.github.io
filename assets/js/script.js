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

// Animasi fade-up dengan IntersectionObserver yang dioptimalkan
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    // Deteksi Firefox
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class untuk animasi
                requestAnimationFrame(() => {
                    entry.target.classList.add('show');
                });
                // Hentikan observasi setelah animasi
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15, // Tingkatkan threshold sedikit
        rootMargin: '0px 0px -50px 0px' // Tambahkan margin untuk trigger lebih awal
    });

    // Terapkan pengamatan dengan delay untuk setiap elemen
    fadeElements.forEach((el, index) => {
        // Tunggu DOM selesai loading
        setTimeout(() => {
            observer.observe(el);
        }, 100); // Delay minimal untuk memastikan smooth loading
    });

    // Aktifkan scroll setelah halaman selesai dimuat
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 300); // Kurangi delay loading
});

// Tambahkan event listener untuk memastikan semua gambar dimuat
window.addEventListener('load', function() {
    document.body.classList.remove('loading');
});