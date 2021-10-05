let selectedBrand = "none";

function selectManufacturer(sender) {

    hideAllSelects();
    document.getElementById('model-label').style.display = "block";
    switch(sender) {
        case "bmw": 
        document.getElementById('bmwmodels').style.display = "block";
        selectedBrand = "bmw";
        break;
        case "ford": 
        document.getElementById('fordmodels').style.display = "block";
        selectedBrand = "ford";
        break;
        case "infiniti": 
        document.getElementById('infinitimodels').style.display = "block";
        selectedBrand = "infiniti";
        break;
        case "peugeot": 
            document.getElementById('peugeotmodels').style.display = "block";
            selectedBrand = "peugeot";
            break;
        case "none":
            selectedBrand = "none";
            break;  
    }
}

let hideAllSelects = () => {
    document.getElementById('bmwmodels').style.display = "none";
    document.getElementById('fordmodels').style.display = "none";
    document.getElementById('infinitimodels').style.display = "none";
    document.getElementById('peugeotmodels').style.display = "none";
    document.getElementById('model-label').style.display = "none";
}

let calculateCost = () => {
    let resultValue = 0;
    let innerResult = document.getElementById('calc_result');

    let bmwModels = bmwmodels.querySelectorAll('select > option:checked')[0].value;
    let fordModels = fordmodels.querySelectorAll('select > option:checked')[0].value;
    let infinitiModels = infinitimodels.querySelectorAll('select > option:checked')[0].value;
    let peugeotModels = peugeotmodels.querySelectorAll('select > option:checked')[0].value;
    
    if (selectedBrand === "none") {
        innerResult.value = '';
        return;
    }
    if (selectedBrand === "bmw" && bmwModels === "none") {
        innerResult.value = '';
        return;
    }
    if (selectedBrand === "ford" && fordModels === "none") {
        innerResult.value = '';
        return;
    }
    if (selectedBrand === "infiniti" && infinitiModels === "none") {
        innerResult.value = '';
        return;
    }
    if (selectedBrand === "peugeot" && peugeotModels === "none") {
        innerResult.value = '';
        return;
    }

    switch(selectedBrand) {
        case "bmw":
            resultValue += +bmwModels;
            break;
        case "ford":
            resultValue += +fordModels;
            break;
        case "infiniti":
            resultValue += +infinitiModels;
            break;
        case "peugeot":
            resultValue += +peugeotModels;
            break;
        case "none":
            break;
    }

    let additions = document.querySelectorAll('.additions input');
    for (let addition of additions) {
        if (addition.checked){
            resultValue += +addition.value;
        }
    }

    let transmissions = document.querySelectorAll('.transmissions input');
    for (let transmission of transmissions) {
        if (transmission.checked){
            resultValue += +transmission.value;
        }
    }

    innerResult.value = resultValue;
}