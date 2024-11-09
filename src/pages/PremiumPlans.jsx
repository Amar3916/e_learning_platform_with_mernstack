import React, { useState } from 'react';
import creditCardImg from '../assets/cc.jpeg';
import phonePeImg from '../assets/ph.png';
import netBankingImg from '../assets/sbi.jpeg';

const PremiumPlans = () => {
    const [currentSection, setCurrentSection] = useState("pricing");

    const styles = {
        body: { fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f0f0f0', color: '#333' },
        pricingSection: { padding: '50px', backgroundColor: '#1a1a2e', color: 'white', textAlign: 'center' },
        pricingCards: { display: 'flex', justifyContent: 'center', gap: '20px' },
        card: { backgroundColor: '#fff', color: '#333', padding: '30px', borderRadius: '15px', width: '200px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s ease', textAlign: 'center' },
        cardHover: { transform: 'scale(1.05)' },
        cardButton: { padding: '10px 20px', border: 'none', backgroundColor: '#00d9a5', color: 'white', fontSize: '1rem', borderRadius: '50px', cursor: 'pointer', transition: 'background-color 0.3s ease' },
        paymentSection: { padding: '50px', backgroundColor: '#ffffff', textAlign: 'center' },
        paymentMethods: { display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' },
        method: { display: 'flex', alignItems: 'center', gap: '10px' },
        methodImage: { width: '40px' },
        formGroup: { marginBottom: '20px' },
        input: { width: '300px', padding: '10px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px' },
        submitButton: { padding: '10px 30px', backgroundColor: '#00d9a5', color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', transition: 'background-color 0.3s ease' },
        congratsSection: { padding: '50px', backgroundColor: '#f1f1f1', textAlign: 'center' },
        congratsText: { fontSize: '2.5rem', color: '#00d9a5' }
    };

    const openPayment = () => setCurrentSection("payment");

    const handlePaymentSubmit = (event) => {
        event.preventDefault();
        setCurrentSection("congrats");
    };

    return (
        <div style={styles.body}>
            {/* Conditional Sections */}
            {currentSection === "pricing" && (
                <section style={styles.pricingSection}>
                    <h1>Premium Plans</h1>
                    <p>Choose a plan that's right for you and get started immediately.</p>
                    <div style={styles.pricingCards}>
                        {["Free", "Plus", "Standard", "Business"].map((plan, index) => (
                            <div key={index} style={styles.card} onMouseEnter={() => styles.cardHover} onMouseLeave={() => null}>
                                <h3>{plan}</h3>
                                <h2>${index * 29}</h2>
                                <p>15 Users</p>
                                <p>Feature 2</p>
                                <p>Feature 3</p>
                                <p>Feature 4</p>
                                <button style={styles.cardButton} onClick={openPayment}>Get Plan</button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {currentSection === "payment" && (
                <section style={styles.paymentSection}>
                    <h2>Select Payment Method</h2>
                    <div style={styles.paymentMethods}>
                        <div style={styles.method}>
                            <input type="radio" name="payment" id="credit-card" defaultChecked />
                            <label htmlFor="credit-card"><img src={creditCardImg} alt="Credit Card" style={styles.methodImage} /> Credit Card</label>
                        </div>
                        <div style={styles.method}>
                            <input type="radio" name="payment" id="phone-pe" />
                            <label htmlFor="phone-pe"><img src={phonePeImg} alt="Phone pe" style={styles.methodImage} /> Phone Pe</label>
                        </div>
                        <div style={styles.method}>
                            <input type="radio" name="payment" id="net-banking" />
                            <label htmlFor="net-banking"><img src={netBankingImg} alt="Net Banking" style={styles.methodImage} /> Net Banking</label>
                        </div>
                    </div>
                    <form onSubmit={handlePaymentSubmit}>
                        <div style={styles.formGroup}>
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" required style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="card-name">Name on Card:</label>
                            <input type="text" id="card-name" required style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="card-number">Card Number:</label>
                            <input type="text" id="card-number" required style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="expiration">Expiration:</label>
                            <input type="text" id="expiration" placeholder="MM/YY" required style={styles.input} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="mobile-number">Mobile number:</label>
                            <input type="number" id="mobile-number" required style={styles.input} />
                        </div>
                        <button type="submit" style={styles.submitButton}>Submit Payment</button>
                    </form>
                </section>
            )}

            {currentSection === "congrats" && (
                <section style={styles.congratsSection}>
                    <h2 style={styles.congratsText}>Congratulations!</h2>
                    <p>Your payment has been successfully processed, and you're now enrolled in the course.</p>
                </section>
            )}
        </div>
    );
};

export default PremiumPlans;
