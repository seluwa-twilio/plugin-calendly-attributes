import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import ClientInfoPanel from './components/CalendlyTaskPanel/ClientInfoPanel';
import { OutboundButton } from './components/OutboundButton';

const PLUGIN_NAME = 'CalendlyAttributesPlugin';

export default class CalendlyAttributesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    const options = { 
      sortOrder: -1
    };

    flex.AgentDesktopView.Panel2.Content.replace(
      <ClientInfoPanel key ="caller-attributes" />,
      options
    );
    flex.TaskCanvasHeader.Content.add(
      <OutboundButton key ="outbound-call-button"/>,
      {
        sortOrder: 1,
        if : props => 
          props.task.taskStatus === 'assigned' &&
          props.task.attributes.type === 'calendly',
      } 
    )
  }
}
