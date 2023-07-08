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
            className="mt-4 p-2 pt-0 pr-0 border-l border-b border-black/10 "
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
