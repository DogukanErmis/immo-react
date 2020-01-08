import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Hero>
      <Banner
        title="luxurious rooms"
        subtitle="deluxe rooms starting form €299"
      >
        <Link to="/rooms" className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default Home;