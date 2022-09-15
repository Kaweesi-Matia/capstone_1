const speakers = [
  {
    name: 'Davor Sukar',
    title: 'Davor Šuker is a Croatian former professional footballer and president of the Croatian Football Federation from 2012 to 2021',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-a.jpg"',
    },
    description: 'Named as Croatia Golden Player for the UEFA 2003 Jubilee anniversary, he came third in the FIFA World Player of the Year awards in 1998. He was awarded as the best player in world cup 1998. He also won the Silver Ball as the second-best player of tournament, behind Ronaldo. ',
  },
  {
    name: 'Ronaldo Luís Nazário de Lima',
    title: '  Brazilian business owner, president of La Liga club Real Valladolid, owner of Brasileiro Série B club Cruzeiro and a retired professional footballer who played as a striker.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-b.jpg"',
    },
    description: 'Ronaldo played for Brazil in 98 matches, scoring 62 goals and is the third-highest goalscorer for his national team. At age 17, he was the youngest member of the Brazilian squad that won the 1994 FIFA World Cup. At the 1998 FIFA World Cup, Ronaldo received the Golden Ball as the player of the tournament. ',
  },
  {
    name: 'Zinedine Yazid Zidane',
    title: ' French professional football manager and former player who played as an attacking midfielder.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-c.jpg"',
    },
    description: 'Capped 108 times by France, Zidane won the 1998 FIFA World Cup, scoring twice in the final, and was named to the All-Star Team. This triumph made him a national hero in France and he received the Legion of Honour in 1998. He won UEFA Euro 2000 and was named Player of the Tournament. He also received the Golden Ball in the tournament.',
  },
  {
    name: 'Oliver Rolf Kahn ',
    title: 'Oliver Rolf Kahn is a German football executive and former professional player who played as a goalkeeper',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-d.jpg"',
    },
    description: 'From 1994 to 2006, Kahn was part of the German national team, in which he played as a starter after the retirement of Andreas Köpke, he was an unused member of the squad that won the 1996 UEFA European Championship. In the 2002 FIFA World Cup, although Germany were not among the tournament favourites, Kahn prowess in goal was key to reaching the final, where Germany lost 0–2 to Brazil.',
  },
  {
    name: 'Giovanni Vincenzo Infantino',
    title: 'Infantino is a Swiss-Italian football administrator and the current president of FIFA.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-e.jpg"',
    },
    description: 'Infantino was a member of FIFA Reform Committee. On 26 October 2015, he received the backing of the UEFA Executive Committee to stand for the position of president in the 2016 FIFA Extraordinary Congress. On the same day, he confirmed his candidacy and submitted the required declarations of support. He promised to expand the FIFA World Cup to forty teams.',
  },
  {
    name: 'Sheikh Tamim bin Hamad Al Thani',
    title: 'President of Qatar.',
    images: {
      profileBg: '"images/Speakers/grey-square-pattern-speaker-background.webp"',
      profilePic: '"images/Speakers/speaker-f.jpg"',
    },
    description: 'Sheikh Tamim bin Hamad Al Thani is the president of Qatar and he will be the main speaker for the world cup opening ceremony. He will unveil a new world cup trophy to be contested for by 32 countries, for a tournament which will run for over a month. Qatar will host the world cup for the first time and it will be the first time a country from Asia host world cup for numerous years',
  },
];

const generateSpeakers = (parentGrid) => {
  speakers.forEach((speaker) => {
    const {
      name,
      title,
      images: { profileBg, profilePic },
      description,
    } = speaker;

    const speakerProfileContainer = document.createElement('div');
    speakerProfileContainer.className = 'speaker-profile-container';
    speakerProfileContainer.style.backgroundImage = `url(${profileBg})`;

    const speakerPic = document.createElement('div');
    speakerPic.className = 'speaker-profile-pic';
    speakerPic.style.backgroundImage = `url(${profilePic})`;

    speakerProfileContainer.appendChild(speakerPic);

    const speakerInfo = document.createElement('div');
    speakerInfo.className = 'speaker-info';

    const speakerName = document.createElement('h3');
    speakerName.innerText = name;

    const speakerTitle = document.createElement('h4');
    speakerTitle.className = 'speaker-title';
    speakerTitle.innerText = title;

    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    speakerTitle.appendChild(indicator);

    const desc = document.createElement('p');
    desc.innerText = description;

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(speakerTitle);
    speakerInfo.appendChild(desc);

    const speakerItem = document.createElement('div');
    speakerItem.className = 'speaker-item';

    speakerItem.appendChild(speakerProfileContainer);
    speakerItem.appendChild(speakerInfo);

    parentGrid.appendChild(speakerItem);
  });
};

function renderSpeakers() {
  const sectionSpeakers = document.getElementById('speakers');

  const heading = document.createElement('h2');
  heading.className = 'sec-title';
  heading.innerText = 'Guest Speakers';

  const indicator = document.createElement('span');
  indicator.className = 'indicator';
  heading.appendChild(indicator);
  sectionSpeakers.appendChild(heading);

  const speakersGrid = document.createElement('div');
  speakersGrid.className = 'speakers-grid';
  generateSpeakers(speakersGrid);
  sectionSpeakers.appendChild(speakersGrid);
}

export default renderSpeakers;
