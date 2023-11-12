function searchWiki() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value;

  if (query.trim() !== '') {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${query}`)
      .then(response => response.json())
      .then(data => displayResults(data.query.search))
      .catch(error => console.error('Error fetching data:', error));
  }
}

function displayResults(results) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>Ничего не найдено.</p>';
    return;
  }

  results.forEach(result => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `
      <h2>${result.title}</h2>
      <p>${result.snippet}</p>
    `;
    resultsContainer.appendChild(resultElement);
  });
}