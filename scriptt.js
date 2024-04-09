document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");
    const totalExpensesDisplay = document.getElementById("total-expenses");
  
    let totalAmount = 0;
    let totalExpenses = 0;
    let expensesData = [];
  
    // Load data from local storage
    loadFromLocalStorage();
  
    // Display existing expenses
    expensesData.forEach((expense) => {
      addExpenseToList(expense.name, expense.amount);
    });
  
    updateTotalAmountDisplay();
    updateTotalExpensesDisplay();
  
    expenseForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // ... (existing form submission code) ...
  
      // Save data to local storage
      saveToLocalStorage();
  
      // Update total expenses
      totalExpenses++;
      updateTotalExpensesDisplay();
    });
  
    window.deleteExpense = function (element) {
      // ... (existing deleteExpense function code) ...
  
      // Save data to local storage
      saveToLocalStorage();
  
      // Update total expenses
      totalExpenses--;
      updateTotalExpensesDisplay();
    };
  
    function addExpenseToList(name, amount) {
      // ... (existing addExpenseToList function code) ...
    }
  
    function updateTotalAmountDisplay() {
      totalAmountDisplay.innerText = totalAmount.toFixed(2);
    }
  
    function updateTotalExpensesDisplay() {
      totalExpensesDisplay.innerText = totalExpenses;
    }
  
    function saveToLocalStorage() {
      localStorage.setItem("expensesData", JSON.stringify(expensesData));
    }
  
    function loadFromLocalStorage() {
      const savedData = localStorage.getItem("expensesData");
      expensesData = savedData ? JSON.parse(savedData) : [];
      totalAmount = expensesData.reduce((total, expense) => total + expense.amount, 0);
    }
  });
  
// ... Pie chart
  document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("expensePieChart").getContext("2d");

    // Sample data, replace with your actual data
    const expenseData = {
        labels: ["Shopping", "Bills", "Network"],
        datasets: [{
            data: [1000, 1200,1500],
            backgroundColor: ["#4caf50", "#2196F3", "#FFAA1D"],
        }],
    };

    // Create a pie chart
    const expensePieChart = new Chart(ctx, {
        type: "pie",
        data: expenseData,
    });

    // Update chart function (call this whenever your data changes)
    function updateExpenseChart(newData) {
        expensePieChart.data = newData;
        expensePieChart.update();
    }

    // Example of how to update the chart with new data (replace with your logic)
    const updatedData = {
        labels: ["Shopping", "Bills", "Network"],
        datasets: [{
            data: [1000, 1200, 1500],
            backgroundColor: ["#4caf50", "#2196F3", "#FFAA1D"],
        }],
    };

    // Call the update function with the new data
    updateExpenseChart(updatedData);

    // ... (other functions and event listeners as needed) ...
});
