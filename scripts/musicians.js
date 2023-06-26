const musicians = [{
  image: './assets/musicians/fotomaestro.jpg',
  name: 'Yochai Benkler',
  curriculum: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies common-based peer production, and published his eminal book The Wealth of Networks in 2006',
  number: '1',
},
{
  image: './assets/musicians/fotomaestro.jpg',
  name: 'Yochai Benkler',
  curriculum: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies common-based peer production, and published his eminal book The Wealth of Networks in 2006',
  number: '2',
},
{
  image: './assets/musicians/fotomaestro.jpg',
  name: 'Yochai Benkler',
  curriculum: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies common-based peer production, and published his eminal book The Wealth of Networks in 2006',
  number: '3',
},
{
  image: './assets/musicians/fotomaestro.jpg',
  name: 'Yochai Benkler',
  curriculum: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies common-based peer production, and published his eminal book The Wealth of Networks in 2006',
  number: '4',
},
{
  image: './assets/musicians/fotomaestro.jpg',
  name: 'Yochai Benkler',
  curriculum: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies common-based peer production, and published his eminal book The Wealth of Networks in 2006',
  number: '5',
},
{
  image: './assets/musicians/fotomaestro.jpg',
  name: 'Yochai Benkler',
  curriculum: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies common-based peer production, and published his eminal book The Wealth of Networks in 2006',
  number: '6',
},
];
function createMusicianCard(artist) {
  const cardsDiv = document.querySelector('#musiciansCardsGroup');
  const musicianCard = document.createElement('article');
  musicianCard.classList.add('musicianCard');
  musicianCard.innerHTML = `
  <div>
  <img class="musicianImg" src="${artist.image}">
</div>
<div class="musicianIngoDiv">
  <h5 class="musicianName">
    ${artist.name}
  </h5>
  <div class="musicianDescriptionDiv">
    <p class="musicianCurriculum">
      ${artist.curriculum}
    </p>
    <p class="musicianDescription">
      ${artist.description}
    </p>
  </div>
</div>
  `;
  if (artist.number >= 3) {
    musicianCard.classList.add('musicianCardMobileDisplay');
    musicianCard.classList.add('alter');
  }
  cardsDiv.appendChild(musicianCard);
}

window.onload = musicians.forEach(createMusicianCard);
let state = 'more';
function showMoreCards() {
  const musicianCard = document.querySelectorAll('.alter');
  const moreBtn = document.querySelector('#moreCardsBtn');
  if (state === 'more') {
    musicianCard.forEach((element) => {
      element.classList.remove('musicianCardMobileDisplay');
    });
    moreBtn.innerText = 'LESS';
    state = 'less';
  } else {
    musicianCard.forEach((element) => {
      element.classList.add('musicianCardMobileDisplay');
    });
    moreBtn.innerText = 'MORE';
    state = 'more';
  }
}

const moreBtn = document.querySelector('#moreCardsBtn');
moreBtn.addEventListener('click', showMoreCards);