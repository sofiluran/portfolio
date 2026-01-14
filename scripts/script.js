function Project(name, description, image, link) {
  this.name = name,
    this.description = description,
    this.image = image,
    this.link = link
}

let projects = [
  new Project("Your Seasonal Movie Night", "In this assignment, we worked in teams to create a webpage that retrieves and displays data from an external API using modern JavaScript and the fetch() function. Our team decided to make a fun website where you choose your favourite and then randomly get a movie to watch. ", "./images/API.png", "https://api-assignment-lime.vercel.app/"),
  new Project("Skal Stockholm", "This is the first assignment I received at Futuregames and also the first website I created - EVER. This assignment focused on building a multi‑page website to demonstrate our HTML and CSS skills, along with good page structure and code organization. I chose to create a site called ”Skål Stockholm” - a guide to your best bars in Stockholm. ", "./images/skal-stockholm.png", "https://assignment-1-seven-iota.vercel.app/"),
  new Project("Australian Zoo", "This group assignment focused on building a multi-page website for an Australian Zoo. The site had to include a home page, mammals page, birds page, reptiles page, and an about us team page. The team decide to play around with the classic Jurrassic Park and named this zoo Jurassic Parse. The home page displays a welcome message and allows users to click animal names in the sidebar to show a short summary. Group pages show only animals from that specific group and include both short and full summaries. The team page lists team members and displays information when a name is clicked. Beyond the website itself, the assignment required full SCRUM workflow: creating and managing tickets, code reviews, testing, using development and production environments, and holding a sprint retrospective.", "./images/zoo.png", "https://assignment3-zoo.vercel.app/"),
  new Project("Rock Paper Scissor", "This assignment involved creating a responsive web-based game using HTML, CSS, and JavaScript. The goal was to demonstrate understanding of the DOM and how to interact with it. I chose to build a Rock, Paper, Scissor game to work on my skills in DOM manipulation.", "./images/rock-paper-scissor3.png", "https://sofiluran.github.io/Rock-Paper-Scissors/"),
  new Project("The GitHub Project", "In this team assignment, our goal was to deepen our understanding of GitHub and learn how to collaborate effectively using version control. To achieve this, we created a website that explains Git and GitHub concepts in a clear and beginner-friendly way. The site covers key topics such as creating projects, saving changes, and working with branches, making it easier for newcomers to understand and apply Git in real-world projects.", "./images/git-project3.jpg", "https://clarahedgehog.github.io/github-project/"),
  new Project("Murder At The Opera", "This assignment involved creating a text-based JavaScript game using only vanilla JS. The game runs entirely through prompts and alerts, with no need for HTML or CSS. The goal was to demonstrate core JavaScript skills such as variables, arrays, loops, conditional logic, and nested structures. I chose to create a murder mystery, at the opera.", "./images/murder-opera.png", "https://sofiluran.github.io/Javascript-Assignment/")
]

const projectContainer = document.querySelector(".project-container")

const showProjects = () => {
  projects.forEach(project => {
    const projectCard = document.createElement("div")
    projectCard.classList.add("project")
    projectCard.classList.add(project.name.toLowerCase().replace(/\s+/g, "-"))

    projectCard.innerHTML = `
      <div class="project-image">
      <img src="${project.image}" alt="${project.name}" width="100%" height="auto">
      </div>
      <h3 class="project-title">${project.name}</h3>
      <button class="see-more">See More</button>
      <p class="project-description">${project.description} <br> 
      <a href="${project.link}" target="_blank" class="project-link">-Visit Project</a>
      </p>
      
    `;

  projectCard
    .querySelector(".see-more")
    .addEventListener("click", (e) => {
      projectCard.classList.toggle("show");
      e.target.textContent = projectCard.classList.contains("show")
      ? "See Less" : "See More";
    });

  projectContainer.appendChild(projectCard);
    })
};
showProjects();

const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
})

