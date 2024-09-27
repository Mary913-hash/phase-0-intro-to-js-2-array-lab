let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) { 
     cats.push(Ralph);
}

function destructivelyPrependCat(Bob) { 
   cats.unshift(Bob);
}

function destructivelyRemoveLastCat() { 
    cats.pop();
}

function destructivelyRemoveFirstCat(){ 
    cats.shift();
}
function appendCat(Broom) { 
    let newCats = [...cats, Broom]
    return newCats
}
function prependCat(Arnold) { 
    let newCats = [Arnold, ...cats]
    return newCats
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}
function removeFirstCat() { 
    return cats.slice(1);
}


