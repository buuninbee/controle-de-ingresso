import Link from "next/link"

const Botao = ({text, path}) => {
  return (
    <button className="text-[var(--b-100)] text-lg bg-[var(--az-500)] py-3 px-6 w-full rounded-lg">
        <Link href={path}>
            {text}
        </Link>
    </button>
  )
}

export default Botao