"use client";

import { useState } from "react";

interface Column {
  name: string;
  type:
    | "TEXT"
    | "INTEGER"
    | "BOOLEAN"
    | "TIMESTAMP"
    | "VARCHAR(255)"
    | "DECIMAL(10,2)";
  nullable: boolean;
  primaryKey: boolean;
}

interface CreateTableFormProps {
  onSuccess?: (tableName: string) => void;
}

export default function CreateTableForm({ onSuccess }: CreateTableFormProps) {
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState<Column[]>([
    { name: "id", type: "INTEGER", nullable: false, primaryKey: true },
  ]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const columnTypes = [
    "TEXT",
    "INTEGER",
    "BOOLEAN",
    "TIMESTAMP",
    "VARCHAR(255)",
    "DECIMAL(10,2)",
  ] as const;

  const addColumn = () => {
    setColumns([
      ...columns,
      { name: "", type: "TEXT", nullable: true, primaryKey: false },
    ]);
  };

  const removeColumn = (index: number) => {
    if (columns.length > 1) {
      setColumns(columns.filter((_, i) => i !== index));
    }
  };

  const updateColumn = (index: number, field: keyof Column, value: any) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], [field]: value };

    // If setting as primary key, make it not nullable and remove primary key from others
    if (field === "primaryKey" && value === true) {
      newColumns[index].nullable = false;
      newColumns.forEach((col, i) => {
        if (i !== index) col.primaryKey = false;
      });
    }

    setColumns(newColumns);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/create-table", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tableName,
          columns,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
        onSuccess?.(tableName);
        // Reset form
        setTableName("");
        setColumns([
          { name: "id", type: "INTEGER", nullable: false, primaryKey: true },
        ]);
      } else {
        setError(data.message || "Error creating table");
      }
    } catch (err) {
      setError("Network error occurred");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        🗃️ Crear Nueva Tabla en la Base de Datos
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Table Name */}
        <div>
          <label
            htmlFor="tableName"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Nombre de la Tabla
          </label>
          <input
            type="text"
            id="tableName"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            placeholder="mi_tabla_personalizada"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Columns */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Columnas
          </label>

          {columns.map((column, index) => (
            <div
              key={index}
              className="mb-2 flex gap-2 rounded bg-gray-50 p-3 dark:bg-gray-700"
            >
              <input
                type="text"
                placeholder="nombre_columna"
                value={column.name}
                onChange={(e) => updateColumn(index, "name", e.target.value)}
                className="flex-1 rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
                required
              />

              <select
                value={column.type}
                onChange={(e) => updateColumn(index, "type", e.target.value)}
                className="rounded border border-gray-300 px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-600 dark:text-white"
              >
                {columnTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={column.nullable}
                  onChange={(e) =>
                    updateColumn(index, "nullable", e.target.checked)
                  }
                  disabled={column.primaryKey}
                  className="mr-1"
                />
                Nullable
              </label>

              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={column.primaryKey}
                  onChange={(e) =>
                    updateColumn(index, "primaryKey", e.target.checked)
                  }
                  className="mr-1"
                />
                PK
              </label>

              {columns.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeColumn(index)}
                  className="rounded bg-red-500 px-2 py-1 text-sm text-white hover:bg-red-600"
                >
                  ✕
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addColumn}
            className="mt-2 rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
          >
            + Agregar Columna
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !tableName.trim()}
          className="w-full rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Creando tabla..." : "Crear Tabla"}
        </button>
      </form>

      {/* Results */}
      {error && (
        <div className="mt-4 rounded border border-red-400 bg-red-100 p-3 text-red-700 dark:bg-red-900 dark:text-red-300">
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div className="mt-4 rounded border border-green-400 bg-green-100 p-3 text-green-700 dark:bg-green-900 dark:text-green-300">
          <strong>✅ {result.message}</strong>
          <details className="mt-2">
            <summary className="cursor-pointer font-medium">
              Ver detalles
            </summary>
            <pre className="mt-2 overflow-x-auto rounded bg-white p-2 text-xs dark:bg-gray-800">
              {JSON.stringify(result.data, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}
