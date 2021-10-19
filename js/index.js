async function dataJson(url) {
    const request = await fetch(url)
    const data = await request.json();
    tablePokemon(data);
}

dataJson('https://pokeapi.co/api/v2/pokemon/ditto');

const opMat = new operacionesMatematicas(1, 2);

opMat._numero1 = 5;
opMat.setNumero2(0, 'division')
console.log(opMat.division());

opMat._numero1 = 5;
opMat.setNumero2(0, 'suma')
console.log(opMat.sumar());