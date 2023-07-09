type Types =
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontWeight"
  | "duration"
  | "cubicBezier"
  | "number";

type CompositeTypes =
  | "strokeStyle"
  | "border"
  | "transition"
  | "shadow"
  | "gradient"
  | "typography";

interface CompositeValue {
  [key: string]: string | number;
}

interface DesignToken {
  $type: Types;
  $value: string | number;
  $description?: string;
}

interface CompositeDesignToken {
  $type: CompositeTypes;
  $value: CompositeValue;
  $description?: string;
}

interface DesignTokenGroup {
  [key: string]: DesignToken | CompositeDesignToken | DesignTokenGroup;
}

export type DesignTokens = DesignTokenGroup;
