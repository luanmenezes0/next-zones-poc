import React from 'react';
import { useSelector } from 'react-redux';
import styles from './TicketsList.module.css';

export default function TicketList() {
  const tickets = useSelector((state) => state.posts.posts);

  return (
    <>
      <h1>Tickets</h1>
      <div className={styles.list}>
        {tickets.map((ticket, index) => (
          <article key={index}>
            <p>👦🏽 {ticket.author}</p>
            <p>📖 {ticket.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
