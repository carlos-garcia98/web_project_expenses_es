// Valores centrales
let budgetValue = 0;
let totalExpensesValue = 0;
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];
let balanceColor = "green";

for (let expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

const calculateAverageExpense = () => {
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
};

const calculateBalance = () => {
  return budgetValue - totalExpensesValue;
};

const updateBalanceColor = () => {
  let twentyFivePercent = (budgetValue * 25) / 100;

  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < twentyFivePercent) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
};

const calculateCategoryExpenses = (category) => {
  let totalCategoryExpenses = 0;

  for (let expense of expenseEntries) {
    if (expense[0] === category) {
      totalCategoryExpenses += expense[1];
    }
  }

  return totalCategoryExpenses;
};

const calculateLargestCategory = () => {
  let categories = [];
  let categoriesData = [];

  for (let expense of expenseEntries) {
    if (!categories.includes(expense[0])) {
      categories.push(expense[0]);
    }
  }

  for (let category of categories) {
    let totalCategoryExpense = calculateCategoryExpenses(category);
    categoriesData.push([category, totalCategoryExpense]);
  }

  let largestCategoryExpense = categoriesData[0][1];
  let largestCategory = categoriesData[0][0];

  for (let category of categoriesData) {
    if (category[1] > largestCategoryExpense) {
      largestCategory = category[0];
      largestCategoryExpense = category[1];
    }
  }

  return largestCategory;
};

const addExpenseEntry = (expenseArray) => {
  expenseEntries.push(expenseArray);
  totalExpensesValue += expenseArray[1];
};
