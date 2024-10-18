import React, { useState, useEffect } from 'react';

const Profile = () => {
    // State variables for storing user data and any loading/error states
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch the user profile data from the API when the component mounts
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/v1/user/userProfile', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Add Authorization header if required (e.g., if token is needed)
                        //'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json(); // Parse JSON data
                setUserData(data.user); // Assuming `data.user` contains the user info
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchUserProfile(); // Call the async function

    }, []); // Empty dependency array ensures it runs only once on component mount

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if any issues occur
    }

    // Display user profile info once the data is loaded
    return (
        // <div className="user-profile ">
        //     <h2>User Profile</h2>
        //     {userData && (
        //         <div>
        //             <img src={userData.photo?.url} alt="User Profile" width={150} height={150} />
        //             <p><strong>Name:</strong> {userData.name}</p>
        //             <p><strong>Email:</strong> {userData.email}</p>
        //             <p><strong>Role:</strong> {userData.role}</p>
        //             <p><strong>Account Created At:</strong> {new Date(userData.createdAt).toLocaleString()}</p>
        //         </div>
        //     )}
        // </div>
        <>
        <div className='h-full p-6 flex items-center justify-center m-auto '>
        <h2>User Profile</h2>
             {userData && (
                <div>
                    <img src={userData.photo?.url} alt="User Profile" width={150} height={150} />
                    <p><strong>Name:</strong> {userData.name}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Role:</strong> {userData.role}</p>
                    <p><strong>Account Created At:</strong> {new Date(userData.createdAt).toLocaleString()}</p>
                </div>
            )}
        </div>

        </>
    );
};

export default Profile;
