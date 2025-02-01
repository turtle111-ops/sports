

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
                window.location.href = `server.html?id=${matches.sources.source.id}`;
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