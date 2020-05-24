import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SandboxButton = (props) => (
  <div className="buttons-block">
    <div className="buttons-block__header"><h1>Buttons</h1></div>
    <div className="buttons-block__element">
      <h2 className="buttons-block__header"><span>1. Primary small. Text only:</span></h2>
      <Button className="btn-primary btn-primary_small">Download</Button>
    </div>
    <div className="buttons-block__element">
      <h2 className="buttons-block__header"><span>2. Primary small. Icon and onClick function:</span></h2>
      <Button className="btn-primary btn-primary_small" onClick={() => console.log('+1')} icon={<div className="btn-primary__icon"><i className="fas fa-lg fa-download" /></div>}>Download</Button>
    </div>
    <div className="buttons-block__element">
      <h2 className="buttons-block__header"><span>3. Primary small. Disabled:</span></h2>
      <Button className="btn-primary btn-primary_small" onClick={() => console.log('disabled')} disabled>Download</Button>
    </div>
    <div className="buttons-block__element">
      <h2 className="buttons-block__header"><span>4. Primary small. Active:</span></h2>
      <Button className="btn-primary btn-primary_small" active>Download</Button>
    </div>

  </div>
);

SandboxButton.propTypes = {

};

export default SandboxButton;
