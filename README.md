## Instructions

I'm going to create a fake API using JSON-Server npm module to then do an application to Create, Read, Update, and Delete characters from it. The routes available in this API are the following:

- **Verb:** GET, **Route:** "/characters"
  - It receives NO parameters
  - It returns the full characters list
  - It returns JSON
- **Verb:** GET, **Route:** "/characters/:id"
  - It receives the character ID as a parameter (route)
  - It returns the character with the indicated `id`
  - It returns JSON
- **Verb:** POST, **Route:** "/characters"
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
  - It returns the created character if there are no errors
  - It returns the wrong fields if there is some error
  - It returns JSON
- **Verb:** PATCH/PUT, **Route:** "/characters/:id"
  - It receives the character `id` as a parameter (route)
  - It receives an object as a parameter, with the following format:
    `{ name: string, occupation: string, cartoon: boolean, weapon: string }`
  - All the fields are optional
  - It returns the updated character if there are no errors
  - It returns "Character not found" if there is no character with the indicated `id`
  - It returns JSON / text
- **Verb:** DELETE, **Route:** "/characters/:id"
  - It receives the character `id` as a parameter (route)
  - It returns "Character has been successfully deleted" if there are no errors
  - It returns "Character not found" if there is no character with the indicated id
  - It returns text

### Iteration 1: The Fake API

first install json-server.Type in your terminal: npm -g json-server

In the `api` folder, create a `db.json` file. Inside our `db.json` we will specify the first 2 characters of our API, so we can start working with some data. Copy/paste the following characters in the file:

```javascript
{
  "characters": [
    {
      "id": 1,
      "name": "Han Solo",
      "occupation": "Smuggler",
      "weapon": "Blaster Pistol",
      "cartoon": true
    },
    {
      "id": 2,
      "name": "Luke Skywalker",
      "occupation": "Jedi Knight",
      "weapon": "Lightsaber",
      "cartoon": false
    },
    {
      "id": 3,
      "name": "Sponge Bob",
      "occupation": "Lives under the sea",
      "weapon": "Crabby Patty",
      "cartoon": true
    }
  ]
}
```

Then run the following code in the terminal to make our API start working:

json-server --watch db.json --port 8000

```

### Iteration 2: The `APIHandler.js` file

We have our API running, so now we will construct a class `APIHandler` to deal with the Axios calls. The only responsibility of this class is to display the JSON result that comes from the API, or give the needed information to the API via a function argument.

The functionalities of the `APIHandler` class are:

- Get all the characters info from http://localhost:8000/characters
- Get a single character info from http://localhost:8000/characters/:id
- Create a single character posting the data to http://localhost:8000/characters
- Delete a single character through his id in http://localhost:8000/characters/:id
- Edit a single character through his id in http://localhost:8000/characters/:id

You have to create an Axios/fetch call for each of these actions. You can create as many functions as you need inside the class, but remember this class should only manage the API request and display the resulting value.



**Micro-advice**

To make sure everything is working, use [POSTMAN](https://www.getpostman.com/).


In this iteration, it's enough to show results in the console.

### Iteration 3: The `index.js` file

Once we have the results served by the API in the application, we will create the events that will handle with the CRUD operations.

#### Fetch all characters

Retrieve all the available characters in the API and show them in the application. In order to do that, we need to:

- Create a button (Fetch-all) that calls a function in the `APIHandler`.
- The function will return a JSON object with all the characters.
- Get the data and show the characters. Finally, with JavaScript, we will create a structure similar to a card (image above) to show detailed info about each character.

#### Fetch one character

Following the same idea as with fetching all, to retrieve a single character's data we need to:

- Create a button (Fetch-one) to get the `id` of an existing character.
- Search that character in the API with http://localhost:8000/characters/:id
- Get the data and show the character info as a card.

#### Delete one character


To be able to delete a character from the API database, we need to:

- Create a button (Delete-one)  to get the `id` of the character we want to delete.
- Delete that character in the API with http://localhost:8000/characters/:id

  **Remember which HTTP verb you need in the request!!**

- If the character is successfully removed, change the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Create new character



We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox).

- Create a submit button (_Create_ in the image above) to get all the data from the form.
- Create an event handler function for managing the form submission. To prevent the default form behaviour (page reload), use the event.preventDefault() method.
- Send the data to the `APIHandler` function to save the new character through http://localhost:8000/characters

  **Remember which HTTP verb you need in the request!!**

- If the character was successfully created, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

#### Edit a character


We will create a form with 4 inputs: name(text), occupation(text), weapon(text) and cartoon(checkbox). Also, we will create a new input to indicate the `id` of the character we want to edit.

- Create a submit button (_Update_ in the image above) to get all the data from the form.
- Create an event handler function for managing the form submission. To prevent the default form behaviour (page reload), use the event.preventDefault() method.
- Send the data to the `APIHandler` function to save the new character through http://localhost:8000/characters/:id

  **Remember which HTTP verb you need in the request!!**

- If the character was successfully updated, set the background color of the button to green.
- If something went wrong, change the background color of the button to red.

That would be all!



```
