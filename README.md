# 🚀 LandingSamy - Impacto Visual Landing Page

Landing page oficial para Impacto Visual, el primer evento en Chile que transforma cómo grabas tu trabajo en camilla.

![Impacto Visual Logo](/public/assets/Logo.png)

## 📋 Descripción

Este proyecto es la landing page de Impacto Visual, desarrollada con Astro y TailwindCSS. Presenta el evento premium para profesionales de la belleza, con el método SAMY, testimonios y planes de inscripción, con animaciones modernas y diseño mobile-first.

## ✨ Características

- 🎨 Diseño moderno, atractivo y responsive
- 🚀 SEO avanzado y meta tags sociales
- 💫 Animaciones suaves al hacer scroll (AOS)
- 📱 Mobile-first, experiencia optimizada en todos los dispositivos
- 🏷️ Tablas y cards responsivas
- 🧑‍💻 Código limpio y fácil de personalizar
- 🎥 Videos integrados (YouTube y Google Drive)
- 🖼️ Imágenes optimizadas y backgrounds dinámicos

## 🛠️ Tecnologías

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [TypeScript](https://www.typescriptlang.org)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/AlvaroEwaffle/LandingSamy.git
```

2. Instala las dependencias:
```bash
cd LandingSamy/Landing
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📦 Estructura del Proyecto

```
LandingSamy/
├── Landing/
│   ├── public/
│   │   └── assets/
│   │       ├── Logo.png
│   │       ├── S2.png
│   │       ├── Experiencia.png
│   │       └── backgrounds/
│   │           └── BackgroundTestimonios.png
│   ├── src/
│   │   ├── components/
│   │   │   └── landing/
│   │   │       ├── Hero.astro
│   │   │       ├── Benefits.astro
│   │   │       ├── Experience.astro
│   │   │       ├── Plans.astro
│   │   │       ├── Testimonials.astro
│   │   │       └── Terms.astro
│   │   ├── layouts/
│   │   │   └── BaseLayout.astro
│   │   └── pages/
│   │       └── index.astro
│   └── package.json
└── README.md
```

## 🔧 Configuración

- No se requieren variables de entorno para la versión estática
- Google Analytics y AOS ya están integrados en el layout
- Videos de YouTube y Google Drive integrados
- Imágenes optimizadas en formato PNG

## 📱 Responsive y Accesibilidad

- Mobile First Design
- Videos responsivos
- Imágenes adaptativas
- Animaciones optimizadas para rendimiento
- Texto legible en todos los dispositivos

## 🚀 Despliegue

El proyecto se despliega automáticamente en Cloudflare Pages:

```bash
npm run deploy
```

Este comando:
1. Hace push al repositorio
2. Construye el proyecto (`npm run build`)
3. Despliega a Cloudflare Pages

## 📈 SEO y Analytics

- Meta tags y Open Graph completos
- Sitemap y robots.txt actualizados
- Animaciones AOS para mejor experiencia
- Imágenes con alt text optimizado

## 🎯 Secciones del Landing

1. **Hero**: Video de fondo con información principal
2. **S2 Image**: Sección con imagen de Samy
3. **Benefits**: Beneficios del evento con video explicativo
4. **Experience**: Experiencia con background personalizado
5. **Plans**: Planes de inscripción con fases de precios
6. **Testimonials**: Testimonios con background dinámico
7. **Terms**: Términos y condiciones actualizados

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/NuevaFeature`)
3. Commit tus cambios (`git commit -m 'Agrega NuevaFeature'`)
4. Push a la rama (`git push origin feature/NuevaFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

- Website: [https://impactovisual.cl](https://impactovisual.cl)
- Instagram: [@impactovisual](https://www.instagram.com/impactovisual/)
- TikTok: [@impactovisual](https://www.tiktok.com/@impactovisual)
- Email: info@impactovisual.cl

---
Desarrollado con ❤️ por el equipo de Impacto Visual
