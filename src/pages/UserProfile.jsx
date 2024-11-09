import React, { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({
        fullname: '',
        email: '',
        profile: {
            phone: '',
            interests: '',
            bio: ''
        }
    });
    const [loading, setLoading] = useState(true);

    // Fetch user data when component mounts
    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            fetch('/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                } else {
                    alert("Error fetching user data");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching profile data:", error);
                setLoading(false);
            });
        } else {
            setLoading(false);
            alert("No token found, please log in.");
        }
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        window.location.href = '/login'; // Redirect to login page
    };

    // Handle profile update
    const handleProfileUpdate = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('jwtToken');
        const formData = new URLSearchParams({
            phone: user.profile.phone,
            interests: user.profile.interests,
            bio: user.profile.bio
        });

        fetch('/profile', {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`, // Send token in the header
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone: user.profile.phone, interests: user.profile.interests, bio: user.profile.bio })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                alert(data.message); // Show message after updating
            }
        })
        .catch(error => console.error("Profile update error:", error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>

            {/* Profile Details */}
            <div style={{ maxWidth: '600px', margin: 'auto' }}>
                <h2>User Profile</h2>
                <p><strong>Full Name:</strong> {user.fullname}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <h3>Profile Information</h3>
                <p><strong>Phone:</strong> {user.profile.phone || 'N/A'}</p>
                <p><strong>Interests:</strong> {user.profile.interests || 'N/A'}</p>
                <p><strong>Bio:</strong> {user.profile.bio || 'N/A'}</p>

                {/* Profile Update Form */}
                <h3>Update Profile</h3>
                <form onSubmit={handleProfileUpdate}>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                        value={user.profile.phone || ''}
                        onChange={(e) => setUser({ ...user, profile: { ...user.profile, phone: e.target.value } })}
                    />
                    <input
                        type="text"
                        name="interests"
                        placeholder="Interests"
                        required
                        value={user.profile.interests || ''}
                        onChange={(e) => setUser({ ...user, profile: { ...user.profile, interests: e.target.value } })}
                    />
                    <textarea
                        name="bio"
                        placeholder="Bio"
                        required
                        value={user.profile.bio || ''}
                        onChange={(e) => setUser({ ...user, profile: { ...user.profile, bio: e.target.value } })}
                    ></textarea>
                    <button type="submit">Update Profile</button>
                </form>
            </div>

            {/* Logout Button */}
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default UserProfile;
