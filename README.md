# Evaluate a News Article with Natural Language Processing
## What it is
This is a project for Udacity's Frontend Web Dev Nanodegree. It consists of a
client facing app and a server, that in turn interacts with an API. This API is
a natural language processing one. Specifically, it analyzes the sentiments of
the text in a given text.

This app takes a URL and sends it to [MeaningCloud Sentiment API](https://www.meaningcloud.com/developer/sentiment-analysis).
When it gets the results back (it may take a while), it updates the content on
the main page with some data about the [positivity](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response#score_tag)
and the [sujectivity](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response#subjectivity),
and prints some [example text](https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc/response#sentence_list) taken from the analyzed page.

## How to use it
Clone the repo into a folder with
```
git clone https://github.com/pablomartan/evaluate-news-nlp
```
and then, to set it up, run `npm install`.

You will need to acquire an API key. You can do so through [this page](https://www.meaningcloud.com/developer/create-account) (it's
free). When you get your key, you have to place it in a file named `.env` in
the root directory of the project, with this syntax:
```
API_KEY=$your_api_key
```

### Production
To get a production ready build, you just have to run `npm run build-prod`. It
will create a folder named `dist` and you can then run `npm start` and access
it from your browser through `localhost:8080`.

### Development
To get a development build you will need to change the port the server runs on.
To do so, open the server file (`src/server.js`), uncomment the line with
`const port = 8081` and comment out the one with `const port = 8080`.

Then, you can run `npm run build-dev` to get the client-side working (it will
open automatically on your default browser), and `npm start` to get the server
running.

# Udacity text
## Project Motivation
The motive of this project is to have you a taste of the environment and tools
you will most likely come across in a front end role. Your focus should be to
understand the role every tool and technology is playing in the overall
architecture. You shouldn’t feel the need to memorize the particular commands,
config setups, or structure that we create here. Every project in the industry
will have its own custom setup, but if you understand the moving pieces, you
will be able to get the gist of even far more complicated projects than this one.

## Project Introduccion - What You Will Build
We will build a web tool that allows users to run Natural Language Processing
(NLP) on articles or blogs found on other websites. NLP is the ability of an
application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external
api called MeaningCloud to interact with their NLP system. This tool will help us
classify the information available in the article, like whether the content is
subjective (opinion) or objective (fact-based) and whether it is positive,
neutral, or negative in tone.

Following are the project prerequisites:

* Webserver - Node
* Web application framework for routing - Express
* Build tool - Webpack. Using webpack, we will set up the app to have dev and
  prod environments, each with their own set of tools and commands.
* External script - Service Worker
* External API - MeaningCloud

# License
This project is released under the [MIT](./LICENSE) license.
