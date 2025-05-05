// travel_recommendation.js

// Function to fetch recommendations from the JSON file
async function fetchRecommendations() {
    try {
        const response = await fetch('travel_recommendation_api.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to perform the search based on user input
async function performSearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const recommendations = await fetchRecommendations();

    // Define accepted keywords and their variations
    const acceptedKeywords = {
        beaches: ['beach', 'beaches'],
        temples: ['temple', 'temples'],
        countries: ['country', 'countries']
    };

    // Find the matching keyword
    let matchedKeyword = null;
    for (const [key, variations] of Object.entries(acceptedKeywords)) {
        if (variations.includes(searchInput)) {
            matchedKeyword = key;
            break;
        }
    }

    if (matchedKeyword) {
        const filteredRecommendations = recommendations.filter(item =>
            item.category.toLowerCase() === matchedKeyword
        );
        displayRecommendations(filteredRecommendations);
    } else {
        displayRecommendations([]);
    }
}

// Function to display the recommendations on the webpage
function displayRecommendations(recommendations) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (recommendations.length === 0) {
        recommendationsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    recommendations.forEach(item => {
        const recommendationElement = document.createElement('div');
        recommendationElement.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.imageUrl}" alt="${item.name}" style="width:100px;height:100px;">
            <p>${item.description}</p>
        `;
        recommendationsDiv.appendChild(recommendationElement);
    });
}

// Function to reset the search input and clear results
function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('recommendations').innerHTML = '';
}