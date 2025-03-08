import { FaApple } from "react-icons/fa";
import googlePlay from "../../assets/icons/google-play.png";
import DownloadButton from "./DownloadButton";
import CtaHeader from "./CtaHeader";

function Cta() {
  return (
    <div className="py-28 bg-neutral-100">
      <div className="container mx-auto">
        <div className="grid place-items-center ">
          <CtaHeader />
          <div className="flex gap-3">
            <DownloadButton logo={googlePlay} name="Google Play" logoType="image" />
            <DownloadButton logo={<FaApple className="text-4xl" />} name="App Store" logoType="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
