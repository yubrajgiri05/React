let products = [
    {
        name: "i-phone 23",
        price: 30000
    },
    {
        name: "samsung 12 pro",
        price: 30000
    },
    {
        name: "Redmi 12 ultra",
        price: 30000
    }
]





for(let i = 0;i<products.length;i++)
{
    let a = document.createElement("div");
a.classList.add("product");

let pname = document.createElement("h2");
// pname.innerText = "tooth paste";
// pname.innerText = products[0].name;
pname.innerText = products[i].name;

let pprice = document.createElement("h3");
// pprice.innerText = "1000";
// pprice.innerText = products[0].price;
pname.innerText = products[i].name;

a.appendChild(pname)
a.appendChild(pprice)

document.getElementsByClassName("parent")[0].appendChild(a);
}