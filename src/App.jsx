import React, { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chat from './components/Chat';

function App() {

  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // page transition loader
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <>
       {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className='-z-50'>
            <Outlet />
            <Chat />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
