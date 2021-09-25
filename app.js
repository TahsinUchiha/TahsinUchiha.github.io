/* Price Calculator */ 
const metalDictionary = {
    "IRON": 1,
    "COBALT": 40.38,
    "NICKEL":3.99,
    "RUTHENIUM": 435.43,
    "RHODIUM": 9435.41,
    "PALLADIUM": 2235.23,
    "OSMIUM": 3435.33,
    "IRIDIUM": 2354.13,
    "PLATINUM": 4345.56,

}

const priceOfMetal = (metal, weight) => {
    return Math.round((metalDictionary[metal] * weight)*1000)/1000;
}





function execute() {
let metal = document.querySelector('#metal-option').value
let weight = document.querySelector('#metal-weight').value
    document.getElementById("price-output").innerHTML = "£" + priceOfMetal(metal,weight);

}
