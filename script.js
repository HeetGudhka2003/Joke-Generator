const apiBody = document.querySelector(".api_body");

const apiUrl = "https://icanhazdadjoke.com/";

// Predefined author names (since the API doesn't provide an author)

const authors = ["John Doe", "Jane Smith", "Dad Joke Master", "Anonymous", "Joke Enthusiast"];

// Function to randomly pick an author from the list

const getRandomAuthor = () => {

    return authors[Math.floor(Math.random() * authors.length)];
    
};

// Function to fetch the joke using async/await

const fetchData = async () => {
    
    try {

        // Display a loading message

        apiBody.innerHTML = `<p>Loading...</p>`;

        // Fetch the joke from the API

        const response = await fetch(apiUrl, {

            headers: {

                Accept: "application/json", // Header for JSON response
            },
        });

        // Parse the JSON data

        const data = await response.json();

        console.log(data.joke);

        // Get a random author

        const author = getRandomAuthor();

        // Display the joke and the randomly selected author

        apiBody.innerHTML = `<p>${data.joke}</p><p><em>- ${author}</em></p>`;

    } catch (err) {

        // Handle any errors that occur during the fetch

        apiBody.innerHTML = `<p>API is not responding properly. Please try again later!</p>`;

        console.log(err);
    }
};

// Adding Event Listener to the button to fetch the joke when clicked

document.getElementById("fetchJoke").addEventListener("click", fetchData);

// Fetch a joke by default when the page loads

fetchData();