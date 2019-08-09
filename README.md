# Nodejs SDK for Xero API

## Contributing
* `npm run regenerate` - generate typescript `/src/gen` from OpenAPI document 
    
    (Windows users may need to execute the underlying command in a terminal instead of through npm, due to `$(pwd)` environmental differences)
* `npm run build` - compile typescript `src/` into javascript `dist/`
* `npm pack` - package `dist/` and `package.json` into a distributable `.tgz`