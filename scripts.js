// Scroll to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.opacity = 1;
        } else {
            scrollToTopButton.style.opacity = 0;
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
// Image Hover Effect
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const image = item.querySelector('img');

        item.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
// Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;

        if (!name || !email) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });
});
// JavaScript
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
// JavaScript
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
});
// JavaScript
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            reveal.classList.add('visible');
        }
    });
});
// JavaScript
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const close = document.querySelector('.close');

openModal.onclick = () => {
    modal.style.display = 'block';
}

close.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


