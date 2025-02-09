const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts', // Entrada principal do Webpack
  output: {
    filename: 'bundle.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'), // Caminho para a saída
    clean: true, // Limpar a saída antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Processar arquivos .ts e .tsx
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig-frontend.json', // Configuração específica para TypeScript
        },
      },
      {
        test: /\.css$/, // Processar arquivos CSS
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ], // Carregar e injetar estilos
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i, // Processar imagens
        type: 'asset/resource', // Salvar na saída como arquivos separados
        generator: {
          filename: '../img/background.jpg', // Configuração do caminho dos assets
        },
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/bundler.css',
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolver extensões automaticamente
  },
  devServer: {
    contentBase: path.resolve(__dirname, './frontend'),
    index: 'index.html',
    port: 9000, // Porta do servidor
  },
  devtool: 'source-map', // Facilitar o debugging com mapas de código fonte
};
