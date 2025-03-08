type DownloadButtonProps = {
  logo: string | JSX.Element;
  name: string;
  logoType: "image" | "icon";
}

function DownloadButton({ logo, name, logoType }: DownloadButtonProps) {
  return (
    <div className="flex items-center gap-x-1 bg-slate-950 py-2 px-4 rounded-lg text-white cursor-pointer">
      {logoType == "image" && <img src={logo} className="w-8" />}
      {logoType == "icon" && logo}
      <div>
        <div className="text-xs font-thin">GET IT ON</div>
        <div>{name}</div>
      </div>
    </div>
  )
}

export default DownloadButton;