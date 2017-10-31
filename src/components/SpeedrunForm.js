import React, { Component } from 'react';
import AutosuggestComponent from './AutosuggestComponent';
// import { addSpeedrun, deleteSpeedrun } from '../actions';

class SpeedrunForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted_by: '',
      duration: '',
      hunters: '',
      quest_id: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  // addSpeedrun = (submitted_by, duration, hunters, quest_id) => {
  //   this.props.addSpeedrun(this.state.submitted_by, this.state.duration, this.state.hunters, this.state.quest_id);
  // }

  // deleteSpeedrun = (id) => {
  //   this.props.deleteSpeedrun(id);
  // }

  handleNameChange = (event) => {
    this.setState({submitted_by: event.target.value});
  }

  handleDurationChange = (event) => {
    this.setState({duration: event.target.value});
  }

  questValue = (key, value) => {
    let quest = this.props.questsData.filter(quest => {
      return quest.name.toLowerCase() === value.toLowerCase();
    })
    this.setState({[key]: quest[0]._id});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let submitted_by = this.state.submitted_by.trim();
    let quest_id = this.state.quest_id;
    let duration = this.state.duration;
    this.props.onSpeedrunSubmit({submitted_by: submitted_by, duration: duration, quest_id: quest_id});
    this.setState({submitted_by: '', quest_id: '', duration: '', hunter: ''});
  }

  render() {
    return (
      <div className="SpeedrunForm">
        <form onSubmit={ this.handleSubmit }>
          <input
            placeholder="Username"
            onChange={ this.handleNameChange }
          />
          <AutosuggestComponent data={ this.props.questsData } questValue={ this.questValue } />
          <input
            placeholder="Duration"
            onChange={ this.handleDurationChange }
          />
          <br />
          <input
            type="submit"
            className="add-quest-button"
            value="Submit Speedrun!"
          />
        </form>
      </div>
    );
  }

};

export default SpeedrunForm;