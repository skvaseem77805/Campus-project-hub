# Campus Project Hub

A modern web application for campus students to collaborate on projects, share code, and generate AI-assisted solutions.

## 🌟 Features

- **AI Code Generator** - Generate code snippets using AI assistance powered by Anthropic
- **Project Management** - Create, organize, and manage campus projects
- **Real-time Collaboration** - Collaborate with other students on projects
- **File Upload** - Upload and manage project files
- **Authentication** - Secure user authentication system
- **Interactive UI Components** - Rich component library built with Radix UI
- **Chat Interface** - AI-powered chat for code and project assistance
- **Responsive Design** - Fully responsive design that works on all devices

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15+ (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Radix UI with custom component library
- **AI Integration**: Anthropic API (@ai-sdk/anthropic)
- **Form Management**: React Hook Form with Zod validation
- **State Management**: React Context API
- **Analytics**: Vercel Analytics
- **Package Manager**: pnpm

## 📋 Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Anthropic API key for AI features

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd campus-project-hub
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   Or with npm:
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your API keys:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```
   Or with npm:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 📁 Project Structure

```
campus-project-hub/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── ai-generator/            # AI code generation page
│   ├── auth/                    # Authentication pages
│   ├── collaborate/             # Project collaboration page
│   ├── projects/                # Projects management page
│   ├── upload/                  # File upload page
│   └── api/                     # API routes
│       └── generate-code/       # AI code generation endpoint
├── components/                   # React components
│   ├── AIChat.tsx               # AI chat component
│   ├── Navbar.tsx               # Navigation bar
│   ├── theme-provider.tsx       # Theme configuration
│   └── ui/                      # UI component library
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       └── ...                  # 40+ Radix UI based components
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper utilities
├── public/                       # Static assets
├── styles/                       # Global stylesheets
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
└── components.json              # UI components registry
```

## 🔧 Available Scripts

- **`pnpm dev`** - Start the development server
- **`pnpm build`** - Build the application for production
- **`pnpm start`** - Start the production server
- **`pnpm lint`** - Run ESLint to check code quality

## 📱 Pages Overview

- **Home Page** (`/`) - Landing page and main dashboard
- **AI Generator** (`/ai-generator`) - Generate code using AI
- **Projects** (`/projects`) - View and manage all projects
- **Collaborate** (`/collaborate`) - Real-time project collaboration
- **Upload** (`/upload`) - Upload project files
- **Auth** (`/auth`) - Authentication and user management

## 🤖 AI Features

The application integrates Anthropic's API for intelligent code generation and assistance. The AI features include:
- Code snippet generation
- Code explanation
- Best practices suggestions
- Interactive AI chat support

Configure your Anthropic API key in `.env.local` to enable AI features.

## 🎨 UI Components

The project includes a comprehensive component library built with Radix UI, featuring:
- Forms & Inputs (Input, Textarea, Select, Checkbox, Radio)
- Dialogs & Overlays (Dialog, Alert Dialog, Drawer, Popover)
- Navigation (Menubar, Navigation Menu, Breadcrumb, Pagination)
- Data Display (Card, Table, Badge, Avatar)
- And 30+ more components

## 🔐 Authentication

The auth system provides:
- User registration and login
- Session management
- Secure authentication flows

Configure your authentication provider in the auth configuration.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Deploy to Other Platforms

The application can also be deployed to:
- AWS
- Google Cloud Platform
- Azure
- Self-hosted servers

See the Next.js documentation for detailed deployment instructions.

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000

# AI Services
ANTHROPIC_API_KEY=your_key_here

# Other configurations
NEXT_PUBLIC_APP_NAME=Campus Project Hub
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, please:
- Check existing issues on GitHub
- Create a new issue with a detailed description
- Contact the development team

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://radix-ui.com)
- [TypeScript](https://www.typescriptlang.org)
- [Anthropic API](https://anthropic.com)

---

**Last Updated**: January 2026
**Version**: 0.1.0
