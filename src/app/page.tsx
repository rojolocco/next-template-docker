"use client";

import { useState } from "react";
import ProductTable from "@/components/ProductTable";
import CreateTableForm from "@/components/CreateTableForm";
import { sampleProducts } from "@/data/products";
import { env as clientEnv } from "@/env/client";
import { Button } from '@heroui/react';

export default function Home() {
  const [envData, setEnvData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showCreateTable, setShowCreateTable] = useState(false);
  const [dbTestResult, setDbTestResult] = useState<any>(null);

  // Función para probar la API de variables de entorno
  const testEnvAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/env-test');
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
      const response = await fetch('/api/db-test');
      const data = await response.json();
      setDbTestResult(data);
      console.log("🗄️ Resultado de conexión DB:", data);
    } catch (error) {
      console.error("❌ Error al conectar con la DB:", error);
      setDbTestResult({ success: false, error: 'Network error' });
    } finally {
      setLoading(false);
    }
  };

  const handleTableCreated = (tableName: string) => {
    console.log(`✅ Tabla '${tableName}' creada exitosamente`);
    // Opcional: refrescar la lista de tablas o mostrar mensaje
  };
  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-foreground sm:text-4xl">
            Catálogo de Productos
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gestiona tu inventario con ordenamiento por columnas
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="danger">Danger</Button>
          </div>

          {/* Sección de prueba de variables de entorno */}
          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">🔧 Prueba de Variables de Entorno (T3 + Zod)</h2>
            <button
              onClick={testEnvAPI}
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Cargando..." : "Probar API de Variables"}
            </button>

            {envData && (
              <div className="mt-4 p-3 bg-white dark:bg-gray-700 rounded text-left">
                <h3 className="font-semibold mb-2">📡 Respuesta de la API:</h3>
                <pre className="text-sm overflow-x-auto">
                  {JSON.stringify(envData, null, 2)}
                </pre>
              </div>
            )}

            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              <p>✅ Variable del cliente: {clientEnv.NEXT_PUBLIC_API_BASE_URL}</p>
              <p>🔒 Variables del servidor solo disponibles en la API</p>
            </div>
          </div>
        </header>

        <main className="space-y-8">
          {/* Sección de gestión de base de datos */}
          <section className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🗄️ Gestión de Base de Datos
            </h2>

            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={testDatabaseConnection}
                disabled={loading}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Probando..." : "Probar Conexión DB"}
              </button>

              <button
                onClick={() => setShowCreateTable(!showCreateTable)}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              >
                {showCreateTable ? "Ocultar" : "Crear Nueva Tabla"}
              </button>
            </div>

            {/* Resultado de prueba de conexión */}
            {dbTestResult && (
              <div className={`mb-4 p-3 rounded ${dbTestResult.success
                  ? 'bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300'
                  : 'bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300'
                }`}>
                <strong>
                  {dbTestResult.success ? '✅ Conexión exitosa' : '❌ Error de conexión'}
                </strong>
                <details className="mt-2">
                  <summary className="cursor-pointer font-medium">Ver detalles</summary>
                  <pre className="mt-2 text-xs overflow-x-auto bg-white dark:bg-gray-800 p-2 rounded">
                    {JSON.stringify(dbTestResult, null, 2)}
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
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
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
      </div>
    </div>
  );
}
