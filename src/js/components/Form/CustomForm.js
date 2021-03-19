import React from 'react';

import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Grommet,
  MaskedInput,
  RadioButtonGroup,
  RangeInput,
  Select,
  TextArea,
  TextInput,
  Layer,
  Heading,
  DateInput
} from 'grommet';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const customTheme = {
  global: {
    font: {
      size: '16px',
    },
    input: {
      weight: 400,
    },
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'small',
      margin: 'xsmall',
      weight: 600,
    },
    border: {
      position: 'outer',
      side: 'all',
    },
    disabled: {
      background: {
        color: 'status-disabled',
        opacity: true,
      },
    },
    content: {
      pad: 'small',
    },
    error: {
      background: {
        color: 'status-critical',
        opacity: 'weak',
      },
    },
    margin: 'none',
  },
};

export const CustomForm = ({state, closeModal}) => (
<Layer position="center" onClickOutside={closeModal} onEsc={closeModal}>
  <Grommet min theme={deepMerge(grommet, customTheme)}>
    <Box fill align="center" justify="center">
        <Heading level={3}>
          Fill out
        </Heading>
      <Box pad="medium" gap="small" width="medium"> 
        <Form
          onReset={event => console.log(event)}
          onSubmit={({ value }) => console.log('Submit', value)}
        >
          <FormField label="Name" name="name" required>
            <TextInput name="name" />
          </FormField>
          <FormField label="Location" name="location" required>
            <TextInput name="location" />
          </FormField>
          <FormField label="Date" name="date" required>
          <DateInput
            format="yyyy/mm/dd"
            value={(new Date()).toISOString()}
            onChange={({ value }) => {}}
          />
          </FormField>
          <FormField label="Percent" name="percent">
            <RangeInput name="percent" min={0} max={100} />
          </FormField>
          <FormField label="Paid" name="paid" required>
            <TextInput name="paid" />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <Button onClick={closeModal} label="Cancel" />
            <Button type="reset" label="Reset" />
            <Button type="submit" label="Update" primary />
          </Box>
        </Form>
      </Box>
    </Box>
  </Grommet>
</Layer>
);

export default {
  title: 'Input/Form/CustomForm',
};