import React from 'react';

const MemoryObject = ({ content, selected, onClick }) => {
  const className = `memory-object ${selected ? 'selected' : ''}`;
  
  return (
    <div className={className} onClick={onClick}>
      {content}
    </div>
  );
};

export default MemoryObject;