window.addEventListener("DOMContentLoaded", () => {
  const people = [
    { name: "Arsyad Wira Delovino", image: "img/arsyad.jpg", description: "Frontend Developer" },
    { name: "M. Khaira Atthoriq", image: "img/BITBIT.jpg", description: "*FAKE* ahh Data Entry" },
    { name: "Arya Akeno Manggala", image: "img/Keno.jpg", description: "Founder" },
    { name: "Arya Putra Wirasena", image: "img/suloh.jpg", description: "Gudang Foto" },
    { name: "Satrio Harrys Fitrah Dillo", image: "img/satrio.jpg", description: "Member" },
    { name: "M. Ricky Yaafi", image: "img/ricky.jpg", description: "Member" },
    { name: "Fachrendra Putra Mahardika", image: "img/paren.jpg", description: "Member" },
    { name: "Ilham Bakti Pratama", image: "img/Ilham.jpg", description: "Member" },
    { name: "Andika Rahmadian", image: "img/GODEX.jpeg", description: "Member" },
    { name: "Rajwa Kaka Meviansyah", image: "img/kaka.jpg", description: "Member" }
  ];

  const slider = document.getElementById("slider");
  const indicators = document.getElementById("indicators");

  people.forEach((person, i) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
      <div class='slide-img-wrapper'>
        <img class='slide-img' src="${person.image}" alt="${person.name}" />
      </div>
      <div class="slide-content">
        <h1>${person.name}</h1>
        <p>${person.description}</p>
      </div>
    `;
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
  }, 3000);
});
