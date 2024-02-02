const clearBtn = document.querySelector("#clear-button")
const addBtn = document.querySelector("#add-button")
const expenseReason = document.querySelector("#expense-reason")
const expenseAmount = document.querySelector("#expense-amount")
const expenseList = document.querySelector("#expense-list")
const totalExpenseElement = document.querySelector("#total-expense")
const controller = document.querySelector("ion-alert")
let totalExpense = 0

function clear() {
    console.log("///");
    expenseReason.value = "";
    expenseAmount.value = "";
}

addBtn.addEventListener("click", () => {
    const reason = expenseReason.value;
    const amount = expenseAmount.value

    if (reason.trim().length <= 0 || amount <= 0 || amount.trim <= 0) {
        controller.isOpen = true

        controller.buttons = ['Close'];
        return
    }
    let newItem = document.createElement("ion-item")
    newItem.innerText = `${reason} $ ${amount}`
    expenseList.appendChild(newItem)

    totalExpense += +amount

    totalExpenseElement.innerText = totalExpense
    clear()
})

controller.addEventListener('ionAlertDidDismiss', () => {
    console.log("ion alert did dismiss called");
    controller.isOpen = false;
  });

clearBtn.addEventListener("click", clear)

