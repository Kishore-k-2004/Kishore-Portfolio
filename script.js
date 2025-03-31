document.getElementById("view-work").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const target = document.querySelector("#about"); // Target the About Me section
    const offset = 80; // Adjust this value if there's a fixed header
    const targetPosition = target.offsetTop - offset;
  
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth", // Enable smooth scrolling
    });
  });