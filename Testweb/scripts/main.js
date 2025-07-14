const people = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/250x150",
    description: "Frontend Developer"
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/250x150",
    description: "UI/UX Designer"
  },
  {
    name: "Albert Joe",
    image: "https://via.placeholder.com/250x150",
    description: "Backend Engineer"
  },
  {
    name: "Grace Lin",
    image: "https://via.placeholder.com/250x150",
    description: "Fullstack Developer"
  },
  {
    name: "Kevin Hart",
    image: "https://via.placeholder.com/250x150",
    description: "Mobile Developer"
  },
  {
    name: "Lucy Chan",
    image: "https://via.placeholder.com/250x150",
    description: "Cloud Engineer"
  },
  {
    name: "Marco Polo",
    image: "https://via.placeholder.com/250x150",
    description: "Cybersecurity Analyst"
  },
  {
    name: "Sophia King",
    image: "https://via.placeholder.com/250x150",
    description: "DevOps Specialist"
  },
  {
    name: "Liam Brown",
    image: "https://via.placeholder.com/250x150",
    description: "Database Admin"
  },
  {
    name: "Ella Reed",
    image: "https://via.placeholder.com/250x150",
    description: "AI Researcher"
  }
];

const slider = document.getElementById('slider');

people.forEach(person => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}" />
    <h3>${person.name}</h3>
    <p>${person.description}</p>
  `;
  slider.appendChild(card);
});
