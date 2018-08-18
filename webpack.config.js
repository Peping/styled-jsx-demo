const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    "mode": "development",
    "output": {
        "path": __dirname + '/dist',
        "filename": "[name].[hash].js"
    },
    "devtool": "source-map",
    plugins: [
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": [
                            "env"
                        ]
                    }
                }
            },
            {
                "test": /\.tsx?$/,
                "exclude": /node_modules/,
                "use": {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true,
                        babelCore: '@babel/core'
                    }
                }
            }
        ]
    }
};