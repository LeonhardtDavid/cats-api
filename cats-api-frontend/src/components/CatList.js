import React from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';

export default class CatList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  _updateImages(category) {
    const url = category !== null ?
      `http://localhost:9000/cats?category=${category}` :
      'http://localhost:9000/cats';

    axios.get(url).then(res => this.setState({ images: res.data.data }));
  }

  componentDidMount() {
    this._updateImages(this.props.category);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.category !== this.state.category) {
      this._updateImages(nextProps.category);
    }
  }

  render() {
    return (
      <div className='grid-list'>
        <GridList cellHeight={200}>
          {this.state.images.map(image => (
            <GridTile key={image.id} title={image.id}>
              <a href={image.sourceUrl} target='_blank'>
                <img src={image.url} alt={image.id} />
              </a>
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }

}
