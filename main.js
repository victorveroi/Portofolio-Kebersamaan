window.addEventListener("DOMContentLoaded", () => {
  const people = [
    { name: "Arsyad Wira Delovino", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=John+Doe", description: "Frontend Developer" },
    { name: "M. Khaira Atthoriq", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Jane+Smith", description: "Data Entry" },
    { name: "Arya Akeno Manggala", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Albert+Joe", description: "Founder" },
    { name: "Arya Putra Wirasena", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Grace+Lin", description: "Member" },
    { name: "Satrio Harrys Fitrah Dillo", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Kevin+Hart", description: "Member" },
    { name: "M. Ricky Yaafi", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Lucy+Chan", description: "Member" },
    { name: "Fachrendra Putra Mahardika", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Marco+Polo", description: "Member" },
    { name: "Ilham Bakti Pratama", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Sophia+King", description: "Member" },
    { name: "Andika Rahmadian", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Liam+Brown", description: "Member" },
    { name: "Rajwa Kaka Meviansyah", image: "https://via.placeholder.com/1600x900/000000/FFFFFF?text=Ella+Reed", description: "Member" }
  ];

  const slider = document.getElementById("slider");
  const indicators = document.getElementById("indicators");

  people.forEach((person, i) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.style.backgroundImage = `url('${person.image}')`;
    slide.innerHTML = `<div class="slide-content"><h1>${person.name}</h1><p>${person.description}</p></div>`;
    slider.appendChild(slide);

    const dot = document.createElement("div");
    dot.classList.add("indicator");
    dot.dataset.index = i;
    if (i === 0) dot.classList.add("active");
    indicators.appendChild(dot);
  });

  const allDots = document.querySelectorAll(".indicator");

  allDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      slider.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth"
      });
    });
  });

  slider.addEventListener("scroll", () => {
    const index = Math.round(slider.scrollLeft / window.innerWidth);
    allDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  });

  // Auto slide every 5 seconds
  let currentIndex = 0;
  setInterval(() => {
    currentIndex = (currentIndex + 1) % people.length;
    slider.scrollTo({
      left: currentIndex * window.innerWidth,
      behavior: "smooth"
    });
  }, 5000);
});