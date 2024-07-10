import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="flex gap-x-7 gap-y-24 px-7 py-12 justify-around max-md:flex-col max-md:items-center">
        {/* part one title and mail */}
        <div className="basis-2/5 max-md:text-center ">
          <h4 className="text-4xl text-sky-500">Weather-Wise</h4>
          <p className="my-6 text-gray-400">
            Funding freemium long tail hypotheses first mover advantage assets
            ownership
          </p>
          <p className="mb-3 flex items-center gap-4 max-md:justify-center">
            <CiMail className="text-xl" />
            WeatherWise@support
          </p>
          <p className=" flex items-center gap-4 max-md:justify-center">
            <BsTelephone className="text-xl" /> + 12 3456 7890
          </p>
        </div>
        <div>
          <h3 className="text-gray-400 mb-4">Services</h3>
          <ul className="flex flex-col gap-6 text-xs">
            <li>Web Hosting</li>
            <li>Domains</li>
            <li>Premium Hosting</li>
            <li>Private Server</li>
            <li>E-mail Hosting</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 mb-4">Support</h3>
          <ul className="flex flex-col gap-6 text-xs">
            <li>Pricing Plan</li>
            <li>Documentation</li>
            <li>Guide</li>
            <li>Tutorial</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 mb-4">Company</h3>
          <ul className="flex flex-col gap-6 text-xs">
            <li>About </li>
            <li>Blog</li>
            <li>Join Us</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 mb-4">Legal</h3>
          <ul className="flex flex-col gap-6 text-xs">
            <li>Claim</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
