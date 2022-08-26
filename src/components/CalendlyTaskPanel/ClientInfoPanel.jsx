import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import { Theme }  from '@twilio-paste/core/theme';
import { Card, Heading, Text } from '@twilio-paste/core/';
import {OrderedList, UnorderedList, ListItem} from '@twilio-paste/core/list';
import { Table, THead, TBody, Tr , Th, Td } from '@twilio-paste/core/table';


const ClientInfoPanel = (props) => {
    if (props.task === undefined){
        return null;
    }

    return (
        <Theme.Provider theme="default">
            <div className={'row'}>
                <div className={'col'}>
                <Card padding="space200">
                    <Heading as="h2" variant="heading20">Call Information</Heading>
                    <UnorderedList>
                        <ListItem>
                            Customer Name - {props.task.attributes.callerName}
                        </ListItem>
                        <ListItem>
                            Customer Email - {props.task.attributes.callerEmail}
                        </ListItem>
                    </UnorderedList>

                    <Table>
                        <THead>
                            <Tr>
                                <Th>Question</Th>
                                <Th>Answer</Th>
                            </Tr>
                        </THead>
                        <TBody>
                            {Object.keys(props.task.attributes.questions).map((key, index) => (
                                <Tr>
                                    <Td>
                                        <Text as="p">{JSON.stringify(props.task.attributes.questions[key].question)}</Text>
                                    </Td>
                                    <Td>
                                        <Text as="p" >
                                        {JSON.stringify(props.task.attributes.questions[key].answer)}
                                        </Text>
                                    </Td>
                                </Tr>
                            ))}
                        </TBody>
                    </Table>
                </Card>
                </div>
            </div>
        </Theme.Provider>
      );
}



export default withTaskContext(ClientInfoPanel);
