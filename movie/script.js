const sportURL = `https://streamed.su/api/sports`;
const streamURL = {
    alpha: (id) => `https://streamed.su/api/stream/alpha/${id}`,
    bravo: (id) => `https://streamed.su/api/stream/bravo/${id}`,
    charlie: (id) => `https://streamed.su/api/stream/charlie/${id}`,
    delta: (id) => `https://streamed.su/api/stream/delta/${id}`,
    echo: (id) => `https://streamed.su/api/stream/echo/${id}`,
    foxtrot: (id) => `https://streamed.su/api/stream/foxtrot/${id}`
};

function displayAllMatches() {
fetch(`https://streamed.su/api/matches/all`)
 .then(Response => Response.json())
 .then(data => {
    function displayMatches() {

        const matchBox = document.getElementById('matchBox');
        data.forEach(matches => {
            const matchCard = document.createElement('div');
            matchCard.classList.add('matchCard');
            matchCard.textContent = matches.title;
            const matchImage = document.createElement('img');
            matchImage.src = `https://streamed.su/${matches.poster}`;
            matchImage.setAttribute('data-fallback', `https://wallpaper.dog/large/20445057.jpg`);
            matchImage.onerror = () => {
            matchImage.src = matchImage.getAttribute('data-fallback');
            matchImage.style.width = '10%';
            matchCard.onclick = function() {
                window.location.href = `server.html?id=${matches.sources.id}`;
            }
};
            matchCard.appendChild(matchImage)
            matchBox.appendChild(matchCard);
        });
    }
    displayMatches();
    console.log(data)});
}

displayAllMatches();