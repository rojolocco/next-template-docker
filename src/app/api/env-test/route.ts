import { NextResponse } from "next/server";
import { env as serverEnv } from "@/env/server";
import { env as clientEnv } from "@/env/client";

export async function GET() {
    // Ejemplo de uso de variables de entorno del servidor (validadas con T3 y Zod)
    console.log("🔧 Variables de entorno del servidor:");
    console.log("NODE_ENV:", serverEnv.NODE_ENV);
    console.log("NEXT_API_SECRET:", serverEnv.NEXT_API_SECRET ? "✅ Configurado" : "❌ No configurado");

    console.log("🌐 Variables de entorno del cliente:");
    console.log("API Base URL:", clientEnv.NEXT_PUBLIC_API_BASE_URL);

    return NextResponse.json({
        message: "Variables de entorno validadas correctamente",
        server: {
            nodeEnv: serverEnv.NODE_ENV,
            hasApiSecret: !!serverEnv.NEXT_API_SECRET,
        },
        client: {
            apiBaseUrl: clientEnv.NEXT_PUBLIC_API_BASE_URL,
        },
    });
}