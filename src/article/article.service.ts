import { Injectable } from '@nestjs/common';
import * as telegram from 'telegram-bot-api';

@Injectable()
export class ArticleService {
    private defaultTelegramOptions = {
        parse_mode: 'HTML',
        disable_web_page_preview: 'true'
    }
    private telegramApi = new telegram({
        token: process.env.TELEGRAM_API
    });

    constructor() {
        this.telegramApi.setMessageProvider(new telegram.GetUpdateMessageProvider());
        this.telegramApi.start();

        this.telegramApi.on('update', (update) => {
            // Callback query only exists if the update is triggered via an inline keyboard event
            // https://core.telegram.org/bots/api#callbackquery
            // The data field is the callback_data provided in the sendMessage call below.
            if (update.callback_query) {
                const { callback_query: { data, message: { message_id, chat: { id } } } } = update;
                this.telegramApi.editMessageText({
                    chat_id: id,
                    message_id: message_id,
                    text: `https://outline.com/${data}`,
                    ...this.defaultTelegramOptions
                });
            }

            if (update.message.text.includes("/outline")) {
                const { message: { text, chat: { id } } } = update;
                const providedLink = text.split(' ')[1];
                this.telegramApi.sendMessage({
                    chat_id: id,
                    text: `Open ${providedLink} in Outline`,
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    "text": "Convert to Outline", callback_data: providedLink,
                                },
                            ]
                        ]
                    },
                    ...this.defaultTelegramOptions
                });
            }
        });

    }
}
