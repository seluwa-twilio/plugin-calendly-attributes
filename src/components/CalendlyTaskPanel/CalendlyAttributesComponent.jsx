import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import { Heading } from '@twilio-paste/core';

import { Theme } from '@twilio-paste/core/theme';



const CalendlyAttributesComponent = (props) => {


  return (
    <Theme.Provider theme="default">
         <div>
            <br />
            <Heading as='h3' variant='heading30'>Additional task information</Heading>
            <ul>
              <li>Customer Name - {props.task.attributes.callerName}</li>
              <li>Customer Email - {props.task.attributes.callerEmail}</li>
              <li>Event Uri - {props.task.attributes.eventUrl}</li>
              <li>Questions</li>
              {Object.keys(props.task.attributes.questions).map((key, index) => (
                  <li>Question {key}: {JSON.stringify(props.task.attributes.questions[key].question)} Answer: {JSON.stringify(props.task.attributes.questions[key].answer)}</li>
                ))}
             </ul>
         </div>
    </Theme.Provider>
  );

}



export default withTaskContext(CalendlyAttributesComponent);