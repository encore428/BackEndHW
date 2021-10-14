## Fundamentals in Backend Development

# Day 4 (Aug 24) Home work

This home work was defined the PDF file <a href="./Homework - 24 Aug.pdf">`Homework - 24 Aug`</a>, which was sent by
qinjiang03@gmail.com on Aug 22, 2021.  The slide specified the following:

Create an Express.js server application that publishes its heartbeat

- A WebSocket endpoint `/heartbeat` that sends heartbeat messages to clients.
- A producer that publishes `heartbeat` messages to the `heartbeat` queue.
- A consumer that subscribes to the `heartbeat` queue and writes the messages to a file `log.txt` (append-mode)

Heartbeat messages to send/publish:

- Every minute: “I’m alive at ${datetime}!”
- Every 42nd minute of the hour: “42 is the meaning to life!”


# Implementation

There are five files:

**producer.js**

This program broadcasts the heartbeat over web socket server.

It also has a web server endpoint (http://localhost:5000/heartbeat), from which it renders `index.html`.

This program should be started first using `node producer.js`.

**consumer.js**

This progarm is a consumer to receive the web socket server broadcast and to console.log the messages and append to
a log file.

Multuiple instances of this program can be run, each with the command `node consumer.js`.

**index.html**

This html file is rendered when http request is made to the web server port with endpoint `/heartbeat`.  The html file
has embedded javascript to subscribe the web socket broadcast and display the messages on the page.  Messages are 
displayed on the screen in reverse chronological order, and old messages are discarded when the screen buffer is full.  
The screen buffer is configured to hold 20 messages.

**.env**

This is a configuration file to define the web socket and web server port numbers.

It has an optional parameter call DEMO.  By setting this to 'on' at start up of **producer.js**, it will perform heartbeat 
in demo mode.  Demo mode deviates from the original specification, so as to showcase the behaviour in fast track:

- Instead of every minute, the heartbeat is every second, and it broadcast the same message: “I’m alive at ${datetime}!”
- Instead of every 42nd minute of the hour, it broadcast every 42nd second of the minute the text: “42 is the meaning to life!”

**log.txt**

This file is created and written to by `consumer.js`.

## Deployment

The homework has been uploaded to GitHub in repository `https://github.com/encore428/BackEndHW`.
Clone it to your local computer.  The computer has to have PostgreSQL installed.

Edit file `.env` to set up your DATABASE_URL.

Perform the following to bring up the application:
```bash
# Change to the directory
$ cd websocket

# Install project dependencies
$ npm install

# Start producer
$ node producer.js

# Start consumer
$ node consumer.js

```

Open the endpoint http://localhost:5000/heartbeat with a browser.  Feel free to open a few of them.
