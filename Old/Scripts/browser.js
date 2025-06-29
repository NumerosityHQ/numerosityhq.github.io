// Browser behaviour
function adjustFontSize() {
    const title = document.getElementById('title');
    const subtitle1 = document.getElementById('subtitle1');
    const subtitle2 = document.getElementById('subtitle2');
  
    const screenWidth = window.innerWidth;
  
    // Adjust font sizes based on screen width
    title.style.fontSize = screenWidth > 768 ? '100px' : screenWidth > 480 ? '70px' : '50px';
    subtitle1.style.fontSize = screenWidth > 768 ? '20px' : screenWidth > 480 ? '16px' : '14px';
    subtitle2.style.fontSize = screenWidth > 768 ? '20px' : screenWidth > 480 ? '16px' : '14px';
  }
  
  // Call the function on load and resize
  window.addEventListener('load', adjustFontSize);
  window.addEventListener('resize', adjustFontSize);