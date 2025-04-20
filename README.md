# 🚀 Ewaffle Landing Page

Landing page corporativa para Ewaffle, expertos en soluciones e-learning y diseño instruccional.

![Ewaffle Logo](/public/assets/logoewchico.png)

## 📋 Descripción

Este proyecto es la landing page oficial de Ewaffle, desarrollada con Astro y TailwindCSS. Ofrece una experiencia moderna y optimizada para presentar nuestros servicios de e-learning, diseño instruccional y producción multimedia.

## ✨ Características

- 🎨 Diseño moderno y responsive
- 🚀 Optimizado para SEO
- 📊 Integración con Google Analytics 4
- 💨 Animaciones y transiciones suaves
- 📱 Totalmente adaptable a dispositivos móviles
- 🔍 Optimización de imágenes y recursos

## 🛠️ Tecnologías

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Remix Icons](https://remixicon.com)
- [EmailJS](https://www.emailjs.com)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yourusername/ewaffle-landing.git
```

2. Instala las dependencias:
```bash
cd ewaffle-landing
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📦 Estructura del Proyecto

```
/
├── public/
│   └── assets/
│       ├── clientlogos/
│       └── ...
├── src/
│   ├── components/
│   │   └── landing/
│   │       ├── Hero.astro
│   │       ├── Process.astro
│   │       ├── Clients.astro
│   │       ├── BannerCTA.astro
│   │       └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🔧 Configuración

### Google Analytics

El proyecto utiliza Google Analytics 4 para el seguimiento de usuarios. Configurado con:
- ID de Flujo: 3859247626
- ID de Medición: G-M5H5SWQ

### EmailJS

Para el formulario de contacto, configura las siguientes variables en tu archivo `.env`:

```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Características Responsive

- Mobile First Design
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🚀 Despliegue

El proyecto está configurado para ser desplegado en cualquier plataforma que soporte Astro. Recomendamos:

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 📈 Analytics y SEO

- Implementación completa de meta tags
- Open Graph tags para redes sociales
- Integración con Google Analytics 4
- Sitemap automático
- Optimización de imágenes

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

- Website: [https://ewaffle.cl](https://ewaffle.cl)
- LinkedIn: [Ewaffle](https://linkedin.com/company/ewaffle)
- Instagram: [@ewaffle.cl](https://www.instagram.com/ewaffle.cl/)
- Email: contacto@ewaffle.cl

---
Desarrollado con ❤️ por el equipo de Ewaffle

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
