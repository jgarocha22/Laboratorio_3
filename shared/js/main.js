const API_URL = 'https://jsonplaceholder.typicode.com/posts';


/*------------------------------------------*/
/* Mensaje Toast cuando se envia formulario */
/*------------------------------------------*/
function mostrarToast(mensaje, type = 'success', duration = 3000) {
    const toastDiv = document.getElementById('custom-toast');
    if (toastDiv) {
        toastDiv.textContent = mensaje;
        toastDiv.style.display = 'none';
        toastDiv.classList.remove('show', 'hide');
        
        if (type === 'error') {
            toastDiv.style.background = '#dc3545';
        } else if (type === 'success') {
            toastDiv.style.background = '#28a745';
        } else if(type === 'reset'){
            toastDiv.style.background = '#007bff';
        }

        void toastDiv.offsetWidth;
        toastDiv.classList.add('show');
        toastDiv.style.display = 'block';
        
        setTimeout(() => {
            toastDiv.classList.remove('show');
            toastDiv.classList.add('hide');
            setTimeout(() => {
                toastDiv.style.display = 'none';
                toastDiv.classList.remove('hide');
            }, 600);
        }, duration);
    }
}

/*--------------------------------*/
/* Clase para manejar formularios */
/*--------------------------------*/
class FormManager {
    constructor() {
        this.forms = new Map();
    }

    registerForm(formId, storageKey) {
        this.forms.set(formId, {
            storageKey: storageKey
        });
    }

    // Método para obtener todas las submisiones de un formulario
    getSubmissions(formId) {
        const formData = this.forms.get(formId);
        if (formData) {
            return JSON.parse(localStorage.getItem(formData.storageKey)) || [];
        }
        return [];
    }

    // Método para limpiar todas las submisiones de un formulario
    clearSubmissions(formId) {
        const formData = this.forms.get(formId);
        if (formData) {
            localStorage.removeItem(formData.storageKey);
        }
    }

    // Método para guardar submisión
    saveSubmission(formId, data) {
        const formData = this.forms.get(formId);
        if (formData) {
            const submissions = JSON.parse(localStorage.getItem(formData.storageKey)) || [];
            submissions.push(data);
            localStorage.setItem(formData.storageKey, JSON.stringify(submissions));
        }
    }
}

/*-------------------------------*/
/* Listener para los Formularios */
/*-------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
    const formManager = new FormManager();
    
    // Registrar formularios
    formManager.registerForm('form-contacto', 'contactSubmissions');
    formManager.registerForm('form-configuracion', 'configSubmissions');

    // Event listener para formulario de contacto
    const contactForm = document.getElementById('form-contacto');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const hasValidData = Object.values(data).some(value => {
                if (value === null || value === undefined) return false;
                if (typeof value === 'string') return value.trim() !== '';
                if (value instanceof File) return value.size > 0;
                return true;
            });

            if (!hasValidData) {
                mostrarToast('El formulario no puede estar vacío.', 'error', 3000);
                return;
            }

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const responseData = await response.json();
                formManager.saveSubmission('form-contacto', responseData);
                
                console.log('Respuesta de contacto guardada:', responseData);
                mostrarToast('¡Enviado Exitosamente!', 'success', 3000);
                e.target.reset();

            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                mostrarToast('Error al enviar. Intenta de nuevo.', 'error', 3000);
            }
        });

        contactForm.addEventListener('reset', (e) => {
            setTimeout(() => {
                mostrarToast('Formulario Reiniciado Exitosamente', 'reset', 2000);
            }, 50);
        });
    }

    // Event listener para formulario de configuración
    const configForm = document.getElementById('form-configuracion');
    if (configForm) {
        configForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const hasValidData = Object.values(data).some(value => {
                if (value === null || value === undefined) return false;
                if (typeof value === 'string') return value.trim() !== '';
                if (value instanceof File) return value.size > 0;
                return true;
            });

            if (!hasValidData) {
                mostrarToast('El formulario no puede estar vacío.', 'error', 3000);
                return;
            }

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const responseData = await response.json();
                formManager.saveSubmission('form-configuracion', responseData);
                
                console.log('Respuesta de configuración guardada:', responseData);
                mostrarToast('¡Cambios Guardados Exitosamente!', 'success', 3000);
                e.target.reset();

            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                mostrarToast('Error al enviar. Intenta de nuevo.', 'error', 3000);
            }
        });

        configForm.addEventListener('reset', (e) => {
            setTimeout(() => {
                mostrarToast('Formulario Reiniciado Exitosamente', 'reset', 2000);
            }, 50);
        });
    }

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