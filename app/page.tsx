import DesignToken, { Token } from "@/components/design-token";
import "../public/styles.css";

export default function Home() {
  const tokens: Token[] = [
    {
      name: "Primary color",
      value: "#0070f3",
      type: "color",
    },
    {
      name: "Margin",
      value: "16px",
      type: "dimension",
    },
    {
      name: "Main font",
      value: "Arial, sans-serif",
      type: "fontFamily",
    },
    {
      name: "Bold weight",
      value: "700",
      type: "fontWeight",
    },
    {
      name: "Fade duration",
      value: ".3s",
      type: "duration",
    },
    {
      name: "Ease-in-out",
      value: "cubic-bezier(0.4, 0, 0.2, 1)",
      type: "cubicBezier",
    },
    {
      name: "Opacity level",
      value: "0.7",
      type: "number",
    },
  ];
  return (
    <main>
      {tokens.map((token, index) => (
        <DesignToken key={index} token={token} />
      ))}
    </main>
  );
}
