// GitHub username to fetch data for
const username = 'hiteshchoudhary';

// API URL for fetching user data
const apiUrl = `https://api.github.com/users/${username}`;

// DOM elements
const profileImage = document.getElementById('profile-image');
const followerCount = document.getElementById('follower-count');

// Fetch user data from GitHub API
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        // Update the profile image source
        profileImage.src = data.avatar_url;

        // Update the follower count
        followerCount.textContent += data.followers;
    })
    .catch((error) => console.error('Error fetching data:', error));
