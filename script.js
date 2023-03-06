console.log("javascript loaded")

pokemon_name = document.getElementById("pokemon_name")
pokemon_ability = document.getElementById("pokemon_ability")
pokemon_image = document.getElementById("pokemon_image")
text_input = document.getElementById("input_text")
const loadpokemon = (id,name,ability) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => {
            name(data.name)
            ability(data.abilities[0].ability.name)
        }, (err)=> {
            console.log(err)
        })
}


function button_press () {

    loadpokemon(text_input.value,(name)=> {
    pokemon_name.innerText = name
        pokemon_image.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${name}.png`
    },(ability)=> {
        pokemon_ability.innerText = ability
    })


}


