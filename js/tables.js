const cntData = document.getElementById('dataCnt');

function tablePokemon(data) {
    let textAdd = `
        <tr>
            <th class='col1'>Ability</th>
            <th>url</th>
        </tr>
    `;

    data.abilities.forEach(element => {
        textAdd += `
            <tr>
                <td>${element.ability.name}</td>
                <td>${element.ability.url}</td>
            </tr>
        `;
    });

    cntData.innerHTML = textAdd;
}
