'use strict';

const bikes = [
    {
        nome: 'bici1',
        peso: 10
    } , {
        nome: 'bici2',
        peso: 20
    } , {
        nome: 'bici3',
        peso: 5
    } , {
        nome: 'bici4',
        peso: 12
    } , {
        nome: 'bici5',
        peso: 8
    }
]


const lighterBike = searchLighterBike(bikes);
console.log('La bici più leggera è:');
printBike(lighterBike);

function searchLighterBike(list) {
    let bike = list[0];
    for (let i = 1; i < list.length; i++ ){
        if (list[i].peso < bike.peso) bike = list[i];
    }
    return bike;
}

function printBike(bike) {
    console.log(`Nome Bici: ${bike.nome}`);
    console.log(`Peso Bici: ${bike.peso}`);
    
}
