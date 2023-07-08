interface ColorTokenProps {
  color: string;
}

const ColorToken = ({ color }: ColorTokenProps) => {
  return (
    <div className="flex items-center">
      <div
        className="w-6 h-6 border border-gray-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="text-sm ml-1 text-gray-500">{color}</div>
    </div>
  );
};

export default ColorToken;
