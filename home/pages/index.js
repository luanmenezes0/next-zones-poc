import dynamic from 'next/dynamic';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TicketList from '../components/TicketList';

const Header = dynamic(import('../components/Header'));

export default function Home() {
  const [name, setName] = useState('');

  const save = () => {
    window.localStorage.setItem('name', name);
    console.log(window.location.href, name);
    setName('');
  };

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div style={{ display: 'flex' }}>
          <input value={name} onChange={(ev) => setName(ev.target.value)} type="text" />
          <button onClick={save}>Save to localStorage</button>
        </div>
        <TicketList />
      </main>
      <Footer />
    </>
  );
}
