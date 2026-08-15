import { useState } from 'react'
import './BookingForm.css'

export function BookingForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Corte Tradicional / Moderno',
    date: '',
    time: '',
  })

  if (!isOpen) return null

  //Descobre qual campo mudou → pega o novo valor → copia o formulário antigo → troca somente aquele campo.
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Formata a mensagem para o WhatsApp
    const message = `Olá! Gostaria de agendar um horário no Orizon Prime Studio:%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Serviço:* ${formData.service}%0A` +
      `*Data:* ${formData.date}%0A` +
      `*Horário:* ${formData.time}`

    // Número do WhatsApp da barbearia (substitua pelo real)
    const phoneNumber = '5547997688933'
    
    // Abre o WhatsApp Web / App
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
    
    onClose()
  }

  return (
    <div className="booking-modal-overlay">
      <div className="booking-modal">
        <button className="booking-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className="booking-header">
          <h2>Agendar <span>Horário</span></h2>
          <p>Preencha os dados abaixo para confirmar pelo WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Seu Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Digite seu nome completo"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">WhatsApp / Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="(47) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">Serviço Desejado</label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="Corte Tradicional / Moderno">Corte Tradicional / Moderno (R$ 60)</option>
              <option value="Barba Imperial">Barba Imperial (R$ 50)</option>
              <option value="Combo Orizon Prime">Combo Orizon Prime (R$ 95)</option>
              <option value="Tratamento & Camuflagem">Tratamento & Camuflagem (R$ 70)</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Data</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Horário</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="booking-submit-btn">
            Confirmar Agendamento no WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}