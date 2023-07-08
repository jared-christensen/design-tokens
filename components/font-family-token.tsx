interface FontFamilyTokenProps {
  fontFamily: string;
}

const FontFamilyToken = ({ fontFamily }: FontFamilyTokenProps) => {
  return <p style={{ fontFamily: fontFamily }}>{fontFamily}</p>;
};

export default FontFamilyToken;
