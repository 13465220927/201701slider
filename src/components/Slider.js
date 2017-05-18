import React from 'react';
import ReactDOM from 'react-dom';
require('./Slider.less');
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {pos:0};//默认索引
    }
    //turn表示切换 n表示切换的步长
    turn(n){
        let pos = this.state.pos;//获取旧索引
        pos+=n;
        if(pos >= this.props.images.length){
             pos= 0;
        }
        if(pos < 0){
            pos=this.props.images.length-1;
        }
        this.setState({pos});
    }
    play(){//开启定时器进行自动轮播
        this.$timer = setInterval(()=>{
            this.turn(1);
        },this.props.interval*1000)
    }
    componentDidMount(){//组件加载完成之后
        if(this.props.autoplay){
            this.play();
        }
    }
    render(){
        let images = this.props.images;
        let style = {
            width:200*images.length,
            left:this.state.pos * -200,
            transitionDuration:this.props.speed+'s'
        }
        return (
            <div onMouseOver={()=>clearInterval(this.$timer)} onMouseOut={()=>this.play()} className="wrapper">
                <ul style={style} className="sliders">
                    {
                        images.map((image,index)=>(
                            <li className="slider" key={index}>
                                <img src={image.src} />
                            </li>
                        ))
                    }
                </ul>
                <div className="arrows">
                    <span className="arrow arrow-left" onClick={()=>this.turn(-1)}>&lt;</span>
                    <span className="arrow arrow-right" onClick={()=>this.turn(1)}>&gt;</span>
                </div>
            </div>
        )
    }
}