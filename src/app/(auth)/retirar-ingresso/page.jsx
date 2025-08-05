import Form from 'next/form'
import cadastroAction from "./cadastroAction"

export default function Cadastro() {
    return(
        <>
            <main className="px-7 pt-5">
                <Form action={cadastroAction} className="flex flex-col gap-2.5">
                {/* <div className="grid grid-cols-2">
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="perfil" value="publico-geral" id="" />
                    <label className="" htmlFor="">Público geral</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="perfil" value="comerciante" id="" />
                    <label className="" htmlFor="">Comerciante</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="perfil" value="empregado" id="" />
                    <label className="" htmlFor="">Empregado</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="perfil" value="empresario" id="" />
                    <label className="" htmlFor="">Emprésario</label>
                </div>
                </div> */}

                <div className="grid gap-2 pb-4">
                    <div className="grid gap-1">
                        <label className="" htmlFor="nome">Nome</label>
                        <input name='nome' className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="text" />
                    </div>
                    <div className="grid gap-1">
                        <label className="" htmlFor="email">Email</label>
                        <input name='email' className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="email" />
                    </div>
                    <div className="grid gap-1">
                        <label className="" htmlFor="cpf">Cpf</label>
                        <input name='cpf' className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="text" />
                    </div>
                    <div className="grid gap-1">
                        <label className="" htmlFor="cidade">Cidade</label>
                        <input name='cidade' className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="text" />
                    </div>
                </div>
            
                <button type='submit' className="px-2 py-3 mb-4 rounded-sm text-[var(--b-100)] bg-[var(--az-400)]">Criar conta</button>
                </Form>
            </main>
        </>
    )
}