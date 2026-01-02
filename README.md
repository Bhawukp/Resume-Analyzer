# 🎯 RecruitMaster (RM)

<div align="center">

**Smart AI-Powered Resume Analysis for Your Dream Job**

[![React Router](https://img.shields.io/badge/React%20Router-v7-blue)](https://reactrouter.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4)](https://tailwindcss.com/)
[![Puter.js](https://img.shields.io/badge/Puter.js-v2-purple)](https://puter.com/)

</div>

---

## 📖 About

**RecruitMaster** is an intelligent resume analyzer that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) and improve their chances of landing interviews. Using advanced AI analysis powered by Claude Sonnet 4, the app provides detailed feedback on:

- 📊 **ATS Compatibility Score** - How well your resume passes automated screening
- 🎨 **Tone & Style Analysis** - Professional language and formatting assessment
- 📝 **Content Quality** - Effectiveness of achievements and descriptions
- 🏗️ **Structure Review** - Organization and readability evaluation
- 💼 **Skills Assessment** - Technical and soft skills presentation

### ✨ Key Features

- 📤 **PDF Upload** - Drag & drop or click to upload your resume
- 🔍 **Job-Specific Analysis** - Tailor feedback to specific job descriptions
- 📈 **Detailed Scoring** - Get scores across multiple categories
- 💡 **Actionable Tips** - Receive specific suggestions for improvement
- 💾 **Resume History** - Track all your submissions and feedback
- 🔐 **Secure Storage** - Your data is safely stored with Puter.js

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** or **pnpm**

### Installation

1. Clone the repository:

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

---

## 🛠️ Tech Stack

### Frontend

- **React Router 7** - Full-stack React framework with SSR
- **TypeScript** - Type-safe development
- **TailwindCSS 4** - Modern utility-first CSS framework
- **Zustand** - Lightweight state management

### AI & Cloud Services

- **Puter.js** - Cloud storage and AI integration
- **Claude Sonnet 4** - Advanced AI for resume analysis
- **PDF.js** - Client-side PDF processing

### Development Tools

- **Vite** - Next-generation build tool
- **React Dropzone** - File upload handling

---

## 📁 Project Structure

```
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx      # Navigation with theme toggle
│   │   ├── FileUploader.tsx # Drag & drop file upload
│   │   ├── Summary.tsx     # Overall score display
│   │   ├── ATS.tsx         # ATS compatibility section
│   │   ├── Details.tsx     # Detailed feedback sections
│   │   └── ...
│   ├── routes/             # Application routes
│   │   ├── home.tsx        # Dashboard with resume history
│   │   ├── upload.tsx      # Resume upload page
│   │   ├── resume.tsx      # Individual resume feedback
│   │   └── auth.tsx        # Authentication page
│   ├── lib/                # Utility functions
│   │   ├── puter.ts        # Puter.js integration
│   │   ├── theme.ts        # Dark mode state management
│   │   ├── pdf2img.tsx     # PDF to image conversion
│   │   └── utils.ts        # Helper functions
│   ├── app.css             # Global styles
│   └── root.tsx            # Root layout component
├── constants/
│   └── index.ts            # AI prompt templates
├── types/
│   ├── index.d.ts          # TypeScript interfaces
│   └── puter.d.ts          # Puter.js type definitions
└── public/                 # Static assets
```

---

## 🎨 Features in Detail

### Resume Analysis

Upload your resume and get comprehensive feedback including:

- **Overall Score (0-100)** - Holistic assessment of your resume
- **Category Breakdowns** - Specific scores for different aspects
- **Good Practices** - What you're doing right
- **Areas for Improvement** - Actionable suggestions with explanations

### Job-Specific Feedback

Provide job details for tailored analysis:

- Company name
- Job title
- Job description

The AI will analyze your resume specifically for that role.

---

## 🤝 Contributing

contributions are welcome from the community! Whether you're fixing bugs, improving documentation, or proposing new features, your help is appreciated.

### How to Contribute

1. **Fork the repository**

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

4. **Commit your changes**

   ```bash
   git commit -m "Add amazing feature"
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Wait for review and feedback

### Contribution Ideas

- 🐛 **Bug Fixes** - Find and fix issues
- ✨ **New Features** - Resume comparison, export to PDF, email sharing
- 🎨 **UI/UX Improvements** - Better animations, mobile responsiveness
- 📝 **Documentation** - Improve guides and add tutorials
- 🌍 **Internationalization** - Add support for multiple languages
- ♿ **Accessibility** - Improve screen reader support and keyboard navigation
- 🧪 **Testing** - Add unit and integration tests
- ⚡ **Performance** - Optimize bundle size and load times

### Code Style Guidelines

- Use **TypeScript** for type safety
- Follow **React best practices** (hooks, functional components)
- Use **Tailwind** utility classes over custom CSS
- Write **clear, descriptive variable names**
- Add **JSDoc comments** for complex functions
- Keep components **small and focused**

---

## 📋 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type checking
npm run typecheck
```

---

## 🐳 Docker Deployment

Build and run using Docker:

```bash
# Build the image
docker build -t recruitmaster .

# Run the container
docker run -p 3000:3000 recruitmaster
```

Deploy to platforms like:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

---

## 🔒 Privacy & Security

- All resume data is stored securely using Puter.js cloud storage
- Authentication is handled via Puter's secure OAuth flow
- No resume data is permanently stored by the AI service
- You can delete your data anytime using the wipe function

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Puter.js** - For providing cloud storage and AI integration
- **Anthropic** - For Claude AI that powers the resume analysis
- **React Router Team** - For the amazing full-stack framework
- **Open Source Community** - For all the amazing libraries used

---

## 📞 Support & Contact

- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/recruitmaster/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/recruitmaster/discussions)
- 📧 **Email**: bhawukp@gmail.com

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made by Bhawuk Pahuja : https://personal-portfolio-tan-delta.vercel.app/

[Report Bug](https://github.com/yourusername/recruitmaster/issues) · [Request Feature](https://github.com/yourusername/recruitmaster/issues) · [Contribute](https://github.com/yourusername/recruitmaster/pulls)

</div>
