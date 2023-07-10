type TokenTypes =
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "cubicBezier"
  | "number"
  | "strokeStyle"
  | "border"
  | "transition"
  | "shadow"
  | "gradient"
  | "typography";

type BaseToken = {
  $description?: string;
  $extention?: string;
};

interface ColorToken extends BaseToken {
  $type?: "color";
  $value: string;
}

interface DimensionToken extends BaseToken {
  $type?: "dimension";
  $value: string;
}
interface DesignToken extends BaseToken {
  $type?: TokenTypes;
  $value: string | number;
}
interface ShadowToken extends BaseToken {
  $type?: "shadow";
  $value: {
    color: string;
    offsetX: string;
    offsetY: string;
    blur: string;
    spread: string;
  };
}

interface TypographyToken extends BaseToken {
  $type?: "typography";
  $value: {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    letterSpacing: string;
    lineHeight: number;
  };
}

interface DesignTokenGroup {
  [key: string]: DesignToken | DesignTokenGroup;
}

export type DesignTokens = DesignTokenGroup;
