import Form from 'next/form'

const page = () => {
  return (
    <main className="px-7  pt-5">
        <h1 className="text-3xl  pb-4 text-[var(--az-500)]" >Estamos quase lá! </h1>

        <div>
        <Form className="grid gap-6">
            {/* <div className="">
                <p className="text-xl pb-1 text-[var(--az-400)]">Perfil</p>

                <div className="grid grid-cols-2">
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="perfil" value="piblico-geral" id="" />
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
                </div>
            </div> */}

            <div className="flex flex-col gap-2.5">
                <div className="grid gap-1">
                    <label className="" htmlFor="">Nome</label>
                    <input className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="text" />
                </div>
                <div className="grid gap-1">
                    <label className="" htmlFor="email">Email</label>
                    <input className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="email" />
                </div>
                <div className="grid gap-1">
                    <label className="" htmlFor="">Senha</label>
                    <input className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="password" />
                </div>
                <div className="grid gap-1">
                    <label className="" htmlFor="">Cpf</label>
                    <input className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="text" />
                </div>
                <div className="grid gap-1">
                    <label className="" htmlFor="">Cidade</label>
                    <input className="bg-[var(--b-200)] rounded-sm px-1 py-1.5" type="text" />
                </div>
            </div>

            {/* <div>
                <h3 className="text-xl text-[var(--az-400)]">Selecionar os dias</h3>

                <div className="flex justify-items-center gap-1.5">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Dia 23 de junho</label>
                </div>
            </div>

            <div className="">
                <p className="text-xl pb-1 text-[var(--az-400)]">Você possui alguma deficiência? se sim qual?</p>

                <div className="grid grid-cols-2">
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="" id="" />
                    <label className="" htmlFor="">Deficiência visual</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="" id="" />
                    <label className="" htmlFor="">Deficiência física</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="" id="" />
                    <label className="" htmlFor="">Deficiência mental</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="" id="" />
                    <label className="" htmlFor="">Deficiência múltipla</label>
                </div>
                <div className=" flex justify-items-center gap-2.5">
                    <input type="radio" name="" id="" />
                    <label className="" htmlFor="">Não possuo deficiência</label>
                </div>
                </div>
            </div> */}

            <button className="px-2 py-3 rounded-sm text-[var(--b-100)] bg-[var(--az-400)]">Criar conta</button>
        </Form>
        </div>
    </main>
  )
}

export default page