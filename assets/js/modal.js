document.addEventListener('DOMContentLoaded', () => {
    // --- Modal Logic ---
    const projectData = {
        'project1': {
            title: 'E-commerce API',
            description: 'This project involved developing a scalable and secure RESTful API for a new e-commerce platform, handling product, user, and order management.',
            contributions: [
                'Designed and implemented the database schema using PostgreSQL.',
                'Developed RESTful endpoints for user registration, login, and profile management.',
                'Created the product management API, including CRUD operations and search functionality.',
                'Integrated a secure payment gateway and order processing system.'
            ],
            techStack: ['Laravel', 'PHP', 'PostgreSQL', 'Redis'],
            liveLink: 'https://ecommerce-client-example.com'
        },
        'project2': {
            title: 'Internal CRM System',
            description: 'An internal application built to help a small technology company manage their client relationships and track project lifecycles from start to finish.',
            contributions: [
                'Engineered the backend logic for client and project tracking.',
                'Implemented a user authentication system with different access levels (admin, manager, team member).',
                'Designed and built an API for generating custom reports on project progress and team performance.'
            ],
            techStack: ['Django', 'Python', 'PostgreSQL'],
            liveLink: 'https://crm-client-example.com'
        },
        'project3': {
            title: 'School Management Backend',
            description: 'A comprehensive backend system for a school management application, handling everything from student records and grading to class scheduling and attendance tracking.',
            contributions: [
                'Developed the core API for managing student and teacher data.',
                'Created a secure and efficient system for submitting and viewing grades.',
                'Implemented a scheduling algorithm to optimize class assignments and prevent conflicts.',
                'Worked closely with the frontend team to ensure seamless data flow and integration.'
            ],
            techStack: ['Laravel', 'PHP', 'PostgreSQL'],
            liveLink: 'https://school-client-example.com'
        }
    };

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
                    const li = document.createElement('li');
                    li.className = 'badge-style rounded-full px-3 py-1 text-sm font-semibold';
                    li.textContent = tech;
                    modalTechStack.appendChild(li);
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

    // New event listener for the button to open the link
    modalLiveLinkBtn.addEventListener('click', () => {
        if (currentLiveLink) {
            window.open(currentLiveLink, '_blank');
        }
    });

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
