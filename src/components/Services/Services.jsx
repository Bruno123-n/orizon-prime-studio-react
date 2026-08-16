import './Services.css'

export function Services({ onOpenBooking }) {
  const servicesList = [
    {
      id: 1,
      title: 'Corte Tradicional / Moderno',
      price: 'R$ 60',
      description: 'Lavagem, corte personalizado com tesoura ou máquina e finalização com pomada premium.',
      badge: 'Mais Pedido',
    },
    {
      id: 2,
      title: 'Barba Imperial',
      price: 'R$ 50',
      description: 'Modelagem de barba com toalha quente, óleo hidratante, alinhamento na navalha e pós-barba.',
      badge: null,
    },
    {
      id: 3,
      title: 'Combo Orizon Prime',
      price: 'R$ 95',
      description: 'Corte completo + Barba Imperial + Bebida de cortesia e massagem capilar relaxante.',
      badge: 'Recomendado',
    },
    {
      id: 4,
      title: 'Tratamento & Camuflagem',
      price: 'R$ 70',
      description: 'Hidratação profunda para fios e couro cabeludo ou disfarce sutil de fios brancos.',
      badge: null,
    },
  ]

  return (
    <section className="services" id="servicos">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">Nossos Serviços</span>
          <h2 className="services-title">
            Experiência completa de <span>Cuidado & Estilo</span>
          </h2>
          <p className="services-subtitle">
            Técnicas modernas alinhadas à tradição da barbearia clássica.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div key={service.id} className="service-card">
              {service.badge && <span className="service-badge">{service.badge}</span>}
              <div className="service-card-header">
                <h3>{service.title}</h3>
                <span className="service-price">{service.price}</span>
              </div>
              <p className="service-description">{service.description}</p>
              <a 
                href="#agendar"
                className="service-btn"
                onClick={ onOpenBooking }
              >
                Agendar este serviço
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}