# Issue [zeit/styled-jsx#479](https://github.com/zeit/styled-jsx/issues/479) demo

Babel compile step throws an exception trying to create source maps. It appears the `styled-jsx/babel` plugin isn't given exactly the data it expects.

    ERROR in ./src/index.tsx
    Module build failed (from ./node_modules/awesome-typescript-loader/dist/entry.js):
    TypeError: Cannot read property 'indexOf' of undefined
        at Object.relative (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\styled-jsx\node_modules\source-map\lib\util.js:262:16)
        at SourceMapGenerator.setSourceContent (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\styled-jsx\node_modules\source-map\lib\source-map-generator.js:140:21)
        at makeSourceMapGenerator (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\styled-jsx\dist\_utils.js:383:13)
        at processCss (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\styled-jsx\dist\_utils.js:484:21)
        at PluginPass.exit (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\styled-jsx\dist\babel.js:220:51)
        at newFn (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\@babel\traverse\lib\visitors.js:193:21)
        at NodePath._call (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\@babel\traverse\lib\path\context.js:53:20)
        at NodePath.call (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\@babel\traverse\lib\path\context.js:40:17)
        at NodePath.visit (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\@babel\traverse\lib\path\context.js:97:8)
        at TraversalContext.visitQueue (C:\Users\peping\WebstormProjects\styled-jsx-demo\node_modules\@babel\traverse\lib\context.js:118:16)
     @ multi ./src main[0]

## Steps to reproduce:

1. clone this repo
2. `npm install` or `yarn install`
3. `npm start` or `yarn start`

## Workaround

To make this project work, disable styled-jsx's source maps by uncommenting line `.babelrc:9`


