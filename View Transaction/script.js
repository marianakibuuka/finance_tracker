// Get elements from the DOM
const transactionForm = document.getElementById('transaction-form');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeInput = document.getElementById('type');
const transactionList = document.getElementById('transaction-list');
const balanceDisplay = document.getElementById('balance');
const NooftransactionDisplay = document.getElementById('transac');
const dateinput = document.getElementById('date');

// Initialize transaction data
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let balance = parseFloat(localStorage.getItem('balance')) || 0;
let transac= parseFloat(localStorage.getItem('transac')) || 0;



// Function to add a transaction
function addTransaction(e) {
  e.preventDefault();

  // Get user input values
  const description = descriptionInput.value;
  const date = dateinput.value
  const amount = +amountInput.value;
  const type = typeInput.value;

  // Create transaction object
  const transaction = { description, date, amount, type };

  // Add transaction to the data array
  transactions.push(transaction);

  // Update the balance
  if (type === 'income') {
    balance += amount;
    transac +=1;
    transac +=1;
  } else if (type === 'expense') {
    balance -= amount;
    transac +=1;

    transac +=1;

  }

  // Clear form inputs
  descriptionInput.value = '';
  dateinput.value = '';
  dateinput.value = '';
  amountInput.value = '';
  typeInput.selectedIndex = 0;
  localStorage.setItem('transactions', JSON.stringify(transactions));
  localStorage.setItem('balance', balance);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  localStorage.setItem('balance', balance);
  // Update the UI
  updateUI();
}
const EditFunc  = (index) =>{
    let update = window.prompt("Update the discription")
    let transaction = transactions[index];
    const updatedval =  transaction.description=update 
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('balance', balance); 
    // const updatedval =  transaction.description=update 
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('balance', balance); 
    updateUI() 
}

// Function to delete a transaction
function deleteTransaction(index) {
  // Get the transaction to be deleted
  const transaction = transactions[index];

  // Update the balance
  if (transaction.type === 'income') {
    balance -= transaction.amount;
    transac -=1;

    transac -=1;

  } else if (transaction.type === 'expense') {
    balance += transaction.amount;
    transac -=1;

    transac -=1;

  }

  // Remove the transaction from the array
  transactions.splice(index, 1);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  localStorage.setItem('balance', balance);
  localStorage.setItem('transac', transac);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  localStorage.setItem('balance', balance);
  localStorage.setItem('transac', transac);
  // Update the UI
  updateUI(); 
  updateUI(); 
}

// Function to update the UI
function updateUI() {
  // Clear the transaction list
  transactionList.innerHTML = '';

  // Update the balance display
  balanceDisplay.textContent = balance.toFixed(2);
  NooftransactionDisplay.textContent = transac.toFixed(2);
  NooftransactionDisplay.textContent = transac.toFixed(2);

  // Render each transaction in the list
  transactions.forEach((transaction, index) => {
    const listItem = document.createElement('li');
    listItem.style.wordSpacing = "40px"
    listItem.textContent = `${transaction.description}:         ${transaction.date}         ${transaction.amount.toFixed(2)}`;
    listItem.classList.add(transaction.type);
    const editButton = document.createElement("button");
    editButton.innerText = "Edit"
    editButton.addEventListener("click",()=>EditFunc(index) )
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTransaction(index));

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    transactionList.appendChild(listItem );
    console.log(transactions);
    console.log(transactions);
  });
}


// Add event listener to the transaction form
transactionForm.addEventListener('submit', addTransaction);

updateUI();

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

var userName = document.getElementById('username');
userName.innerHTML = localStorage.getItem('firstname');