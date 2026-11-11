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
  isScrolled: boolean;
  handleClick: () => void;
  displayNone: () => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
  visible: boolean;
}

const ImagesContext = createContext<ImagesContextProps | undefined>(undefined);

function ImagesProvider({ children }: ImagesProviderProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [sameRatio, setSameRatio] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(function handleClick() {
    setIsScrolled(true);
    setVisible(false);
  }, []);

  function changeObjectFit() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  function scrollFromTop() {
    const isAtTop = window.scrollY === 0;

    setIsScrolled(!isAtTop);
    setVisible(isAtTop);

    if (isAtTop && buttonRef.current) {
      buttonRef.current.style.display = "block";
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
    window.addEventListener("scroll", scrollFromTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollFromTop);
    };
  }, []);

  useEffect(() => {
    if (width / height === 16 / 9 || width / height === 16 / 10) {
      setSameRatio(true);
    } else {
      setSameRatio(false);
    }
  }, [width, height]);

  return (
    <ImagesContext.Provider
      value={{
        width,
        height,
        sameRatio,
        isScrolled,
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
