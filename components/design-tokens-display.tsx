import Token, { DesignToken } from "@/components/token";

interface DesignTokensDisplayProps {
  tokens: any;
}

function isToken(value: any): value is DesignToken {
  return "$value" in value;
}

const DesignTokensDisplay = ({ tokens }: DesignTokensDisplayProps) => {
  return (
    <div>
      {Object.entries(tokens).map(([key, value], index) =>
        isToken(value) ? (
          <Token key={index} name={key} token={value} />
        ) : (
          <div
            key={index}
            className="mt-4 p-2 pt-0 pr-0 border-l border-b border-black/10 "
          >
            <h2 className="mb-1 text-xs">{key}</h2>
            <DesignTokensDisplay tokens={value} />
          </div>
        )
      )}
    </div>
  );
};

export default DesignTokensDisplay;
