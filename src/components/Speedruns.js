import React, { Component } from 'react';

class Speedruns extends Component {
  render() {
    let allSpeedruns = this.props.data.map(speedrun => {
      return(
        <div>
          Quest: { speedrun.quest_id }
          Name: { speedrun.submitted_by }
          Time Spent: { speedrun.duration }
        </div>
      )
    });

    return (
      <div className="Speedruns">
        { allSpeedruns }
      </div>
    )  
  }
};

export default Speedruns;