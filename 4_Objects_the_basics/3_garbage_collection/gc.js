// simple example
let user = {
    name: "John"
};

user = null;


// two references
let user = {
    name: "John"
};

let admin = user;

user = null;


// interlinked objects
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband;


// unreachable island
family = null;