/*------------------------------------*/
/* Mensaje Toast cuando se envia formulario */
/*------------------------------------*/
function mostrarToast(mensaje, type = 'success') {
    const toastDiv = document.getElementById('custom-toast');
    if (toastDiv) {
        toastDiv.textContent = mensaje;
        toastDiv.style.display = 'none'; // Reset display
        toastDiv.classList.remove('show', 'hide'); // Reset classes
        
        // Cambiar el color de fondo según el tipo
        if (type === 'error') {
            toastDiv.style.background = '#dc3545'; // Rojo para errores
        } else {
            toastDiv.style.background = '#28a745'; // Verde para éxito
        }

        toastDiv.classList.add('show');
        
        setTimeout(() => {
            toastDiv.classList.remove('show');
            toastDiv.classList.add('hide');
            
            setTimeout(() => {
                toastDiv.style.display = 'none';
                toastDiv.classList.remove('hide');
            }, 600);
        }, 3000);
    }
}

/*--------------------------------*/
/* Envio de formularios con fetch */
/*--------------------------------*/

async function handleFormSubmit(event, formType) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validación mejorada para diferentes tipos de valores
    const hasValidData = Object.values(data).some(value => {
        if (value === null || value === undefined) return false;
        if (typeof value === 'string') return value.trim() !== '';
        if (value instanceof File) return value.size > 0;
        return true;
    });

    if (!hasValidData) {
        mostrarToast('El formulario no puede estar vacío.', 'error');
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`);
        }

        const responseData = await response.json();
        
        // Guardar en localStorage
        const submissions = JSON.parse(localStorage.getItem(formType)) || [];
        submissions.push(responseData);
        localStorage.setItem(formType, JSON.stringify(submissions));

        console.log(`Respuesta de ${formType} guardada:`, responseData);
        
        mostrarToast('¡Enviado Exitosamente!');
        form.reset();

    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        mostrarToast('Error al enviar. Intenta de nuevo.', 'error');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    /*--------------------------*/
    /* Eventos de Formularios   */
    /*--------------------------*/

    const contactForm = document.getElementById('form-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'contactSubmissions'));
    }

    const configForm = document.getElementById('form-configuracion');
    if (configForm) {
        configForm.addEventListener('submit', (e) => handleFormSubmit(e, 'configSubmissions'));
    }

    /*-----------------------------------*/
    /*  Tema del sitio web (Modo oscuro) */
    /*-----------------------------------*/

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Aplicar tema al cargar la página
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            themeToggle.checked = true;
        }

        // Listener para cambiar el tema
        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }
});