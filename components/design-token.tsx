export interface Token {
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

interface DesignTokenProps {
  token: Token;
  name: string;
}

const DesignToken = ({ token, name }: DesignTokenProps) => {
  const { $value, $type } = token;

  let visualization;

  switch ($type) {
    case "color":
      visualization = (
        <div className="w-12 h-12" style={{ backgroundColor: $value }}></div>
      );
      break;

    case "dimension":
      visualization = (
        <div className="border" style={{ width: $value, height: $value }}></div>
      );
      break;

    case "fontFamily":
      visualization = (
        <p style={{ fontFamily: $value, fontWeight: $value }}>Font Family</p>
      );
      break;

    case "fontWeight":
      visualization = (
        <p style={{ fontFamily: $value, fontWeight: $value }}>Font Weight</p>
      );
      break;

    case "duration":
      visualization = (
        <div className="w-24 h-2 bg-gray-200 relative">
          <div
            className="h-2 bg-blue-500 absolute left-0"
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
        <div className="w-24 h-2 bg-gray-200 relative">
          <div
            className="h-2 bg-blue-500 absolute left-0"
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
    <div className="mb-4 p-2 border-b border-gray-200 grid grid-cols-4 gap-4 items-center">
      <div className="font-semibold ">{name}</div>
      <div className="text-sm text-gray-500 ">{$type}</div>
      <div className="text-sm text-gray-500 ">{$value}</div>
      <div className="justify-self-center ">{visualization}</div>
    </div>
  );
};

export default DesignToken;
