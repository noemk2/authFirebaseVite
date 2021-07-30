//import { CryptoApi, Currency } from "node-crypto-com";
const { CryptoApi, Currency } = require("node-crypto-com");

const api = new CryptoApi("JTSW4GLceiv6MPGgJn4DiH", "YuTyM8Zv5EkW6JEGvScZNM");

const getBalance = async () => {
  const accountSummary = await api.private.getAccountSummary({
    currency: Currency.Cro,
  });
  console.log(accountSummary);
};

const getData = async () => {
  const { data, status } = await api.public.getInstruments();
  console.log(data.result);
};

getBalance();
//getData();
