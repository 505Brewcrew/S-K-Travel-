
function fetchRecommendations(keyword) {
    console.log('Fetching data from:', 'travel_recommendations_api.json');
fetch('travel_recommendations_api.json')
  .then(response => response.json())
  .then(data => {
  })
  .catch(error => console.error('Error fetching the JSON data:', error));
    fetch('travel_recommendations_api.json')
      .then(response => response.json())
      .then(data => {
        const recommendations = data[keyword];
        const lowerCaseKeyword = keyword.toLowerCase();
        const acceptedKeywords = ['beach', 'temple', 'country'];
        if (recommendations) {
          recommendations.forEach(place => {
            const placeElement = document.createElement('div');
            const imageElement = document.createElement('img');
            const nameElement = document.createElement('h3');
            const descriptionElement = document.createElement('p');
            imageElement.src = place.image;
            nameElement.textContent = place.name;
            descriptionElement.textContent = place.description;
            placeElement.appendChild(imageElement);
            placeElement.appendChild(nameElement);
            placeElement.appendChild(descriptionElement);
            document.getElementById('recommendationsContainer').appendChild(placeElement);
          });
        } else {
          console.error('No recommendations found for the keyword:', keyword);
        }
      })
      .catch(error => console.error('Error fetching the JSON data:', error));
  }
  document.getElementById('searchButton').addEventListener('click', () => {
    const keyword = document.getElementById('searchInput');
    fetchRecommendations(keyword);
  });

function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('recommendations').innerHTML = '';
}

function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('recommendations').innerHTML = '';
}