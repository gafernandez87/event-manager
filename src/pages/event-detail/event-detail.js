import { useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';

import './event-detail.css';
import { useNavigate } from 'react-router-dom';

function EventDetail() {
  const navigate = useNavigate();
  const [event, setEvent] = useState({id: 1, title: 'Fiesta de 15 Giuli', eventDate: '2023-12-15'});
  const [guests, setGuests] = useState([
    { id: 1, name: 'Martín Ricon', email: 'martin@gmail.com', count: 4, invitedDate: '2023-10-11', status: 'PENDIENTE' },
    { id: 2, name: 'Gaston Fernandez', email: 'gaston@gmail.com', count: 2, invitedDate: '2023-10-12', status: 'CONFIRMADO' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para crear el evento
    console.log('Update event:', { event });
  };

  return (
    <div className="container">
      <BackIcon onClick={() => navigate('/')} />
      <section className='flex-column'>
        <h1>{event.title}</h1>
        <span className='event-date'>{event.eventDate}</span>
      </section>
      
      <section className='flex-column guests-section'>
        <h3>
          Invitados 
          <button className='btn invite-send' onClick={() => navigate('invite')}>+ Invitar</button>
        </h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {guests.map(guest => (
              <tr>
                <td>{guest.name}</td>
                <td>{guest.count}</td>
                <td>{guest.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default EventDetail;