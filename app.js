
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-api-key': 'tm-1c038f3d-0749-4b47-8d9d-55a3e16866e3'
  }
};
fetch('https://api.tokenmetrics.com/v2/price?token_id=3393%2C3375%2C3306', options)
  .then(res => res.json())
  .then(res => {
    if (res.success) {
      res.data.forEach(token => {
        if (token.TOKEN_NAME === "Bitcoin") {
          document.querySelector("#btc").textContent = "$" + token.CURRENT_PRICE;
        } else if (token.TOKEN_NAME === "Ethereum") {
          document.querySelector("#eth").textContent = "$" + token.CURRENT_PRICE;
        } else if (token.TOKEN_NAME === "Dogecoin") {
          document.querySelector("#dog").textContent = "$" + token.CURRENT_PRICE;
        }
      });
    }
  })
  .catch(err => console.error(err));

