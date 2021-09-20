import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVillagers } from '../services/animalCrossingApi';

const DetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState({});

  useEffect(() => {
    fetchVillagers(id)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, [id]);

  if(loading) return <h1>Loading villager...</h1>;

  return (
    <article>
      <img src={villager.image} alt={villager.name}/>
      <p>{villager.name} ({villager.gender})</p>
      <p>{villager.phrase}</p>
    </article>
  );
};

export default DetailContainer;
