"use client";

import { useState } from "react";

interface Column {
  name: string;
  type: 'TEXT' | 'INTEGER' | 'BOOLEAN' | 'TIMESTAMP' | 'VARCHAR(255)' | 'DECIMAL(10,2)';
  nullable: boolean;
  primaryKey: boolean;
}

interface CreateTableFormProps {
  onSuccess?: (tableName: string) => void;
}

export default function CreateTableForm({ onSuccess }: CreateTableFormProps) {
  const [tableName, setTableName] = useState("");
  const [columns, setColumns] = useState<Column[]>([
    { name: "id", type: "INTEGER", nullable: false, primaryKey: true }
  ]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const columnTypes = [
    'TEXT',
    'INTEGER', 
    'BOOLEAN',
    'TIMESTAMP',
    'VARCHAR(255)',
    'DECIMAL(10,2)'
  ] as const;

  const addColumn = () => {
    setColumns([...columns, { name: "", type: "TEXT", nullable: true, primaryKey: false }]);
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
    if (field === 'primaryKey' && value === true) {
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
      const response = await fetch('/api/create-table', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tableName,
          columns
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
        onSuccess?.(tableName);
        // Reset form
        setTableName("");
        setColumns([{ name: "id", type: "INTEGER", nullable: false, primaryKey: true }]);
      } else {
        setError(data.message || 'Error creating table');
      }
    } catch (err) {
      setError('Network error occurred');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        🗃️ Crear Nueva Tabla en la Base de Datos
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Table Name */}
        <div>
          <label htmlFor="tableName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nombre de la Tabla
          </label>
          <input
            type="text"
            id="tableName"
            value={tableName}
            onChange={(e) => setTableName(e.target.value)}
            placeholder="mi_tabla_personalizada"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Columns */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Columnas
          </label>
          
          {columns.map((column, index) => (
            <div key={index} className="flex gap-2 mb-2 p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <input
                type="text"
                placeholder="nombre_columna"
                value={column.name}
                onChange={(e) => updateColumn(index, 'name', e.target.value)}
                className="flex-1 px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm dark:bg-gray-600 dark:text-white"
                required
              />
              
              <select
                value={column.type}
                onChange={(e) => updateColumn(index, 'type', e.target.value)}
                className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm dark:bg-gray-600 dark:text-white"
              >
                {columnTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={column.nullable}
                  onChange={(e) => updateColumn(index, 'nullable', e.target.checked)}
                  disabled={column.primaryKey}
                  className="mr-1"
                />
                Nullable
              </label>
              
              <label className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={column.primaryKey}
                  onChange={(e) => updateColumn(index, 'primaryKey', e.target.checked)}
                  className="mr-1"
                />
                PK
              </label>
              
              {columns.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeColumn(index)}
                  className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          
          <button
            type="button"
            onClick={addColumn}
            className="mt-2 px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          >
            + Agregar Columna
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !tableName.trim()}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creando tabla..." : "Crear Tabla"}
        </button>
      </form>

      {/* Results */}
      {error && (
        <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-300 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-300 rounded">
          <strong>✅ {result.message}</strong>
          <details className="mt-2">
            <summary className="cursor-pointer font-medium">Ver detalles</summary>
            <pre className="mt-2 text-xs overflow-x-auto bg-white dark:bg-gray-800 p-2 rounded">
              {JSON.stringify(result.data, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  );
}