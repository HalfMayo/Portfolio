import {
  useEffect,
  useState,
  useCallback,
  useRef,
  ReactNode,
  createContext,
  useContext,
  RefObject,
} from "react";

interface ImagesProviderProps {
  children: ReactNode;
}

interface ImagesContextProps {
  width: number;
  height: number;
  sameRatio: boolean;
  offsetY: number;
  handleClick: () => void;
  displayNone: () => void;
  buttonRef: RefObject<HTMLButtonElement>;
  visible: boolean;
}

const ImagesContext = createContext<ImagesContextProps | undefined>(undefined);

function ImagesProvider({ children }: ImagesProviderProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [sameRatio, setSameRatio] = useState<boolean>(false);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(function handleClick() {
    setOffsetY(50);
    setVisible(false);
  }, []);

  function changeObjectFit() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  function scrollFromTop() {
    if (window.scrollY > 100) return;
    else if (window.scrollY === 0 && buttonRef.current) {
      setOffsetY(window.scrollY);
      setVisible(true);
      buttonRef.current.style.display = "block";
    } else {
      setOffsetY(window.scrollY);
      setVisible(false);
    }
  }

  function displayNone() {
    if (buttonRef.current && !visible) {
      buttonRef.current.style.display = "none";
    }
  }

  useEffect(() => {
    window.addEventListener("resize", changeObjectFit);

    return () => {
      window.removeEventListener("resize", changeObjectFit);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollFromTop);

    return () => {
      document.removeEventListener("scroll", scrollFromTop);
    };
  }, []);

  useEffect(() => {
    if (
      innerWidth / innerHeight === 16 / 9 ||
      innerWidth / innerHeight === 16 / 10
    ) {
      setSameRatio(true);
    } else setSameRatio(false);
  }, []);

  return (
    <ImagesContext.Provider
      value={{
        width,
        height,
        sameRatio,
        offsetY,
        handleClick,
        displayNone,
        buttonRef,
        visible,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

function useImages() {
  const context = useContext(ImagesContext);
  if (context === undefined)
    throw new Error("Context was used outside of Provider");
  return context;
}

export { ImagesProvider, useImages };
