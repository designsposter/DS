
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Auto-slide every 5s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }, 5000);

  // Reset autoSlide on manual navigation

  // Initialize
  showSlide(index);



  function subscribe() {
    const email = document.getElementById("emailInput").value.trim();
    if (!email || !email.includes("@")) {
      alert("សូមបញ្ចូលអ៊ីមែលត្រឹមត្រូវ");
    } else {
      alert("✅ អរគុណ! អ្នកបានជាវរួច");
      document.getElementById("emailInput").value = "";
    }
  }