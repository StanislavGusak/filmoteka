import React from 'react';
import styles from './BackDrop.module.css';

const BackDrop = ({handleMenu}) => {
  return (
    <div className={styles.backdrop} onClick={handleMenu}></div>
  )
}

export default BackDrop;