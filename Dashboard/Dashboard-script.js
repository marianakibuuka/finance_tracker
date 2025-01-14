JSC.Chart('chart', {
    type: 'vertical column',
    series: [
        {
            name: 'Income',
            points: [
                { x: 'January', y: 60000 },
                { x: 'February', y: 65000 },
                { x: 'March', y: 63000 },
                { x: 'April', y: 67500 },
                { x: 'May', y: 66000 }
            ]
        }, {
            name: 'Expense',
            points: [
                { x: 'January', y: 27000 },
                { x: 'February', y: 26500 },
                { x: 'March', y: 28500 },
                { x: 'April', y: 26000 },
                { x: 'May', y: 30000 }
            ]
        }
    ]
    
});
const balance = document.getElementById('net-balance');
const netIncome = document.getElementById('net-income');
const netExpense = document.getElementById('net-expense');
const income = 321500;
const expense = 138000;
balance.innerText = (income - expense);
netIncome.innerText = income;
netExpense.innerText = expense;

const minSalary = document.getElementById('minS');
const maxSalary = document.getElementById('maxS');

minSalary.innerText = 60000;
maxSalary.innerText = 67500;

const minExpense = document.getElementById('minE');
const maxExpense = document.getElementById('maxE');

minExpense.innerText = 26000;
maxExpense.innerText = 30000;

var userName = document.getElementById('username');
userName.innerHTML = localStorage.getItem('firstname');

function sidebar_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.position = "absolute";
    document.getElementById("mySidebar").style.zIndex = "+1";
    // document.getElementById("mySidebar").style.transition = "width 2s linear 5s";
  }
  
function sidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
    // document.getElementById("mySidebar").style.transition = "width 2s linear 5s";
}


var transactions = JSON.parse(localStorage.getItem('transactions')) || [];
var transactionList = document.getElementById('transaction-list');
balance.innerHTML = localStorage.getItem('balance')
transactionList.innerHTML = '';
for(var i = 0; i < transactions.length; i++){
    const listItem = document.createElement('li');
    listItem.style.wordSpacing = "40px"
    listItem.textContent = `${transactions[i].description}:         ${transactions[i].date}         ${transactions[i].amount.toFixed(2)}`;
    listItem.classList.add(transactions[i].type);
    if(transactions[i].type === "income"){
        listItem.style.backgroundColor = "green";
        listItem.style.border =  "1px solid green";
        listItem.style.borderRadius = "15px";
        listItem.style.width = "350px";
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-around";
        listItem.style.margin = "20px auto 20px auto";
        listItem.style.paddingTop = "8px";
        listItem.style.paddingBottom = "8px";
        listItem.style.color = "white";
        listItem.style.fontWeight = "bold";
    }
    else{
        listItem.style.backgroundColor = "red";
        listItem.style.border =  "1px solid red";
        listItem.style.borderRadius = "15px";
        listItem.style.width = "350px";
        listItem.style.display = "flex";
        listItem.style.justifyContent = "space-around";
        listItem.style.margin = "20px auto 20px auto";
        listItem.style.paddingTop = "8px";
        listItem.style.paddingBottom = "8px";
        listItem.style.color = "white";
        listItem.style.fontWeight = "bold";
    }
    transactionList.appendChild(listItem);
}



























































































































































// JSC.fetch('https://data.cdc.gov/resource/w9j2-ggv5.csv')
//     .then(function (response) {
//         return response.text();
//     })
//     .then(function (text) {
//         let series = csvToSeries(text);
//         renderChart(series);
//     })
//     .catch(function (error) {
//         //Something went wrong
//         console.log(error);
//     });

// function csvToSeries(text) {
//     const lifeExp = 'average_life_expectancy';
//     let dataAsJson = JSC.csv2Json(text);
// 	let male = [], female = [];
// 	dataAsJson.forEach(function (row) {
// 		 //add either to male, female, or discard.
// 		if (row.race === 'All Races') {
// 			if (row.sex === 'Male') {
// 				male.push({x: row.year, y: row[lifeExp]});
// 			} else if (row.sex === 'Female') {
// 				female.push({x: row.year, y: row[lifeExp]});
// 			}
// 		}
// 	});
//     console.log([male, female]);
//     return [
//         {name: 'Male', points: male},
//         {name: 'Female', points: female}
//      ];
// }

// function renderChart(series){
//     JSC.Chart('chartDiv', {
// 		title_label_text: 'Life Expectancy in the United States',
// 		annotations: [{
// 			label_text: 'Source: National Center for Health Statistics',
// 			position: 'bottom left'
// 		}],
//         legend_visible: false,
// 		defaultSeries_lastPoint_label_text: '<b>%seriesName</b>',
// 		defaultPoint_tooltip: '%seriesName <b>%yValue</b> years',
// 		xAxis_crosshair_enabled: true,
// 		series: series
// 	});
//  }