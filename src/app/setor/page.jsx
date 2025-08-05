'use client'

import cadeira from "@/imgs/cadeira.svg"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import generateQR from "../lib/gerarQrCode"
import IngressoQrCode from "../ingressoQrCode/page"


const Setor = () => {

    const [reservado, setReservado] = useState(false)
    
    const pegaId = (id) =>{
        console.log(id)
        IngressoQrCode(id)
    }
  return (
    <main className="px-7 pt-5">
        <h1 className="text-3xl text-[var(--az-400)] pb-4">Escolha seu setor</h1>
        <div className="flex bg-black  justify-center py-6">
           <p className="text-2xl text-[var(--b-100)] items-center">Palco</p> 
        </div>

        <div className="grid justify-center pt-5">
            <div className="grid gap-2 py-2 px-1.5 bg-[var(--a-100)] mb-6">
                <ul className="flex gap-2">
                    <li onClick={(e) => { 
                         setReservado(!reservado)
                         pegaId(e.currentTarget)
                         }} id="1" className={`${reservado ? 'bg-amber-400' : 'bg-amber-950'} p-2`}>
                        <Image src={cadeira} alt="assento" />
                    </li>




                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul> 
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>

                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul> 
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
                <ul className="flex gap-2">
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                    <li><Image src={cadeira} alt="assento" /></li>
                </ul>
            </div> 
            <Link className="px-2 py-3 text-center mb-4 rounded-sm text-[var(--b-100)] bg-[var(--az-400)]" href="/ingressoQrCode">Continuar</Link>
        </div>
    </main>
  )
}

export default Setor