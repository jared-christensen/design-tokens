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

type ShadowToken = {
  $type: "shadow";
  $value: {
    color: string;
    offsetX: string;
    offsetY: string;
    blur: string;
    spread: string;
  };
};

interface DesignToken {
  $type: TokenTypes;
  $value: string | number;
  $description?: string;
}

interface DesignTokenGroup {
  [key: string]: DesignToken | DesignTokenGroup;
}

export type DesignTokens = DesignTokenGroup;
