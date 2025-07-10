# Next.js Template for Docker

A professional, production-ready Next.js template developed by **Datapulse SAS** for modern web development projects. This template includes a comprehensive tech stack with Docker support, database integration, and modern UI components.

## 🚀 Features

- **⚡ High Performance**: Built with Next.js 15, React 19, and Turbopack for optimal development experience
- **🗄️ Database Ready**: Complete integration with Drizzle ORM, PostgreSQL, and Supabase
- **🎨 Modern UI**: Tailwind CSS 4, Radix UI components, and responsive design
- **🐳 Docker Ready**: Complete Docker configuration for development and production environments
- **✅ Code Quality**: ESLint, Prettier, TypeScript, and development tools pre-configured
- **📊 State Management**: Zustand for global state and TanStack Query for server state management
- **🌙 Dark Mode**: Built-in theme switching with next-themes
- **📱 Responsive**: Mobile-first responsive design approach

## 🛠️ Technology Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version with concurrent features
- **TypeScript** - Type-safe JavaScript development

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **next-themes** - Theme switching functionality

### Database & Backend

- **Drizzle ORM** - Type-safe database toolkit
- **PostgreSQL** - Robust relational database
- **Supabase** - Backend-as-a-Service platform
- **Axios** - HTTP client for API requests

### State Management

- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management and caching
- **TanStack Table** - Powerful table component

### Development Tools

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Docker** - Containerization
- **pnpm** - Fast package manager

### Environment & Validation

- **@t3-oss/env-nextjs** - Environment variable validation
- **Zod** - Schema validation
- **dotenv** - Environment configuration

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Docker and Docker Compose (for containerized development)
- PostgreSQL database (local or cloud)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd next-template-docker
```markdown

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Copy the example environment file and configure your variables:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Database
DATABASE_URL=postgres://postgres:password@localhost:5432/your_database

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key

# API
NEXT_PUBLIC_API_BASE_URL=https://your-api.com
NEXT_API_SECRET=your_secret_key
```

### 4. Database Setup

Run database migrations:

```bash
pnpm run db:migrate
```

### 5. Start Development Server

```bash
pnpm run dev
```

The application will be available at `http://localhost:3000`

## 🐳 Docker Development

### Using Docker Compose

1. Configure your `.env` file
2. Start the application:

```bash
docker-compose up -d
```

### Building Docker Image

```bash
docker build -t next-template-docker .
```

## 📁 Project Structure

```plain
├── public/                 # Static assets
│   └── icons/             # Application icons
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── ui/            # UI components (shadcn/ui)
│   │   ├── mode-toggle.tsx
│   │   └── theme-provider.tsx
│   ├── db/                # Database configuration
│   │   ├── schemas/       # Drizzle schemas
│   │   ├── index.ts       # Database connection
│   │   └── migrate.ts     # Migration utilities
│   ├── lib/               # Utility libraries
│   │   ├── axios-client.ts
│   │   ├── supabase-client.ts
│   │   └── utils.ts
│   ├── services/          # API services
│   ├── stores/            # Zustand stores
│   └── types/             # TypeScript type definitions
├── .dockerignore
├── .env.example
├── .gitignore
├── .prettierrc.json
├── components.json        # shadcn/ui configuration
├── docker-compose.yaml
├── Dockerfile
├── drizzle.config.ts      # Drizzle ORM configuration
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🔧 Available Scripts

```bash
# Development
pnpm run dev          # Start development server with Turbopack
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
pnpm run format       # Format code with Prettier

# Database
pnpm run db:migrate   # Run database migrations
```

## 🎨 UI Components

This template includes pre-configured shadcn/ui components:

- **Button** - Customizable button component
- **Dropdown Menu** - Accessible dropdown menus
- **Theme Toggle** - Dark/light mode switcher

To add more components:

```bash
npx shadcn@latest add [component-name]
```

## 🗄️ Database Integration

### Drizzle ORM Setup

The template includes Drizzle ORM configuration for PostgreSQL:

1. Define your schemas in `src/db/schemas/`
2. Configure database connection in `src/db/index.ts`
3. Run migrations with `pnpm run db:migrate`

### Supabase Integration

Supabase client is pre-configured in `src/lib/supabase-client.ts`. Use it for:

- Authentication
- Real-time subscriptions
- File storage
- Database operations

## 📊 State Management

### Zustand Store Example

```typescript
import { create } from 'zustand'

interface AppState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useAppStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))
```

### TanStack Query Usage

```typescript
import { useQuery } from '@tanstack/react-query'

function UserProfile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error occurred</div>
  
  return <div>{data.name}</div>
}
```

## 🚀 Deployment

### Production Build

```bash
pnpm run build
pnpm run start
```

### Docker Production

```bash
docker build -t next-app .
docker run -p 3000:3000 next-app
```

### Environment Variables

Ensure all required environment variables are set in your production environment:

- `DATABASE_URL`
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `NEXT_PUBLIC_API_BASE_URL`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses:

- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

Run `pnpm run lint` and `pnpm run format` before committing.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About Datapulse SAS

This template is developed and maintained by **Datapulse SAS**, a technology company focused on creating modern, scalable web solutions.

---

### Built with ❤️ by Datapulse SAS

For support or questions, please open an issue in the repository.
