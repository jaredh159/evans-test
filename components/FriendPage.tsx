import React from 'react';

export interface Props {
  name: string;
  born: number;
}

const Friend: React.FC<Props> = ({ name, born }) => (
  <h1>
    {name} was born in {born}
  </h1>
);

export default Friend;
