import React from 'react';
export default class SliderDot extends React.Component{
    render(){
        if(this.props.dots)
            return (
                <div className="dots">
                    {
                        this.props.images.map((image,index)=>(
                            <span key={index} className={"dot "+((index == this.props.pos) || (this.props.pos==this.props.images.length && index ==0)?'active':'')} onClick={()=>this.props.turn(index-this.props.pos)}></span>
                        ))
                    }
                </div>
            )
        else{
            return null;
        }
    }
}