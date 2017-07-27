# flow-name_mapper-test

Testing import of MP3 file
and getting [Flow](https://flow.org)
to like it.

## What's going on?

I want to play an audio file—
in this case, an MP3 file—
using an `audio` element.

I have
[configured webpack](webpack.config.js)
to use
[file-loader](https://github.com/webpack-contrib/file-loader)
to load the MP3 file.
This loader will copy the file to the output directory
and return the public URL to the file.
So, after `import sound from './bell.mp3'`,
`sound` will be a string
with the URL to the MP3 file.

## The problem

[Flow](https://flow.org)
errors with
"Required module not found"
on the import of the MP3 file.

## Attempted solution

Flow has a
[module.name_mapper option](https://flow.org/en/docs/config/options/#toc-module-name-mapper-regex-string)
that, from what I've read,
should handle this situation.

I have [attempted to implement this](.flowconfig),
using a slightly-more-convenient-but-similar
[module.name_mapper.extension](https://flow.org/en/docs/config/options/#toc-module-name-mapper-extension-string-string)
option,
but Flow continues to error.
I'm not sure if I'm doing it wrong,
if something isn't configured correctly,
or if it's something else.

## Installation

1. Clone repository
2. `yarn install`

## Usage

Mainly, I'm concerned about the Flow error,
so [running flow](#running-flow) is the important part.
It is also possible to [run the app](#running-the-app)
to see what it does.

### Running Flow

`yarn flow`

### Running the app

1. `yarn start`
2. Navigate to http://localhost:1337 in a browser

## Attribution

The MP3 file used in this project
uses a Creative Commons Attribution 3.0 license.
The audio was recorded by Danial Simion
and was downloaded from
http://soundbible.com/2190-Front-Desk-Bell.html
