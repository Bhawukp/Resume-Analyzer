# RecruitMaster (RM) 🚀

**The Ultimate AI-Powered Resume Analyzer**

RecruitMaster is a cutting-edge, production-ready application for analyzing resumes with AI. Get instant ATS scores, actionable feedback, and insights to land your dream job faster.

## ✨ Features

### 🤖 AI-Powered Analysis
- **Smart ATS Scoring** - See how well your resume passes through Applicant Tracking Systems
- **Comprehensive Feedback** - Get detailed insights on tone, content, structure, and skills
- **Actionable Tips** - Receive specific recommendations to improve your resume

### 🎨 Modern UI/UX
- **Dark Mode** - Beautiful dark theme with smooth transitions
- **Glassmorphism Effects** - Modern, attention-grabbing design elements
- **Responsive Design** - Perfect experience on all devices
- **Smooth Animations** - Engaging transitions and micro-interactions

### 💼 Professional Tools
- **Resume Tracking** - Keep track of all your analyzed resumes
- **PDF Support** - Upload and analyze PDF resumes up to 20MB
- **Visual Preview** - View your resume alongside AI feedback
- **Score Breakdown** - Detailed scoring across multiple categories

### 🛠️ Technical Excellence
- 🚀 Server-side rendering with React Router
- ⚡️ Hot Module Replacement (HMR) for fast development
- 📦 Optimized asset bundling
- 🔄 Advanced data loading and mutations
- 🔒 TypeScript for type safety
- 🎉 TailwindCSS with custom design system
- 📖 [React Router docs](https://reactrouter.com/)

## 🚀 Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

Create a production build:

```bash
npm run build
```

## 🌐 Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t recruitmaster .

# Run the container
docker run -p 3000:3000 recruitmaster
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## 🎨 Styling

This application uses [Tailwind CSS](https://tailwindcss.com/) with a custom design system featuring:
- Dark mode support with CSS variables
- Gradient effects and animations
- Glassmorphism components
- Custom color schemes for better visual hierarchy

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using React Router and powered by AI to help you land your dream job.

**RecruitMaster (RM)** - Master Your Resume, Master Your Career! 🎯
