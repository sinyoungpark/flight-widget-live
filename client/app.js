const url = "http://localhost:8000/flights";
const tableBody = document.getElementById("table-body");

const getFlight = () => {
  fetch(url)
  .then(response => response.json())
  .then(flights => {
    populateTable(flights);
  })
  .catch(err => console.log(err));
}
getFlight();

const populateTable = (flights) => {
  flights.forEach((flight) => {
    const tableRow = document.createElement("tr");
    const tableIcon = document.createElement("td");
    tableIcon.textContent = "✈️";
    tableRow.append(tableIcon);

    const flightDetails = {
      time : flight.departing.slice(0,5),
      destination :flight.destination.toUpperCase(),
      flight : flight.flightNumber.shift(),
      gate: flight.gate,
      remarks : flight.status.toUpperCase()
    };

    for(const detail in flightDetails){
      const tableCell = document.createElement("td");
      const word = Array.from(flightDetails[detail]);
      word.forEach((letter, index) => {
        setTimeout(() => {
          const letterElement = document.createElement("div");
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      });
      tableRow.append(tableCell);
    }

    tableBody.append(tableRow);
  });
}