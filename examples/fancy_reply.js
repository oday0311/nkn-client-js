const crypto = require('crypto');
const nkn = require('../lib/nkn');

//42da86ad2b7cc3ecc5f4c76299bfedbc139419d295de6c5a73ccdcc14418efea 028cd215883d3462f13cb0ba43f251165bbbe7d94cebf0316bf197e593ff9643af
const client = nkn({
    identifier: 'fancy_number_1',
    privateKey: '42da86ad2b7cc3ecc5f4c76299bfedbc139419d295de6c5a73ccdcc14418efea',
});
console.log(client.key.privateKey, client.key.publicKey);
console.log(client.addr);
//addr : fancy_number_1.028cd215883d3462f13cb0ba43f251165bbbe7d94cebf0316bf197e593ff9643af

client.on('connect',()=>{

    console.log("connetction opend");
});



client.on('message', (src, payload, payloadType) => {
    if (payloadType === nkn.PayloadType.TEXT) {
      console.log('Receive text message:', src, payload);

      sendMessage("this is a reply ", src);

    } else if (payloadType === nkn.PayloadType.BINARY) {
      console.log('Receive binary message:', src, payload);
    }
  });



  function sendMessage(content, scr)
  {
    client.send(
        scr,
        content,
      );
  }

  