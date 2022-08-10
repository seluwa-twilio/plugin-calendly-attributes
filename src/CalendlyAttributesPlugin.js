import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import CustomTaskList from './components/CustomTaskList/CustomTaskList';
import CalendlyAttributesComponent from './components/CalendlyTaskPanel/CalendlyAttributesComponent';

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
    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(<CustomTaskList key="CalendlyAttributesPlugin-component" />, options);

    flex.TaskInfoPanel.Content.add(<CalendlyAttributesComponent key="calendly-attributes"/>);
  }
}
