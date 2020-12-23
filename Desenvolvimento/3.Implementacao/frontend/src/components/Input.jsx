import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from '../styles/components/Input';

const FormInput = ({ handleChange, label, labelFixed, ...props }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {
      label ? (
        <FormInputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </FormInputLabel>
      ) : null
    }
  </GroupContainer>
);

export default FormInput;