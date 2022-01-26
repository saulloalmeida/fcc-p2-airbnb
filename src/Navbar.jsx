import Logo from './Logo'

export default function Navbar() {
    return <header>
        <nav className="p-5 flex items-center w-screen h-24 border-b-2 shadow-md">
            <Logo />
        </nav>
    </header>;
}
