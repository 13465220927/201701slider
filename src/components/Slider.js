import React from 'react';
import ReactDOM from 'react-dom';
require('./Slider.less');
export default class Slider extends React.Component{
    render(){
        let images = this.props.images;
        return (
            <div className="wrapper">
                <ul className="sliders">
                    {
                        images.map((image,index)=>(
                            <li className="slider">
                                <img src={image.src} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}