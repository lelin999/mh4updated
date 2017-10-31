import React, { Component } from 'react';
//delete _id

class Quests extends Component {
  render() {
    let allQuests = this.props.data.map(quest => {
      return(
        <div>
          Name: { quest._id }
          Type: { quest.type }
          Rank: { quest.rank }
        </div>
      )
    });

    return (
      <div className="Quests">
        { allQuests }
      </div>
    )  
  }
};

export default Quests;