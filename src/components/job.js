import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = (props) => {
  var plu = "";
  if (props.offer.salary === 1) {
    plu = "millionSingular";
  } else {
    plu = "millionPlural";
  }

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        {props.offer.salary + " "}
        <FormattedMessage id={plu} />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
      {console.log(navigator.language)}
    </tr>
  );
};

export default Job;
