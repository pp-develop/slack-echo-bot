const { App } = require('@slack/bolt');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN, 
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    port: process.env.PORT || 3000
});

app.message(async ({ message, say }) => {
    // 受け取ったメッセージをオウム返しで返信
    await say(`Echo: ${message.text}`);
});

(async () => {
    // アプリを起動
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();
