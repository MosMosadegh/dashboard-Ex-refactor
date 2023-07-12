import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import withShowToggle from './withShowToggle'

const Question = ({id, title, info, showInfo, toggleShowInfoHandler}) => {

  return (
    <article className='question' onClick={toggleShowInfoHandler}>
      <header>
        <h4>{title}</h4>
        <button className='btn'>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default withShowToggle(Question);
