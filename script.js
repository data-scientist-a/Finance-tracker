// Select elements
const balanceEl = document.getElementById("balance");

// Expense elements
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");
const addBtn = document.getElementById("add-btn");
const transactionList = document.getElementById("transaction-list");

// Income elements
const incomeDescriptionEl = document.getElementById("income-description");
const incomeAmountEl = document.getElementById("income-amount");
const addIncomeBtn = document.getElementById("add-income-btn");
const moneyList = document.getElementById("money-list");

// Currency
const currency = "MDL";

// Track balance and transactions
let balance = 0;
let transactions = [];
let incomes = [];

// Update balance display
function updateBalance() {
    balanceEl.textContent = `${balance.toFixed(2)} ${currency}`;
}

// Add expense
function addTransaction() {
    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);

    if (description === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const transaction = {
        description: description,
        amount: amount,
        date: new Date().toLocaleString()
    };

    transactions.push(transaction);
    balance -= amount; // subtract expense
    updateBalance();

    const li = document.createElement("li");
    li.textContent = `${transaction.date} - ${transaction.description}: -${transaction.amount.toFixed(2)} ${currency}`;
    transactionList.appendChild(li);

    descriptionEl.value = "";
    amountEl.value = "";
}

// Add income
function addIncome() {
    const description = incomeDescriptionEl.value.trim();
    const amount = parseFloat(incomeAmountEl.value);

    if (description === "" || isNaN(amount)) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const income = {
        description: description,
        amount: amount,
        date: new Date().toLocaleString()
    };

    incomes.push(income);
    balance += amount; // add income
    updateBalance();

    const li = document.createElement("li");
    li.textContent = `${income.date} - ${income.description}: +${income.amount.toFixed(2)} ${currency}`;
    moneyList.appendChild(li);

    incomeDescriptionEl.value = "";
    incomeAmountEl.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTransaction);
addIncomeBtn.addEventListener("click", addIncome);

// Initialize balance
updateBalance();

