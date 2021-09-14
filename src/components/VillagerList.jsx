import React from 'react';
import PropTypes from 'prop-types';
import Villager from '../components/Villager';

const VillagerList = ({ villagers }) => (
  <ul>
    {villagers.map((villager) => (
      <li key={villager._id}>
        <Villager {...villager} />
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
    })
  ),
};
