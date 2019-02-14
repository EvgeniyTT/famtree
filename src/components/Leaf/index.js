import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
import avatar from '../../assets/images/anna.jpg';

function Leaf(props) {
  return (
    <div className="leaf">
      <img src={avatar} className="avatar" alt="leaf avatar"/>
      <p className="name">Anna Tataryna</p>
      <p className="dob">11/12/2016</p>
    </div>
  );
}

// Leaf.propTypes = {
// };

export default Leaf;