const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const array = []

const getData = async () => {
  await fetch(endpoint).then(res => res.json()).then((data) => {
    data.forEach((item) => {
      array.push(item)
    })
  })
}

getData()

// Ideia do filtro, usar algo do tipo "inclusdes" para o array