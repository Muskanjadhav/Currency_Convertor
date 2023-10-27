const currencies = {
    USD: 1,
    EUR: 0.85,
    JPY: 112.50,
    GBP: 0.75,
    AUD: 1.35,
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    const result = (amount * (currencies[toCurrency] / currencies[fromCurrency])).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
}

function populateCurrencies() {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    for (const currency in currencies) {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.text = currency;
        fromCurrency.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.text = currency;
        toCurrency.appendChild(option2);
    }
}

document.getElementById('convert').addEventListener('click', convertCurrency);
populateCurrencies();
