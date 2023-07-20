

# Smart Account using Biconomy SDK Social Login Module + Gasless Transactions 

________

A starter kit that allows you to get smart account using biconomy SDK through social login and do gasless transactions for your users using Biconomy Paymaster! This Kit comes with everything you need for social login and for making gasless transactions to a contract with the Biconomy SDK. 


## Installation

Navigate to this directory in your terminal and then 

```bash
  cd smartContract
```

You can use npm to install or maybe yarn. 

```bash
  npm install
```

Once dependencies are installed run the following command: 

```bash
  cp .env.example .env;
```


```bash
  npx hardhat run scripts/deploy.ts --network mumbai
```

Once deployed copy the contract address on the terminal and run the command below: 

```bash
  npx hardhat verify --network mumbai <your-contract-address>
```



## Setting up Paymaster and Dashboard for your dApp :

1. Head over to the [Biconomy SDK Dashboard](https://dashboard.biconomy.io/)
2. Setup your bundlerUrl: 'https://bundler.biconomy.io/api/v2/80001/abc'
3. Get your Paymaster URL from Biconomy Dashboard . Follow the instructions on the docs [here](https://docs.biconomy.io/docs/dashboard/paymaster). It should look something like this paymasterUrl:'https://paymaster.biconomy.io/api/v1/{CHAIN_ID}/{ YOUR_API_KEY }'
   
4. Check out [Paymaster Policies](https://docs.biconomy.io/docs/dashboard/paymasterPolicies) to register your contract, load your gas tank.


## Frontend Configuration

In your terminal navigate to the root folder of the project and install dependencies and configure the frontend variables as we did for the contract folder. 

```bash
  yarn
```

```bash
  cp .env.example .env;
```

Add your contract address in the .env file, and use the dev script to run: 

```bash
  yarn dev
```

You should now be all set to try out the starter kit and begin making changes for your own project! 


## Pull requests are most welcome


