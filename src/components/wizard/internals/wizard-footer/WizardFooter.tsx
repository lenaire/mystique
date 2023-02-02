import { FC } from "react";
import styled from "styled-components";
import { CmpPropsWithChildren } from "$types";

const Container = styled.div``;

export interface WizardFooterProps extends CmpPropsWithChildren {}

// TODO:  Strict Styling
export const WizardFooter: FC<WizardFooterProps> = ({ className, children }) => {
  return <Container className={className}>{children && children}</Container>;
};
