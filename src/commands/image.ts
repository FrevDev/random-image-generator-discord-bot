import { Command } from '../interfaces';

const command: Command = {
  name: 'image',
  aliases: [],
  permissions: [],
  usage: '',
  run: (client, msg, args) => {
    try {
      const imageURL: string = `https://source.unsplash.com/random`;
      const imageAmount: number = parseInt(args[0]) || 1;
      const imageTopic: string = args[1] || '';
      const imageLimit = 3;

      if (imageAmount >= imageLimit) {
        msg
          .reply(`You can not get more than ${imageLimit}`)
          .catch(error => console.error(error));
      } else {
        for (let i = 0; i < imageAmount; i++) {
          msg.channel
            .send(`${imageURL}?${imageTopic}`)
            .catch(error => console.error(error));
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
};

export default command;
