# 🌸 Aobakwe Modillane - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring an AI-powered chatbot to answer questions about my journey as a Full Stack Developer

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **AI Chatbot** - Interactive chatbot powered by Claude AI to answer questions about my experience and skills
- **Modern UI** - Beautiful pink-themed design with smooth animations
- **Project Showcase** - Display of my latest projects with live links
- **Contact Form** - Easy way for visitors to get in touch
- **Fast Performance** - Built with Vite for lightning-fast load times

## 🚀 Live Demo

[View Live Portfolio](https://profile-drab-eta.vercel.app/)

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and dev server
- **React Icons** - Icon library
- **Anthropic Claude API** - AI chatbot functionality
- **CSS3** - Custom styling with modern features

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Aobakwe2025/my-portfolio.git
   cd my-portfolio
```

2. **Install dependencies**
```bash
   npm install
```

3. **Start the development server**
```bash
   npm run dev
```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure
```
my-portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg
│       ├── museminds.png
│       ├── musecareers.png
│       └── musemotion.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Chatbot.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/styles.css`:
```css
:root {
  --primary-pink: #ff6eb4;
  --light-pink: #ffe0f0;
  --dark-pink: #d1478f;
}
```

### Adding Projects
Edit the projects array in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/assets/your-image.png",
    link: "https://your-project-link.com"
  },
  // Add more projects...
];
```

### Updating Personal Information
- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Chatbot Info**: Edit the `aboutAobakwe` variable in `src/components/Chatbot.jsx`

## 🤖 AI Chatbot Setup

The chatbot uses the Anthropic Claude API. For production deployment:

1. Set up a backend service to securely handle API calls
2. Store your API key in environment variables
3. Update the fetch URL in `src/components/Chatbot.jsx` to point to your backend

**Note**: The current implementation includes a fallback response system for when the API is unavailable.

## 📦 Building for Production
```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

🌐 Deployment

Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Deploy to GitHub Pages
1. Install gh-pages:
```bash
   npm install gh-pages --save-dev
```

2. Add to `package.json`:
```json
   "homepage": "https://yourusername.github.io/my-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
```

3. Deploy:
```bash
   npm run deploy
```

 📧 Contact

**Aobakwe Modillane**
- Email: [aobakwemodillane27@gmail.com](mailto:aobakwemodillane27@gmail.com)
- GitHub: [@Aobakwe2025](https://github.com/Aobakwe2025)
- Instagram: [@oky_abk](https://instagram.com/oky_abk)

🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add more interactive animations
- [ ] Create a backend for the contact form
- [ ] Add testimonials section
- [ ] Integrate analytics

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Thanks to **FNB App Academy** for kickstarting my coding journey
- **CAPACITI & Project Y** for ongoing learning opportunities
- All the open-source libraries that made this possible

---

⭐ **Star this repo** if you found it helpful!

Made with 💖 by Aobakwe Modillane
