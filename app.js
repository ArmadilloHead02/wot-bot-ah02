const discord = require('discord.js');

const token = 'NzA3NDcwMzk2OTcwMTA2ODgw.XrJRcg.0_IPOo0BwdMkADSdFnaX0CTZS5g';

// Initialise Discord Bot

const client = new discord.Client();

client.on('ready', () => {
    console.log('Connected');

    client.user.setStatus("Geff");
});

client.on('message', (message) => {
    if(message.author.bot) return;

    const number = 11;
    let random = Math.floor(Math.random() * number) + 1;
    if(random == 1) {
        message.channel.send('https://cdn.boob.bot/yiff/AS2C0CC.jpg');
    } else if(random == 2) {
        message.channel.send('https://cdn.boob.bot/yiff/AS3B0C.jpg');
    } else if(random == 3) {
        message.channel.send('https://cdn.boob.bot/yiff/AS16A5C.jpg');
    } else if(random == 4) {
        message.channel.send('https://cdn.boob.bot/yiff/AS29EC.jpg');
    } else if(random == 5) {
        message.channel.send('https://cdn.boob.bot/yiff/AS438C.jpg');
    } else if(random == 6) {
        message.channel.send('https://cdn.boob.bot/yiff/AS237FC.jpg');
    } else if(random == 7) {
        message.channel.send('https://cdn.boob.bot/yiff/AS2404C.jpg');
    } else if(random == 8) {
        message.channel.send('https://cdn.boob.bot/yiff/AS28A2C.jpg');
    } else if(random == 9) {
        message.channel.send('https://cdn.boob.bot/yiff/AS1E9FC.jpg');
    } else if(random == 10) {
        message.channel.send('https://cdn.boob.bot/yiff/ASEA0C.jpg');
    } else if(random == 11) {
        message.channel.send('https://cdn.boob.bot/yiff/AS21C4C.jpg');
    }
});

client.login(token);
