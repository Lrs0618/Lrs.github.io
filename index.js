function fetchData() {
    fetch('https://tea.qingnian8.com/api/bizhi/homeBanner', {
        headers: {
            'access-key': 'Lrs_key@xxm2024'
        },
        mode: 'no-cors'
    })
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById('result');
            result.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}