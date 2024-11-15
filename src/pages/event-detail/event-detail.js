import { useEffect, useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';

import './event-detail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchEventById, fetchGuests } from '../../services/api';
import Modal from '../../components/modal/modal';

function EventDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [guests, setGuests] = useState([
    { id: 1, name: 'Martín Ricon', email: 'martin@gmail.com', count: 4, invitedDate: '2023-10-11', status: 'PENDIENTE' },
    { id: 2, name: 'Gaston Fernandez', email: 'gaston@gmail.com', count: 2, invitedDate: '2023-10-12', status: 'CONFIRMADO' },
  ]);

  const [guessDetail, setGuestDetail] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const eventData = await fetchEventById(id);
        setEvent(eventData);

        const guests = await fetchGuests(id);
        setGuests(guests || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getEvent();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para crear el evento
    console.log('Update event:', { event });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log('guessDetail', guessDetail)
  if(guessDetail) {
    return <Modal onClose={() => setGuestDetail(null)}>
      {guessDetail.name} {guessDetail.last_name} {guessDetail.count} {guessDetail.status} {guessDetail.email}
    </Modal>
  }

  if(!loading && event) {
    return (
      <div className="container">
        <BackIcon onClick={() => navigate('/')} />
        <section className='flex-column'>
          <h1>{event.event_name}</h1>
          <span className='event-date'>{event.event_date}</span>
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
                <tr key={guest.id} onClick={() => setGuestDetail(guest)}>
                  <td>{guest.name} {guest.last_name}</td>
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
}

export default EventDetail;