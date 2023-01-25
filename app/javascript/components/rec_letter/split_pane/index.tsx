import React, {
    createRef,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
import { createContext } from "react";
import RecLetterContext from "./rec_letter_context";
import "./index.css"
import Item from '../../item'
import PreView from "../pre_view";
import PostView from "../post_view";


const SplitPaneContext = createContext( "Default Value" );


const SplitPane = ({ children, ...props }) => {
  const [clientHeight, setClientHeight] = useState(null);
  const [clientWidth, setClientWidth] = useState(null);
  const yDividerPos = useRef(null);
  const xDividerPos = useRef(null);

  const onMouseHoldDown = (e) => {
    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  const onMouseHoldUp = () => {
    yDividerPos.current = null;
    xDividerPos.current = null;
  };

  const onMouseHoldMove = (e) => {
    if (!yDividerPos.current && !xDividerPos.current) {
      return;
    }

    setClientHeight(clientHeight + e.clientY - yDividerPos.current);
    setClientWidth(clientWidth + e.clientX - xDividerPos.current);

    yDividerPos.current = e.clientY;
    xDividerPos.current = e.clientX;
  };

  useEffect(() => {
    document.addEventListener("mouseup", onMouseHoldUp);
    document.addEventListener("mousemove", onMouseHoldMove);

    return () => {
      document.removeEventListener("mouseup", onMouseHoldUp);
      document.removeEventListener("mousemove", onMouseHoldMove);
    };
  });

  return (
    <div {...props}>
      <SplitPaneContext.Provider
        value={{
          clientHeight,
          setClientHeight,
          clientWidth,
          setClientWidth,
          onMouseHoldDown,
        }}
      >
        {children}
      </SplitPaneContext.Provider>
    </div>
  );
};

export const Divider = (props) => {
  const { onMouseHoldDown } = useContext(SplitPaneContext);

  return <div {...props} onMouseDown={onMouseHoldDown} />;
};

export const SplitPaneTop = (props) => {
  const topRef = createRef();
  const { clientHeight, setClientHeight } = useContext(SplitPaneContext);
  const { recLetters, curRecLetter, setCurRecLetter } = useContext(RecLetterContext);

  useEffect(() => {
    if (!clientHeight) {
      setClientHeight(topRef.current.clientHeight);
      return;
    }

    topRef.current.style.minHeight = clientHeight + "px";
    topRef.current.style.maxHeight = clientHeight + "px";
  }, [clientHeight]);

  return (
    <div {...props} className="split-pane-top" ref={topRef}>
      <PreView rec_letters={recLetters}></PreView>
    </div>
  );
};

export const SplitPaneLeft = (props) => {
  const topRef = createRef();
  const { clientWidth, setClientWidth } = useContext(SplitPaneContext);

  useEffect(() => {
    if (!clientWidth) {
      setClientWidth(topRef.current.clientWidth / 2);
      return;
    }

    topRef.current.style.minWidth = clientWidth + "px";
    topRef.current.style.maxWidth = clientWidth + "px";
  }, [clientWidth]);

  return(
    <Item>
      <div {...props} className="split-pane-left" ref={topRef} />
    </Item>
  );
};

export const SplitPaneRight = (props) => {
  const { recLetters, curRecLetter } = useContext(RecLetterContext);
  const selectedRecLetter = recLetters.find((el) => el.rec_letter_id === curRecLetter);
  if (selectedRecLetter === undefined) {
    return <></>
  }
  return (
    <div {...props} className="split-pane-right">
      <PostView comment= {selectedRecLetter.comment}></PostView>
    </div>
  );
};

export default SplitPane;
