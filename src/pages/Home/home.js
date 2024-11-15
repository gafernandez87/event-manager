import './home.css';

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();

    const [events, setEvents] = useState([
        { id: 1, title: 'Fiesta de 15 Giuli', eventDate: '2023-12-15' },
        { id: 2, title: 'Casamiento Carolina', eventDate: '2023-10-10' },
        { id: 3, title: 'Seminario Anual 2024', eventDate: '2024-06-01' },
    ]);

  return (
    <div className="container">
        <section className='flex-row'>
            <h2>Mis eventos</h2>
            <button className="btn new-event" onClick={() => navigate('/new-event')}>+</button>
        </section>
        <section className="events-section">
            <ul class="events">
                {events.map(event => (
                    <li class="flex-row">
                        <span>{event.title}</span>
                        <span>{event.eventDate}</span>
                        <div class="actions flex-row">
                            <EditIcon onClick={() => navigate(`/event-detail/${event.id}`)} />
                            <DeleteIcon />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </div>
  );
}

export default Home;