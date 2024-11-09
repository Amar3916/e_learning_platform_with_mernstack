import React from 'react';
import './course.css';

// Import images
import htmlImg from '../assets/html.jpg';
import cImg from '../assets/c.jpg';
import javaImg from '../assets/java.jpg';
import pyImg from '../assets/py.jpg';
import cppImg from '../assets/c.jpg';
import freelancingImg from '../assets/free.jpg';
import adobeImg from '../assets/adob.jpg';
import dbmsImg from '../assets/dmbs.jpg';
import dsImg from '../assets/ds.jpeg';

const CoursesPage = () => {
    const courses = [
        { img: htmlImg, title: 'MERN Stack Full Course', url: 'https://youtube.com/playlist?list=PLVlQHNRLflP8IGz6OXwlV_lgHgc72aXlh&si=wsFVzjmrVeAoLiXX' },
        { img: cImg, title: 'C Language Full Course', url: 'https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=IUDjsB0xljEdpdXp' },
        { img: htmlImg, title: 'HTML Full Course', url: 'https://youtube.com/playlist?list=PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB&si=HD78KPmnYpW995up' },
        { img: javaImg, title: 'Java Full Course', url: 'https://youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5&si=k0M0bwUTazbOImMx' },
        { img: pyImg, title: 'Python Full Course', url: 'https://youtube.com/playlist?list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0&si=MnSQU3lQ6V-CAjw9' },
        { img: cppImg, title: 'C++ Full Course', url: 'https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=16HMFpUsv6iK80AG' },
        { img: freelancingImg, title: 'Freelancing Full Course', url: 'https://youtube.com/playlist?list=PLNn-3DeL6lp2V8H9xQ2jFOlypKMwsNMiP&si=dnBYDuRwP4YJG94h' },
        { img: adobeImg, title: 'Adobe Premiere Pro', url: 'https://youtube.com/playlist?list=PLW-zSkCnZ-gABGZU8--ISUauyewG40Yex&si=qIHKDP6XsiKGh9rJ' },
        { img: dbmsImg, title: 'DBMS Full Course', url: 'https://youtube.com/playlist?list=PLW-zSkCnZ-gABGZU8--ISUauyewG40Yex&si=qIHKDP6XsiKGh9rJ' },
        { img: dsImg, title: 'Data Structures', url: 'https://youtube.com/playlist?list=PLW-zSkCnZ-gABGZU8--ISUauyewG40Yex&si=qIHKDP6XsiKGh9rJ' }
    ];

    const openCourse = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="container">
           

            <main>
                <h2>Our Courses</h2>
                <div className="courses-container">
                    {courses.map((course, index) => (
                        <div key={index} className="course-box" onClick={() => openCourse(course.url)}>
                            <img src={course.img} alt={`Course ${index + 1}`} />
                            <p>{course.title}</p>
                        </div>
                    ))}
                </div>
            </main>

            <footer>
                <p>Online Course Platform</p>
            </footer>
        </div>
    );
};

export default CoursesPage;
