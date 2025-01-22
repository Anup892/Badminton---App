function addRow() {
    // Get input values
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;

    // Get the table body
    var tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

    // Create a new row
    var newRow = tableBody.insertRow();

    // Insert new cells into the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    // Add data to the cells
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = city;
  }