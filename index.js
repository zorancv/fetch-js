const { ethers } = require('ethers');
var express = require("express");
var app = express();


app.get("/", (req, res, next) => {
    res.json({ message: "Hello world!" });
});

// Set your Infura endpoint URL in the environmen variable $RPC_URL
const infuraUrl = process.env.RPC_URL

app.get("/balance/:addr", (req, res, next) => {
    // Get the Ethereum address to check the balance of
    let address = req.params.addr;

    // Create an Ethereum provider
    const provider = new ethers.JsonRpcProvider(infuraUrl);

    // Get the ETH balance of the address
    const ethBalancePromise = provider.getBalance(address);

    // Wait for the async process to return the result
    Promise.all([ethBalancePromise])
        .then(([ethBalance]) => {
            let e = ethers.formatEther(ethBalance);
            console.log(`ETH balance of ${address}: ${e}`);
            res.json({ address: address, balance: e });
        })
        .catch((error) => {
            next(error)
        });
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
