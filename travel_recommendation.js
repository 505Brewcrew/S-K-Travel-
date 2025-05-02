// Path to your JSON file
const jsonFilePath = './travel_recommendation_api.json';

// Get references to the input and buttons
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

// Fetch data from the JSON file
fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    // Add event listener for the search button
    searchButton.addEventListener('click', () => {
      const query = searchInput.value.toLowerCase(); // Convert input to lowercase
      const filteredRecommendations = data.filter(recommendation =>
        recommendation.name.toLowerCase().includes(query)
      );

      // Clear previous results
      document.getElementById('results').innerHTML = '';

      // Display the filtered recommendations
      filteredRecommendations.forEach(recommendation => {
        const recommendationContainer = document.createElement('div');
        recommendationContainer.className = 'recommendation';

        const placeName = document.createElement('h2');
        placeName.textContent = recommendation.name;
        recommendationContainer.appendChild(placeName);

        const image = document.createElement('img');
        image.src = recommendation.imageUrl;
        recommendationContainer.appendChild(image);

        document.getElementById('results').appendChild(recommendationContainer);
      });
    });

    // Add event listener for the reset button
    resetButton.addEventListener('click', () => {
      searchInput.value = ''; // Clear the input field
      document.getElementById('results').innerHTML = ''; // Clear the search results
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });