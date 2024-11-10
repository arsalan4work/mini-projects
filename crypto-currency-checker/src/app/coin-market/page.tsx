'use client';

import { useState, useEffect } from "react";

export default function CoinMarket() {
   const API_KEY ="931e9de3964d15f02167de7e2099bd53"
   const [data, setData] = useState <number> (Number);
   useEffect(() => {
      fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted) => {
         console.log("JSON Converted Data: ", jsonConverted) 
         setData(jsonConverted);
        });
   },[]);

   return(
      <>
      <div className="container w-[700px] h-[400px] p-8 md:p-12 rounded-md mx-auto mt-10">
         <h1 className="md:text-3xl">Crypto Market Today</h1>
       BTC: {data?.rates?.BTC}
       <br />
       ETH: {data?.rates?.ETH}
       <br />
       BNB: {data?.rates?.BNB}
       <br />
       XRP: {data?.rates?.XRP}
       <br />
       DOGE: {data?.rates?.DOGE}
       <br />
       USDT: {data?.rates?.USDT}
       <br />
       </div>
      </>
   );
}