let getData = async (pokemon_name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`);
    console.log(response.data);
    return response.data
}

let loadData = async () => {
    event.preventDefault();
    let pokemonName = document.getElementById('input').value;
    let data = await getData(pokemonName);
    console.log(data);
    let newRow = `<tr><th scrope="row"></th><td>${data.name.toUpperCase()} <img src="${data.sprites.front_default}  "</td></tr>`;
    document.getElementById('pokemonBody').insertAdjacentHTML('afterbegin', newRow);
};

let clearData = () => {
    document.getElementById('pokemonBody').innerHTML = '';
}