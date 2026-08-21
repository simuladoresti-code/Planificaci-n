# Invitación de Boda Digital 💒

Una invitación de boda profesional, dinámica y optimizada para dispositivos móviles.

## Características

### Secciones Incluidas
1. **Portada Animada** - Countdown regresivo con corazones flotantes
2. **Invitación Formal** - Mensaje cordial con foto de los novios
3. **Detalles del Evento** - Ceremonia y recepción con mapas
4. **Galería de Fotos** - Timeline de la historia de amor
5. **Mesa de Regalos** - Opciones Yape, Plin, transferencia y lista
6. **Confirmación de Asistencia** - Formulario interactivo RSVP
7. **Sección Final** - Redes sociales y frase de cierre

### Funcionalidades
- ✅ Countdown regresivo en tiempo real
- ✅ Animaciones suaves al hacer scroll
- ✅ Botón de WhatsApp para confirmar asistencia
- ✅ Copiar números de regalo al portapapeles
- ✅ Control de música de fondo
- ✅ Diseño 100% responsive para móvil
- ✅ Efecto parallax en la portada
- ✅ Formulario RSVP con validación
- ✅ Notificaciones toast
- ✅ Compartir invitación

## Personalización

### 1. Cambiar Nombres y Fecha
Edita `index.html` y busca:
```html
<span class="name name-1">María</span>
<span class="name name-2">Carlos</span>
```

Cambia la fecha en `script.js`:
```javascript
const WEDDING_DATE = new Date('2025-03-15T16:00:00');
```

### 2. Cambiar Colores
Edita `styles.css` y modifica las variables:
```css
:root {
    --primary-color: #8b5a2b;      /* Color principal */
    --secondary-color: #d4a574;    /* Color secundario */
    --gold: #d4af37;               /* Color dorado */
}
```

### 3. Actualizar Información de Regalos
En `index.html`, busca la sección `#gifts` y actualiza:
- Números de Yape/Plin
- Datos de cuenta bancaria
- Enlaces de listas de regalo

### 4. Agregar Fotos Reales
Reemplaza los placeholders por imágenes reales:
```html
<!-- Cambiar esto -->
<div class="photo-placeholder">
    <i class="fas fa-camera"></i>
</div>

<!-- Por esto -->
<img src="fotos/novios.jpg" alt="María y Carlos" class="couple-photo">
```

### 5. Agregar Música
Coloca tu archivo de música en la carpeta `music/` y actualiza:
```html
<audio id="bgMusic" loop>
    <source src="music/tu-cancion.mp3" type="audio/mpeg">
</audio>
```

## Estructura de Archivos

```
invitacion-boda/
├── index.html          # Archivo principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── music/              # Carpeta de música (opcional)
│   └── wedding-song.mp3
└── fotos/              # Carpeta de fotos (opcional)
    ├── novios.jpg
    ├── prewedding/
    └── galeria/
```

## Personalización de WhatsApp

Para configurar el número de WhatsApp, edita `script.js`:
```javascript
const WHATSAPP_NUMBER = '51999888777'; // Tu número con código de país
```

## Despliegue

### Opción 1: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings > Pages
4. Selecciona la rama main

### Opción 2: Netlify (Gratis)
1. Arrastra la carpeta a netlify.com/drop
2. Obtén tu enlace personalizado

### Opción 3: Servidor Personal
1. Sube los archivos a tu hosting
2. Asegúrate de que index.html sea el archivo principal

## Navegadores Soportados

- ✅ Chrome (iOS/Android)
- ✅ Safari (iOS)
- ✅ Firefox (Android)
- ✅ Edge
- ✅ Samsung Internet

## Consejos

1. **Prueba en móvil** antes de compartir
2. **Usa fotos comprimidas** para mejor rendimiento
3. **Actualiza las URLs** de mapas con coordenadas reales
4. **Personaliza los mensajes** según tu historia
5. **Agrega tu hashtag** en la sección final

## Licencia

Uso libre para invitaciones personales de boda.

---

**Hecho con ❤️ para tu día especial**
