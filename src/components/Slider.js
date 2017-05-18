import React from 'react';
import ReactDOM from 'react-dom';
require('./Slider.less');
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {pos:0};//默认索引
    }
    componentDidMount(){//组件加载完成之后
        this.$timer = setInterval(()=>{
            let pos = this.state.pos;
            pos++;
            this.setState({pos});
        },this.props.interval*1000)
    }
    render(){
        let images = this.props.images;
        let style = {
            width:200*images.length,
            left:this.state.pos * -200
        }
        return (
            <div className="wrapper">
                <ul style={style} className="sliders">
                    {
                        images.map((image,index)=>(
                            <li className="slider" key={index}>
                                <img src={image.src} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}