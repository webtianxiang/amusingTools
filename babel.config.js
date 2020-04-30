module.exports = {
  presets: [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
      }
    ]
  ],
　exclude: [/node_modules/] // 不要编译node_modules，不然会出一些奇奇怪怪的问题
}