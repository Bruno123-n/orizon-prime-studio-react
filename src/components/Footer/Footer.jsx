import './Footer.css'

export function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            ORIZON <span>PRIME STUDIO</span>
          </div>
          <p className="footer-description">
            Sua experiência em corte, barba e estilo em um ambiente exclusivo e moderno.
          </p>
        </div>

        <div className="footer-info">
          <h4>Horário de Funcionamento</h4>
          <p>Segunda a Sexta: 09h às 20h</p>
          <p>Sábado: 08h às 18h</p>
          <p>Domingo: Fechado</p>
        </div>

        <div className="footer-info">
          <h4>Endereço & Contato</h4>
          <p>Av. Principal, 1000 - Centro</p>
          <p>Contato: (47) 99999-9999</p>
          <p>Instagram: @orizonprimestudio</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Orizon Prime Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}