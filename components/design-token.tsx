export interface Token {
  name: string;
  value: string;
  type:
    | "color"
    | "dimension"
    | "fontFamily"
    | "fontWeight"
    | "duration"
    | "cubicBezier"
    | "number";
  description?: string;
}

interface DesignTokenProps {
  token: Token;
}

const DesignToken = ({ token }: DesignTokenProps) => {
  const { name, value, type } = token;

  let visualization;

  switch (type) {
    case "color":
      visualization = (
        <div className="w-12 h-12" style={{ backgroundColor: value }}></div>
      );
      break;

    case "dimension":
      visualization = (
        <div className="border" style={{ width: value, height: value }}></div>
      );
      break;

    case "fontFamily":
      visualization = (
        <p style={{ fontFamily: value, fontWeight: value }}>Font Family</p>
      );
      break;

    case "fontWeight":
      visualization = (
        <p style={{ fontFamily: value, fontWeight: value }}>Font Weight</p>
      );
      break;

    case "duration":
      const durationInSeconds = parseFloat(value);
      visualization = (
        <div className="w-24 h-1 bg-gray-200 relative">
          <div
            className="h-1 bg-blue-500 absolute left-0"
            style={{
              animation: `progress-bar ${durationInSeconds}s ease-in-out infinite`,
            }}
          />
        </div>
      );
      break;

    case "cubicBezier":
      visualization = (
        <div className="w-8 h-4 bg-gray-200 relative overflow-hidden">
          <div
            className="h-4 w-4 bg-blue-500 absolute left-0"
            style={{
              animation: `move 2s ${value} infinite`,
            }}
          />
        </div>
      );
      break;

    case "number":
      visualization = <div>{value}</div>;
      break;

    default:
      visualization = null;
  }

  return (
    <div className="mb-4 p-2 border-b border-gray-200 grid grid-cols-4 gap-4 items-center">
      <div className="font-semibold ">{name}</div>
      <div className="text-sm text-gray-500 ">{type}</div>
      <div className="text-sm text-gray-500 ">{value}</div>
      <div className="justify-self-center ">{visualization}</div>
    </div>
  );
};

export default DesignToken;
