import './invite.css';

import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Invite() {
    const navigate = useNavigate();

    const [event, setEvent] = useState({id: 1, title: 'Fiesta de 15 Giuli', eventDate: '2023-12-15'});
    const [email, setEmail] = useState('');

    const [pendingList, setPendingList] = useState([]);

    const addInviteToList = () => {
        setPendingList([...pendingList, email]);
        setEmail('');
    }


  return (
    <div className="container">
      <BackIcon onClick={() => navigate(`/event-detail/${event.id}`)} />
      <section className='flex-column'>
        <h1>{event.title}</h1>
        <span className='event-date'>{event.eventDate}</span>
      </section>
      
      <section className='flex-column form-email'>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
            />
        </div>
        <button className='btn invite-send' onClick={addInviteToList}>Invitar</button>
        {pendingList.length > 0 && (
            <div className='pending-list'>
                <h3>Invitados pendientes</h3>
                <ul>
                    {pendingList.map(email => (
                        <li>{email}</li>
                    ))}
                </ul>
                <button className='btn'>Enviar ({pendingList.length})</button>
            </div>
        )}
      </section>
    </div>
  );
}

export default Invite;