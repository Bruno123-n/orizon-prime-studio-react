import './Hero.css'

export function Hero({onOpenBooking}) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tag">Estilo & Tradição</span>
          <h1 className="hero-title">
            Eleve seu estilo ao <span>nível Prime</span>
          </h1>
          <p className="hero-description">
            Cortes modernos, barba alinhada e um atendimento exclusivo em um ambiente 
            sofisticado. Agende seu horário e viva a experiência Orizon.
          </p>
          <div className="hero-buttons">
            <a 
              href="#agendar" 
              className="btn-primary"
              onClick={onOpenBooking}
            >
              Agendar Horário
            </a>
            <a href="#servicos" className="btn-secondary">
              Conhecer Serviços
            </a>
          </div>
        </div>

        <div className="hero-badge-container">
          <div className="hero-card">
            <h3>+1.000</h3>
            <p>Clientes Satisfeitos</p>
          </div>
          <div className="hero-card">
            <h3>4.9 ★</h3>
            <p>Avaliação no Google</p>
          </div>
        </div>
      </div>
    </section>
  )
}