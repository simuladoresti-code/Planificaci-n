# Guía para Agregar Fotos a tu Invitación

## Estructura de Carpetas

```
fotos/
├── novios.jpg          ← Foto principal de portada
├── prewedding/         ← Fotos de preboda
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── foto3.jpg
└── galeria/            ← Fotos de la historia
    ├── conocidos.jpg
    ├── primera-cita.jpg
    ├── propuesta.jpg
    └── momentos.jpg
```

## Pasos para Agregar Fotos

### 1. Foto Principal (Portada)
En `index.html`, busca la sección de la pareja y reemplaza:

```html
<!-- ANTES -->
<div class="couple-photo-frame">
    <div class="photo-placeholder">
        <i class="fas fa-camera"></i>
        <span>Nuestra Foto</span>
    </div>
</div>

<!-- DESPUÉS -->
<div class="couple-photo-frame">
    <img src="fotos/novios.jpg" alt="María y Carlos" class="couple-photo">
</div>
```

### 2. Fotos de la Galería
En la sección `#gallery`, reemplaza cada placeholder:

```html
<!-- ANTES -->
<div class="gallery-item">
    <div class="gallery-placeholder">
        <i class="fas fa-heart"></i>
        <span>Primera Cita</span>
    </div>
</div>

<!-- DESPUÉS -->
<div class="gallery-item">
    <img src="fotos/galeria/primera-cita.jpg" alt="Primera Cita" class="gallery-img">
</div>
```

### 3. Agregar CSS para las Imágenes
En `styles.css`, agrega:

```css
.couple-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}

.gallery-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```

## Recomendaciones de Imágenes

### Tamaños Recomendados
- **Foto principal**: 800 x 800 px (cuadrada)
- **Fotos de galería**: 600 x 600 px (cuadradas)
- **Formato**: JPG o WebP
- **Calidad**: 80-90%

### Compresión de Imágenes
Usa herramientas como:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [Compressor.io](https://compressor.io/)

### Ejemplo de Optimización
```bash
# Usando ImageMagick
convert input.jpg -resize 800x800 -quality 85 output.jpg

# Usando ffmpeg
ffmpeg -i input.jpg -vf scale=800:800 -q:v 3 output.jpg
```

## Galería con Lightbox (Opcional)

Para ver las fotos en pantalla completa, agrega este HTML al final del body:

```html
<!-- Lightbox -->
<div class="lightbox" id="lightbox">
    <div class="lightbox-close" onclick="closeLightbox()">×</div>
    <div class="lightbox-content">
        <img id="lightbox-img" src="" alt="Foto">
    </div>
</div>
```

Y este JavaScript:

```javascript
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// Cerrar con clic fuera
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') {
        closeLightbox();
    }
});
```

## Ejemplo Completo de Galería

```html
<div class="gallery-grid">
    <div class="gallery-item" onclick="openLightbox('fotos/galeria/conocidos.jpg')">
        <img src="fotos/galeria/conocidos.jpg" alt="Nos conocimos">
    </div>
    <div class="gallery-item" onclick="openLightbox('fotos/galeria/primera-cita.jpg')">
        <img src="fotos/galeria/primera-cita.jpg" alt="Primera Cita">
    </div>
    <div class="gallery-item" onclick="openLightbox('fotos/galeria/propuesta.jpg')">
        <img src="fotos/galeria/propuesta.jpg" alt="La Propuesta">
    </div>
    <div class="gallery-item" onclick="openLightbox('fotos/galeria/momentos.jpg')">
        <img src="fotos/galeria/momentos.jpg" alt="Momentos">
    </div>
</div>
```

## Solución de Problemas

### Las imágenes no se ven
1. Verifica la ruta del archivo
2. Asegúrate de que el nombre sea exacto (sensible a mayúsculas)
3. Revisa la consola del navegador (F12)

### Las imágenes se ven borrosas
- Usa imágenes de mayor resolución
- Asegúrate de que `object-fit: cover` esté aplicado

### Las imágenes cargan lento
- Comprime las imágenes
- Usa formato WebP
- Implementa lazy loading:
```html
<img src="foto.jpg" loading="lazy" alt="...">
```

---

**¡Recuerda**: Las fotos hacen tu invitación más personal y memorable! 💕
