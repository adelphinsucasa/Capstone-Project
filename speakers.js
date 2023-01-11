const oSpeakers = [
  {
    imgSrc: './assets/images/speaker1.png',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    imgSrc: './assets/images/speaker2.png',
    name: 'Kilnam Chon',
    title: '',
    info: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    imgSrc: './assets/images/speaker3.png',
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    info: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    imgSrc: './assets/images/speaker4.png',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    info: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
  },
  {
    imgSrc: './assets/images/speaker5.png',
    name: 'Lila tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    info: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    imgSrc: './assets/images/speaker6.png',
    name: 'Ryan Merkley',
    title: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    info: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];

function fillSpeakers(elem, step) {
  let aux = '';
  for (let i = 0; i < elem; i += step) {
    aux += '<li class="speaker">';
    aux += `<img src="${oSpeakers[i].imgSrc}" alt=""></img>`;
    aux += '<div class="speaker-intro">';
    aux += `<h3>${oSpeakers[i].name}</h3>`;
    aux += `<h2>${oSpeakers[i].title}</h2>`;
    aux += `<p>${oSpeakers[i].info}</p>`;
    aux += '</div>';
    aux += '</li>';
  }
  return aux;
}

const spkContent = document.querySelector('.speakers-content');

const mainH2 = document.createElement('h2');
const hr = document.createElement('hr');
const ul = document.createElement('ul');
const btnMore = document.createElement('button');

ul.classList.add('speaker-group');
btnMore.classList.add('btn-more');
btnMore.id = 'btn-more';
btnMore.innerHTML = 'MORE';

if (window.matchMedia('(max-width: 767px)').matches) {
  ul.innerHTML = fillSpeakers(3, 2);
} else {
  ul.innerHTML = fillSpeakers(6, 1);
}

mainH2.textContent = 'Features Speakers';
spkContent.append(mainH2);
spkContent.append(hr);
spkContent.append(ul);
spkContent.append(btnMore);

btnMore.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'MORE') {
    e.target.innerHTML = 'LESS';
    const ul = document.querySelector('.speaker-group');
    ul.innerHTML = fillSpeakers(6, 1);
  } else {
    e.target.innerHTML = 'MORE';
    const ul = document.querySelector('.speaker-group');
    ul.innerHTML = fillSpeakers(3, 2);
  }
});
