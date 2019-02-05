// Practice: Car Sales
// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

// 1. Display the first and last name of the sales agent.
// 2. Display all keys and values for the car sold.
// 3. Display the gross profit made on the sale.

// You will need to start off by iterating the array of sales with a forEach() method. Then iterate the entries of the vehicle property of each sale.

const salesContainer = document.querySelector("#sales");

salesByWeek.forEach(sale => {
    let salesAgent = `<h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>`;

    let vehicle = ``;
    for (const entry of Object.entries(sale.vehicle)) {
        vehicle += `<div>${entry[0]}: ${entry[1]}</div>`
    }

    let profit = `<h3>Profit: $${sale.gross_profit}</h3><hr>`;
    let newHTML = salesAgent + vehicle + profit;
    salesContainer.innerHTML += newHTML;

})




// Challenge: Sales Search
// Reminder: Challenges are completely optional. You should only attempt this challenge if you have understood everything covered so far. Otherwise, skip it.

// Randall loves his weekly sales report. A year goes by and now he has a year's worth of sales reports, and he walks into your office...

// Randall: "I'm trying to look at all of my sales reports and find out how many sales Kory had for the year. What I need to be able to do is search all of the sales for the entire year and find sales only by Kory, or any other agent. In fact, I should be able to search by any of their properties: first name, last name, email or mobile number."

// You can use your existing data set from above because the amount of data in your array has no impact on implemeting a solution for searching all of the data for a string.

// Your first task is to use object methods to match the value of all properties of the sales_agent object in each sale against the input from Randall. Put an input field in your DOM, attach a keypress event listener to it, and search when Randall presses enter. You are given some starter code below.

const searchInput = document.querySelector("#searchInput");
const searchResults = document.querySelector("#searchResults");

searchInput.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
    const searchTerm = event.target.value;

    salesByWeek.forEach(sale => {
        let agent = sale.sales_agent;

        for (const value of Object.values(agent)) {
            if (value.includes(searchTerm)) {
                searchResults.innerHTML += `
                    <h2>${agent.first_name} ${agent.last_name}</h2>
                    <div>email: ${agent.email}</div>
                    <div>sale: $${sale.gross_profit}</div
                `
            }
        }
    });
  }
})