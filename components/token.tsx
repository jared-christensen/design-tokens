import ColorToken from "./color-token";
import CubicBezierToken from "./cubic-bezier-token";
import DimensionToken from "./dimension-token";
import DurationToken from "./duration-token";
import FontFamilyToken from "./font-family-token";
import FontWeightToken from "./font-weight-token";
import NumberToken from "./number-token";

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
  const { $value, $type, $description } = token;

  let visualization;

  switch ($type) {
    case "color":
      visualization = <ColorToken color={$value}></ColorToken>;
      break;

    case "dimension":
      visualization = <DimensionToken dimension={$value}></DimensionToken>;
      break;

    case "fontFamily":
      visualization = <FontFamilyToken fontFamily={$value}></FontFamilyToken>;
      break;

    case "fontWeight":
      visualization = <FontWeightToken fontWeight={$value}></FontWeightToken>;
      break;

    case "duration":
      visualization = <DurationToken duration={$value}></DurationToken>;
      break;

    case "cubicBezier":
      visualization = (
        <CubicBezierToken cubicBezier={$value}></CubicBezierToken>
      );
      break;

    case "number":
      visualization = <NumberToken number={$value}></NumberToken>;
      break;

    default:
      visualization = null;
  }

  return (
    <div className="my-px p-1 bg-white grid grid-cols-4 gap-4 items-center">
      <div>
        <div className="font-semibold ">{name}</div>
      </div>
      <div className="text-sm text-gray-500 ">{$type}</div>
      <div className="text-sm text-gray-500 ">{$value}</div>
      <div>{visualization}</div>
      {/* <div className="text-sm text-gray-500 col-span-4">{$description}</div> */}
    </div>
  );
};

export default Token;
