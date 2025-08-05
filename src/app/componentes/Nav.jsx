import Image from "next/image"
import logo from "../../imgs/logo-senac.svg"
import menuAberto from "../../imgs/menu-aberto.svg"
import Link from "next/link"


const Nav = () => {
  return (
    <header className="bg-[var(--b-100)]">
        <nav className="flex justify-between items-center px-7 border-b-2 border-[var(--l-500)]">
          <Link href="/">
            <Image src={logo} alt="" />
          </Link>

            <div>
                <Image src={menuAberto} alt=""/>
            </div>
        </nav>
    </header>
  )
}

export default Nav