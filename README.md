# Telegram Bot App
This is the template for a Telegram bot. You can send messages using the app to your desired chats in which the bot has the rights to send messages.

## Dependencies
The app was created using Electron Forge. So to install all dependencies I recommend following their super simple documentation [here](https://www.electronforge.io) and then copy-pasting the ```index.html```
and ```bot.js``` files. After that you are set!

## Running the app
Before running the app you need to create a bot in Telegram and get access to its API. You can do this by using [BotFather](https://core.telegram.org/bots). After getting your bot (and its URL for accessing the API)
go to the ```bot.js``` file and change the ```url``` variable here to the URL that you acquired. 

One other thing is that to send messages you will need chat IDs. To get these simply send a message to the bot. You will see the chat ID in the console log (I was too lazy to automate this).
After getting the chat IDs you may want to append the dropdown list in ```index.html```. I left comments here so you hopefully you won't have any trouble.

Make sure you have the dependencies and after running ```npm start``` command in your terminal you should see the app start up.
