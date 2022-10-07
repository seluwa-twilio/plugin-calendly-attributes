import React from 'react';
import { Actions } from '@twilio/flex-ui';

import {Button} from '@twilio-paste/core/button';
import { CallOutgoingIcon } from '@twilio-paste/icons/esm/CallOutgoingIcon';
import { Theme }  from '@twilio-paste/core/theme';
import {styled, css} from '@twilio-paste/styling-library';

const Custom = styled.div(
    css({
        marginLeft: 'space0',
        marginRight: 'space30',
        marginTop: 'space30',
        maxWidth: 'space130'
    })
  );


export const OutboundButton = (props) => {
  const outboundCallAttributes = {
    destination: props.task.attributes.callbackNumber || props.task.attributes.from,
    taskAttributes: {
      ...JSON.parse(JSON.stringify(props.task.attributes)),
      type: 'outbound',
      channelType: 'voice',
    },
  };

  delete outboundCallAttributes.taskAttributes['flexChannelInviteSid'];
  delete outboundCallAttributes.taskAttributes['flexInteractionSid'];
  delete outboundCallAttributes.taskAttributes['flexInteractionChannelSid'];
  delete outboundCallAttributes.taskAttributes['conversationSid'];
  delete outboundCallAttributes.taskAttributes['conversations'];
  delete outboundCallAttributes.taskAttributes['reasonsSelected'];
  delete outboundCallAttributes.taskAttributes['reasonsUnselected'];

  return (
    <Theme.Provider theme='default'>
        <Custom>
            <Button varinant="secondary" size="circle" onClick={() => {
            console.log('@@ starting outbound call. Attributes: ', outboundCallAttributes);
            Actions.invokeAction('StartOutboundCall', outboundCallAttributes);}}>
                <CallOutgoingIcon decorative={false} title="" size="sizeIcon40" />
            </Button>
        </Custom>
    </Theme.Provider>
  );
};
