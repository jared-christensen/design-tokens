import { DesignToken } from "@/components/token";
import "../public/styles.css";
import tokenData from "../tokens.json";
import TokenGroup from "@/components/token-group";

interface TokenData {
  [key: string]: DesignToken | TokenData;
}

export default function Home() {
  const tokens: TokenData = tokenData as unknown as TokenData;

  return (
    <main className="p-2">
      <TokenGroup group={tokens} />
    </main>
  );
}
