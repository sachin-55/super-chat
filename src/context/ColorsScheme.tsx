import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  subscribeChangeColorScheme,
  subscribeColors,
  subscribeColorsScheme,
} from "../subscribers/colorSubscribers";
import { ColorSchemeType, ColorsType, main, secondary } from "../theme/colors";

interface IColorsSchemeContext {
  colors: ColorsType;
  changeColorScheme: (colorScheme: ColorSchemeType) => void;
  colorScheme: ColorSchemeType;
}

const ColorsSchemeContext = createContext<IColorsSchemeContext>({
  colors: main,
  changeColorScheme: () => {},
  colorScheme: "default",
});

export const ColorsSchemeProvider = ({ children }: { children: ReactNode }) => {
  const [colors, setColors] = useState<ColorsType>(main);
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>("default");

  const handleChangeColorsScheme = useCallback(
    (newColorScheme: ColorSchemeType) => {
      const selectedColors = newColorScheme === "dark" ? secondary : main;
      setColors(selectedColors);
      setColorScheme(newColorScheme);
    },
    []
  );

  useEffect(() => {
    const unsubscribeColorsScheme = subscribeColorsScheme(colorScheme);
    const unsubscribeColors = subscribeColors(colors);
    const unsubscribeChangeColorScheme = subscribeChangeColorScheme(
      handleChangeColorsScheme
    );

    return () => {
      unsubscribeColorsScheme();
      unsubscribeColors();
      unsubscribeChangeColorScheme();
    };
  }, [colorScheme, colors, handleChangeColorsScheme]);

  return (
    <ColorsSchemeContext.Provider
      value={{
        colors,
        changeColorScheme: handleChangeColorsScheme,
        colorScheme,
      }}
    >
      {children}
    </ColorsSchemeContext.Provider>
  );
};
