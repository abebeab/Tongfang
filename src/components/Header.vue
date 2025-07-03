<!-- src/components/Header.vue -->
<template>
  <header class="header">
    <div class="logo">
      <i class="fas fa-laravel"></i>
      <span>My Portfolio here!!</span>
    </div>
    <nav class="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact" class="contact-link">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader', // Change this to a multi-word name
}
</script><style scoped>
/* Global Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  scroll-behavior: smooth; /* Enable smooth scrolling */
}

/* Static Header Styles */
header {
  display: flex; /* Flexbox layout for header */
  justify-content: space-between; /* Space between logo and navbar */
  align-items: center; /* Vertically center the items */
  position: fixed; /* Fix the header at the top */
  top: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  background-color: #e9967a; /* Dark background for header */
  color: white;
  padding: 10px 30px; /* Added more horizontal padding for spacing */
  z-index: 1000; /* Ensure the header stays on top */
}

/* Logo Styles */
.logo {
  display: flex;
  align-items: center;
  margin-right: auto; /* Push the logo to the left */
}

.logo-img {
  width: 80px; /* Set the width of the logo */
  height: 80px; /* Set the height of the logo to make it a square */
  border-radius: 50%; /* Make the logo circular */
  object-fit: cover; /* Ensure the image is cropped to fit the circular shape */
  margin-right: 10px; /* Space between logo and text */
}

.logo span {
  font-size: 1.5rem;
  font-weight: bold;
}

/* Navbar Styles */
.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right: 60px;
}

.navbar li {
  margin-right: 0px; /* Space between links */
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 8px 20px; /* Increased padding for better spacing */
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navbar a:hover {
  background-color: #555; /* Hover effect for navbar links */
}

/* Section Styles */
section {
  padding: 60px 20px; /* Add padding to the sections to ensure content doesn't hide under header */
  min-height: 300px; /* Ensure sections are tall enough */
}

/* Specific margin-top for each section to prevent overlap with the header */
#home, #about, #portfolio, #services, #contact {
  margin-top: 80px; /* Add space for the fixed header */
}

/* Main Section Styles */
main {
  padding: 20px;
  width: 100%;
  text-align: center;
  background-color: #fff;
  flex-grow: 1; /* Make sure the content grows to fill the space */
}

/* AppFooter Section */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  position: relative; /* Changed to relative to prevent overlap */
  bottom: 0;
  width: 100%;
}
</style>