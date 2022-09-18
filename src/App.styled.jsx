import styled from "styled-components";

export const Container = styled.main`
  font-family: Arial, Helvetica, sans-serif;
`;

export const SlideContainer = styled.section`
  margin: auto;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  background-color: #303030;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrap = styled.div`
  display: inline-flex;
  gap: ${({ gap }) => gap || 0};
  width: max-content;
  height: max-content;
  margin: 0 ${({ itemStyle: { width, gap } }) => `${(width + gap) * 3}px`};
`;

export const Item = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  line-height: ${({ height }) => height};
  scroll-snap-align: center;
  transition: 0.4s ease-in-out;

  background-color: lightseagreen;
  opacity: ${({ isSelect }) => (isSelect ? 0.65 : 1)};
`;

export const Select = styled.span`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  border: 5px solid white;
  background: none;
`;
