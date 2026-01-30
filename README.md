# Royal Biryani Feast 🍛

![License](https://img.shields.io/github/license/abx15/royal-biryani-feast)
![Issues](https://img.shields.io/github/issues/abx15/royal-biryani-feast)
![Forks](https://img.shields.io/github/forks/abx15/royal-biryani-feast)
![Stars](https://img.shields.io/github/stars/abx15/royal-biryani-feast)

> A premium, responsive, and interactive web application for browsing and ordering authentic Royal Biryani dishes. Built with modern web technologies for performance and aesthetics.

## 🚀 Overview

**Royal Biryani Feast** is a state-of-the-art web platform designed to showcase a rich menu of biryani dishes. It features a modern UI, smooth animations, and a seamless user experience across all devices. The project is structured to be enterprise-grade, scalable, and easy to maintain.

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management:** React Query
- **Routing:** React Router DOM

## ✨ Features

- **Responsive Design:** Fully optimized for Mobile, Tablet, and Desktop.
- **Dynamic Menu:** Interactive menu with categories and detailed descriptions.
- **Reservation System:** Integrated table booking form.
- **Modern Aesthetics:** Glassmorphism, smooth transitions, and premium typography.
- **SEO Optimized:** Semantic HTML and best practices for search engines.

## 📂 Folder Structure

```
royal-biryani-feast/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages (Home, About, Contact, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── styles/          # Global styles
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── .github/             # GitHub workflow & funding configurations
├── Dockerfile           # Docker configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Project dependencies
```

## 💻 Local Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/abx15/royal-biryani-feast.git
   cd royal-biryani-feast
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🐳 Docker Usage

This project includes a multi-stage `Dockerfile` optimized for production.

1. **Build the image**

   ```bash
   docker build -t royal-biryani-feast .
   ```

2. **Run the container**

   ```bash
   docker run -p 8080:80 royal-biryani-feast
   ```

   Visit `http://localhost:8080` to view the app.

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory if you need to add custom environment variables. Example:

```env
VITE_API_URL=https://api.example.com
```

### Vercel Deployment

This project includes a `vercel.json` configuration file to handle SPA routing (rewrites to `index.html`).
To deploy, simply connect your repository to Vercel, and it will auto-detect the Vite settings.

## 🤝 Contributing

Contributions are welcome! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If you find this project useful, please consider giving it a star on GitHub!
For enterprise support or sponsorship, visit my [GitHub Sponsors](https://github.com/sponsors/abx15) profile.

---

Created with ❤️ by [Arun Kumar Bind](https://github.com/abx15)
