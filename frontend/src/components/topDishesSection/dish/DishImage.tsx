type DishImageProps = {
  imagePath: string;
}

function DishImage({ imagePath }: DishImageProps) {
  return (
    <img
      src={imagePath}
      className="h-64 w-full object-cover rounded-tl-2xl rounded-tr-2xl hover:scale-125 hover:rotate-6 transition-all ease-linear"
    />
  )
}

export default DishImage;