// const mobileImages = ['./images/mobile-image-hero-1.jpg', './images/mobile-image-hero-2.jpg', './images/mobile-image-hero-3.jpg'];
// Arrays for background images, titles, texts, and CTAs
const backgroundImages = ['./images/desktop-image-hero-1.jpg', './images/desktop-image-hero-2.jpg', './images/desktop-image-hero-3.jpg'];
const titles = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
];
const texts = [
    `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    `Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
];
const ctas = ['Shop now', 'Shop now', 'Shop now'];

// Select elements for updating content
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const imagesNavbar = document.querySelector('.header__images-navbar');
const titleElement = document.querySelector('.header__description__title');
const textElement = document.querySelector('.header__description__text');
const ctaElement = document.querySelector('.header__description__cta');

// Initialize the current image index
let currentImage = 0;

// Function to update content based on the current image index
function updateContent() {
    imagesNavbar.style.backgroundImage = `url(${backgroundImages[currentImage]})`;
    titleElement.textContent = titles[currentImage];
    textElement.textContent = texts[currentImage];
    ctaElement.textContent = ctas[currentImage];
}

// Right button click event - move to the next image
rightBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentImage++;
    if (currentImage > backgroundImages.length - 1) {
        currentImage = 0;
    }
    updateContent();
});

// Left button click event - move to the previous image
leftBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentImage--;
    if (currentImage < 0) {
        currentImage = backgroundImages.length - 1;
    }
    updateContent();
});

// Initial content setup
updateContent();

// Responsive navigation
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const mobileNav = document.querySelector('.mobile__header__images-nav-list');

openBtn.addEventListener('click', () => {
    mobileNav.style.display = 'flex';
})

closeBtn.addEventListener('click', () => {
    mobileNav.style.display = 'none';
})