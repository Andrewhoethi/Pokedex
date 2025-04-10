async function buscarPokemon() {
    const numero = document.getElementById('numero').value;
    if (!numero) return;

    try {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
        const pokemon = await resposta.json();
        
        document.getElementById('pokemon').style.display = 'block';
        document.getElementById('nome').textContent = pokemon.name;
        document.getElementById('id').textContent = "Nº" + pokemon.id;
        document.getElementById('foto').src = pokemon.sprites.front_default;
        
        const tiposDiv = document.getElementById('tipos');
        tiposDiv.innerHTML = '';
        
        pokemon.types.forEach(tipo => {
            const span = document.createElement('span');
            span.className = 'type';
            span.textContent = tipo.type.name;
            span.style.backgroundColor = getCorTipo(tipo.type.name);
            tiposDiv.appendChild(span);
        });
        
    } catch (erro) {
        alert('Pokémon não encontrado!');
    }
}
function invi(){
    
}

function getCorTipo(tipo) {
    const cores = {
        normal: '#A8A878',
        fire: '#F08030',
        water: '#6890F0',
        electric: '#F8D030',
        grass: '#78C850',
        fighting: '#C03028',
        poison: '#A040A0',
        ground: '#E0C068',
        psychic: '#F85888',
        rock: '#B8A038',
        ghost: '#705898',
        dragon: '#7038F8',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC'
    };
    return cores[tipo] || '#777777';
}