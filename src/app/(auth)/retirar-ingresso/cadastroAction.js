'use server'

import db from "@/app/lib/db"
import { redirect } from "next/navigation"

const cadastroAction = async (formData) => {
  const entris = Array.from(formData.entries())
  const data = Object.fromEntries(entris)

  if (!data.nome || !data.email || !data.cpf || !data.senha || !data.cidade) {
    throw new Error("Prencha seus dados")
  }

  
  await db.pessoa.create({
    data: {
      nome: data.nome,
      email: data.email,
      cpf: data.cpf,
      cidade: data.cidade
    }
  })

  redirect("/setor")
}

export default cadastroAction