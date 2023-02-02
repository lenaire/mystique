import { forwardRef, useCallback, useEffect, useState, useRef, MouseEvent } from "react";
import styled, { DefaultTheme } from "styled-components";
import { CmpProps } from "$types";
import { Icon, IconType } from "$cmp/icon/Icon";
import { isPromise } from "$utility/promiseFunctions";
import { Direction } from "$utility/enums";

export type ButtonType = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";

type ClickCallback = (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;

const getBackgroundColor = (
  theme: DefaultTheme,
  type: ButtonType,
  disabled: boolean | undefined
): string => {
  if (disabled) return theme.palette.grey[400];

  if (type === "secondary") return "transparent";

  // #1ea7fd
  return theme.palette[type].main;
};

export interface ButtonProps extends CmpProps {
  /**
   * Is this the principal call to action on the page?
   */
  type?: ButtonType;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * Button contents
   */
  label: string;
  submittingLabel?: string;
  disabled?: boolean;
  isSubmit?: boolean;
  direction?: Direction;
  /**
   * Optional click handler
   */
  onClick?: ClickCallback;
}

const Container = styled.button<{
  $size: ButtonSize;
  $type: ButtonType;
  $disabled: boolean;
}>`
  height: ${(props): string => `${props.theme.palette.button[props.$size].height}px`};
  padding: ${(props): string => `${props.theme.palette.button[props.$size].padding}`};
  font-size: ${(props): string => `${props.theme.palette.button[props.$size].fontSize}pt`};
  color: ${(props): string => `${props.$type === "primary" ? "#fff" : " #333"}`};
  background-color: ${(props): string =>
    getBackgroundColor(props.theme, props.$type, props.$disabled)};
  box-shadow: ${(props): string =>
    `${props.$type === "primary" ? "" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"}`};
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: ${(props): string => `${props.theme.palette.button[props.$size].fontSize}pt`};
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  cursor: ${(props): string | undefined => (props.$disabled ? "default" : undefined)};
`;

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "primary",
      size = "md",
      label,
      onClick,
      submittingLabel,
      isSubmit,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isMountedRef = useRef(true);
    useEffect(() => {
      isMountedRef.current = true;
      return (): void => {
        isMountedRef.current = false;
      };
    }, []);

    const asyncOnClick = useCallback(
      (event: MouseEvent<HTMLButtonElement>) => {
        if (!isSubmit) {
          event.preventDefault();
        }

        if (onClick) {
          const result = onClick(event);

          if (isPromise(result)) {
            setIsSubmitting(true);
            result
              .then(() => {
                if (isMountedRef.current) {
                  setIsSubmitting(false);
                }
              })
              .catch((e) => {
                if (isMountedRef.current) {
                  setIsSubmitting(false);
                }

                throw e;
              });
          }
        }
      },
      [onClick, isSubmit]
    );

    const handleClick = ((): ClickCallback | undefined => {
      if (disabled) return undefined;

      return asyncOnClick;
    })();

    return (
      <Container
        type={isSubmit ? "submit" : "button"}
        className={className}
        ref={ref}
        $type={type}
        $size={size}
        $disabled={disabled || isSubmitting}
        onClick={handleClick}
        {...rest}
      >
        {/* TODO: Typography component */}
        {isSubmitting ? submittingLabel : label}
      </Container>
    );
  }
);
