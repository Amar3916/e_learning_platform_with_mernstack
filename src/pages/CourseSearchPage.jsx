import React from 'react';
import webDevelopment from '../assets/web-development.jpg';
import dataScience from '../assets/ds.jpeg';
import graphicDesign from '../assets/grap.jpeg';
import robotics from '../assets/rob.jpg';
import electronics from '../assets/ele.jpg';
import digitalMarketing from '../assets/ab3.jpeg';
import finance from '../assets/ab1.webp';

const CourseSearchPage = () => {
    const styles = {
        container: { maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' },
        searchBar: { width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' },
        courseCards: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' },
        courseCard: { background: '#fff', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center', transition: 'transform 0.3s' },
        courseImage: { width: '100%', height: 'auto', borderRadius: '5px' },
        courseTitle: { margin: '10px 0 5px 0' },
        courseDesc: { margin: '0 0 10px 0' },
        enrollButton: { backgroundColor: '#007bff', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' },
    };

    return (
        <div>
            {/* Main Content */}
            <div style={styles.container}>
                <h1>Search for Courses</h1>
                <input type="text" placeholder="Search for courses..." style={styles.searchBar} />

                <h2>Top Searched Courses</h2>
                <div style={styles.courseCards}>
                    <div style={styles.courseCard}>
                        <img src={webDevelopment} alt="Web Development" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Web Development</h3>
                        <p style={styles.courseDesc}>Learn how to build dynamic websites using HTML, CSS, and JavaScript.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                    <div style={styles.courseCard}>
                        <img src={dataScience} alt="Data Science" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Data Science</h3>
                        <p style={styles.courseDesc}>Master the fundamentals of data analysis and machine learning.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                    <div style={styles.courseCard}>
                        <img src={graphicDesign} alt="Graphic Design" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Graphic Design</h3>
                        <p style={styles.courseDesc}>Create stunning visuals and enhance your design skills.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                    <div style={styles.courseCard}>
                        <img src={robotics} alt="Robotics" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Robotics</h3>
                        <p style={styles.courseDesc}>Explore the strategies for effective Robotics.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                    <div style={styles.courseCard}>
                        <img src={electronics} alt="Electronics" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Electronics</h3>
                        <p style={styles.courseDesc}>Explore the endless world of Electronics.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                    <div style={styles.courseCard}>
                        <img src={digitalMarketing} alt="Digital Marketing" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Digital Marketing</h3>
                        <p style={styles.courseDesc}>Explore the strategies for effective online marketing.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                    <div style={styles.courseCard}>
                        <img src={finance} alt="Finance" style={styles.courseImage} />
                        <h3 style={styles.courseTitle}>Finance</h3>
                        <p style={styles.courseDesc}>Explore the strategies for effective online financing.</p>
                        <a href="plans.html"><button style={styles.enrollButton}>Enroll Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSearchPage;
