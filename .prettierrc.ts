module.exports = {
  // 一行代码的最大字符数，默认是80
  printWidth: 120,
  // tab宽度为2空格
  tabWidth: 2,
  // 是否使用tab来缩进，我们使用空格
  useTabs: false,
  // 结尾是否添加分号，false的情况下只会在一些导致ASI错误的其工况下在开头加分号，我选择无分号结尾的风格
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象中key值是否加引号：as-needed在需要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  quoteProps: "as-needed",
  // 在jsx文件中的引号需要单独设置
  jsxSingleQuote: false,
  // 尾部逗号设置，es5是尾部逗号兼容es5，none就是没有尾部逗号，all是指所有可能的情况，需要node8和es2017以上的环境
  trailingComma: "es5",
  // object对象里面的key和value值和括号间的空格
  bracketSpacing: true,
  // jsx标签多行属性写法时，尖括号是否另起一行
  jsxBracketSameLine: false,
  // 箭头函数单个参数的情况是否省略括号，默认always是总是带括号
  arrowParens: "avoid",
  // range是format执行的范围，可以选执行一个文件的一部分，默认的设置是整个文件
  rangeStart: 0,
  rangeEnd: Infinity,
  // vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
  vueIndentScriptAndStyle: false,
  // 行尾换行符,默认是lf,
  endOfLine: "auto",
  // 默认是auto,控制被引号包裹的代码是否进行格式化
  embeddedLanguageFormatting: "off",
};
