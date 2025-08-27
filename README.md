# ETH Balance

Simple project to request ETH balance from JavaScript.

## Getting Started

### Dependencies

* NodeJS
* ethers and express libraries
* ETH provider

### Installing

* Clone the repo.
* Run ```npm install express ethers --save```.
* Register with ETH provider like Infura.
* Set environment variable ```$RPC_URL``` to the provider URL. For infura it would be ```https://mainnet.infura.io/v3/<YOUR_TOKEN>```.

### Executing the server

```
node index.js
```

### Requesting the balance

Point the browser to ```http://localhost:3000/balance/<INTERESTED_ADDRESS>```.
