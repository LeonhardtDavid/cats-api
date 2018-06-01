import * as React from 'react';

import { MenuItem, SelectField } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CatList from './components/CatList';

export default class App extends React.Component<any, any> {

  public constructor(props: any) {
    super(props);

    this.state = {
      category: null
    };
  }

  public handleChange = (event: any, index: number, category: string) => this.setState({category})

  public render() {
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
