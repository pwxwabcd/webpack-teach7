//var join = require('lodash/join');//同import join from 'lodash/join';
//var _ = require('lodash');//require与import混用，未发现异常
//import _ from 'lodash';//同import {join} from 'lodash';
//import {join} from 'lodash';//加载所有loadash文件，单独生成vendors~another~index.bundle.js(76k相当于lodash.min.js 72k), index.bundle.js 3k;another.bundle.js 2k
import join from 'lodash/join';//只加载join函数，不会单独生成vendors~another~index.bundle.js,index.bundle.js 8k;another.bundle.js 2k
import './style.css';
import addIcon from './add.png';
import deleteIcon from './delete.png';
import downIcon from './public/down.png';
import printMe from './print.js';
import { cube } from './public/math.js';//只打包cube函数
import { cube2 } from './public/math2.js';

function component() {
    let element = document.createElement('div');

    //调用Lodash的join方法
    element.innerHTML = "hi";//join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //加入image
    var myAddIcon = new Image();
    myAddIcon.src = addIcon;
    element.appendChild(myAddIcon);

    var myDeleteIcon = new Image();
    myDeleteIcon.src = deleteIcon;
    element.appendChild(myDeleteIcon);

    var myDownIcon = new Image();
    myDownIcon.src = downIcon;
    element.appendChild(myDownIcon);

    //加入按钮，调用其他js提供的方法
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!' + cube(5);
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());