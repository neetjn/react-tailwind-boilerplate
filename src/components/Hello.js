import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Hello = () => (
  <h1 className="text-2xl font-extrabold text-center">
    <FontAwesomeIcon icon={ faCoffee } /> Hello World
  </h1>
);

