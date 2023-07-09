import { DesignTokens } from "@/types";
import "../public/styles.css";
import tokenData from "../tokens.json";
import DesignTokensDisplay from "@/components/design-tokens-display";

export default function Home() {
  const tokens = tokenData as DesignTokens;

  return (
    <main className="p-2">
      <DesignTokensDisplay tokens={tokens} />
    </main>
  );
}
