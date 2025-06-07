function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  const rates = {
    INR: { USD: 0.012, EUR: 0.011, INR: 1 },
    USD: { INR: 83.0, EUR: 0.92, USD: 1 },
    EUR: { INR: 90.0, USD: 1.08, EUR: 1 }
  };

  if (!amount || amount <= 0) {
    document.getElementById("result").innerText = "Please enter a valid amount.";
    return;
  }

  const rate = rates[from][to];
  const converted = amount * rate;

  document.getElementById("result").innerText = 
    `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}
