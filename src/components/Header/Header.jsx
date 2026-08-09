import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo">
          Orizon <span>Prime Studio</span>
        </a>

        <nav className="nav-menu">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Galeria</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#agendar" className="btn-agendar">
          Agendar Horário
        </a>
      </div>
    </header>
  )
}