import React from 'react';
import style from '../../styles/Swatch.module.css';

const Swatch = ({ color }) => {
  return (
    <section>
      <div className={style.swatch} style={{ backgroundColor: color }} />
      <div>
        <p>Code</p>
        <span><code>{color}</code></span>
      </div>
    </section>
  );
}

export default Swatch;
