import React from 'react';
import style from '../../styles/Swatch.module.css';

const Swatch = ({ color }) => {
  const handleCopy = (e) => {
    window.navigator.clipboard.writeText(e.target.innerText)
    console.log('on hover', e.target.innerText, window.navigator)
  }
  return (
    <section onMouseEnter={handleCopy}>
      <div className={style.swatch} style={{ backgroundColor: color }} />
      <div>
        <p>Color Code</p>
        <span>{color}</span>
      </div>
    </section>
  );
}

export default Swatch;
