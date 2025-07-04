import ProductTable from "@/components/ProductTable";
import { sampleProducts } from "@/data/products";

export default function Home() {
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
