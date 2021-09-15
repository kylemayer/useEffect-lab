import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Villager from './Villager';

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
