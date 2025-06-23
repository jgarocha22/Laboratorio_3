# Mi Revista Digital - Laboratorio 3

## 📰 Descripción del Proyecto

**Mi Revista Digital** es una revista web moderna sobre juegos y tecnología que implementa las mejores prácticas de desarrollo web frontend. El proyecto demuestra el uso de HTML5 semántico, CSS3 avanzado con variables y JavaScript moderno para crear una experiencia de usuario interactiva y responsive.

## ✨ Características Principales

### 🎨 Diseño
- **Diseño Responsive**: Adaptable a dispositivos móviles, tablets y desktop
- **Modo Oscuro/Claro**: Tema persistente con localStorage
- **Animaciones CSS**: Transiciones suaves y efectos visuales
- **Navegación Intuitiva**: Menú sticky con Bootstrap 5

### 📝 Formularios Interactivos
- **Formulario de Contacto**: Con validación y envío a API
- **Formulario de Configuración**: Gestión de preferencias de usuario
- **Notificaciones Toast**: Mensajes de éxito/error animados
- **Integración con API**: Envío de datos a JSONPlaceholder

### 🔧 Funcionalidades Técnicas
- **Persistencia de Datos**: Almacenamiento local con localStorage
- **Validación de Formularios**: Cliente y servidor
- **Modularidad CSS**: Variables CSS y archivos separados
- **JavaScript Moderno**: Async/await, fetch API

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS (Custom Properties)
  - Flexbox y Grid
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript**:
  - Async/await para operaciones asíncronas
  - Fetch API para comunicación con servidores
  - LocalStorage para persistencia
  - Event listeners y DOM manipulation

### Frameworks y Librerías
- **Bootstrap 5.3.3**: Componentes UI y sistema de grid
- **Google Fonts**: Roboto y Montserrat

### APIs Externas
- **JSONPlaceholder**: API de prueba para formularios
- **YouTube Embed**: Videos integrados

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, pero recomendado)

### Instalación y Ejecución

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd Laboratorio_3
   ```

2. **Abrir el proyecto**
   - Abrir `index.html` directamente en el navegador

3. **Acceder al sitio**
   - Visitar con github Pages al siguiente link `https://jgarocha22.github.io/Laboratorio_3/`
   - O utilizando la extensión de Visual Studio `Live Server` para el servidor local

## 📁 Estructura del Proyecto

```
Laboratorio_3/
├── index.html                 # Página principal
├── README.md                  # Este archivo
├── assets/                    # Recursos estáticos
│   ├── img/                   # Imágenes
│   │   ├── icons/                 # Iconos SVG/PNG
│   │   └── fonts/                 # Fuentes personalizadas
│   ├── shared/                    # Archivos compartidos
│   │   ├── css/                   # Estilos globales
│   │   │   ├── common.css         # Estilos principales
│   │   │   └── vars.css           # Variables CSS
│   │   └── js/                    # JavaScript
│   │       └── main.js            # Lógica principal
│   ├── views/                     # Páginas adicionales
│   │   ├── contact/               # Página de contacto
│   │   │   ├── contact.html
│   │   │   └── contact.css
│   │   └── config/                # Página de configuración
│   │       ├── configuracion.html
│   │       └── config.css
│   └── docs/                      # Documentación técnica
│       └── README.md              # Documentación detallada
```

## 🎯 Funcionalidades por Página

### 📄 Página Principal (`index.html`)
- Artículos sobre juegos y tecnología
- Sección "Sobre mí" con información personal
- Navegación principal
- Chat modal (en construcción)
- Footer con información de contacto y redes sociales

### 📧 Página de Contacto (`views/contact/contact.html`)
- Formulario de contacto con validación
- Envío de datos a API externa
- Notificaciones toast de éxito/error
- Persistencia de envíos en localStorage

### ⚙️ Página de Configuración (`views/config/configuracion.html`)
- Formulario de preferencias de usuario
- Gestión de contraseñas
- Tabla de usuarios registrados
- Subida de archivos

## 🔧 Configuración del Modo Oscuro

El sitio incluye un sistema de tema oscuro/claro que:
- Se activa mediante un botón en la navegación
- Persiste la preferencia en localStorage
- Aplica estilos automáticamente a todos los elementos
- Incluye transiciones suaves entre temas

## 📱 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 480px
- **Tablets**: 481px - 768px
- **Desktop**: 769px+

## 📄 Licencia

Este proyecto es parte del curso de Desarrollo Web de la UCAB.

## 👨‍💻 Autor

**Juan Arocha** - Estudiante de la Universidad Católica Andrés Bello (UCAB)

---

*Desarrollado como parte del Laboratorio 3 de Desarrollo Web*