import {FormInputLabel, Group, Input} from './form-input.style.jsx';

const FormInput = ({ label, ...otherProps}) => {
  return(
    <Group>
        <Input className="form-input" {...otherProps} />
        { label && (
            <FormInputLabel shrink={otherProps.value.length} >
              {label}
            </FormInputLabel>
        )}
    </Group>
  )
}

export default FormInput;