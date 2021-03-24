<p align="center">
  NestJS Telegram Bot
</p>
  
<p align="center">A Telegram bot template built using <a href="https://nestjs.com/" target="blank">NestJS</a> and <a href="https://www.npmjs.com/package/telegram-bot-api" target="blank">telegram-bot-api</a>.</p>

## Description

This template project uses the Telegram Bot API to open a provided link using <a href="https://outline.com" target="blank">Outline.com</a>. The template demos loading an <a href="https://core.telegram.org/bots#inline-keyboards-and-on-the-fly-updating" target="blank">inline keyboard button</a> to show how callback data is received back into the application after user interaction.

## Pre-code steps
Before you start you will need a Telegram Bot API key. Telegram provide a bot called <a href="https://core.telegram.org/bots#6-botfather" target="blank">Botfather</a> to help with this.
Start a conversation with the Botfather, give your bot a name, and copy the API key it gives you.
In the apps root directory there is a .env.template file. Rename this (or copy it) to .env and add your API key.

The file should look something like this:

```bash
TELEGRAM_API=1234MyApiKey
```

## Installation

All neccessary dependencies are included in the package.json, so an npm install is all that's needed.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Using the bot
Once your bot is up and running locally, start a new conversation with your bot on Telegram by searching for it using the name you gave it during creation.
Commands can be issued to the bot by prefixing them with a forward slash (/). For example in this application, you can send the bot a URL using the command `/outline https://github.com/glennsayers/nextjs-telegram-bot`


## License

  [MIT licensed](LICENSE).
