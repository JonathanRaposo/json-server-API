class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return fetch(`${this.BASE_URL}/characters`)
      .then((response) => response.json())
      .then((data) => data)
      .catch((err) => console.log('Error fetching all characters: ', err))

  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => response.data)
      .catch((err) => console.log(`Error while getting character with id:${id}`, err));
  }

  createOneRegister(newCharacter) {
    return axios
      .post(`${this.BASE_URL}/characters`, newCharacter)
      .then((response) => response.data)
      .catch((err) => console.log('Error while creating character: ', err));
  }

  updateOneRegister(id, updatedCharacter) {
    return fetch(`${this.BASE_URL}/characters/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCharacter)
    })
      .then((updatedCharacter) => updatedCharacter)
      .catch((err) => console.log('Error updating character: ', err))
  }

  deleteOneRegister(id) {
    return fetch(`${this.BASE_URL}/characters/${id}`, { method: 'Delete' })
      .then(() => console.log(`Character with ID:${id} deleted:`))
      .catch((err) => console.log(`Error deleting character with id:${id} ${err}`));

  }
}
