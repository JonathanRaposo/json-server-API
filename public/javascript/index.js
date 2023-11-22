const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', () => {

    charactersAPI
      .getFullList()
      .then((allCharacters) => {
        console.log('All characters: ', allCharacters);
        displayCharacters(allCharacters);
      })
      .catch((err) => console.log('Error while fetching characters: ', err))
  });




  document.getElementById('fetch-one').addEventListener('click', () => {

    const characterId = document.getElementById('character-id').value;

    charactersAPI
      .getOneRegister(characterId)
      .then((character) => {
        console.log('character: ', character)
        displayCharacter(character);
      })
      .catch((err) => console.log('Error while getting character: ', err))
  });



  document.getElementById('delete-one').addEventListener('click', () => {

    const characterId = document.getElementById('character-id-delete').value;

    charactersAPI
      .deleteOneRegister(characterId)
      .then(() => {
        console.log(`Character with ID:${characterId} was removed successfully.`)
        document.getElementById('delete-one').style.backgroundColor = 'aquamarine';
      })
      .catch(() => console.log(`Error while deleting id:${characterId}: ${err}`))
  });



  document.getElementById('edit-character-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('edit-name').value;
    const occupation = document.getElementById('edit-occupation').value;
    const weapon = document.getElementById('edit-weapon').value;
    const isACartoon = document.getElementById('edit-cartoon').checked;

    if (!id || !name || !occupation || !weapon) {
      document.getElementById('edit-character-error').innerHTML = 'All fields are mandatory.'
      return;
    }

    const updatedData = { name, occupation, weapon, 'is a Cartoon': isACartoon };
    try {
      const updatedCharacter = await charactersAPI.updateOneRegister(id, updatedData);
      console.log('Updated character: ', updatedCharacter)
    } catch (err) {
      console.log(`Error while updating character with ID:${id}`, err)
    }

  });



  document.getElementById('new-character-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('new-name').value;
    const occupation = document.getElementById('new-occupation').value;
    const weapon = document.getElementById('new-weapon').value;
    const isACartoon = document.getElementById('new-cartoon').checked;

    if (!name || !occupation || !weapon) {
      document.getElementById('new-character-error').innerHTML = 'All fields are mandatory.'
      return;
    }

    const newCharacter = { name, occupation, weapon, 'is a Cartoon': isACartoon }
    try {
      const createdCharacter = await charactersAPI.createOneRegister(newCharacter);
      console.log('New character created: ', createdCharacter);
    } catch (err) {
      console.log('Error creating character: ', err);
    }

  });
});
