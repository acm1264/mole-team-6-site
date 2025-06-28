import "styled-components";
import { ThemeType } from "./theme";

// provide intellisense for global theme
declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}
