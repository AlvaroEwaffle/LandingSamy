# 🚀 Influencer Factory Landing Page

Landing page oficial para Influencer Factory, la academia digital para creadores de contenido y futuros influencers.

![Influencer Factory Logo](/public/assets/IF_Logo.webp)

## 📋 Descripción

Este proyecto es la landing page de Influencer Factory, desarrollada con Astro y TailwindCSS. Presenta la academia, el programa, los planes y la mentora Whitney Espinoza, con animaciones modernas y diseño mobile-first.

## ✨ Características

- 🎨 Diseño moderno, atractivo y responsive
- 🚀 SEO avanzado y meta tags sociales
- 💫 Animaciones suaves al hacer scroll (AOS)
- 📱 Mobile-first, experiencia optimizada en todos los dispositivos
- 🏷️ Tablas y cards responsivas
- 🧑‍💻 Código limpio y fácil de personalizar

## 🛠️ Tecnologías

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [TypeScript](https://www.typescriptlang.org)
- [Remix Icons](https://remixicon.com)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yourusername/influencer-factory-landing.git
```

2. Instala las dependencias:
```bash
cd influencer-factory-landing
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📦 Estructura del Proyecto

```
/
├── public/
│   └── assets/
│       └── IF_Logo.webp
├── src/
│   ├── components/
│   │   └── landing/
│   │       ├── Hero.astro
│   │       ├── Benefits.astro
│   │       ├── Process.astro
│   │       ├── Gamification.astro
│   │       ├── Cases.astro
│   │       ├── Team.astro
│   │       ├── CTA.astro
│   │       └── FAQ.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🔧 Configuración

- No se requieren variables de entorno para la versión estática.
- Google Analytics y AOS ya están integrados en el layout.

## 📱 Responsive y Accesibilidad

- Mobile First Design
- Tablas y cards adaptadas a móvil
- Botón CTA sticky solo en desktop
- Animaciones solo en contenido, no en fondos

## 🚀 Despliegue

El proyecto puede desplegarse en cualquier plataforma compatible con Astro:
```bash
npm run build
```
Los archivos de producción se generan en la carpeta `dist/`.

## 📈 SEO y Analytics

- Meta tags y Open Graph completos
- Sitemap y robots.txt actualizados
- Animaciones AOS para mejor experiencia

## 🤝 Contribución

1. Haz fork del proyecto
2. Crea una rama (`git checkout -b feature/NuevaFeature`)
3. Commit tus cambios (`git commit -m 'Agrega NuevaFeature'`)
4. Push a la rama (`git push origin feature/NuevaFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📞 Contacto

- Website: [https://influencerfactory.com](https://influencerfactory.com)
- LinkedIn: [Influencer Factory](https://linkedin.com/company/influencerfactory)
- Instagram: [@influencerfactory](https://www.instagram.com/influencerfactory/)
- Email: contacto@influencerfactory.com

---
Desarrollado con ❤️ por el equipo de Influencer Factory

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
