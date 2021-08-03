const joke = document.getElementById('joke')
const jokeButton = document.getElementById('jokeButton')

jokeButton.addEventListener('click',jokes)

jokes();

function jokes() {
  const config = {
    headers: { Accept: 'application/json' },
  }
  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => {
      joke.innerHTML = data.joke
    })
}

