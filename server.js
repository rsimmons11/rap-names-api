const express = require('express');
const app = express();
const PORT = 8000

const rappers = {
  '21 savage': {
    'age': 29,
    'birthName': "Sheyaa Bin Abraham-Joseph",
    'birthLocation': "London, England",
  },

  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },

  'jay-z': {
    'age': 53,
    'birthName': 'Shawn Carter',
    'birthLocation': 'Brooklyn, New York'
  },
  
  'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  }

}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
  const rapperName = request.params.name.toLocaleLowerCase()
  if (rappers[rapperName]) {
    response.json(rappers[rapperName])
  }
  else {
    response.json(rappers['unknown'])
  } 
})

app.listen(PORT, (request, response) => {
  console.log(`Server running on port: ${PORT}! Betta go catch it!`)
})