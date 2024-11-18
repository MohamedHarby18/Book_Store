window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
  
    document.querySelectorAll('.scroll-animate').forEach(function(element) {
      const elementTop = element.offsetTop;
      if (scrollPosition > elementTop + 100) {  // 100px before element is fully in view
        element.classList.add('show');
      }
    });
  });






//for siginin


document.getElementById("forgetpass").addEventListener("click", function(event) {
    event.preventDefault();
    let userInput = prompt("Please enter your email here:");
    if (userInput != null) {
        alert("You password reset link has been sent to: " + userInput);
    } else {
        console.log("User cancelled the prompt.");
    }
});