# Introduction

A [bzBond-server](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#bzbond-server) Microbond to populate [Handlebars](https://handlebarsjs.com/) templates

# Installation

## Installation on macOS/Linux

On macOs/Linux use the following command to install this Microbond:

`/var/www/bzbond-server/bin/install-microbond.sh bzmb-handlebars https://github.com/beezwax/bzmb-handlebars`

## Installation on Windows Server

On Windows Server use the following command to install this Microbond:

`powershell -File "C:\Program Files\bzBond-server\bin\install-microbond.ps1" bzmb-handlebars https://github.com/beezwax/bzmb-handlebars`

## Installation with a proxy on macOS/Linux

On macOs/Linux use the following command to install this Microbond via a proxy:

`/var/www/bzbond-server/bin/install-microbond.sh bzmb-handlebars https://github.com/beezwax/bzmb-handlebars http://proxy.example.com:443`

## Installation with a proxy on Windows Server

On Windows Server use the following command to install this Microbond via a proxy:

`powershell -File "C:\Program Files\bzBond-server\bin\install-microbond.ps1" -Proxy http://proxy.example.com:443`

# Usage

The bzmb-handlebars Microbond provides one route

## bzmb-handlebars-populate

In a server-side FileMaker script run `bzBondRelay` script with parameters in the following format:

```
{
  "mode": "PERFORM_JAVASCRIPT",

  "route": "bzmb-handlebars-populate",

  "customMethod": "POST",

  "customBody": {
    
    // Required. A valid handlebars string
    "source": "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have {{kids.length}} kids:</p><ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>",

    // Required. A data object to populate the template.
    "data": {
      "name": "Alan",
      "hometown": "Somewhere, TX",
      "kids": [
        {"name": "Jimmy", "age": "12"},
        {"name": "Sally", "age": "4"}
      ]
    }
  }
}

```

A string of the populated template can be accessed via `Get ( ScriptResult )`:
`JSONGetElement ( Get ( ScriptResult ); "response.result" )`