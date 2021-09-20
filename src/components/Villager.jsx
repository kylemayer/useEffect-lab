import React from 'react';
import PropTypes from 'prop-types';
import style from './Villager.css';

const Villager = ({ image, name, gender, phrase }) => (
  <div>
    <img className={style.Villager} src={image} alt={name}/>
    <p>{name} ({gender})</p>
    <p>"{phrase}"</p>
  </div>
);

Villager.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
};

export default Villager;
