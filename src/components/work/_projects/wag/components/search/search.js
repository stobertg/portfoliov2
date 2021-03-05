import React from 'react'
import Form from '../form/form'
import Input from '../input/input'
import List from '../list/list'
import './style.scss'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value
    });
  }

  // Function to clear the text in the search input
  // This is specific to the search input

  clearField(){
    this.setState({ value: '' });
    document.getElementById("search").focus();
  }
      
  render() {
    return (
      <Form 
        action="/"
        role="search"
      >
        <div className="search">
          <Input
            search={true}
            id="search"
            type="text"
            placeholder={ this.props.placeholder }
            autocomplete="off"
            value={this.state.value} 
            onChange={this.handleChange}
            onClick
            clear={ () => this.clearField() }
          />

          {this.props.results
            ? <div className={`search__results ${this.state.value.length > 0 ? 'search__results--show':''}`}>
                <List vertical>
                  {this.props.results.map((item, index)=>
                    <li key={ item.id }><a href="#!"><span>{item.label}</span></a></li>
                  )}
                </List>
              </div>

            : null
          }
        </div>
      </Form>

    )
  }
}

export default Search
