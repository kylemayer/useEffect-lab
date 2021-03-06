import React, { useState, useEffect } from 'react';
import VillagerList from '../components/VillagerList';
import { fetchVillagers } from '../services/animalCrossingApi';

const VillagerContainer = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    fetchVillagers()
      .then((villagers) => setVillagers(villagers))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h3>Loading villagers...</h3>;

  return <VillagerList villagers={villagers} />;
};

export default VillagerContainer;
