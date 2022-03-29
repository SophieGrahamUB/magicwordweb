import React from 'react';

const styles = {
  center: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  verticleCenter: {
    display: 'flex',
    alignItems: 'center'
  },
  centerCenter: {
    position: "relative",
    float: "left",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
}

export const Center = ({ children }) => {


  return (
    <div style={styles.center}>
      {children}
    </div>
  )
}

export const VerticleCenter = ({ children }) => {

  return (
    <div style={styles.verticleCenter}>
      {children}
    </div>
  )
}

export const CenterCenter = ({ children }) => {

  return (
    <div style={styles.centerCenter}>
      {children}
    </div>
  )
}
