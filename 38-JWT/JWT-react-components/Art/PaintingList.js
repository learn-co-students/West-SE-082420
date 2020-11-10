import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import Painting from './Painting';

class PaintingList extends React.Component {


    state = {
      paintings: []
    }
componentDidMount(){
    console.log(this.props.token)
    fetch('http://localhost:3000/arts', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({paintings:data})
    })
}





  handleVote = (id) => {

    this.setState(prevState => {
      return {
        paintings: prevState.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 };
          }
        })
      };
    });
  }


  findPainting = () => {
    let p = this.state.paintings.filter(painting => painting.id == parseInt(this.props.paintingId))
    p = p[0]
    return <DeleteablePainting key={p.id} painting={p} handleVote={this.handleVote}/>
  }

  render() {
    const allPaintings = this.state.paintings.map(p => (
      <DeleteablePainting
        key={p.id}
        painting={p}
        handleVote={this.handleVote}
        addToCollection={this.props.addToCollection}
      />
    ));
    return (
      <div>
        <h1>All Paintings</h1>
        <div className="ui items">{this.props.paintingId?this.findPainting(): allPaintings}</div>
      </div>
    );
  }
}
export default PaintingList;
