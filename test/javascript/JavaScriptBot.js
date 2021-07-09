const Discord = require('discord.js');
const client = new Discord.Client();
const { PlayTogether } = require('../../index');

client.together = new PlayTogether(client);

client.on('message', async message => {
    if (message.content === '!youtube') {
        if(message.member.voice.channel) {
            client.together.generateTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('NzgxNTAxMzA4Njk5MDE3Mjc3.X7-jzw.8QslLiAznMVaglKGuRWv0_8bGnU');