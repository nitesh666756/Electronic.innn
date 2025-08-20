import React from 'react';
import heroImg from "../assests/banner.jpg"; 

const Banner = () => {
  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${heroImg})` }}>
      <div style={styles.content}>
        <h1 style={styles.title}></h1>
        <p style={styles.subtitle}></p>
        <button style={styles.button}>Interior</button>
      </div>

      <div style={styles.dots}>
        <span style={{ ...styles.dot, backgroundColor: 'orange' }} />
        <span style={styles.dot} />
        <span style={styles.dot} />
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: '80vh',
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    display: 'flex',
    alignItems: 'center',
    padding: '0 80px',
    color: 'white',
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left'
  },
  content: {
    maxWidth: '600px',
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: '48px',
    margin: '0 0 20px 0'
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px'
  },
  button: {
    backgroundColor: 'white',
    color: '#000',
    padding: '12px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  dots: {
    position: 'absolute',
    bottom: '20px',
    left: '60px',
    display: 'flex',
    gap: '10px'
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#ccc'
  }
};

export default Banner;
