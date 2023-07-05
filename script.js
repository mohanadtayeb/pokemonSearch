console.log("javascript loaded")
//getting elements from html
pokemon_name = document.getElementById("pokemon_name")
pokemon_ability = document.getElementById("pokemon_ability")
pokemon_ability2 = document.getElementById("pokemon_ability2")
pokemon_weight = document.getElementById("pokemon_weight")
pokemon_baseExperience = document.getElementById("pokemon_exp")
pokemon_image = document.getElementById("pokemon_image")
text_input = document.getElementById("input_text")
errors = document.getElementById("errors")
loading = document.getElementById("loading")


//adding event listeners

const loadpokemon = (id,name,ability,ability2,weight,baseExperience) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    //adding loading animation
    
        .then(res => res.json())
        .then(data => {
            name(data.name)
            ability(data.abilities[0].ability.name)
            ability2(data.abilities[1].ability.name)
            weight(data.weight)
            baseExperience(data.base_experience)
        }, (err)=> {
            console.log(err)
            errors.innerText = "cannot get pokemon data"
            loading.style.display = "none"
        })
}


//loading the first pokemon
loadpokemon(25,(name)=> {
    pokemon_name.innerText = name
        pokemon_image.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${name}.png`
    },(ability)=> {
        pokemon_ability.innerText = ability
    },(ability2)=> {
        pokemon_ability2.innerText = ability2
    },(weight)=> {
        pokemon_weight.innerText = weight
    },(baseExperience)=> {
        pokemon_baseExperience.innerText = baseExperience
    })
    
    

//adding event listeners
function button_press () {
    if (text_input.value == "") {
        errors.innerText = "Please enter a valid pokemon id"
    } else {
        errors.innerText = ""
        loading.style.display = "block"
    loadpokemon(text_input.value,(name)=> {
    pokemon_name.innerText = name
        pokemon_image.src = `https://img.pokemondb.net/sprites/brilliant-diamond-shining-pearl/normal/${name}.png`
    },(ability)=> {
        pokemon_ability.innerText = ability
    },(ability2)=> {
        pokemon_ability2.innerText = ability2
    },(weight)=> {
        pokemon_weight.innerText = weight
    },(baseExperience)=> {
        pokemon_baseExperience.innerText = baseExperience
        loading.style.display = "none"
    })

    }

}
//clearing the input field
function clear_press(){
    text_input.value = ""
    pokemon_name.innerText = ""
    pokemon_ability.innerText = ""
    pokemon_ability2.innerText = ""
    pokemon_weight.innerText = ""
    pokemon_baseExperience.innerText = ""
    pokemon_image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
    errors.innerText = ""
}

//hovering over the image
function imgHover() {
//adding glowing effect to the image when hovered
    pokemon_image.style.boxShadow = "0 0 20px #fff"




}
//hovering out of the image
function imgHoverOut() {
//remove glowing effect when not hovered
    pokemon_image.style.boxShadow = "none"

}
