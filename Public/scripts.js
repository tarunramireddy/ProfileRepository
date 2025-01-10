// Smooth scrolling on navbar click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

// Scroll progress bar functionality
window.onscroll = function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;
    
    document.getElementById('progressBar').style.width = scrollPercentage + '%';
};

// // Scroll reveal effect for sections
// window.addEventListener('scroll', revealElements);

// function revealElements() {
//     const elements = document.querySelectorAll('.reveal');
//     elements.forEach(element => {
//         if (isElementInViewport(element)) {
//             element.classList.add('show');
//         } else {
//             element.classList.remove('show');
//         }
//     });
// }

// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return rect.top >= 0 && rect.bottom <= window.innerHeight;
// }

// // Add reveal class to sections
// document.querySelectorAll('section').forEach(section => {
//     section.classList.add('reveal');
// });

// Highlight active link on scroll
document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY + 100;
    document.querySelectorAll('.nav-link').forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
