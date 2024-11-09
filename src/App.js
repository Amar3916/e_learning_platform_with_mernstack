import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './pages/UserProfile';
import Home from './pages/home';
import Courses from './pages/CoursesPage';
import Plans from './pages/PremiumPlans';
import Register from './pages/Register';
import Search from './pages/CourseSearchPage';
import LoginPage from './pages/loginpage'; 

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="name-title">
                <strong>U Learn</strong>
                <h6 style={{ margin: '8px' }}>/ Online Course Platform</h6>
            </div>
            <div className="links">
                <Link to="/profile">Profile</Link>
                <Link to="/home">About ULearn</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/plans">Plans & Prices</Link>
                <Link to="/register">Register & Login</Link>
                <Link to="/search">Search Courses</Link>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <div>
                {/* Main Content Sections */}
                
            
                <TopBar />
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
                
                {/* Footer */}
                <footer style={styles.footer}>
                    <div>
                        <p>&copy; 2024 Your Online Course Platform. All rights reserved.</p>
                        <p>
                            <Link to="/terms-of-service" style={styles.footerLink}>Terms of Service</Link> |
                            <Link to="/privacy-policy" style={styles.footerLink}>Privacy Policy</Link> |
                            <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
                        </p>
                        <p>Follow us on:
                            <a href="https://www.facebook.com" style={styles.footerLink}>Facebook</a> |
                            <a href="https://www.twitter.com" style={styles.footerLink}>Twitter</a> |
                            <a href="https://www.instagram.com" style={styles.footerLink}>Instagram</a>
                        </p>
                    </div>
                </footer>
            </div>
            
        </Router>
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
