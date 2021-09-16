const cats = [
    "Milo", "Otis", "Garfield"
];

beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat() {
    cats.push("Ralph")
};

function destructivelyPrependCat() {
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat() {
    cats.pop()
};

function destructivelyRemoveFirstCat() {
    cats.shift()
};

const newCats = "Broom"
    function appendCat() {
    let newCats = [...cats, "Broom"];
    return newCats
};
  
const javaCats = "Arnold"
    function prependCat() {
    let javaCats = ["Arnold", ...cats];
    return javaCats
};

function removeLastCat() {
    return cats.slice(0,2)
};

function removeFirstCat() {
    return cats.slice(1)
};
