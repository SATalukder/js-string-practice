function isBestFriend(friend1, friend2) {

    console.log(friend1);
    console.log(friend2);
    if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
        return true;
    }
    else {
        return false;
    }
}

let friend1 = {
    name: "abul",
    friend: "kabul"
}
let friend2 = {
    name: "kabul",
    friend: "sabul"
}

const result = isBestFriend(friend1, friend2)
console.log(result);