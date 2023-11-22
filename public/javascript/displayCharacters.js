
const displayCharacters = (characters) => {
    let output = ''
    characters.forEach((character) => {
        output += `<div id="character-wrapper">
          <p><span>Id:</span>   ${character.id}</p>
          <p><span>Name:</span>   ${character.name}</p>
          <p><span>Occupation:</span>   ${character.occupation}</p>
          <p><span>Weapon:</span>   ${character.weapon}</p>
          <p><span>is a Cartoon?:</span>   ${character.cartoon}</p>
       </div>`

    });
    document.getElementById('results-container').innerHTML = output
}

const displayCharacter = (character) => {

    let output = `<div id="character-wrapper">
    <p><span>Id:</span>   ${character.id}</p>
    <p><span>Name:</span>   ${character.name}</p>
    <p><span>Occupation:</span>   ${character.occupation}</p>
    <p><span>Weapon:</span>   ${character.weapon}</p>
    <p><span>is a Cartoon?:</span>   ${character.cartoon}</p>
 </div>`
    document.getElementById('results-container').innerHTML = output;

}