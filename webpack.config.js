// webpack.config.js

module.exports = {
    module: {
      rules: [
        // SASS与SCSS相比有不同的行尾
        // 并且不能在标记中使用分号
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              // 需要 sass-loader@^7.0.0
              options: {
                // 这是您的变量文件的路径
                data: "@import '@/styles/variables.scss'"
              },
              // 需要 sass-loader@^8.0.0
              options: {
                // 这是您的变量文件的路径
                prependData: "@import '@/styles/variables.scss'"
              },
              // 需要 sass-loader@^9.0.0
              options: {
                // 这是您的变量文件的路径
                additionalData: "@import '@/styles/variables.scss'"
              },
            },
          ],
        },
        // SCSS与SASS相比有不同的行尾
        // 并且在import后面需要分号
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              //  需要 sass-loader@^7.0.0
              options: {
                // 这是您的变量文件的路径
                data: "@import '@/styles/variables.scss';"
              },
              // 需要 sass-loader@^8.0.0
              options: {
                // 这是您的变量文件的路径
                prependData: "@import '@/styles/variables.scss';"
              },
              // 需要 sass-loader@^9.0.0
              options: {
                // 这是您的变量文件的路径
                additionalData: "@import '@/styles/variables.scss';"
              },
            },
          ],
        },
      ],
    },
  }