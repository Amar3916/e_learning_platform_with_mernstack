import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import img1 from '../assets/ab1.webp';
import img2 from '../assets/ab2.jpeg';
import img3 from '../assets/ab3.jpeg';


const App = () => {
    return (
      
            <div>
                {/* Main Content Sections */}
                <div style={styles.section}>
                    <div style={styles.textBlock}>
                        <h1>Your knowledge is worth more with online courses.</h1>
                        <p>From meditation to personal finance, no matter your passion or skill set, Kajabi has everything you need for online course creation. Create, market, and sell online courses all from the same dashboard so you can turn your knowledge into income in record time.</p>
                        <button style={styles.blueButton}>START FREE TRIAL</button>
                    </div>
                    <div style={styles.imageBlock}>
                        <img src={img1} alt="Course 1" style={styles.image} />
                    </div>
                </div>
                <hr style={styles.hr} />

                <div style={styles.section}>
                    <div style={styles.imageBlock}>
                        <img src={img2} alt="Course 2" style={styles.image} />
                    </div>
                    <div style={styles.textBlock}>
                        <h1>Monetize your knowledge</h1>
                        <p>Kajabi helps you transform your knowledge into a polished, profitable online course. With customizable templates and intuitive design tools, creating a mini-course or even a full-blown signature program is quick and easy. Stripe and PayPal integrations make selling your online course seamless, but Kajabi not taking a cut of your profits is priceless.</p>
                        <button style={styles.blueButton}>START FREE TRIAL</button>
                    </div>
                </div>
                <hr style={styles.hr} />

                <div style={styles.section}>
                    <div style={styles.textBlock}>
                        <h1>Put your online course in their pocket</h1>
                        <p>Your customers are always on their phones, and now your course can be too. The Kajabi mobile app gives customers one-click access from wherever they are, without having to remember passwords or rely on clunky mobile browsers.</p>
                        <button style={styles.blueButton}>START FREE TRIAL</button>
                    </div>
                    <div style={styles.imageBlock}>
                        <img src={img3} alt="Course 3" style={styles.image} />
                    </div>
                </div>
                <hr style={styles.hr} />

               
            </div>
            
    
    );
};
const styles = {
    topBar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'aqua',
        padding: '10px 20px',
    },
    sb: {
        backgroundColor: 'aqua',
        height: '20px',
        width: '20px',
        marginTop: '25px',
        marginLeft: '20px',
        marginBottom: '20px',
    },
    nameTitle: {
        marginTop: '20px',
        marginLeft: '10px',
        marginBottom: '20px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%',
        margin: '0 20px',
    },
    section: {
        display: 'flex',
        flexWrap: 'nowrap',
        padding: '15px',
        width: '100%',
    },
    textBlock: {
        width: '50%',
        padding: '20px',
    },
    imageBlock: {
        width: '50%',
        padding: '20px',
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
    },
    blueButton: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px',
    },
    hr: {
        opacity: '60%',
        border: '1px solid #ccc',
        margin: '20px 0',
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
    },
    footerLink: {
        margin: '0 15px',
        textDecoration: 'none',
        color: '#007BFF',
    },
};
export default App;
