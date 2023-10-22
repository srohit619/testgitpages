// script.js
const projectContainer = document.querySelector('.project-carousel');
const prevProjectButton = document.getElementById('prev-project');
const nextProjectButton = document.getElementById('next-project');
const projects = document.querySelectorAll('.project');
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        if (i === index) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

prevProjectButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
});

nextProjectButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
});

showProject(currentIndex);