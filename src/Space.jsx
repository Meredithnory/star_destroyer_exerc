import React, { useState, useEffect } from 'react';
import Star from './Star';

const STAR_SIZE = 20;

const Space = () => {
  const [allStars, setAllStars] = useState([]);

  function handleStars() {
    const starID = `star_${Date.now()}_${Math.random()}`;
    const xCoord = Math.random() * (window.innerWidth - STAR_SIZE);
    const yCoord = Math.random() * (window.innerHeight - STAR_SIZE);
    const newStar = {
      id: starID,
      x: xCoord,
      y: yCoord
    };

    setAllStars(prevStars => ([...prevStars, newStar]));
  }

  useEffect(() => {
    const intervalID = setInterval(handleStars, 2500);
    return () => clearInterval(intervalID);
  }, []);

  function destroyStar(id) {
    const newStarsArr = allStars.filter((star) => star.id !== id);
    setAllStars(newStarsArr);
  }

  return (
    <div id='space'>
      {allStars.map((star) => (
        <Star id={star.id} x={star.x} y={star.y} key={star.id} destroyStar={destroyStar} />
      ))}
    </div>
  );
};

export default Space;
