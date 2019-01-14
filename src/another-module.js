// import {join} from 'lodash';
import join from 'lodash/join';//只加载join函数，不会单独生成vendors~another~index.bundle.js

console.log(
  "hi"//join(['Another', 'module', 'loaded!'], ' ')
);