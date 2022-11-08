const avatarsObject = {
  'https://swapi.dev/api/people/1/': './images/luke_skywalker.jpeg',
  'https://swapi.dev/api/people/2/': './images/c3po.jpeg',
  'https://swapi.dev/api/people/3/': './images/R2-D2.jpeg',
  'https://swapi.dev/api/people/4/': './images/darth_vader.jpeg',
  'https://swapi.dev/api/people/5/': './images/leia_organa.jpeg',
  'https://swapi.dev/api/people/6/': './images/Owen Lars.jpeg',
  'https://swapi.dev/api/people/7/': './images/Beru Whitesun lars.jpeg',
  'https://swapi.dev/api/people/8/': './images/R5-D4.jpeg',
  'https://swapi.dev/api/people/9/': './images/Biggs Darklighter.jpeg',
  'https://swapi.dev/api/people/10/': './images/obi-wan_kenobi.jpeg',
  'https://swapi.dev/api/people/11/': './images/Anakin Skywalker.jpeg',
  'https://swapi.dev/api/people/12/': './images/Wilhuff Tarkin.jpeg',
  'https://swapi.dev/api/people/13/': './images/chewbacca.jpeg',
  'https://swapi.dev/api/people/14/': './images/han_solo.jpeg',
  'https://swapi.dev/api/people/15/': './images/Greedo.jpeg',
  'https://swapi.dev/api/people/16/': './images/Jabba Desilijic Tiure.jpeg',
  'https://swapi.dev/api/people/18/': './images/wedge_antilles.jpeg',
  'https://swapi.dev/api/people/19/': './images/Jek Tono Porkins.jpeg',
  'https://swapi.dev/api/people/20/': './images/Yoda.jpeg',
  'https://swapi.dev/api/people/21/': './images/Palpatine.jpeg',
  'https://swapi.dev/api/people/22/': './images/Boba_Fett.jpeg',
  'https://swapi.dev/api/people/23/': './images/IG-88.jpeg',
  'https://swapi.dev/api/people/24/': './images/Bossk.jpeg',
  'https://swapi.dev/api/people/25/': './images/Lando_Calrissian.jpeg',
  'https://swapi.dev/api/people/26/': './images/Lobot.jpeg',
  'https://swapi.dev/api/people/27/': './images/Ackbar.jpeg',
  'https://swapi.dev/api/people/28/': './images/Mon Mothma.jpeg',
  'https://swapi.dev/api/people/29/': './images/Arvel Crynyd.jpeg',
  'https://swapi.dev/api/people/30/': './images/Wicket Systri Warrick.jpeg',
  'https://swapi.dev/api/people/31/': './images/Nien Nunb.jpeg',
  'https://swapi.dev/api/people/32/': './images/Qui-Gon Jinn.jpeg',
  'https://swapi.dev/api/people/33/': './images/Nute Gunray.jpeg',
  'https://swapi.dev/api/people/34/': './images/Finis Valorum.jpeg',
  'https://swapi.dev/api/people/35/': './images/Padme Amidala.jpeg',
  'https://swapi.dev/api/people/36/': './images/Jar Jar Binks.jpeg',
  'https://swapi.dev/api/people/37/': './images/Roos Tarpals.jpeg',
  'https://swapi.dev/api/people/38/': './images/Rugor Nass.jpeg',
  'https://swapi.dev/api/people/39/': './images/Ric Olie.jpeg',
  'https://swapi.dev/api/people/40/': './images/Watto.jpeg',
  'https://swapi.dev/api/people/41/': './images/Sebulba.jpeg',
  'https://swapi.dev/api/people/42/': './images/Quarsh Panaka.jpeg',
  'https://swapi.dev/api/people/43/': './images/Shmi Skywalker.jpeg',
  'https://swapi.dev/api/people/44/': './images/Darth Maul.jpeg',
  'https://swapi.dev/api/people/45/': './images/Bib Fortuna.jpeg',
  'https://swapi.dev/api/people/46/': './images/Ayla Secura.jpeg',
  'https://swapi.dev/api/people/47/': './images/Ratts Tyerel.jpeg',
  'https://swapi.dev/api/people/48/': './images/Dud Bolt.jpeg',
  'https://swapi.dev/api/people/49/': './images/Gasgano.jpeg',
  'https://swapi.dev/api/people/50/': './images/Ben Quadinaros.jpeg',
  'https://swapi.dev/api/people/51/': './images/Mace Windu.jpeg',
  'https://swapi.dev/api/people/52/': './images/Ki-Adi-Mundi.jpeg',
  'https://swapi.dev/api/people/53/': './images/Kit Fisto.jpeg',
  'https://swapi.dev/api/people/54/': './images/Eeth Koth.jpeg',
  'https://swapi.dev/api/people/55/': './images/Adi Gallia.jpeg',
  'https://swapi.dev/api/people/56/': './images/Saesee Tiin.jpeg',
  'https://swapi.dev/api/people/57/': './images/Yarael Poof.jpeg',
  'https://swapi.dev/api/people/58/': './images/Plo Koon.jpeg',
  'https://swapi.dev/api/people/59/': './images/Mas Amedda.jpeg',
  'https://swapi.dev/api/people/81/': './images/Raymus Antilles.jpeg',
};

function displayAvatar(obj, character) {
  if (obj.hasOwnProperty(character)) {
    return obj[character];
  } else {
    return './images/stormtrooper.jpeg';
  }
}

let filmUrl = 'https://swapi.dev/api/films/2';
let input = document.querySelector('#episodeNumber');
if (input.value) {
  filmUrl = 'https://swapi.dev/api/films/' + Number(input.value);
}

let h1 = null;

input.addEventListener('change', () => {
  if (input.value > 0 && input.value < 7) {
    const episodes = {
      4: 1,
      5: 2,
      6: 3,
      1: 4,
      2: 5,
      3: 6,
    };
    const specifiedEpisode = Number(input.value);
    filmUrl = 'https://swapi.dev/api/films/' + episodes[specifiedEpisode];
  } else {
    h1 = document.createElement('h1');
    h1.innerHTML =
      '<u>Please enter number in range from 1 to 6!</u><br> By default, site shows Star Wars Characters from Episode 5';
    filmUrl = 'https://swapi.dev/api/films/2';
  }
});

function renderCharactersInfo({ url, name, gender, birth_year }) {
  let tableBody = document.querySelector('#tableBody');
  let row = tableBody.insertRow(-1);
  row.insertCell(0).innerHTML = `<img src="${displayAvatar(
    avatarsObject,
    url
  )}" class="avatar">`;
  row.insertCell(1).innerHTML = name;
  row.insertCell(2).innerHTML = gender;
  row.insertCell(3).innerHTML = birth_year;
}

async function fetchCharacters(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

let displayContent = document.querySelector('#displayContent');

function getCharactersInfoTable(url) {
  displayContent.innerHTML = '';
  let table = document.createElement('table');
  table.setAttribute('id', 'charactersTable');
  table.innerHTML = `<thead>
                     <tr>
                          <td>Avatar</td>
                          <td>Name</td>
                          <td>Gender</td>
                          <td>Birth year</td>
                     </tr>
                     </thead>
                     <tbody id="tableBody"></tbody>`;
  if (h1) {
    displayContent.append(h1);
    h1 = null;
  }

  displayContent.append(table);

  const charactersArray = fetchCharacters(url).then((data) => {
    return data['characters'];
  });
  charactersArray.then((data) =>
    data.forEach((el) => {
      fetchCharacters(el).then((data) => {
        renderCharactersInfo(data);
      });
    })
  );
} //end of getCharactersInfoTable function

let btnGetInfoTable = document.querySelector('#getInfoTable');
btnGetInfoTable.addEventListener('click', () =>
  getCharactersInfoTable(filmUrl)
);

//helper >> start of function buildPlanetsList
function buildPlanetsList(jsonObjectResults) {
  let div = document.querySelector('.planets_container');
  if (!div) {
    div = document.createElement('div');
    div.className = 'planets_container';
    displayContent.append(div);
  }

  jsonObjectResults.forEach((planetObjectElement, index) => {
    let span = document.createElement('span');
    const divider = index !== jsonObjectResults.length - 1 ? ', ' : '';

    span.textContent = planetObjectElement.name + divider;

    div.append(span);
  });
} // end of buildPlanetsList function

let nextButtonListenerHandler;
let previousButtonListenerHandler;

/* getPlanets function start */
function getPlanets(url) {
  let planetButtonsDiv = document.querySelector('#planetButtons');
  displayContent.innerHTML = '';

  let h1 = document.createElement('h1');
  h1.innerHTML =
    'Here are 10 Star Wars planets of total 60. Press <strong>Next/Previous</strong> to see other ones.';
  displayContent.append(h1);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if (json.next) {
        let nextButton;
        if (!document.querySelector('#nextButton')) {
          nextButton = document.createElement('button');
          nextButton.classList.add('button');
          nextButton.setAttribute('id', 'nextButton');
          nextButton.innerHTML = 'Next';
          planetButtonsDiv.append(nextButton);
          nextButtonListenerHandler = () => getPlanets(json.next);
          nextButton.addEventListener('click', nextButtonListenerHandler);
        } else if (document.querySelector('#nextButton')) {
          nextButton = document.querySelector('#nextButton');
          nextButton.removeEventListener('click', nextButtonListenerHandler);
          nextButtonListenerHandler = () => getPlanets(json.next);
          nextButton.addEventListener('click', nextButtonListenerHandler);
        }
      }

      if (!json.next && document.querySelector('#nextButton')) {
        document.querySelector('#nextButton').remove();
      }

      if (json.previous) {
        let previousButton;
        if (!document.querySelector('#previousButton')) {
          previousButton = document.createElement('button');
          previousButton.classList.add('button');
          previousButton.setAttribute('id', 'previousButton');
          previousButton.innerHTML = 'previous';
          planetButtonsDiv.append(previousButton);
          previousButtonListenerHandler = () => getPlanets(json.previous);
          previousButton.addEventListener(
            'click',
            previousButtonListenerHandler
          );
        } else if (document.querySelector('#previousButton')) {
          previousButton = document.querySelector('#previousButton');
          previousButton.removeEventListener(
            'click',
            previousButtonListenerHandler
          );
          previousButtonListenerHandler = () => getPlanets(json.previous);
          previousButton.addEventListener(
            'click',
            previousButtonListenerHandler
          );
        }
      }

      if (!json.previous && document.querySelector('#previousButton')) {
        document.querySelector('#previousButton').remove();
      }

      buildPlanetsList(json.results);
    }); //end of second then(json object)
  h1 = null;
} // end of getPlanets function

let btnGetPlanetsList = document.querySelector('#getPlanetsList');
btnGetPlanetsList.addEventListener('click', () =>
  getPlanets('https://swapi.dev/api/planets/')
);

let btnGetAllPlanetsPromiseAll = document.querySelector(
  '#getAllPlanetsPromiseAll'
);
btnGetAllPlanetsPromiseAll.addEventListener('click', () => {
  displayContent.innerHTML = '';
  getAllPlanetsPromiseAll('https://swapi.dev/api/planets/');
});

async function getAllPlanetsPromiseAll(planetsUrl, arr = []) {
  const response = await fetch(planetsUrl);
  const json = await response.json();

  if (arr.length === 0) {
    arr.push(planetsUrl);
  }

  if (json.next) {
    arr.push(json.next);
    getAllPlanetsPromiseAll(json.next, arr);
  }

  if (!json.next) {
    Promise.all(arr.map((element) => renderPlanets(element))).then((planetsArray) => {
      planetsArray.forEach((planets) => buildPlanetsList(planets));
    });
  }
}

async function renderPlanets(planetsUrl) {
  const response = await fetch(planetsUrl);
  const json = await response.json();
  return json.results;
}
