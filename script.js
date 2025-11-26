// ===================================
// Configuración del formulario de contacto
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // El formulario de contacto ha sido reemplazado por un enlace directo a correo/whatsapp.
    // Se elimina la lógica de manejo del formulario.
    
    // ===================================
    // Navbar scroll effect
    // ===================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    // ===================================
    // Smooth scroll para enlaces de navegación
    // ===================================
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar el menú móvil si está abierto
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        const navbarToggler = document.querySelector('.navbar-toggler');
                        navbarToggler.click();
                    }
                }
            }
        });
    });
    
    // ===================================
    // Chatbot functionality
    // ===================================
    const chatbotButton = document.getElementById('chatbotButton');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotBody = document.getElementById('chatbotBody');
    
    // Abrir/cerrar chatbot
    chatbotButton.addEventListener('click', function() {
        chatbotWindow.style.display = chatbotWindow.style.display === 'none' ? 'flex' : 'none';
    });
    
    chatbotClose.addEventListener('click', function() {
        chatbotWindow.style.display = 'none';
    });
    
    // Respuestas predefinidas del chatbot
    const chatbotResponses = {
        'hola': '¡Hola! ¿En qué puedo ayudarte hoy? Puedo darte información sobre nuestros servicios, precios, o agendar una sesión estratégica.',
        'servicios': 'Ofrecemos consultoría en IA, automatización de procesos, análisis de datos, implementación de herramientas de IA y capacitación personalizada. ¿Sobre cuál te gustaría saber más?',
        'precio': 'Nuestros precios varían según las necesidades específicas de cada cliente. Te recomiendo solicitar una sesión estratégica gratuita donde evaluaremos tu caso y te daremos un presupuesto personalizado.',
        'cita': 'Para agendar una sesión estratégica gratuita, por favor completa el formulario de contacto en esta página o llámanos al +52 222 789 6404.',
        'contacto': 'Puedes contactarnos por teléfono al +52 222 789 6404 (México) o +1 423 803 8252 (USA), o por correo a dejesus.antonio@hcaa.com.mx',
        'tiempo': 'Nuestros clientes suelen ver resultados significativos en 90 días, con aumentos de eficiencia de hasta un 40%.',
        'industrias': 'Trabajamos con PYMES, consultorios médicos, dentistas, profesionales independientes, manufactura, retail, automotriz, farmacéutico y más.',
        'default': 'Gracias por tu pregunta. Para una respuesta más detallada, te recomiendo contactar directamente con nuestro equipo o solicitar una sesión estratégica gratuita.'
    };
    
    // Función para enviar mensaje
    function sendMessage() {
        const message = chatbotInput.value.trim().toLowerCase();
        
        if (message === '') return;
        
        // Agregar mensaje del usuario
        const userMessageDiv = document.createElement('div');
        userMessageDiv.className = 'chatbot-message user-message';
        userMessageDiv.innerHTML = '<p>' + chatbotInput.value + '</p>';
        chatbotBody.appendChild(userMessageDiv);
        
        // Limpiar input
        chatbotInput.value = '';
        
        // Buscar respuesta
        let response = chatbotResponses['default'];
        
        for (let key in chatbotResponses) {
            if (message.includes(key)) {
                response = chatbotResponses[key];
                break;
            }
        }
        
        // Agregar respuesta del bot después de un breve delay
        setTimeout(function() {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.className = 'chatbot-message bot-message';
            botMessageDiv.innerHTML = '<p>' + response + '</p>';
            chatbotBody.appendChild(botMessageDiv);
            
            // Scroll al final
            chatbotBody.scrollTop = chatbotBody.scrollHeight;
        }, 500);
        
        // Scroll al final
        chatbotBody.scrollTop = chatbotBody.scrollHeight;
    }
    
    // Enviar mensaje con botón
    chatbotSend.addEventListener('click', sendMessage);
    
    // Enviar mensaje con Enter
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // ===================================
    // Animación de elementos al hacer scroll
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos que queremos animar
    const animatedElements = document.querySelectorAll(
        '.solution-card, .benefit-item, .process-step, .testimonial-card, .case-study-card'
    );
    
    animatedElements.forEach(el => observer.observe(el));
    
    // ===================================
    // Contador animado para estadísticas (si se agregan)
    // ===================================
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(function() {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // La validación de formulario ha sido eliminada ya que el formulario fue removido.
    
    // ===================================
    // Efecto parallax suave en hero section
    // ===================================
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.3;
            heroSection.style.transform = 'translateY(' + parallax + 'px)';
        });
    }
    
    // ===================================
    // Lazy loading para imágenes
    // ===================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // ===================================
    // Botón de scroll to top (opcional)
    // ===================================
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--color-primary);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0, 192, 184, 0.4);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // ===================================
    // Console log para debugging
    // ===================================
    console.log('HCAA Landing Page - JavaScript cargado correctamente');
});
