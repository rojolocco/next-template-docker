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
            </div>
          </div>
        </header>

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
              </Button>
            </div>

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
      </div>
    </div>
  );
}
