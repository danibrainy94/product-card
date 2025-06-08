// Select the toggle button
// const lightButton = document.getElementById('light');
// const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('toggle-light');
const darkButton = document.getElementById('toggle-dark');


// Add event listener to the button
lightButton.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.add('light-mode');
    const lightMode = lightButton;
    lightMode.style.display = 'none';
    const darkMode = darkButton;
    darkMode.style.display = 'block';
    
});
darkButton.addEventListener('click', () => {
    // Toggle the "dark-mode" class on the body element
    document.body.classList.remove('light-mode');
    const darkMode = darkButton;
    darkMode.style.display = 'none';
    const lightMode = lightButton;
    lightMode.style.display = 'block';
});

