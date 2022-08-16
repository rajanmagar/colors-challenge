import React, { useState, useEffect } from 'react';
import Swatch from './components/Swatch';
import useParser from './util';
import style from '../styles/Home.module.css';

const Index = () => {
  const [colors, setColors] = useState([]);
  // fetch colors from api
  const fetchColors = () => {
    fetch(`./api/colors`).then((res) => {
      res.json().then((data) => {
        setColors(data);
      })
    }).catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchColors();
  }, []);
  const colorHandler = () => {
    fetchColors()
  }
  return (
    <div className={style.container}>
      <div className={style.buttonContainer}>
        <h1>Color Generator</h1>
      </div>
      <main className={style.main}>
        {colors?.map(({ type, values }) => {
          const colorParse = useParser[type];
          return <Swatch color={colorParse(values)} />
        })}
      </main>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={colorHandler}>Generate</button>
      </div>
    </div>
  );
}

export default Index;
