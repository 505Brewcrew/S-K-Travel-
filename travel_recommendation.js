fetch('travel_recommendation_api.json')
.then(response => response.json())
  .then(jsonData => {
    data = jsonData; // Assign the parsed JSON to data
    // Now you can use data.filter
})
// List of accepted keywords
const acceptedKeywords = ['beaches', 'countries', 'temples'];
// Fetch data from the JSON file
function fetchData() {
  return fetch('travel_recommendation_api.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}
// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById('searchField').value.toLowerCase();
  // Check if the input is an accepted keyword
  if (acceptedKeywords.includes(searchInput)) {
    fetchData().then(_data => {
      // Display results
      displayResults(results);
    });
  } else {
    displayResults([]); // Display no results if the keyword is not accepted
  }
}
function displayResults(data) {
    const results = data.places; // Access the array
if (results > 0) {
    results.forEach(_acceptedKeyword => {
      const placeElement = document.createElement('div');
      placeElement.innerHTML = `
        <h3>${place.name}</h3>
        <img src="${place.imageUrl}" alt="${place.name}" />
        <p>${place.description}</p>
      `;
      resultsContainer.appendChild(placeElement);
    });
  } else {
    resultsContainer.innerHTML = '<p>No results found.</p>';
  }
}
// Add event listener to the search button
document.getElementById('searchButton').addEventListener('click', handleSearch);

function resetSearch() {
    // Clear the search input field
    document.getElementById('searchInput').value ='';
}