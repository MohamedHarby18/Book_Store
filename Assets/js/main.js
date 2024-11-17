window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
  
    document.querySelectorAll('.scroll-animate').forEach(function(element) {
      const elementTop = element.offsetTop;
      if (scrollPosition > elementTop + 100) {  // 100px before element is fully in view
        element.classList.add('show');
      }
    });
  });
  