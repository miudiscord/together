import Discord from 'discord.js';
import { PlayTogether } from '../../index';

class Client extends Discord.Client {
  public together!: PlayTogether;

  public constructor() {
      super();
    this.together = new PlayTogether(this);
  }
}

const client = new Client();

client.on('message', async message => {
    if (message.content === '!youtube') {
        if(message.member!.voice.channel) {
            client.together.generateTogetherCode(message.member!.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
    if (message.content === '!poker') {
        if(message.member!.voice.channel) {
            client.together.generateTogetherCode(message.member!.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
    if (message.content === '!betrayal') {
        if(message.member!.voice.channel) {
            client.together.generateTogetherCode(message.member!.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
    if (message.content === '!fishing') {
        if(message.member!.voice.channel) {
            client.together.generateTogetherCode(message.member!.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`${invite.code}`); // Click the blue link !
            });
        };
    };
});

client.login('NzgxNTAxMzA4Njk5MDE3Mjc3.X7-jzw.8QslLiAznMVaglKGuRWv0_8bGnU');