import React, { useEffect, useRef } from 'react';
import TitleShapes from "../../../Assets/titleshapes.svg";
import "./MainTitle.css";

const MainTitle = () => {
  const mainTitleRef = useRef(null);

  useEffect(() => {
    const mainTitle = mainTitleRef.current;

    const handleScroll = () => {
      const offset = window.scrollY;
      mainTitle.style.transform = `translateY(-${offset * 0.1}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="title__container" ref={mainTitleRef}>
      <div className="mainTitle">
        <span>
          Unlock Excellence, <span className="titleBold">Choose Your Developer</span> with{' '}
          <span className="titleBlue titleBold">Confidence!</span>
        </span>
      </div>
      <div className="shapes">
        <img src={TitleShapes} alt="Title Shapes" />
      </div>
    </div>
  );
};

export default MainTitle;
