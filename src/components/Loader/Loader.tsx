import React from 'react';
import './loader.css';

interface ILoader {
  size: 'big' | 'medium' | 'small';
}

function Loader({ size }: ILoader) {
  return (
    <div className={`${size} lds-ring`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loader;
