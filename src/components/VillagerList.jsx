import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../components/Villager';
import { Link } from 'react-route-dom';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    {villagers.map((villager) => (
      <li key={villager.id}>
        <Link to={`/${villager.id}`}>
          <Villager
            image={villager.image}
            name={villager.name}
            gender={villager.gender}
            phrase={villager.phrase}
          />
        </Link>
      </li>
    ))}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      phrase: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default VillagerList;
