import React from 'react';
export default class SliderItems extends React.Component{
    render(){
        return (
            <ul style={this.props.style} className="sliders">
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider" key={index}>
                            <img src={image.src} />
                        </li>
                    ))
                }
                <li className="slider" key={this.props.images.length}>
                    <img src={this.props.images[0].src} />
                </li>
            </ul>
        )
    }
}