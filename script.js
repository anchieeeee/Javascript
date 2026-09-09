//sugeruje sie tylko liczbami a, b i c aby sie nie powtarzac 

const a = Number(prompt("Liczba a:"))
const b = Number(prompt("Liczba b:"))
const c = Number(prompt("Liczba c:"))


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
const price = Number(prompt("Podaj cenę benzyny za 1 litr:"));;
const distance = Number(prompt("Podaj długość trasy (km):"));;
const consumption = Number(prompt("Podaj spalanie (l/100 km):"));;
const usedOil = (dystans * spalanie) / 100;
letprice = usedOil * price;

document.write(`Zużyte paliwo: ${consumption} l <br>`);

document.write(`Koszt przejazdu: ${price.toFixed(2)} zł <br>`);

//9
const fuelPrice = Number(prompt("Podaj cenę benzyny za 1 litr:"));
const carDistance = Number(prompt("Podaj długość trasy (km):"));
const fuelConsumption = Number(prompt("Podaj spalanie (l/100 km):"));
const fuelUsed = (carDistance * fuelConsumption) / 100;
const travelCost = fuelUsed * fuelPrice;

document.write(`Koszt przejazdu: ${travelCost.toFixed(2)} zł <br>`);


//10
const interest = depositAmount * 0.08;
const tax = interest * 0.19;
const netProfit = interest - tax;
const finalAmount = depositAmount + netProfit;

document.write(`Zysk netto: ${netProfit.toFixed(2)} zł <br>`);
document.write(`Kwota po roku: ${finalAmount.toFixed(2)} zł <br>`);
