window.onload = function() {
    // Alert
    alert("Welcome! You have entered the Amali Hub Chui page.");

    // Fading in the pack text
    var packText = document.getElementById("pack");
    packText.style.opacity = "0"; // Set initial opacity to 0
    var fadeInEffect = setInterval(function() {
        // Increase opacity gradually
        packText.style.opacity = parseFloat(packText.style.opacity) + 0.1;
        
        // Stop interval once opacity reaches 1
        if (parseFloat(packText.style.opacity) >= 1) {
            clearInterval(fadeInEffect);
        }
    }, 150); 

    window.onload = function() {
        // Function to handle intersection
        function handleIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the entry is intersecting with the viewport
                    // Remove the 'hidden' class from the heading
                    document.getElementById("head").classList.remove("hidden");
    
                    // Disconnect the observer after the first intersection
                    observer.disconnect();
                }
            });
        }
    
        // Create a new Intersection Observer
        var observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
    
        // Target the element to observe
        var target = document.getElementById("head");
    
        // Observe the target element
        observer.observe(target);
    };
}
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", revealSection);
    revealSection();
  });
  
  function revealSection() {
    var section = document.querySelector(".WHO");
    if (isInViewport(section)) {
      section.classList.add("show");
      window.removeEventListener("scroll", revealSection);
    }
  }
  
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  
    }
  // Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const heading = target.querySelector('h1');
      const subheading = target.querySelector('h2');
      const paragraph = target.querySelector('p');

      // Show the heading
      heading.style.opacity = "1";
      heading.style.transition = "opacity 1s ease-in-out";
      
      // After 1 second, show the subheading
      setTimeout(function() {
        subheading.style.opacity = "1";
        subheading.style.transition = "opacity 1s ease-in-out";
        
        // After another 1 second, show the paragraph
        setTimeout(function() {
          paragraph.style.opacity = "1";
          paragraph.style.transition = "opacity 1s ease-in-out";
        }, 1000);
      }, 1000);
      
      // Disconnect the observer once elements are shown
      observer.unobserve(target);
    }
  });
}

// Create an intersection observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null, // Use the viewport as the root
  threshold: 0.1 // Trigger the callback when 10% of the content is visible
});

// Observe each content section
document.querySelectorAll('.container').forEach(section => {
  observer.observe(section);
});

  



   

    