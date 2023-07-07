import DesignToken, { Token } from "@/components/design-token";
import "../public/styles.css";
import tokenData from "../tokens.json";

interface TokenData {
  [key: string]: Token;
}
export default function Home() {
  const tokens: TokenData = tokenData as unknown as TokenData;

  return (
    <main>
      {Object.entries(tokens).map(([name, token]: [string, Token], index) => (
        <DesignToken key={index} name={name} token={{ ...token }} />
      ))}
    </main>
  );
}
