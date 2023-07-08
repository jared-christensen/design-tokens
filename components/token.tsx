import ColorToken from "./color-token";
import FontWeightToken from "./font-weight-token";

export interface DesignToken {
  $value: string;
  $type:
    | "color"
    | "dimension"
    | "fontFamily"
    | "fontWeight"
    | "duration"
    | "cubicBezier"
    | "number";
  $description?: string;
}

interface TokenProps {
  token: DesignToken;
  name: string;
}

const Token = ({ token, name }: TokenProps) => {
  const { $value, $type } = token;

  let visualization;

  switch ($type) {
    case "color":
      visualization = <ColorToken color={$value}></ColorToken>;
      break;

    case "dimension":
      visualization = (
        <div className="bg-blue-500 h-6" style={{ width: $value }}></div>
      );
      break;

    case "fontFamily":
      visualization = (
        <p style={{ fontFamily: $value, fontWeight: $value }}>Font Family</p>
      );
      break;

    case "fontWeight":
      visualization = <FontWeightToken fontWeight={$value}></FontWeightToken>;
      break;

    case "duration":
      visualization = (
        <div className="w-24 h-6 bg-gray-200 relative">
          <div
            className="h-6 bg-blue-500 absolute left-0"
            style={{
              animationName: "width",
              animationDuration: `${$value}`,
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationTimingFunction: "linear",
            }}
          />
        </div>
      );
      break;

    case "cubicBezier":
      visualization = (
        <div className="w-24 h-6 bg-gray-200 relative">
          <div
            className="h-6 bg-blue-500 absolute left-0"
            style={{
              animationName: "width",
              animationDuration: `1s`,
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              animationTimingFunction: `${$value}`,
            }}
          />
        </div>
      );
      break;

    case "number":
      visualization = <div>{$value}</div>;
      break;

    default:
      visualization = null;
  }

  return (
    <div className="my-px p-1 bg-white grid grid-cols-4 gap-4 items-center">
      <div className="font-semibold ">{name}</div>
      <div className="text-sm text-gray-500 ">{$type}</div>
      <div className="text-sm text-gray-500 ">{$value}</div>
      <div>{visualization}</div>
    </div>
  );
};

export default Token;
