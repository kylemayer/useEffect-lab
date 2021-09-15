import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ image, name, gender, phrase }) => (
  <figure>
    <img src={image} alt={name}/>
    <figcaption>
      {name} {gender} - {phrase}
    </figcaption>
  </figure>
);

Villager.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default Villager;
