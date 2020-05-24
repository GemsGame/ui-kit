import React from 'react'
import PropTypes from 'prop-types'
import './Main.scss';

const Main = ({ children }) => {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}

Main.propTypes = {

}

export default Main;
