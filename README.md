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

## The solution

It turned out
that Flow didn't like
my stub file
living in the `flow-typed` directory.
I moved the stub
into a directory named `flow-stubs`,
and updated the [flow config](.flowconfig)
to point to it:

```
[options]
module.name_mapper.extension='mp3' -> '<PROJECT_ROOT>/flow-stubs/mp3-stub.js'
```

## My original attempt

Originally, I used the
[module.name_mapper.extension](https://flow.org/en/docs/config/options/#toc-module-name-mapper-extension-string-string)
option,
but I had the stub (`mp3-stub.js`)
in the `flow-typed` directory.
By default,
`flow-typed` is a special directory
that Flow uses
to look for
[library definitions (or "libdefs")](https://flow.org/en/docs/libdefs/).

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
