# Landing Page HCAA - HC Advanced Automation S.A. de C.V.

## Descripción
Landing page profesional y responsiva para HCAA, empresa especializada en soluciones de Inteligencia Artificial y Automatización Industrial.

## Características
- ✅ HTML/CSS/JavaScript tradicional (sin frameworks)
- ✅ Bootstrap 5 para diseño responsivo
- ✅ Diseño moderno con colores corporativos (teal/cyan-verde #00c0b8)
- ✅ Fuentes Google: Inter y Manrope
- ✅ Formulario de contacto funcional
- ✅ Chatbot interactivo
- ✅ Animaciones suaves
- ✅ Totalmente responsivo (móvil, tablet, desktop)

## Estructura de archivos
```
hcaa-landing/
├── index.html          # Archivo HTML principal
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
└── images/             # Carpeta de imágenes
    ├── logo.png
    ├── hero-automation.jpg
    ├── business-growth.jpg
    ├── consultation.jpg
    ├── medical-office.jpg
    └── manufacturing.jpg
```

## Secciones incluidas
1. **Hero Section** - Propuesta de valor principal con CTA
2. **Problema** - Identificación del problema y urgencia
3. **Soluciones** - Servicios y beneficios ofrecidos
4. **Proceso** - Metodología de trabajo en 4 pasos
5. **Soporte** - Capacitación y soporte continuo
6. **Testimonios** - Opiniones de clientes reales
7. **Casos de Estudio** - Proyectos exitosos
8. **Nosotros** - Información sobre HCAA
9. **Contacto** - Formulario de captura de leads
10. **Footer** - Información de contacto completa

## Funcionalidades JavaScript
- Navegación suave entre secciones
- Formulario de contacto que envía datos por email
- Chatbot interactivo con respuestas predefinidas
- Animaciones al hacer scroll
- Botón de scroll to top
- Validación de formularios
- Navbar con efecto al hacer scroll

## Cómo usar

### Opción 1: Abrir directamente
1. Abre el archivo `index.html` en tu navegador web

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js
npx http-server
```
Luego abre http://localhost:8000 en tu navegador

## Personalización

### Colores
Los colores están definidos en `styles.css` como variables CSS:
```css
--color-white: #FFFFFF;
--color-dark: #1a1a1a;
--color-primary: #00c0b8;
--color-primary-hover: #009991;
--color-secondary: #f5f5f5;
```

### Fuentes
- **Inter**: Títulos, cuerpo de texto, botones
- **Manrope**: Otros elementos

### Formulario de contacto
El formulario está configurado para enviar datos a: `dejesus.antonio@hcaa.com.mx`

Para cambiar el destinatario, edita la línea en `script.js`:
```javascript
window.location.href = 'mailto:TU_EMAIL@ejemplo.com?subject=' + subject + '&body=' + body;
```

## Compatibilidad
- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles (iOS/Android)

## Optimizaciones incluidas
- Imágenes optimizadas
- CSS minificable
- JavaScript modular
- Lazy loading preparado
- SEO-friendly

## Contacto HCAA
- **Empresa**: HC Advanced Automation S.A de C.V
- **Contacto**: Jose Antonio De Jesus Galicia
- **Teléfono MX**: +52 222 789 6404
- **Teléfono USA**: +1 423 803 8252
- **Email**: dejesus.antonio@hcaa.com.mx
- **Web**: www.hcaa.com.mx

## Licencia
© 2024 HC Advanced Automation S.A de C.V. Todos los derechos reservados.
