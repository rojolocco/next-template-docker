"use client";

import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            {/* Header */}
            <header className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between">
                    <ModeToggle />
                </div>
            </header>

            {/* 404 Content */}
            <main className="container mx-auto px-4 py-16">
                <div className="text-center">
                    <div className="mb-8 flex justify-center">
                        <Image
                            src="/icons/logo_color.png"
                            alt="Datapulse SAS Logo"
                            width={200}
                            height={200}
                        />
                    </div>

                    {/* 404 Number */}
                    <div className="mb-6">
                        <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-600">
                            404
                        </h1>
                    </div>

                    {/* Error Message */}
                    <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white">
                        Página no encontrada
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
                        Lo sentimos, la página que estás buscando no existe o ha sido movida.
                        Verifica la URL o regresa a la página principal.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-center space-x-4">
                        <Link href="/">
                            <Button size="lg" className="px-8">
                                Ir al Inicio
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            size="lg"
                            className="px-8"
                            onClick={() => window.history.back()}
                        >
                            Volver Atrás
                        </Button>
                    </div>
                </div>

                {/* Additional Help Section */}
                <div className="mt-16 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                    <h3 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
                        ¿Necesitas ayuda?
                    </h3>

                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                                    <svg
                                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m7 7 5 5 5-5"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                Contacto
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Contáctanos si necesitas asistencia técnica
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                                    <svg
                                        className="h-6 w-6 text-green-600 dark:text-green-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                Documentación
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                Consulta nuestra documentación completa
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="mb-4 flex justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                    <svg
                                        className="h-6 w-6 text-purple-600 dark:text-purple-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                                Usuarios
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">
                                <Link href="/users" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                    Gestionar usuarios
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="container mx-auto px-4 py-8 text-center text-gray-600 dark:text-gray-400">
                <p>
                    © 2024 Datapulse SAS. All rights reserved. This template is available
                    for use in company projects.
                </p>
            </footer>
        </div>
    );
}