import Token, { DesignToken } from "@/components/token";

interface TokenData {
  [key: string]: DesignToken | TokenData;
}

interface TokenGroupProps {
  group: TokenData;
}

function isToken(value: DesignToken | TokenData): value is DesignToken {
  return "$value" in value;
}

const TokenGroup = ({ group }: TokenGroupProps) => {
  return (
    <div>
      {Object.entries(group).map(([key, value], index) =>
        isToken(value) ? (
          <Token key={index} name={key} token={value} />
        ) : (
          <div
            key={index}
            className="mb-2 p-2 pb-0 border-l border-b border-black/10 "
          >
            <h2 className="mb-1 text-xs">{key}</h2>
            <TokenGroup group={value} />
          </div>
        )
      )}
    </div>
  );
};

export default TokenGroup;
