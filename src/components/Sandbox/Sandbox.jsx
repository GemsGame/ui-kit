import React from 'react';
import PropTypes from 'prop-types';
import './Sandbox.scss';

const Sandbox = ({ label, children }) => (
  <div className="sandbox-block">
    <div className="sandbox-block__element">
      <h2 className="sandbox-block__header"><span>{label}</span></h2>
      {children}
    </div>
  </div>
);

Sandbox.propTypes = {

};

export default Sandbox;
