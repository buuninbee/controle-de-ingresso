'use server'

import Image from 'next/image'
import generateQR from '../lib/gerarQrCode'

const IngressoQrCode = async (id) => {

  const dados = await id;

  console.log(dados)
  const res = await generateQR(`${id},  `);
  return (
    <main className="grid justify-center mt-8">

      <div className="bg-[var(--az-400)] grid px-3 py-5 w-[300px]">
        <div className='justify-items-center pb-2.5'>
            <Image width="150" height="150" src={res} alt='qr-code' />
        </div>
        <h2 className="text-xl text-center pb-6 text-[var(--b-100)]">Semana S do Comércio: projeto social e shows</h2>

        <div className="flex flex-col justify-between items-center gap-4 px-5">
          <div className='flex justify-between w-full'>
            <div>
              <p className="text-sm text-[var(--b-100)]">Nome</p>
              <h3 className="text-lg text-[var(--b-100)]">Vitor Corrêa</h3>
            </div>

            <div className=''>
              <p className="text-sm text-[var(--b-100)]">Assento</p>
              <h3 className="text-lg text-[var(--b-100)]">Area azul - G5</h3>
            </div>
          </div>

          <div className='flex justify-between w-full'>
            <div className='grid gap-1.5'>
              <p className="text-sm text-[var(--b-100)]">Data</p>
              <h3 className="text-lg text-[var(--b-100)]">17/05/2025</h3>
            </div>

            <div className='grid gap-1.5'>
              <p className="text-sm text-[var(--b-100)]">Horario</p>
              <h3 className="text-lg text-[var(--b-100)]">09am - 08pm</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IngressoQrCode