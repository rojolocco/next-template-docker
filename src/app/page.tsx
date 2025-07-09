"use client";

import { useState } from "react";
import ProductTable from "@/components/ProductTable";
import { sampleProducts } from "@/data/products";
import { env as clientEnv } from "@/env/client";

export default function Home() {
  const [envData, setEnvData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // Ejemplo de uso de variables de entorno del cliente (validadas con T3 y Zod)
  console.log("🔧 Variables de entorno del cliente:");
  console.log("API Base URL:", clientEnv.NEXT_PUBLIC_API_BASE_URL);
  
  // Las variables del servidor NO están disponibles en el cliente por seguridad
  // console.log(serverEnv.NEXT_API_SECRET); // ❌ Esto causaría un error

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

        <main>
          <ProductTable data={sampleProducts} />
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
