window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY + window.innerHeight;
  
    document.querySelectorAll('.scroll-animate').forEach(function(element) {
      const elementTop = element.offsetTop;
      if (scrollPosition > elementTop + 100) {  // 100px before element is fully in view
        element.classList.add('show');
      }
    });
  });

  function Buy_Alert() {
    var Buy_confirm;
    if (confirm("Confirm your purchase?")) {
        Buy_confirm = ".Your purchase has been successfully confirmed";
    }
    else {
        Buy_confirm = ""
    }
    document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}