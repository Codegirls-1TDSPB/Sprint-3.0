// GET (listar todas), POST (criar nova)

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Ex: GET http://localhost:3000/tarefa
  // Lista todas as tarefas
  return NextResponse.json({ message: "Listar tarefas" });
}

export async function POST(req: NextRequest) {
  // Ex: POST http://localhost:3000/tarefa
  // Cria uma nova tarefa
  const body = await req.json();
  return NextResponse.json({ message: "Cadastrar tarefa", body });
}
