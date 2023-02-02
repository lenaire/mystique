import { FC } from "react";
import styled from "styled-components";
import { CmpPropsWithChildren } from "$types";

const Container = styled.div``;

export interface WizardHeaderProps extends CmpPropsWithChildren {
  title?: string | React.ReactNode;
}

export const WizardHeader: FC<WizardHeaderProps> = ({ className, title, children }) => {
  return (
    // TODO:
    <Container className={className}>
      {title && title}
      {children && children}
    </Container>
  );
};
