// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a simple animation to the CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Add a simple fade-in animation for sections as they come into view
const sections = document.querySelectorAll('section');

const fadeInSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(fadeInSection, {
    root: null,
    threshold: 0.1
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    sectionObserver.observe(section);
});

// Add a simple image slider for the hero section
const heroImage = document.querySelector('.hero-image img');
const images = ['hero-image-1.jpg', 'hero-image-2.jpg', 'hero-image-3.jpg'];
let currentImageIndex = 0;

function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroImage.style.opacity = 0;
    setTimeout(() => {
        heroImage.src = images[currentImageIndex];
        heroImage.style.opacity = 1;
    }, 500);
}

setInterval(changeHeroImage, 5000);

// Add to cart functionality
const buyButtons = document.querySelectorAll('.buy-button');
let cartCount = 0;

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
        showAddToCartAnimation(button);
    });
});

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function showAddToCartAnimation(button) {
    const animatedElement = document.createElement('div');
    animatedElement.textContent = '+1';
    animatedElement.style.position = 'absolute';
    animatedElement.style.top = `${button.offsetTop}px`;
    animatedElement.style.left = `${button.offsetLeft}px`;
    animatedElement.style.opacity = 1;
    animatedElement.style.transition = 'all 0.5s ease';

    document.body.appendChild(animatedElement);

    setTimeout(() => {
        animatedElement.style.top = '20px';
        animatedElement.style.opacity = 0;
    }, 50);

    setTimeout(() => {
        document.body.removeChild(animatedElement);
    }, 550);
}

// Add a simple form validation for the newsletter subscription
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && isValidEmail(emailInput.value)) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Enhanced section visibility animation
const enhancedFadeInSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const enhancedSectionObserver = new IntersectionObserver(enhancedFadeInSection, {
    root: null,
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    enhancedSectionObserver.observe(section);
});

// Parallax effect for hero section
const heroSection = document.querySelector('#hero');
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Staggered animation for product grid
const productGrid = document.querySelector('.products-grid');
const products = productGrid.querySelectorAll('.product');

const staggeredFadeIn = (entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
};

const productObserver = new IntersectionObserver(staggeredFadeIn, {
    root: null,
    threshold: 0.1
});

products.forEach(product => {
    product.style.opacity = 0;
    product.style.transform = 'translateY(50px)';
    product.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    productObserver.observe(product);
});


// Smooth hover effect for product images
products.forEach(product => {
    const img = product.querySelector('img');
    product.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = product.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        img.style.transform = `scale(1.05) translate(${x * 10}px, ${y * 10}px)`;
    });
    product.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) translate(0, 0)';
    });
});

// Enhanced add to cart animation
function enhancedAddToCartAnimation(button) {
    const animatedElement = document.createElement('div');
    animatedElement.textContent = '🛒';
    animatedElement.style.position = 'absolute';
    animatedElement.style.fontSize = '24px';
    animatedElement.style.top = `${button.offsetTop}px`;
    animatedElement.style.left = `${button.offsetLeft}px`;
    animatedElement.style.opacity = 1;
    animatedElement.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

    document.body.appendChild(animatedElement);

    const cartIcon = document.querySelector('.cart-container');
    const cartRect = cartIcon.getBoundingClientRect();

    setTimeout(() => {
        animatedElement.style.top = `${cartRect.top + window.scrollY}px`;
        animatedElement.style.left = `${cartRect.left}px`;
        animatedElement.style.opacity = 0;
        animatedElement.style.transform = 'scale(0.5)';
    }, 50);

    setTimeout(() => {
        document.body.removeChild(animatedElement);
    }, 850);
}

// Update buy button event listeners
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        updateCartCount();
        enhancedAddToCartAnimation(button);
    });
});

// 平滑滚动和精确定位
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动时高亮当前部分
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const navHeight = document.querySelector('nav').offsetHeight;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 10; // 10px 缓冲
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const correspondingNavItem = document.querySelector(`nav a[href="#${section.id}"]`);
            if (correspondingNavItem) {
                document.querySelectorAll('nav a').forEach(item => item.classList.remove('active'));
                correspondingNavItem.classList.add('active');
            }
        }
    });
});

// 确保导航栏固定在顶部
const nav = document.querySelector('nav');
const navTop = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= navTop) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

let lastScrollTop = 0;
const navbar = document.querySelector('nav');
const navbarHeight = navbar.offsetHeight;

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const handleScroll = debounce(function() {
    const currentScrollTop = window.scrollY;
    
    if (currentScrollTop > lastScrollTop && currentScrollTop > navbarHeight) {
        // 向下滚动
        navbar.style.transform = `translateY(-${navbarHeight}px)`;
    } else {
        // 向上滚动
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}, 250);

window.addEventListener('scroll', handleScroll);