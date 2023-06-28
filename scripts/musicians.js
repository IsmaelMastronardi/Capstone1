const musicians = [{
  image: './assets/musicians/musician.png',
  name: 'Benjamin Ramirez',
  curriculum: 'Received his formal training at the renowned Conservatoire de Paris',
  description: 'His performances are characterized by a captivating blend of technical precision and emotional depth',
  number: '1',
},
{
  image: './assets/musicians/musician2.png',
  name: 'Alexander Chen',
  curriculum: 'Studied at the renowned Curtis Institute of Music in Philadelphia',
  description: 'A brilliant violinist known for his captivating stage presence and profound musicality',
  number: '2',
},
{
  image: './assets/musicians/musician3.png',
  name: 'Julia Lee',
  curriculum: 'Honed her skills at the prestigious Juilliard School in New York City',
  description: ' virtuosic violinist, captivating audiences with her exquisite technique and passionate performances',
  number: '3',
},
{
  image: './assets/musicians/musician4.png',
  name: 'Isabella Garcia',
  curriculum: 'received her training at the renowned New England Conservatory of Music in Boston',
  description: ' Her career has been marked by notable achievements, including winning prestigious competitions and collaborating with renowned orchestras',
  number: '4',
},
{
  image: './assets/musicians/musician5.png',
  name: 'Sophia Johnson',
  curriculum: 'Pursued her musical education at the renowned Conservatoire de Paris',
  description: 'Is a remarkable violinist, captivating audiences with her impeccable technique and heartfelt interpretations',
  number: '5',
},
{
  image: './assets/musicians/musician6.png',
  name: 'Daniel García',
  curriculum: 'Pursued his education at the renowned Curtis Institute of Music in Philadelphia',
  description: 'With his remarkable technical skill and profound musical sensitivity, he has garnered recognition and praise from audiences and critics alike',
  number: '6',
},
];

const concerts = [{
  icon: './assets/program/whiteNoteIcon.png',
  title: 'Op. 56 <span class="noDisplayMobile">Ludwig van<span/> Beethoven',
  description: 'this masterpiece showcases virtuosic interactions and dialogues between the three soloists and the orchestra',
},
{
  icon: './assets/program/whiteNoteIcon.png',
  title: 'Sinfonía K. 364 <span class="noDisplayMobile">Wolfgang Amadeus<span/> Mozart',
  description: 'This symphony offers a beautiful balance between the violin and viola, with both soloists shining in virtuosic passages.',
},
{
  icon: './assets/program/whiteNoteIcon.png',
  title: 'C Major, Op. 56 <span class="noDisplayMobile">Ludwig van<span/> Beethoven',
  description: 'This piece is a variation of the aforementioned "Triple Concerto,", a fourth soloist is added in the ensemble.',
},
{
  icon: './assets/program/whiteNoteIcon.png',
  title: 'Op. 3, No. 2 <span class="noDisplayMobile" >George Frideric<span/> Handel',
  description: 'A notable Baroque concerto featuring a dialogue between a group of soloists, two violins and a cello, and the string orchestra.',
},
{
  icon: './assets/program/whiteNoteIcon.png',
  title: 'Op. 92 <span class="noDisplayMobile">Ludwig van<span/> Beethoven.',
  description: ' This dynamic and emotionally charged masterpiece showcases Beethoven\'s genius and enduring musical legacy.',
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
function createMusicCard(concert) {
  const musicProgram = document.querySelector('#musicProgram');
  const concertArticle = document.createElement('article');
  concertArticle.classList.add('music');
  concertArticle.innerHTML = `
  <img class="concertIcon" src="${concert.icon}">
  <h4 class="concertName">${concert.title}</h4>
  <p class="concertDescription">${concert.description}</p>
  `;
  musicProgram.appendChild(concertArticle);
}
window.onload = concerts.forEach(createMusicCard);
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