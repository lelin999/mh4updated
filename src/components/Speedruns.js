import React, { Component } from 'react';

class Speedruns extends Component {
  render() {
    let allSpeedruns = this.props.data.map(speedrun => {
      return(
        <div>
          <div className="SoloQuest">
            ID: { speedrun._id }
            Quest: { speedrun.quest_id }
            Name: { speedrun.submitted_by }
            Time Spent: { speedrun.duration }
          </div>
          <div className="RemoveButton">
            <button type="button"
              onClick={() => this.props.delete(speedrun._id)}
            >
              Remove this Quest
            </button>
          </div>
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