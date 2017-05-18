import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.js';
let images = [
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')},
    {src:require('./images/4.jpg')}
]
ReactDOM.render((
    <Slider
      images={images} //图片
      interval={2}    //多长时间轮播一次
      speed={1}       //播放的速度
      autoplay={true} //是否启用自动轮播
      pause={true}    //当鼠标移动上去自动自动暂停
      arrows={true}   //是否有箭头导航
      dots={true}     //是否有点状导航
    />
),document.querySelector('#root'));