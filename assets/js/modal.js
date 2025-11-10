document.addEventListener('DOMContentLoaded', () => {
    // --- Modal Logic ---
    const projectData = {
        'project1': {
            title: 'Nilaiku',
            description: 'Nilaiku is a sophisticated web application developed as a final academic project, focusing on automating the grading process ' +
            ' for standardized bubble sheet exams using Optical Mark Recognition (OMR). The system replaces manual correction with a fast, accurate, ' +
            ' and scalable computer vision solution integrated into a full-featured web platform.',
            contributions: [
                'Developed the OMR algorithm using Python and OpenCV to accurately detect and interpret marked answers on bubble sheets.',
                'Built the backend using Django to handle user authentication and result processing.',
                'Designed a responsive frontend with Bootstrap to provide an intuitive user interface for teachers.',
                'Integrated Google Auth for secure user login.',
            ],
            techStack: ['Python', 'JavaScript', 'HTML', 'CSS', 'Django', 'Bootstrap', 'MySQL', 'Google Cloud'],
            liveLink: 'https://github.com/dafalagi/Nilaiku'
        },
        'project2': {
            title: 'Travel Booking Engine and Management (2024)',
            description: 'A custom-built travel booking and full-stack management system designed to streamline the reservation process for flights, accommodations, and related services, ' + 
            ' while providing robust administrative tools for operational efficiency.',
            contributions: [
                'Engineered the management functionalities which incorporated front-end and back-end logic.',
                'Designed and built an API for booking engine.',
                'Implemented user authentication and role-based access control for different user types (customers, agents, admins).',
                'Designed and implemented the database schema.',
                'Integrated third-party APIs including payment gateway, WhatsApp notification, and email services.',
            ],
            techStack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Laravel', 'Livewire', 'Bootstrap', 'PostgreSQL', 'Redis'],
            liveLink: null
        },
        'project3': {
            title: 'Villa Management System (2024)',
            description: 'A custom, comprehensive Villa Management System (VMS) designed to streamline villa rental operations, including booking, resource management, marketing functionalities.' +
            ' This is a full-stack web application that I joined halfway through development to enhance backend functionalities and ensure seamless integration with the frontend.',
            contributions: [
                'Enhanced backend functionalities to improve booking management and villa availability tracking.',
                'Collaborated with frontend developers to ensure seamless integration between backend services and user interface.',
                'Optimized database queries to improve application performance and responsiveness.',
                'Fixed bugs and implemented new features based on employee feedback.',
                'Implemented date import feature to streamline villa availability updates from third-party booking systems.',
            ],
            techStack: ['PHP', 'JavaScript', 'HTML', 'CSS', 'Laravel', 'Bootstrap', 'MySQL'],
            liveLink: 'https://totalbali.com/'
        },
        'project4': {
            title: 'Pillar (2024)',
            description: 'Pillar is a centralized, modular "Super App" developed to converge three essential business functions: Human Resources (HR), Cost Control (Finance), ' +
            ' and Helpdesk (Maintenance/IT support). The platform eliminates data silos, enforces unified operational governance, and provides a single pane of glass for employee services ' +
            ' and organizational resource control.',
            contributions: [
                'Built Helpdesk system for efficient issue tracking and resolution.',
                'Created Cost Control modules to monitor and manage expenses.',
                'Developed and integrated Human Resource management features.',
                'Optimized application performance and user experience.',
                'Implemented role-based access control to ensure data security and proper authorization across different modules.',
            ],
            techStack: ['PHP', 'Laravel', 'PostgreSQL'],
            liveLink: null
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
