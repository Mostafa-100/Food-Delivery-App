function HeroSectionWrapper({ children }) {
  return (
    <div className="container px-2 mx-auto">
      <div className="relative bg-[url('intro.jpg')] xl:w-4/5 xl:mx-auto my-3 rounded-xl pt-28 px-16 pb-8 bg-center bg-cover z-10">
        <div
          className="absolute inset-0 w-full h-full bg-orange-500 opacity-60 z-0 rounded-xl"
          style={{ zIndex: -1 }}
        ></div>
        {children}
      </div>
    </div>
  )
}

export default HeroSectionWrapper;