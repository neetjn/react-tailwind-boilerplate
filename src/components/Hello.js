import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import tw from 'tailwind.macro';

const H1 = styled.h1`
  ${tw`text-2xl font-extrabold text-center`};
`;

export const Hello = () => (
  <Fragment>
    <H1>
      <FontAwesomeIcon icon={ faCoffee } /> Hello World
    </H1>
  </Fragment>
);

