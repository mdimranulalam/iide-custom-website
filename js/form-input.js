var click = document.getElementById('submit');
click.addEventListener('click', addData);

var arr = new Array();

function addData(){
    DeleteData();
    getData();
    var cv = document.getElementById('weight').value;
    cv = parseInt(100) + parseInt(cv);
    document.getElementById('weight').value = cv;
    arr.push({
        name:document.getElementById('name').value,
        animal_class:document.getElementById('animal_class').value,
        sub_class:document.getElementById('sub_class').value,
        infra_class:document.getElementById('infra_class').value,
        weight:document.getElementById('weight').value,
        living_place:document.getElementById('living_place').value,
        living_period:document.getElementById('living_period').value,
        living_in_groups:document.getElementById('living_in_groups').value
    });

        localStorage.setItem("localData", JSON.stringify(arr));
}

function getData(){
    var str = localStorage.getItem("localData");
    if (str!= null)
        arr = JSON.parse(str);
}

function DeleteData(){
localStorage.clear();
}

$(document).ready(function(){
    var arr1 = new Array();
    arr1 = JSON.parse(localStorage.getItem("localData"));

    var tbl = document.getElementById('animal');

    for(i = 0; i < arr1.length; i++){
        var r = tbl.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        var cell4 = r.insertCell();
        var cell5 = r.insertCell();
        var cell6 = r.insertCell();
        var cell7 = r.insertCell();
        var cell8 = r.insertCell();

        cell1.innerHTML = arr1[i].name;
        cell2.innerHTML = arr1[i].animal_class;
        cell3.innerHTML = arr1[i].sub_class;
        cell4.innerHTML = arr1[i].infra_class;
        cell5.innerHTML = arr1[i].weight;
        cell6.innerHTML = arr1[i].living_period;
        cell7.innerHTML = arr1[i].living_place;
        cell8.innerHTML = arr1[i].living_in_groups;
    }