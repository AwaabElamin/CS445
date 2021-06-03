const url = "https://randomuser.me/api/?results=10";
window.onload = function () {
    document.getElementById("click").onclick = doit;
}
function doit() {
    // const res = fetch(url);
    // const obj = JSON.parse(res);
    const { fromEvent } = rxjs;

    const node = document.getElementById("click");

    //create observable that emits click events
    const input = fromEvent(node, 'click');

    input.subscribe({
        next: bbc(),
        error: err => console.log(`Oops... ${err}`),
        complete: () => console.log(`Complete!`),
    });
}

async function bbc() {
    let row = '';
    const res = await fetch(url);
    const obj = await res.json();
    for (let index = 0; index < obj.results.length; index++) {
        let firstName = obj.results[index].name.first;
        let lastName = obj.results[index].name.last;
        let name = `<td>${firstName} ${lastName}</td>`;

        let street = obj.results[index].location.street.number + ' '
            + obj.results[index].location.street.name;
        let addressLine2 = obj.results[index].location.city + ','
            + obj.results[index].location.state
            + ',' + obj.results[index].location.country + ',' 
            + obj.results[index].location.postcode;
        let address = `<td>${street}<br/>${addressLine2}</td>`;
        row += `<tr>${name} ${address}</tr>`;
    }


    document.getElementById("users").innerHTML = row;

    // console.log(`You just typed${firstName}`);
}
