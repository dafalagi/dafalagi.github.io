document.addEventListener('DOMContentLoaded', async () => {
    // --- Modal Logic ---
    let projectData = {};
    
    // Load project data from JSON file
    try {
        const response = await fetch('assets/json/project-data.json');
        projectData = await response.json();
    } catch (error) {
        console.error('Error loading project data:', error);
        return;
    }

    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('close-modal-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalContributions = document.getElementById('modal-contributions');
    const modalTechStack = document.getElementById('modal-tech-stack');
    const modalLiveLinkBtn = document.getElementById('modal-live-link-btn');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    
    // Variable to hold the link temporarily
    let currentLiveLink = null;

    // Hide the live link button initially when there's no link
    if (modalLiveLinkBtn && !currentLiveLink) {
        modalLiveLinkBtn.classList.add('hidden');
    }

    viewProjectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-project-id');
            const project = projectData[projectId];

            if (project) {
                // Populate modal with project data
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;

                // Clear and populate contributions list
                modalContributions.innerHTML = '';
                project.contributions.forEach(contribution => {
                    const li = document.createElement('li');
                    li.textContent = contribution;
                    modalContributions.appendChild(li);
                });

                // Clear and populate tech stack
                modalTechStack.innerHTML = '';
                project.techStack.forEach(tech => {
                    const span = document.createElement('span');
                    const techClass = `badge-${tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}`;
                    span.className = `badge-style ${techClass}`;
                    span.textContent = tech;
                    modalTechStack.appendChild(span);
                });

                // Set live link
                if (project.liveLink) {
                    currentLiveLink = project.liveLink;
                    modalLiveLinkBtn.classList.remove('hidden');
                } else {
                    currentLiveLink = null;
                    modalLiveLinkBtn.classList.add('hidden');
                }

                // Show the modal with a slight delay for the animation
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.add('opacity-100');
                    modal.querySelector('div').classList.remove('scale-95');
                    modal.querySelector('div').classList.add('scale-100');
                }, 10);
                
                document.body.classList.add('overflow-hidden');
            }
        });
    });

    // New event listener for the button to open the link (only attach if the button exists)
    if (modalLiveLinkBtn) {
        modalLiveLinkBtn.addEventListener('click', () => {
            if (currentLiveLink) {
                window.open(currentLiveLink, '_blank');
            }
        });
    }

    // Close modal functionality
    const closeModal = () => {
        modal.classList.remove('opacity-100');
        modal.querySelector('div').classList.remove('scale-100');
        modal.querySelector('div').classList.add('scale-95');
        document.body.classList.remove('overflow-hidden');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); // Wait for transition to finish
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) modal.addEventListener('click', (e) => {
        // Close modal if user clicks on the overlay
        if (e.target === modal) {
            closeModal();
        }
    });
});
