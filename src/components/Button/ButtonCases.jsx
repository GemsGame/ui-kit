import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Sandbox from '../Sandbox/Sandbox';

const ButtonCases = (props) => (
  <>
    <Sandbox label="1. Primary small. Text only:">
      <Button className="btn-primary btn-primary_small">Download</Button>
    </Sandbox>
    <Sandbox label="2. Primary small. Icon and onClick function:">
      <Button className="btn-primary btn-primary_small" onClick={() => console.log('+1')} icon={<div className="btn-primary__icon"><i className="fas fa-lg fa-download" /></div>}>Download</Button>
    </Sandbox>
    <Sandbox label="3. Primary small. Disabled:">
      <Button className="btn-primary btn-primary_small" onClick={() => console.log('disabled')} disabled>Download</Button>
    </Sandbox>
    <Sandbox label="4. Primary small. Active:">
      <Button className="btn-primary btn-primary_small" active>Download</Button>
    </Sandbox>
    <Sandbox label="5. Primary small. Type submit:">
      <Button className="btn-primary btn-primary_small" type="submit">Download</Button>
    </Sandbox>
    <Sandbox label="6. Primary small. href link:">
      <Button className="btn-primary btn-primary_small" href="#test" type="link">link</Button>
      <Button className="btn-primary btn-primary_small disabled" href="#test" type="link" disabled>link</Button>
    </Sandbox>
  </>
);

ButtonCases.propTypes = {

};

export default ButtonCases;
