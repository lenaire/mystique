import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translate3d(110%, 0, 0);    
  }

  to {
    transform: translate3d(0, 0, 0);  
  }
`;

export const slideOutRight = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(110%, 0, 0);
  }  
`;

export const slideInLeft = keyframes`
  from {
    transform: translate3d(-110%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutLeft = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideInDown = keyframes`
  from {
    transform: translate3d(0, -110%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutDown = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 500px, 0);
  }
`;

export const slideInUp = keyframes`
  from {
    transform: translate3d(0, 110%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const slideOutUp = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -500px, 0);
  }
`;
