const balanceElement = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const transactionHistory = document.getElementById("transaction-history");

// Initial balance
let balance = 1000.0;

// Function to update the balance display
function updateBalanceDisplay() {
  balanceElement.textContent = balance.toFixed(2);
}

// Function to add a transaction to the history
function addTransaction(type, amount) {
  const transaction = document.createElement("li");
  transaction.textContent = `${type} $${amount.toFixed(2)}`;
  transaction.classList.add(type === "Deposited" ? "deposit-text" : "withdraw-text");
  transactionHistory.appendChild(transaction);
}

// Deposit event listener
depositButton.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount to deposit.");
    return;
  }
  balance += amount;
  updateBalanceDisplay();
  addTransaction("Deposited", amount);
  amountInput.value = ""; // Clear input
});

// Withdraw event listener
withdrawButton.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount to withdraw.");
    return;
  }
  if (amount > balance) {
    alert("Insufficient balance!");
    return;
  }
  balance -= amount;
  updateBalanceDisplay();
  addTransaction("Withdrew", amount);
  amountInput.value = ""; // Clear input
});

// Initialize the balance display
updateBalanceDisplay();
