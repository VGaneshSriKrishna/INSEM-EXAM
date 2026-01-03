document.addEventListener('DOMContentLoaded', () => {

    const allResources = [
        {
            id: 1,
            title: 'Introduction to Physics',
            description: 'A foundational textbook on classical mechanics, electricity, and magnetism.',
            type: 'Textbook',
            url: '#' 
        },
        {
            id: 2,
            title: 'The Future of Artificial Intelligence',
            description: 'A 2025 research paper exploring new models in machine learning.',
            type: 'Research Paper',
            url: '#'
        },
        {
            id: 3,
            title: 'Calculus I - Complete Study Guide',
            description: 'All key concepts, formulas, and practice problems for differential calculus.',
            type: 'Study Guide',
            url: '#'
        },
        {
            id: 4,
            title: 'World History: 1800-1950',
            description: 'An overview of major global events, wars, and industrial changes.',
            type: 'Textbook',
            url: '#'
        },
        {
            id: 5,
            title: 'Effective Java Programming Guide',
            description: 'Tips and best practices for writing high-quality Java code.',
            type: 'Study Guide',
            url: '#'
        },
        {
            id: 6,
            title: 'Analyzing mRNA Vaccine Efficacy',
            description: 'A peer-reviewed study on long-term immunization effects.',
            type: 'Research Paper',
            url: '#'
        }
    ];

    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const resourceContainer = document.getElementById('resource-container');

    function displayResources(resourcesToDisplay) {
        resourceContainer.innerHTML = '';

        if (resourcesToDisplay.length === 0) {
            resourceContainer.innerHTML = '<p>No materials found matching your search.</p>';
            return;
        }

        resourcesToDisplay.forEach(resource => {
            const typeClassName = resource.type.replace(' ', '-');
            const card = document.createElement('article');
            card.className = 'resource-card';

            card.innerHTML = `
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <span class="type-badge ${typeClassName}">${resource.type}</span>
                <a href="${resource.url}" class="download-btn" download>Download</a>
            `;

            resourceContainer.appendChild(card);
        });
    }

    function handleSearchAndFilter() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value;

        let filteredResources = allResources;

        if (searchTerm) {
            filteredResources = filteredResources.filter(resource => {
                const titleMatch = resource.title.toLowerCase().includes(searchTerm);
                const descriptionMatch = resource.description.toLowerCase().includes(searchTerm);
                return titleMatch || descriptionMatch;
            });
        }

        if (selectedType !== 'all') {
            filteredResources = filteredResources.filter(resource => {
                return resource.type === selectedType;
            });
        }

        displayResources(filteredResources);
    }

    searchInput.addEventListener('input', handleSearchAndFilter);
    typeFilter.addEventListener('change', handleSearchAndFilter);

    displayResources(allResources);

});  