import Image from "next/image";

import Botao from "./componentes/Botao";

import fotoBg from "../imgs/foto-home.png"
import iconeDf from "../imgs/icone-df.svg"
import iconeFooter from "../imgs/logo-footer.svg"

export default function Home() {
  return (
    <>
      <div className="grid items-end mb-6">
          <h2 className="absolute z-10 px-7 pb-6 text-3xl lg:text-5xl text-[var(--b-100)]">Venha curtir com a sua familia a <span className="text-[var(--a-500)] italic">Semana S</span></h2>
          <Image className="w-full object-cover lg:h-[500px]" src={fotoBg} alt={fotoBg}/>
      </div>
    
    <main className="relative">
      <section className="px-7">
        <div className="flex align-middle items-center text-center pb-4">
          <h1 className="text-2xl font-bold text-[var(--az-500)]">Participe da semana S no Distrito Federal</h1>

            {/* <Image className="justify-center w-12" src={iconeDf} alt=""/> */}
        </div>
          <p className="text-sm text-center text-[var(--p-200)] pb-10">Conheça tudo que a Fecomércio, Sindicatos Empresarias, Sesc, Senac e CNC oferecem</p>

          <div className="flex flex-col gap-4 w-full mb-10">
            <Botao text="Resgatar ingresso" path="/resgatar-ingresso"/>
            <Botao text="Retirar ingresso" path="/retirar-ingresso"/>
          </div>
      </section>

      <footer className="px-7 border-t-1 border-[var(--az-400)]">
        <h3 className="text-xl py-3 text-[var(--az-500)]">Um oferecimento</h3>

        <Image src={iconeFooter} alt="" />
      </footer>
    </main>
    </>
  );
}
