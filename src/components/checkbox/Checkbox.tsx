import { useId, forwardRef, useCallback, ChangeEvent, useState } from "react";
import { Icon } from "$cmp/icon/Icon";
import styled from "styled-components";
import { CmpProps } from "$types";

const Container = styled.div``;

const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.input`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

const Box = styled.span<{ $error: boolean; $checked: boolean }>`
  height: 20px;
  width: 20px;
  background-color: ${(props): string =>
    props.$checked ? props.theme.palette.primary.main : props.theme.palette.common.white};
  border: 1px solid
    ${(props): string => {
      if (props.$error) return props.theme.palette.error.main;

      if (props.$checked) return props.theme.palette.primary.main;

      return props.theme.palette.grey[300];
    }};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Check = styled(Icon)`
  fill: ${(props): string => props.theme.palette.common.white};
  height: 100%;
  width: 100%;
`;

const Text = styled.span`
  padding-left: 8px;
`;

export interface CheckboxProps extends CmpProps {
  id?: string;
  label?: string;
  ariaLabel?: string;
  defaultValue?: boolean;
  onChange: (val: boolean) => void;
  onBlur?: (val: boolean) => void;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      onChange,
      onBlur,
      ariaLabel,
      className,
      defaultValue = false,
      error = false,
      ...rest
    },
    ref
  ) => {
    const [checked, setChecked] = useState(defaultValue);
    const inputId = useId();
    const elemId = id || inputId;

    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
        onBlur?.(event.target.checked);
        setChecked(!checked);
      },
      [onChange, onBlur, checked]
    );

    return (
      <Container className={className} {...rest}>
        <Label aria-label={ariaLabel} htmlFor={elemId}>
          <Input
            id={elemId}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            data-testid="toggle-input"
            ref={ref}
          />
          {/* TODO: Typography component */}
          <Box $checked={checked} $error={!!error}>
            <Check icon="check" />
          </Box>
          {label && <Text>{label}</Text>}
        </Label>
      </Container>
    );
  }
);
