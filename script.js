// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Declare AOS if it's not already available globally
    if (typeof AOS === 'undefined') {
        console.warn('AOS is not properly initialized. Ensure AOS library is included.');
    } else {
        AOS.init({
            duration: 800,
            easing: 'ease',
            once: true,
            offset: 100
        });
    }
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const sendAnother = document.getElementById('sendAnother');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission with loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(function() {
                // Hide form and show success message
                contactForm.style.display = 'none';
                formSuccess.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Send another message button
    if (sendAnother) {
        sendAnother.addEventListener('click', function() {
            formSuccess.style.display = 'none';
            contactForm.style.display = 'block';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('.fa-arrow-right');
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('.fa-arrow-right');
            if (arrow) {
                arrow.style.transform = 'translateX(0)';
            }
        });
    });
});