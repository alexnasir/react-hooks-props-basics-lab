import React from 'react';
import PropTypes from 'prop-types';


const Links = ({ github, linkedin }) => (
  <div>
    <h3>Links</h3>
    <a href={github}>{github}</a>
    <a href={linkedin}>{linkedin}</a>
  </div>
);

Links.propTypes = {};

Links.defaultProps = {};

export default Links;
