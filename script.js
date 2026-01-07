document.addEventListener('DOMContentLoaded', () => {

    /* ===================================
       1. Navbar Logic (Sticky & Mobile)
       =================================== */
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Sticky Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    mobileBtn.addEventListener('click', () => {
        const isFlex = navLinks.style.display === 'flex';
        
        if (isFlex) {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.padding = '24px';
            navLinks.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
            navLinks.style.gap = '16px';
        }
    });


    /* ===================================
       2. Scroll Animations (Fade Up)
       =================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


    /* ===================================
       3. Contact Form Handling
       =================================== */
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
    const errorMsg = document.getElementById('formError');
    const dateField = document.getElementById('fecha_envio');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // 1. Set Date
            const now = new Date();
            // Format: YYYY/MM/DD HH:MM
            // Or use simplified ISO, user asked for 'aaaa/mm/dd'
            // Let's provide a clear string
            dateField.value = now.getFullYear() + '/' + 
                              String(now.getMonth() + 1).padStart(2, '0') + '/' + 
                              String(now.getDate()).padStart(2, '0') + ' ' +
                              now.toLocaleTimeString();

            // 2. Gather Data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            // Disable button
            const updateBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = updateBtn.innerHTML;
            updateBtn.disabled = true;
            updateBtn.innerHTML = 'Enviando...';

            // 3. Send to Webhook
            const WEBHOOK_URL = 'https://n8n.hcaa-ia.cloud/webhook-test/99267fac-2f0a-4908-9c2d-ab6cb26ce60e';

            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // Success
                    form.style.display = 'none';
                    successMsg.style.display = 'block';
                } else {
                    throw new Error('Network response was not ok');
                }

            } catch (error) {
                console.error('Error:', error);
                errorMsg.style.display = 'block';
                // Re-enable button
                updateBtn.disabled = false;
                updateBtn.innerHTML = originalBtnText;
            }
        });
    }

});
