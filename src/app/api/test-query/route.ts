import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('🔍 Intentando consultar tabla Test...')
    
    // Primero intentar con 'Test' (con mayúscula)
    let { data, error } = await supabase
      .from('Test')
      .select('*')
      .limit(1)

    // Si hay error, intentar con 'test' (minúscula)
    if (error) {
      console.log('❌ Error con "Test", intentando con "test":', error.message)
      const result = await supabase
        .from('test')
        .select('*')
        .limit(1)
      
      data = result.data
      error = result.error
    }

    if (error) {
      console.error('❌ Error al consultar ambas variantes de la tabla:', error)
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: error,
          attempted_tables: ['Test', 'test']
        },
        { status: 400 }
      )
    }

    console.log('✅ Consulta exitosa, datos encontrados:', data?.length || 0, 'filas')

    // Verificar si hay datos
    if (!data || data.length === 0) {
      return NextResponse.json({
        success: true,
        data: null,
        message: 'La tabla existe pero no contiene datos',
        row_count: 0
      })
    }

    return NextResponse.json({
      success: true,
      data: data[0], // Tomar la primera fila del array
      message: 'Primera fila de la tabla Test obtenida exitosamente',
      row_count: data.length
    })

  } catch (error) {
    console.error('Error interno del servidor:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Error interno del servidor',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
}