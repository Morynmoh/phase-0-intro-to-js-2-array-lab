// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
  return cats.push(name);
}
//destructivelyAppendCat("Steve");

//var cats = ["Milo", "Otis", "Garfield"];
function destructivelyPrependCat (name) {
  return cats.unshift(name);
}
//destructivelyPrependCat("Steve");

//var cats = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveLastCat (name) {
  return cats.pop();
}
//destructivelyRemoveLastCat();

//var cats = ["Milo", "Otis", "Garfield"];
function destructivelyRemoveFirstCat (name) {
  return cats.shift();
}
//destructivelyRemoveFirstCat();

//let cats = ["Milo", "Otis", "Garfield"];
var newcats;
function appendCat (name) {
  return newcats = [...cats, name];
}
//appendCat("Steve");

//let cats = ["Milo", "Otis", "Garfield"];
//let newcats;
function prependCat (name) {
  return newcats = [name, ...cats];
}
//prependCat("Steve");

//let cats = ["Milo", "Otis", "Garfield"];
function removeLastCat () {
  const newCats = cats.slice(0, -1);
  return newCats; 
}
//removeLastCat("Steve");

//let cats = ["Milo", "Otis", "Garfield"];
function removeFirstCat () {
  const newCats = cats.slice(1); 
  return newCats; 
}
//removeFirstCat("Steve");

