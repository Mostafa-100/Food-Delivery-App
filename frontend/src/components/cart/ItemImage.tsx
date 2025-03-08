type ItemImageProps = {
  imagePath: string;
  name: string;
}

function ItemImage({ imagePath, name }: ItemImageProps) {
  return (
    <img
      src={imagePath}
      alt={name}
      className="size-14 object-cover rounded-full"
    />
  )
}

export default ItemImage;