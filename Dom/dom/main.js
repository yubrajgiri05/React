// console.log(document.getElementById('para').innerText="new data")
//selecting element by class name

// let ele = document.getElementsByClassName('el');
// console.log(ele);

// let ele = console.log(document.getElementsByClassName('el')[0]);




//selecting element by tag name

// let ele = document.getElementsByTagName('p')
// console.log(ele);


// document.getElementById('one').innerHTML="<h1>new data</h1>";
// document.getElementsByClassName('box')[0].innerHTML="hello";
// document.getElementsByClassName('box')[0].style.backgroundColor="green";





function logSomething(){

  let d = document.getElementById('one');
  d.style.backgroundColor = "green";
  d.style.height= "500px";
}

document.getElementById('btn')
.addEventListener('click',logSomething);