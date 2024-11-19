 // Get the circle element
//  const circle = document.getElementById('cursorCircle');

//  Event listener for mouse movement
//  document.addEventListener('mousemove', (e) => {
//      Position the circle exactly at the mouse pointer
//      circle.style.left = `${e.pageX}px`;
//      circle.style.top = `${e.pageY}px`;
//  });
// Select the mouse circle element
const mouseCircle = document.querySelector('.mouse-circle');

// Update the position of the circle on mouse move
document.addEventListener('mousemove', (e) => {
  mouseCircle.style.left = `${e.pageX - 20}px`; // Adjust the offset so the circle centers on the cursor
  mouseCircle.style.top = `${e.pageY - 20}px`;  // Adjust the offset similarly
});

function animateWithRandomNumber(myClass, from, to) {
    TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), {
        y: from
    }, {
        y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone
    });
}
const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"].forEach(e=>animateWithRandomNumber(e, -1080, 1080))
const itemsUp = [".light1", ".light2", ".light3", ".light9", ".light10", ".light17"].forEach(e=>animateWithRandomNumber(e, 1080, -1080));

const images = [
    "sec-image.jpg",
    "sec-image2.jpg",
    "sec-image3.jpg",
    "sec-image.jpg"
  ];
  

  let currentIndex = 0;
  
  function changeImage() {
    const imgElement = document.getElementById("autoImage");
  
    // Fade out the current image
    imgElement.classList.remove("active");
  
    // Wait for the fade-out to complete before switching the image
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      imgElement.src = images[currentIndex];
  
      // Fade in the new image
      imgElement.classList.add("active");
    }, 500); // Match this with the CSS transition duration
  }
  
  // Ensure the image loads instantly on page load
  window.onload = function() {
    const imgElement = document.getElementById("autoImage");
    imgElement.src = images[currentIndex];
    imgElement.classList.add("loaded"); // Make the initial image visible instantly
  };
  
  // Change image every 3 seconds
  setInterval(changeImage, 3000);

  function showContent(content, event) {
    event.preventDefault();

    const bottomDisplay = document.getElementById('bottom-display');
    
    if (bottomDisplay) {
        // Hide all content divs
        Array.from(bottomDisplay.children).forEach(div => {
            div.style.display = 'none';
        });

        // Show the corresponding content div
        const contentDiv = document.getElementById(`${content}-content`);
        if (contentDiv) {
            contentDiv.style.display = 'block';
        } else {
            console.error(`Content div with ID "${content}-content" not found.`);
        }

        // Remove "active" class and border from all buttons
        document.querySelectorAll('.profile-info2 a').forEach(btn => {
            btn.classList.remove('active');
            btn.style.borderBottom = 'none';
        });

        // Add "active" class and border to the clicked button
        const activeButton = document.getElementById(`${content}Btn`);
        if (activeButton) {
            activeButton.classList.add('active');
            activeButton.style.color = ' #3498db';
        } else {
            console.error(`Button with ID "${content}Btn" not found.`);
        }

        bottomDisplay.style.display = 'block';
    } else {
        console.error('Bottom display container not found.');
    }
}

// Show "Hospital" content and set the "active" class and border by default
document.addEventListener("DOMContentLoaded", function() {
    showContent('hospital', new Event('click'));
});

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}


  