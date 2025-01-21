import React, { useEffect, useRef } from 'react';

const Star = ({ id, x, y, destroyStar }) => {
  const starRef = useRef(null);

  useEffect(() => {
    starRef.current.focus();
  }, []);

  return (
    <div
      tabIndex="0"
      onClick={() => destroyStar(id)}
      style={{ left: x, top: y }}
      className='star'
      ref={starRef}
    >
      ⭐️
    </div>
  );
};

export default Star;
