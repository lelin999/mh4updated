import React, { Component } from 'react';
import axios from 'axios';
import 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from '../components/Main';
import Quests from '../components/Quests';
import Speedruns from '../components/Speedruns';
import SpeedrunForm from '../components/SpeedrunForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questsData: [],
      speedRunningData: []
    }
  }

  loadQuests = () => {
    axios.get("http://localhost:8000/quests").then(res => {
      this.setState({questsData: res.data});
    }).catch(err => {
      console.log("error", err);
    })
  }

  loadSpeedruns = () => {
    axios.get("http://localhost:8000/speedruns/all").then(res => {
      this.setState({speedRunningData: res.data});
    }).catch(err => {
      console.log("error", err);
    })
  }

  handleSpeedrunSubmit = (speedrun) => {
    let speedRuns = this.state.speedRunningData;
    let newSpeedRuns = speedRuns.concat([speedrun]);
    this.setState({speedRunningData: newSpeedRuns});
    axios.post("http://localhost:8000/speedruns/new", speedrun).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("error", err);
      this.setState({speedRunningData: speedRuns});
    })
    console.log(this.state, "handleSubmit state");
  }

  componentDidMount = () => {
    this.loadQuests();
    this.loadSpeedruns();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/quests">Quests</Link></li>
            <li><Link to="/speedruns">All Speedruns</Link></li>
            <li><Link to="/new">Enter a Speedrun!</Link></li>
          </ul>
          <Route exact path="/" component={Main} />
          <Route path="/quests" render={() => <Quests data={this.state.questsData}/>} />
          <Route path="/speedruns" render={() => <Speedruns data={this.state.speedRunningData}/>} />
          <Route path="/new" render={() => <SpeedrunForm onSpeedrunSubmit={this.handleSpeedrunSubmit} questsData={this.state.questsData} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;