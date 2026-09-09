//sugeruje sie tylko liczbami a, b i c aby sie nie powtarzac 

let a = Number(prompt("Liczba a:"))
let b = Number(prompt("Liczba b:"))
let c = Number(prompt("Liczba c:"))


//1
document.write(`suma:  ${a + b + c} <br>`)

//2
document.write(`srednia:  ${(a + b + c) / 3} <br>`)

//3
document.write(`suma:  ${a + b} <br>`)
document.write(`roznica:  ${a - b} <br>`)
document.write(`iloczyn:  ${a * b} <br>`)

//4
document.write(`pierwiastek:  ${Math.sqrt(c)} <br>`)

//5
document.write(`pole kwadratu:  ${Math.pow(c, 2)} <br>`)

//6
document.write(`pole prostopadloscianu: ${a * b * c} <br>`)

//7
document.write(`pole kola:  ${Math.PI * Math.pow(c, 2)} <br>`)
document.write(`obwod kola:  ${2 * Math.PI * c} <br>`)

//8
let price = Number(prompt("Podaj cenę benzyny za 1 litr:"));;
let distance = Number(prompt("Podaj długość trasy (km):"));;
let consumption = Number(prompt("Podaj spalanie (l/100 km):"));;
let usedOil = (dystans * spalanie) / 100;
letprice = usedOil * price;

console.log(`Zużyte paliwo: ${consumption} l`);

console.log(`Koszt przejazdu: ${price.toFixed(2)} zł`);

//9
let fuelPrice = Number(prompt("Podaj cenę benzyny za 1 litr:"));
let carDistance = Number(prompt("Podaj długość trasy (km):"));
let fuelConsumption = Number(prompt("Podaj spalanie (l/100 km):"));
let fuelUsed = (carDistance * fuelConsumption) / 100;
let travelCost = fuelUsed * fuelPrice;

console.log(`Koszt przejazdu: ${travelCost.toFixed(2)} zł`);


//10
let interest = depositAmount * 0.08;
let tax = interest * 0.19;
let netProfit = interest - tax;
let finalAmount = depositAmount + netProfit;

console.log(`Zysk netto: ${netProfit.toFixed(2)} zł`);
console.log(`Kwota po roku: ${finalAmount.toFixed(2)} zł`);