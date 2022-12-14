const myself = {
    nombre : "isan",
    apellido: "franco",
    edad: "23",
    altura: "1.86m",
    eresDesarrollador: "true",
};

console.log(myself);

const myAge = myself.edad;

console.log(myAge);

const myFriends = [
    myself,
    julian = {
        nombre : "julian",
        apellido: "cataño",
        edad: "22",
        altura: "1.71m",
        eresDesarrollador: "false",
    },
    sara = {
        nombre : "sara",
        apellido: "cano",
        edad: "25",
        altura: "1.60m",
        eresDesarrollador: "false",
    }
];

console.log("List of my friends:");
console.log(myFriends);

const oMyFriends = [...myFriends];

console.log("List of my friends ordenated by age:");
oMyFriends.sort((a,b)=>a.edad-b.edad);
console.log(oMyFriends);