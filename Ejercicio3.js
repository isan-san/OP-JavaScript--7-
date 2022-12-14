
const hoy = new Date();

console.log(hoy);

const birthdate = new Date(1999,3,20);

console.log(birthdate);

const isGreater = hoy.getTime() > birthdate.getTime();

console.log(isGreater);

const dayOfBirth = birthdate.getDate();
const monthOfBirth = birthdate.getMonth();
const yearOfBirth = birthdate.getFullYear();

console.log("My birthdate is: "+dayOfBirth+" / " + monthOfBirth+" / " + yearOfBirth);