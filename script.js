document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const searchHistoryList = document.getElementById('searchHistory');

    // Load the search history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Function to display the search history
    function displaySearchHistory() {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item;
            searchHistoryList.appendChild(li);
        });
    }

    // Display history on page load
    displaySearchHistory();

    // Search button event listener
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            displaySearchHistory();
            searchInput.value = ''; // Clear the search input
        }
    });

    // Clear history button event listener
    clearHistoryButton.addEventListener('click', function () {
        searchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    });
});
