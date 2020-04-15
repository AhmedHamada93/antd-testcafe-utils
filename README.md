## TestCafe antD Utils
>TestCafe helper functions library for antD React UI library.

#### Install
`npm i testcafe-antd-utils`

### What you will find?
Some common functions used to manipulate user actions on antD components using TestCafe.

#### Example   
   1. For antD [Select](https://ant.design/components/select/) Component:
       * `selectAny` will select randomly any of the select options.
       * `selectAnyExcept` will select randomly any of the select option except the excluded one.
   2. For antD [Cascader](https://ant.design/components/cascader/) Component:
       * `selectAny` will select randomly any of the Cascader select options to the last leaf.
       * `selectArray` will select given options array.

#### Dependencies
   1. [Testcafe](https://www.npmjs.com/package/testcafe)
   2. [faker](https://www.npmjs.com/package/faker)
