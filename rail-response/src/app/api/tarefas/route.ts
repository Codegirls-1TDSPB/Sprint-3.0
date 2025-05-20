//  GET (por id), PUT (editar), DELETE (remover)
// app/tarefa/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Ex: GET http://localhost:3000/tarefa/1
  return NextResponse.json({ message: `Buscar tarefa ${params.id}` });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Ex: PUT http://localhost:3000/tarefa/1
  const body = await req.json();
  return NextResponse.json({ message: `Atualizar tarefa ${params.id}`, body });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Ex: DELETE http://localhost:3000/tarefa/1
  return NextResponse.json({ message: `Deletar tarefa ${params.id}` });
}

