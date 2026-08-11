import './Gallery.css'

export function Gallery() {
  const photos = [
    { id: 1, title: 'Corte Fade Moderno', category: 'Cortes', url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600' },
    { id: 2, title: 'Barba Imperial & Alignment', category: 'Barba', url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=600' },
    { id: 3, title: 'Ambiente Exclusivo', category: 'Espaço', url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600' },
    { id: 4, title: 'Atendimento Personalizado', category: 'Experiência', url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600' },
    { id: 5, title: 'Finalização Premium', category: 'Cortes', url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600' },
    { id: 6, title: 'Produtos Selecionados', category: 'Espaço', url: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=600' },
  ]

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="gallery-tag">Portfólio</span>
          <h2 className="gallery-title">
            Conheça o nosso <span>Trabalho</span>
          </h2>
          <p className="gallery-subtitle">
            Confira alguns dos nossos cortes, estilos e o ambiente preparado para você.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="gallery-card">
              <img src={photo.url} alt={photo.title} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-category">{photo.category}</span>
                <h3>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}