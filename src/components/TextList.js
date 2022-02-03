import React from 'react';
import { useSelector } from 'react-redux';
import Text from './Text';

const TextList = () => {
    const texts=useSelector(state=>state.texts)
  return <div>{texts.map(el=><Text el={el}/>)}</div>;
};

export default TextList;
