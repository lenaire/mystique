import { FC } from "react";
import { createPortal } from "react-dom";
import styled, {
  Keyframes,
  css,
  FlattenSimpleInterpolation,
  DefaultTheme,
} from "styled-components";
import { CmpProps } from "$types";
import { Icon, IconType } from "$cmp/icon/Icon";
import { Direction, Position, NotificationType } from "$utility/enums";
import { useToaster } from "./internals/useToaster";
import { slideInUp, slideInDown, slideInLeft, slideInRight } from "$utility/animations";

const TransitionMap: Record<string, Keyframes> = {
  [Direction.Up]: slideInUp,
  [Direction.Down]: slideInDown,
  [Direction.Left]: slideInLeft,
  [Direction.Right]: slideInRight,
};

const IconMap: Record<string, { color: (theme: DefaultTheme) => string; icon: IconType }> = {
  [NotificationType.Info]: {
    color: (theme: DefaultTheme): string => theme.palette.info.main,
    icon: "alert",
  },
  [NotificationType.Success]: {
    color: (theme: DefaultTheme): string => theme.palette.success.main,
    icon: "check",
  },
  [NotificationType.Error]: {
    color: (theme: DefaultTheme): string => theme.palette.error.main,
    icon: "error",
  },
  [NotificationType.Warning]: {
    color: (theme: DefaultTheme): string => theme.palette.warning.main,
    icon: "error",
  },
};

const PositionMap: Record<string, FlattenSimpleInterpolation> = {
  [Position.TopRight]: css`
    top: 1em;
    right: 1em;
  `,
  [Position.TopLeft]: css`
    top: 1em;
    left: 1em;
  `,
  [Position.BottomRight]: css`
    bottom: 1em;
    right: 1em;
  `,
  [Position.BottomLeft]: css`
    bottom: 1em;
    left: 1em;
  `,
};

const StyledIcon = styled(Icon)<{ $type: NotificationType }>`
  fill: ${(props): string => IconMap[props.$type].color(props.theme)};
  padding-right: 5px;
`;

const Toast = styled.div<{
  isActive: boolean;
  direction: Direction;
  duration: number;
  position: Position;
}>`
  position: fixed;
  top: 1em;
  right: 1em;
  padding: 4px;
  background: ${(props): string => props.theme.palette.common.white};
  width: 312px;
  height: 80px;
  border-radius: 8px;
  z-index: 10000;
  border: 1px solid ${(props): string => props.theme.palette.grey[300]};
  box-shadow: 0px 4px 4px rgba(177, 144, 198, 0.05), 0px 0px 20px rgba(177, 144, 198, 0.15);
  ${(props): Keyframes | false | FlattenSimpleInterpolation | string | undefined =>
    props.isActive
      ? css`
          animation: ${TransitionMap[props.direction]} 0.5s;
          animation-delay: 0s, ${props.duration}ms;
        `
      : css`
          opacity: 0;
          transition: visibility 0s, opacity 0.5s linear;
        `};
  ${(props): FlattenSimpleInterpolation => PositionMap[props.position]};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Container = styled.div``;

const Body = styled.div`
  padding: 0 6px;
  display: flex;
  align-items: center;
`;

const getRootElement = (id: string): HTMLElement => document.getElementById(id) as HTMLElement;

export interface ToasterProps extends CmpProps {
  portalId: string;
  position?: Position;
  type?: NotificationType;
  direction?: Direction;
  onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Toaster: FC<ToasterProps> = ({
  portalId,
  className,
  type = NotificationType.Info,
  direction = Direction.Right,
  position = Position.TopRight,
  onClose,
  ...rest
}) => {
  const { toasts, duration } = useToaster({});

  return createPortal(
    <Container className={className} {...rest}>
      {toasts.map((toast: any) => {
        return (
          <Toast
            key={toast.id}
            isActive={toast.active}
            duration={duration}
            direction={direction}
            position={position}
          >
            <Header>
              <button
                onClick={(event): void => {
                  onClose?.(event);
                }}
              >
                <Icon icon="close" />
              </button>
            </Header>
            <Body>
              <StyledIcon $type={type} icon={IconMap[type].icon} />
              {toast.content}
            </Body>
          </Toast>
        );
      })}
    </Container>,
    getRootElement(portalId)
  );
};
