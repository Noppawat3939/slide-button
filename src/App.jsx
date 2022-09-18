import * as Styled from "./App.styled";
import { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const items = ["1", "2"];
  const [preIndex, setPreIndex] = useState(0);
  const [isSelect, setIsSelect] = useState(1);

  const [itemStyle] = useState({
    width: 80,
    height: 80,
    gap: 10,
  });

  const itemRef = useRef(null);
  const slideRef = useRef(null);

  const handleClick = (curIndex) => {
    const quantityItem = curIndex - preIndex;
    setIsSelect(curIndex + 1);

    const stepScroll = (itemStyle.width + itemStyle.gap) * quantityItem;

    if (curIndex > preIndex) {
      slideRef.current.scrollLeft += stepScroll;
      setPreIndex(curIndex);
    } else if (curIndex < preIndex) {
      slideRef.current.scrollLeft += stepScroll;
      setPreIndex(curIndex);
    } else {
      setPreIndex(curIndex);
    }
  };

  const handleScroll = () => {
    //TODO: handle select style
    console.log("scrolling");
  };

  return (
    <Styled.Container>
      <Styled.Select
        width={`${itemStyle.width}px`}
        height={`${itemStyle.height}px`}
      />
      <Styled.SlideContainer ref={slideRef} onScroll={handleScroll}>
        <Styled.Wrap gap={`${itemStyle.gap}px`} itemStyle={itemStyle}>
          {items.map((item, i) => (
            <Styled.Item
              ref={itemRef}
              key={i}
              isSelect={isSelect !== i + 1}
              onClick={() => handleClick(i)}
              width={`${itemStyle.width}px`}
              height={`${itemStyle.height}px`}
            >{`Item ${item}`}</Styled.Item>
          ))}
        </Styled.Wrap>
      </Styled.SlideContainer>
    </Styled.Container>
  );
};

export default App;
