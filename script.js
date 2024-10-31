const url="https://ponyapi.net/v1/character/all"
async function getCharacter(){
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector('.container')
    console.log(data)
    for (const character of data.data) {
        element.innerHTML += `
             <div class="character">
                <img src="${character.image}"/>
                <div class="text">
                     <h1>${character.name}</h1>
                     <p>${character.residence}</p>
                    <p>${character.kind}</p>
                </div>
            </div>
            `
    }
       
}
   
 
 getCharacter();