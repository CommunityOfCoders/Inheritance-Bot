import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.DISCORD_TOKEN);

client.on('guildMemberAdd', async (member) => {
  const role = await member.guild.roles.cache.get(process.env.ROLE_ID);
  await member.roles.add(role);

  const channelID = member.guild.systemChannelId;
  const channel = await client.channels.fetch(channelID);
  const welcomeEmbed = new EmbedBuilder();

  welcomeEmbed.setColor('#5cf000');
  welcomeEmbed.setTitle(
    '**' +
      member.user.username +
      '** ka Inheritance 2022 me Hardik Swagat Hai 🙏'
  );
  welcomeEmbed.setImage(
    'https://res.cloudinary.com/dn6vz8exv/image/upload/v1665664791/inh_zzefoy.jpg'
  );
  channel.send({
    content: `Welcome <@${member.user.id}>!`,
    embeds: [welcomeEmbed],
  });

  member.send(
    "Hello, Welcome to Inheritance '22. We hope you have a great time here!"
  );
});

/*  00 -> Minute
    12 -> Hour
    * -> Day of month (Any is fine)
    * -> Month (Any is fine)
    7 -> Day of week (Sunday)
*/
cron.schedule('00 12 * * 7', function() {
  const channel = client.channels.cache.get(process.env.CHANNEL_ID_ANNOUNCEMENTS);
  channel.send(`Update time <@&${process.env.ROLE_ID_MENTEES}>! Provide your weekly updates to your respective mentors.`);
});
