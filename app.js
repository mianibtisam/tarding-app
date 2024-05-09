let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    const incomeInput = document.getElementById("incomeInput");
    const income = parseFloat(incomeInput.value);
    if (!isNaN(income)) {
        totalIncome += income;
        incomeInput.value = "";
        updateSummary();
        console.log("Income added:", income);
    }
}

function addExpense() {
    const expenseInput = document.getElementById("expenseInput");
    const expense = parseFloat(expenseInput.value);
    if (!isNaN(expense)) {
        totalExpense += expense;
        expenseInput.value = "";
        updateSummary();
        console.log("Expense added:", expense);
    }
}

function saveValues() {
    console.log("Total Income:", totalIncome);
    console.log("Total Expense:", totalExpense);
    // Here you can add code to save the values, such as sending them to a server or storing them locally.
}

function updateSummary() {
    const incomeAmount = document.getElementById("incomeAmount");
    const expenseAmount = document.getElementById("expenseAmount");
    const remainingAmount = document.getElementById("remainingAmount");

    incomeAmount.textContent = totalIncome;
    expenseAmount.textContent = totalExpense;
    remainingAmount.textContent = totalIncome - totalExpense;
}

