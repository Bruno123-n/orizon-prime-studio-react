import './Testimonials.css'

export function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Lucas Andrade',
      role: 'Cliente VIP',
      comment: 'Atendimento impecável! O ambiente é super agradável, a cerveja gelada e o corte sai exatamente como eu peço. Não troco por nada.',
      rating: '★★★★★',
    },
    {
      id: 2,
      name: 'Gabriel Martins',
      role: 'Cliente Frequente',
      comment: 'Barba na navalha com toalha quente de primeira linha. Excelente para quem quer relaxar e sair com o visual renovado.',
      rating: '★★★★★',
    },
    {
      id: 3,
      name: 'Rafael Costa',
      role: 'Cliente Novo',
      comment: 'Primeira vez no Orizon Prime e virei freguês. Agendamento rápido e fácil pelo site e pontualidade absurda.',
      rating: '★★★★★',
    },
  ]

  return (
    <section className="testimonials" id="depoimentos">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-tag">Avaliações</span>
          <h2 className="testimonials-title">
            O que nossos <span>Clientes Dizem</span>
          </h2>
          <p className="testimonials-subtitle">
            A satisfação de quem vive a experiência Orizon Prime todos os dias.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-card">
              <div className="testimonial-rating">{review.rating}</div>
              <p className="testimonial-comment">"{review.comment}"</p>
              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}