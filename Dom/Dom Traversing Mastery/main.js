// clildren
// clildnode
// parentNode


// console.log(document.getElementById('list-items').children[1]);

// console.log(document.getElementById('list-items').children[1]).parentNode;

let a = document.createElement("li");
a.innerText="captain";

document.getElementById('list-items').appendChild(a);

//timer function
function someTask(){
    console.log("hellow world")

}

setTimeout(someTask,5000);