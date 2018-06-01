import * as React from 'react';

import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';

export default class CatList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      images: []
    };
  }

  public componentDidMount() {
    this.updateImages(this.props.category);
  }

  public componentWillReceiveProps(nextProps: any) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.category !== this.state.category) {
      this.updateImages(nextProps.category);
    }
  }

  public render() {
    return (
      <div className='grid-list'>
        <GridList cellHeight={200}>
          {this.state.images.map((image: any) => (
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

  private updateImages(category: string) {
    const url = category !== null ?
      `http://localhost:9000/cats?category=${category}` :
      'http://localhost:9000/cats';

    axios.get(url).then(res => this.setState({ images: res.data.data }));
  }

}
