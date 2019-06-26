import React, { Component } from 'react';
import './products.css'
import Data from '../JSON/data.json'


class Products extends Component {
	constructor(props) {
		super(props)
		this.state = {
			currentIndex: 0,
			appleData : Data
		}
		this.images=[ require('../../Images/apple1.jpg'),
							    require('../../Images/apple2.jpeg'),
							    require('../../Images/apple3.png'),
							    require('../../Images/apple5.jpg'),
							    require('../../Images/apple6.jpg')]
		this.nextImg = this.nextImg.bind(this)
		this.prevImg = this.prevImg.bind(this)
	}

	nextImg() {
		let imgLen = this.images.length
		let cIndex = this.state.currentIndex
		let newIndex = (cIndex>=imgLen-1) ? 0 : 1+cIndex
		this.setState({currentIndex:newIndex})
	}

	prevImg() {
		let imgLen = this.images.length
		let cIndex = this.state.currentIndex
		let newIndex = (cIndex<=0) ? imgLen-1 : cIndex-1
		this.setState({currentIndex:newIndex})
	}
	render(){
		let data = this.state.appleData
		return(
			<div>
				<div className="picDiv">
				<p>Price: ${data.AppleData[this.state.currentIndex].price}  ({data.AppleData[this.state.currentIndex].discount}% Discount)</p>
				<img className="imgtag" src={this.images[this.state.currentIndex]} 
							alt='appleProducts' />
				</div>
				<div className="buttonDiv">
					<button className="btn" onClick={this.prevImg} > {'<<'}Previous </button>
					<button className="btn" onClick={this.nextImg}> Next{'>>'} </button>
				</div>
				<button className="btnBuy"> BUY NOW </button>
			</div>)
	}
}

export default Products;