async function showData() {
    let api = "http://127.0.0.1:8000/calculator/";
    let res = await fetch(api);

    if (res.status !== 200) {
        alert("Something went wrong 1");
        return;
    }

    const method = document.getElementById("operator").value;
    const number = document.getElementById("number").value;
    if (number != "") {
        api += `${method}/${number}`;
    }
    res = await fetch(api);
    console.log(api);

    if (res.status !== 200) {
        alert("Something went wrong 2");
        return;
    }

    const jsonData = await res.json();
    cal_display = document.getElementById("calculator");
    cal_display.innerHTML = jsonData.num;

    console.log(jsonData);
}
async function clearData() {
    let api = "http://127.0.0.1:8000/calculator/clear";
    let res = await fetch(api);

    if (res.status !== 200) {
        alert("Something went wrong 1");
        return;
    }
    const jsonData = await res.json();
    cal_display = document.getElementById("calculator");
    cal_display.innerHTML = jsonData.num;

    console.log(jsonData);
}

async function randomNum() {
    let api = "http://127.0.0.1:8000/calculator/random";
    let res = await fetch(api);

    if (res.status !== 200) {
        alert("Something went wrong 1");
        return;
    }
    const jsonData = await res.json();
    cal_display = document.getElementById("calculator");
    cal_display.innerHTML = jsonData.num;
    console.log(jsonData);
}

showData();
