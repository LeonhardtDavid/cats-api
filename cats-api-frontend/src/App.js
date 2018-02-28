import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import CatList from './components/CatList';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      category: null
    };
  }

  handleChange = (event, index, category) => this.setState({category});

  render() {
    return (
      <div className="root-div">
        <MuiThemeProvider>
          <SelectField floatingLabelText="Category" value={this.state.category} onChange={this.handleChange}>
            <MenuItem value={null} primaryText="" />
            <MenuItem value={'hats'} primaryText="Hats" />
            <MenuItem value={'space'} primaryText="Space" />
          </SelectField>
          <CatList category={this.state.category}/>
        </MuiThemeProvider>
      </div>
    );
  }

}
