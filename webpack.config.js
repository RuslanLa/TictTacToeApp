module.exports = {
    entry: {
        app: "./src/main.ts",
        polyfill: "./src/polyfills.ts",
        vendor: "./src/vendor.ts"
    },
    output: {
        filename: "./dest/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
        ]
    },
    resolve: {
        extensions: [".js", ".ts"]
    }
}