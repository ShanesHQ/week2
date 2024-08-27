document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.image-gallery img');
  const gallery = document.querySelector('.image-gallery');
  let currentIndex = 0;

  // Add animation to the gallery plzzzzzzzzz
  setTimeout(() => {
    gallery.classList.add('move-down');
  }, 500); // Adjust the delay as needed

  function showImage(index) {
      images.forEach((img, i) => {
          img.style.display = i === index ? 'block' : 'none';
      });
  }

  function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
  }


  document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
          nextImage();
      } else if (event.key === 'ArrowLeft') {
          prevImage();
      } else if (event.key === 'Tab') {
          event.preventDefault();
          nextImage();
      }
  });


  images.forEach((img, index) => {
      img.addEventListener('click', function() {
          currentIndex = index;
          nextImage();
      });
  });

  showImage(currentIndex);
});

// FINALLY