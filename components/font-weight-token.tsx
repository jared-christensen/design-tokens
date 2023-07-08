interface FontWeightTokenProps {
  fontWeight: string;
}

const FontWeightToken = ({ fontWeight }: FontWeightTokenProps) => {
  return <p style={{ fontWeight: fontWeight }}>{fontWeight}</p>;
};

export default FontWeightToken;
