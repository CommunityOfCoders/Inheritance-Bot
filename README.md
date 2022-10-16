# Inheritance '22 Discord Bot

A simple Discord bot built using DiscordJS and deployed on [Railway](https://railway.app/) that

- Welcomes you to the server
- Automatically assigns you a role
- Reminds you weekly for your updates

## Setup

1. Clone the repository on your local machine
   ```
   git clone https://github.com/CommunityOfCoders/Inheritance-Bot.git
   ```
   
2. Install all the packages with `yarn`

3. Create a `.env` file with the below contents:
   ```
   DISCORD_TOKEN=Your Discord Server Token
   CHANNEL_ID_WELCOME=Welcome Channel ID
   CHANNEL_ID_ANNOUNCEMENTS=Announcements Channel ID
   ROLE_ID=ID of the role to automatically assign
   ROLE_ID_MENTEES=ID of the mentees role
   ```
   
4. For build, run `npm run build`
   For development, simply run `node src/index.js`
   
