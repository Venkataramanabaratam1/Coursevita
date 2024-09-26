import "./styles.css"

function finalizedata(finaldata) {
  let result_string = 'On ' + finaldata.date.substring(0, 10) + ' at ' + finaldata.date.substring(11, 19) + ' Hrs';
  result_string += " : This User made a ";
  let type = finaldata.type;
  type = type.replace('Event', '') + ' Action';
  result_string += type;
  result_string += ' to Repo @ : ' + 'github.com/' + finaldata.repo_name;
  return result_string;
}

function ProfileActions(data) {
  // Slice the data array to get only the first 2 or 3 elements
  const recentActions = data.data.slice(0, 3); // Adjust 3 to 2 if you want exactly 2 actions

  return recentActions.map((val, index) => {
    if (index % 2 === 0) {
      return (
        <h4 className="rec even" key={val.date}>
          <img src="https://img.icons8.com/ios-filled/50/000000/clock--v1.png" alt="clock icon"/>
          {finalizedata(val)}
        </h4>
      );
    } else {
      return (
        <h4 className="rec odd" key={val.date}>
          <img src="https://img.icons8.com/ios-filled/50/000000/clock--v1.png" alt="clock icon"/>
          {finalizedata(val)}
        </h4>
      );
    }
  });
}

export default ProfileActions;
