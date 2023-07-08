interface ColorTokenProps {
  color: string;
}

const ColorToken = ({ color }: ColorTokenProps) => {
  return (
    <div
      className="w-6 h-6 border border-gray-200"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default ColorToken;
