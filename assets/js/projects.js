document.addEventListener('DOMContentLoaded', async () => {
    // Load project data and generate cards dynamically
    try {
        const response = await fetch('assets/json/project-data.json');
        const projectData = await response.json();
        
        const projectsContainer = document.querySelector('#projects .grid');
        if (projectsContainer) {
            // Clear existing hardcoded projects
            projectsContainer.innerHTML = '';
            
            // Generate project cards from JSON data
            Object.entries(projectData).forEach(([projectId, project]) => {
                const projectCard = createProjectCard(projectId, project);
                projectsContainer.appendChild(projectCard);
            });
        }
    } catch (error) {
        console.error('Error loading project data:', error);
    }
    
    function createProjectCard(projectId, project) {
        const card = document.createElement('div');
        card.className = 'bg-secondary-black p-8 rounded-2xl shadow-lg flex flex-col';
        
        const buttonColorClass = project.buttonColor === 'blue' ? 'bg-accent-blue' : 'bg-accent-green';
        const buttonHoverClass = project.buttonColor === 'blue' ? 'hover:bg-accent-blue/80' : 'hover:bg-accent-green/80';
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" loading="lazy" class="rounded-lg mb-6 w-full h-48 object-cover object-center">
            <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
            <p class="text-accent-gray mb-4">${project.excerpt}</p>
            <button class="view-project-btn inline-block ${buttonColorClass} text-primary-black font-bold py-2 px-4 rounded-full text-center ${buttonHoverClass} transition-colors mt-auto self-start" data-project-id="${projectId}">View Project</button>
        `;
        
        return card;
    }
});