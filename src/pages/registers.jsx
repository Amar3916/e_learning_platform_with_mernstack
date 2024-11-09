import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Gmail validation using regex
        const gmailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
        if (!gmailPattern.test(email)) {
            alert('Please enter a valid Gmail address!');
            return;
        }

        if (password !== confirmpassword) {
            alert('Passwords do not match!');
            return;
        }

        // Send form data to server via POST
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                fullname: fullname,
                email: email,
                password: password,
            })
        })
        .then(response => response.text())
        .then(data => {
            alert(data);
            setFullname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error during registration.');
        });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', marginBottom: '20px', width: '100%' }}>
                <div style={{ height: '20px', width: '20px', marginRight: '10px', backgroundColor: 'aqua' }}></div>
                <div style={{ flexGrow: 1, fontSize: '24px', display: 'flex', alignItems: 'center' }}>
                    <strong>U Learn</strong>
                    <h6 style={{ margin: '8px' }}>/ Online Course Platform</h6>
                </div>
                <div style={{ display: 'flex', marginLeft: '20px' }}>
                    <Link to="/profile" style={{ marginLeft: '20px', fontSize: '18px', textDecoration: 'none', color: 'black' }}>Profile</Link>
                    <Link to="/home" style={{ marginLeft: '20px', fontSize: '18px', textDecoration: 'none', color: 'black' }}>About ULearn</Link>
                    <Link to="/courses" style={{ marginLeft: '20px', fontSize: '18px', textDecoration: 'none', color: 'black' }}>Courses</Link>
                    <Link to="/plans" style={{ marginLeft: '20px', fontSize: '18px', textDecoration: 'none', color: 'black' }}>Plans & Prices</Link>
                    <Link to="/register" style={{ marginLeft: '20px', fontSize: '18px', textDecoration: 'none', color: 'black' }}>Register & Login</Link>
                    <Link to="/search" style={{ marginLeft: '20px', fontSize: '18px', textDecoration: 'none', color: 'black' }}>Search Courses</Link>
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '400px', padding: '20px' }}>
                <div style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', padding: '30px', borderRadius: '10px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Register for an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="fullname" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Full Name</label>
                            <input type="text" id="fullname" name="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Enter your full name" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Email Address</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="confirmpassword" style={{ display: 'block', marginBottom: '8px', color: '#555' }}>Confirm Password</label>
                            <input type="password" id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '16px' }} />
                        </div>
                        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Register</button>
                        <p style={{ textAlign: 'center', marginTop: '10px' }}>Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>Login here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
