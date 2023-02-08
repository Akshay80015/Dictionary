const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a27e9bb83msh432c16ed23e1bc4p18361bjsn01bf86cc9a8d',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  const getWord =(word)=>{
    // termName.innerHTML= term
  fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+word, options)
    .then(response => response.json())
    .then(response =>{
         console.log(response)
        Definition.innerHTML=response.definition
        Valid.innerHTML=response.valid
        Word.innerHTML=response.word
    
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWord(term.value)
})
getWord("bright")