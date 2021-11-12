// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

const getHeroeById = (id) => {
    return heroes.find( heroe => heroe.id === id);
}

const getHeroeByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner);
}

// Testing porpuses :D
// console.log( getHeroeById(3));
// console.log( getHeroeByOwner('DC'));
// console.log( owners );

export {
    getHeroeById,
    getHeroeByOwner
}