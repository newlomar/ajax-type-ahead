const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const arrayOfCities = []

fetch(endpoint)
.then(res => res.json())
.then((data) => {
  data.forEach((city) => {
    arrayOfCities.push(city)
  })
})

const handleChange = (event) => {
  
  if (event.target.value.trim() === '') {
    suggestions.innerHTML = `
                             <li>
                                Filter for a city
                             </li>
                             <li>
                                or a state
                             </li>
                            `
  }

  else {
    const filteredItems = arrayOfCities.filter((item) => {
      return item.city.toLowerCase().includes(event.target.value.toLowerCase()) || 
             item.state.toLowerCase().includes(event.target.value.toLowerCase())
    })

    const lisArray = filteredItems.map((item) => {
      return `<li>
                <span>${item.city},${item.state}</span>
                <span class="population">${Number(item.population).toLocaleString()}</span>
              </li>`
    })

    suggestions.innerHTML = lisArray.join('')
  }

}

const input = document.querySelector("[data-js='search']")
const suggestions = document.querySelector("[data-js='suggestions']")

input.addEventListener('change', handleChange)
input.addEventListener('keyup', handleChange)