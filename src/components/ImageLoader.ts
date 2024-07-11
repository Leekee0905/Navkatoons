const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}) => {
  return `${src}&format=webp&w=${width}&q=${quality || 75}`;
};
export default imageLoader;
