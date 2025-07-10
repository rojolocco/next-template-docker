import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Logo Space */}
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-4 flex items-center justify-center">
              <img
                src="/icons/logo_color.png"
                alt="Datapulse SAS"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Next.js Template
            <span className="text-primary block mt-2">by Datapulse SAS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A modern, fast, and scalable web application template
            developed by Datapulse SAS with Next.js, Tailwind CSS, and the latest web technologies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Fast & Modern</h3>
            <p className="text-muted-foreground">
              Built with Next.js 15, React 19, and optimized for performance with Turbopack.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Responsive Design</h3>
            <p className="text-muted-foreground">
              Fully responsive with Tailwind CSS and beautiful UI components from shadcn/ui.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Database Ready</h3>
            <p className="text-muted-foreground">
              Pre-configured with Drizzle ORM, PostgreSQL, and Supabase integration.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Type Safe</h3>
            <p className="text-muted-foreground">
              Full TypeScript support with Zod validation and type-safe API calls.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Docker Ready</h3>
            <p className="text-muted-foreground">
              Containerized with Docker for easy deployment and development consistency.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Developer Tools</h3>
            <p className="text-muted-foreground">
              ESLint, Prettier, and modern development tools configured out of the box.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card p-8 rounded-lg border shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-muted-foreground mb-6">
              This template includes everything you need to build modern web applications.
              Start by editing <code className="bg-muted px-2 py-1 rounded text-sm">src/app/page.tsx</code>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                View Documentation
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t">
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground">
              Built with ❤️ by <span className="font-semibold text-foreground">Datapulse SAS</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Next.js Template Docker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
