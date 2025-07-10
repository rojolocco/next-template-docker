<<<<<<< HEAD
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
=======
"use client";

import { useState } from "react";

import CreateTableForm from "@/components/CreateTableForm";
import ProductTable from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import { sampleProducts } from "@/data/products";
import { env as clientEnv } from "@/env/client";

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: Record<string, unknown> | null;
  error?: string;
  [key: string]: unknown;
}

interface TestQueryData {
  [key: string]: string | number | boolean | null;
}

interface TestQueryResponse {
  success: boolean;
  message?: string;
  data?: TestQueryData | null;
  error?: string;
  row_count?: number;
  [key: string]: unknown;
}

export default function Home() {
  const [envData, setEnvData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCreateTable, setShowCreateTable] = useState(false);
  const [dbTestResult, setDbTestResult] = useState<ApiResponse | null>(null);
  const [testQueryResult, setTestQueryResult] = useState<TestQueryResponse | null>(null);

  // Ejemplo de uso de variables de entorno del cliente (validadas con T3 y Zod)
  console.log("🔧 Variables de entorno del cliente:");
  console.log("API Base URL:", clientEnv.NEXT_PUBLIC_API_BASE_URL);

  // Las variables del servidor NO están disponibles en el cliente por seguridad
  // console.log(serverEnv.NEXT_API_SECRET); // ❌ Esto causaría un error

  // Función para probar la API de variables de entorno
  const testEnvAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/env-test");
      const data = await response.json();
      setEnvData(data);
      console.log("📡 Respuesta de la API:", data);
    } catch (error) {
      console.error("❌ Error al llamar la API:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para probar la conexión a la base de datos
  const testDatabaseConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/db-test");
      const data = await response.json();
      setDbTestResult(data);
      console.log("🗄️ Resultado de conexión DB:", data);
    } catch (error) {
      console.error("❌ Error al conectar con la DB:", error);
      setDbTestResult({ success: false, error: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  // Función para consultar la primera fila de la tabla Test
  const queryTestTable = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/test-query");
      const data = await response.json();
      setTestQueryResult(data);
      console.log("🔍 Resultado de consulta tabla Test:", data);
    } catch (error) {
      console.error("❌ Error al consultar tabla Test:", error);
      setTestQueryResult({ success: false, error: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  const handleTableCreated = (tableName: string) => {
    console.log(`✅ Tabla '${tableName}' creada exitosamente`);
    // Opcional: refrescar la lista de tablas o mostrar mensaje
  };
  return (
    <div className="bg-background min-h-screen p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="text-foreground mb-2 text-3xl font-bold sm:text-4xl">
            Catálogo de Productos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona tu inventario con ordenamiento por columnas
          </p>

          {/* Sección de prueba de variables de entorno */}
          <div className="mt-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
            <h2 className="mb-3 text-lg font-semibold">
              🔧 Prueba de Variables de Entorno (T3 + Zod)
            </h2>
            <Button onClick={testEnvAPI} disabled={loading} variant="default">
              {loading ? "Cargando..." : "Probar API de Variables"}
            </Button>

            {envData && (
              <div className="mt-4 rounded bg-white p-3 text-left dark:bg-gray-700">
                <h3 className="mb-2 font-semibold">📡 Respuesta de la API:</h3>
                <pre className="overflow-x-auto text-sm">
                  {JSON.stringify(envData, null, 2)}
                </pre>
              </div>
            )}

            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              <p>
                ✅ Variable del cliente: {clientEnv.NEXT_PUBLIC_API_BASE_URL}
              </p>
              <p>🔒 Variables del servidor solo disponibles en la API</p>
>>>>>>> ec0ecf8 (format changes)
            </div>
          </div>

<<<<<<< HEAD
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
=======
        <main className="space-y-8">
          {/* Sección de gestión de base de datos */}
          <section className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              🗄️ Gestión de Base de Datos
            </h2>

            <div className="mb-6 flex flex-wrap gap-4">
              <Button
                onClick={testDatabaseConnection}
                disabled={loading}
                variant="default"
              >
                {loading ? "Probando..." : "Probar Conexión DB"}
              </Button>

              <Button
                onClick={() => setShowCreateTable(!showCreateTable)}
                variant="secondary"
              >
                {showCreateTable ? "Ocultar" : "Crear Nueva Tabla"}
              </Button>

              <Button
                onClick={queryTestTable}
                disabled={loading}
                variant="outline"
              >
                {loading ? "Consultando..." : "Consultar Tabla Test"}
>>>>>>> ec0ecf8 (format changes)
              </Button>
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
            {/* Resultado de prueba de conexión */}
            {dbTestResult && (
              <div
                className={`mb-4 rounded p-3 ${
                  dbTestResult.success
                    ? "border border-green-400 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : "border border-red-400 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                <strong>
                  {dbTestResult.success
                    ? "✅ Conexión exitosa"
                    : "❌ Error de conexión"}
                </strong>
                <details className="mt-2">
                  <summary className="cursor-pointer font-medium">
                    Ver detalles
                  </summary>
                  <pre className="mt-2 overflow-x-auto rounded bg-white p-2 text-xs dark:bg-gray-800">
                    {JSON.stringify(dbTestResult, null, 2)}
                  </pre>
                </details>
              </div>
            )}

            {/* Resultado de consulta tabla Test */}
            {testQueryResult && (
              <div
                className={`mb-4 rounded p-3 ${
                  testQueryResult.success
                    ? "border border-blue-400 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                    : "border border-red-400 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                }`}
              >
                <strong>
                  {testQueryResult.success
                    ? "🔍 Consulta exitosa - Tabla Test"
                    : "❌ Error en consulta"}
                </strong>
                {testQueryResult.success && (
                  <div className="mt-2">
                    {testQueryResult.data ? (
                      <>
                        <p className="font-medium">Primera fila encontrada:</p>
                        <div className="mt-1 rounded bg-white p-2 text-sm dark:bg-gray-800">
                          {Object.entries(testQueryResult.data).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="flex justify-between border-b border-gray-200 py-1 dark:border-gray-600"
                              >
                                <span className="font-medium">{key}:</span>
                                <span>{String(value)}</span>
                              </div>
                            )
                          )}
                        </div>
                      </>
                    ) : (
                      <p className="font-medium text-yellow-600 dark:text-yellow-400">
                        📭 La tabla Test existe pero no contiene datos
                      </p>
                    )}
                  </div>
                )}
                <details className="mt-2">
                  <summary className="cursor-pointer font-medium">
                    Ver detalles técnicos
                  </summary>
                  <pre className="mt-2 overflow-x-auto rounded bg-white p-2 text-xs dark:bg-gray-800">
                    {JSON.stringify(testQueryResult, null, 2)}
                  </pre>
                </details>
              </div>
            )}

            {/* Formulario de creación de tabla */}
            {showCreateTable && (
              <CreateTableForm onSuccess={handleTableCreated} />
            )}
          </section>

          {/* Tabla de productos existente */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              📦 Catálogo de Productos (Ejemplo)
            </h2>
            <ProductTable data={sampleProducts} />
          </section>
        </main>

        <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Tabla creada con{" "}
            <a
              href="https://tanstack.com/table"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              TanStack Table
            </a>{" "}
            y{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Next.js
            </a>
          </p>
        </footer>
>>>>>>> ec0ecf8 (format changes)
      </div>
    </div>
  );
}
