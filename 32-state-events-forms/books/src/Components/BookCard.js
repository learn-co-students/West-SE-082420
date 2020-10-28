import React, {Component} from 'react'

class BookCard extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         read: 0
    //     }
    //     // this.handleClick = this.handleClick.bind(this)
    // }

    state = {
        read:0,
    }


    handleClick = () => {
    //    this.setState({...this.state, read: this.state.read+1})
        this.props.addToTotal()
        this.setState((prevState) => {
            return {
                read: prevState.read+1
            }
        })
    }


    render(){
        return(
           <div>
               <h2> title: {this.props.title}</h2>
               <h2> author: {this.props.author}</h2>
               <img src={this.props.img} style={{width:"100px"}} alt={this.props.title}></img>
            <br/>
            <button onClick={this.handleClick} > read {this.state.read} </button> 

            </div> 
        )
    }
}

export default BookCard