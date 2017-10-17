import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

//returns the wanted suggestion
const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.name}
  </div>
);

class AutosuggestComponent extends Component {
  constructor() {
    super();
    this.state = {
      questsData: [],
      value: '',
      suggestions: []
    };
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.data.filter(quest =>
      quest.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    //send newValue back up
    // this.props.questValue("quest_id", this.state.value);
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.props.questValue("quest_id", suggestionValue);
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type a quest name',
      value,
      onChange: this.onChange
    };

    return (
      <div className="AutosuggestComponent">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          onSuggestionSelected={this.onSuggestionSelected}
        />
      </div>
    );
  }
}

export default AutosuggestComponent;