import './About.css'

export function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop"
            alt="Ambiente Orizon Prime Studio"
          />
        </div>

        <div className="about-content">
          <span className="about-tag">Nossa História</span>
          <h2 className="about-title">
            Tradição e Modernidade em <span>Um Só Lugar</span>
          </h2>
          <p className="about-text">
            O Orizon Prime Studio nasceu com o propósito de redefinir o conceito de barbearia. Combinamos técnicas tradicionais de corte e barba com as últimas tendências e um atendimento totalmente personalizado.
          </p>
          <p className="about-text">
            Nosso espaço foi pensado para oferecer mais do que um serviço de beleza: é um ambiente para você relaxar, tomar uma bebida gelada e renovar sua autoestima com profissionais qualificados.
          </p>

          <div className="about-features">
            <div className="feature-item">
              <h4>Atendimento VIP</h4>
              <p>Horários agendados e atenção exclusiva a cada detalhe.</p>
            </div>
            <div className="feature-item">
              <h4>Ambiente Climatizado</h4>
              <p>Espaço moderno com lounge, café e bebidas cortesia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}