import {
  GroupContainer,
  InputContainer,
  InputLabel,
} from '../styles/components/FormInput';

const Input = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <InputContainer onChange={handleChange} {...props} />
    {
      label ? (
        <InputLabel className={props.value.length ? 'shrink' : ''}>
          {label}
        </InputLabel>
      ) : null
    }
  </GroupContainer>
);

export default Input;