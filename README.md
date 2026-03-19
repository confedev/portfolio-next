<h1 align="center">✨ Developer Portfolio</h1>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>


<p align="center">
  <strong>A modern, deeply customizable, and culturally responsive personal portfolio.</strong><br>
  Built to showcase projects, skills, and certifications with beautiful animations and a flawless user experience.
</p>

## 🚀 Features & Functionalities

- **🌗 Dark / Light Mode**: Seamless theme switching using `next-themes`.
- **🌐 Bilingual Support (i18n)**: Fully supported English and Spanish languages, saving user preferences via cookies and local storage to prevent flashes of untranslated text.
- **🎨 Dynamic Filtering**: Categorized and easily filterable tech skills, soft skills, and certifications.
- **📱 Fully Responsive**: Fluid layouts that look stunning on mobile, tablet, and desktop devices.
- **🪄 Beautiful Animations**: Smooth transitions, interactive hover effects, and micro-interactions powered by `framer-motion` and `tailwindcss-animate`.
- **✉️ Contact Form**: Integrated with Formspree for reliable message delivery natively within the application.
- **⚙️ Configurable UI**: Centralized layout configurations (like collapsible grid rows, display rules) easily managed via `config/config.ts`.

## 💻 Technologies Used

### Core Frameworks
- **[Next.js 15](https://nextjs.org/)** - React framework for production (App Router)
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Static typing

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible, robust components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icons

### Tooling & Forms
- **React Hook Form** + **Zod** - Robust form validation and handling
- **Formspree** - Backend-less form submission

## 📐 Standardizations & Conventions

Maintaining a robust and scalable codebase is a priority. This project strictly adheres to the following conventions:

- **Conventional Commits**: Enforced via `commitlint` and `husky` to ensure a readable, semantic, and automated commit history (e.g., `feat:`, `fix:`, `chore:`).
- **Code Formatting**: Handled automatically by `Prettier`.
- **Code Quality & Linting**: `ESLint` configured with custom overriding rules to catch errors and pattern inconsistencies early.
- **Pre-commit Hooks**: `lint-staged` runs formatting, linting, and type-checks on staged files before they are continuously pushed, ensuring no broken code reaches the repository.

## 🔐 Environment Variables

To run the project locally, create a `.env` or `.env.local` file in the root directory and add the following variables:

```env
# Required for the contact form to work
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_project_id
```

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Set up your environment variables** 
   Copy the example file and fill in the details:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

---
<div align="center">
  <i>Developed with ❤️ by a passionate engineer.</i>
</div>
