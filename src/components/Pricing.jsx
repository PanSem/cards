import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const [active, setActive] = React.useState(true);

  return (
    <div className="flex justify-center flex-col gap-10 font-opensans mt-20">

      {/* Title and subtitle */}
      <div>
        <h1 className="font-playfair text-center text-4xl font-semibold mb-5">
          Pricing
        </h1>
        <p className="text-center text-2xl text-[hsla(0,0%,100%,.4)]">
          Start creating realtime 3D design experiences for free. <br />
          Upgrade for extra features and collaboration with your team.
        </p>
      </div>

      {/* Double button */}
      <button
        className="rounded-[2rem] flex items-center justify-center
      bg-[hsla(0,0%,100%,.03)] w-[25rem] mx-auto"
        onClick={() => setActive(!active)}
      >
        <span
          className={
            active
              ? "w-[55%] block p-3 rounded-[2rem] bg-[hsla(0,0%,100%,.1)]"
              : "w-[55%] block p-3 rounded-[2rem]"
          }
        >
          Yearly{" "}
          <span
            className="text-[0.75rem] text-[#d680ff] bg-[rgba(145,93,255,.2)]
            font-semibold rounded-full py-1 px-2 uppercase"
          >
            Save up to 20%
          </span>
        </span>
        <span
          className={
            !active
              ? "w-[45%] block p-3 rounded-[2rem] bg-[hsla(0,0%,100%,.1)]"
              : "w-[45%] block p-3 rounded-[2rem]"
          }
        >
          Monthly
        </span>
      </button>

      {/* Plans */}
      <div className="flex gap-5 w-full flex-col md:flex-row md:justify-center">
        
        {/* Basic */}
        <div
          className="p-6 rounded-2xl bg-[hsla(0,0%,100%,.03)]
            flex flex-col justify-between gap-7 md:w-[400px]"
        >
          <h2 className="text-start text-2xl uppercase">Basic</h2>
          <p className="text-start text-xl text-gray-600">
            <span className="text-2xl font-semibold text-white">0$</span> (Free)
          </p>
          <p className="text-start text-gray-400 font-semibold">
            What's included:
          </p>
          <ul className="grow text-gray-300">
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">Unlimited personal files</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">Unlimited file viewers</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">1 team file</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">Up to 2 editors per file</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">Up to 1 team project</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">Up to 1 team project</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">Generate Public URLs</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px]" />
              <p className="font-semibold text-sm">
                Export Public URLs with logo
              </p>
            </li>
          </ul>
          <button className="py-3 px-10 border border-gray-500 bg-gray-700 rounded-lg hover:bg-gray-500">
            Start for Free
          </button>
        </div>

        {/* Super */}
        <div
          className="p-6 rounded-2xl bg-[hsla(0,0%,100%,.03)]
            flex flex-col justify-between gap-7 md:w-[400px]"
        >
          <h2 className="text-start text-2xl uppercase">Super</h2>
          <p className="text-start text-xl text-gray-600">
            <span className="text-2xl font-semibold text-white">
              {active ? "24$" : "30$"}
            </span>
            / month
            <small className={active ? "block text-sm" : "hidden"}>
              Billed annually
            </small>
            <p className="text-[#a189ff]">1000 AI credits / month</p>
          </p>
          <p className="text-start text-gray-400 font-semibold">
            Everything on Basic, plus:
          </p>
          <ul className="grow text-gray-300">
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">Create personal folders</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                Unlimited editors on personal files
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                Create unlimited scenes in files
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">Unlock Sound Library</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">Unlock Material Library</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">Generate textures with AI</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                AI 3D Generation <span>ALPHA</span>
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                AI Style Transfer <span>EXPERIMENTAL</span>
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                Import videos, create video layers, and video events
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                Export GLTF with material textures
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">Export USDZ and STL</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">Export USDZ and STL</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                Remove logo from Public URLs
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">
                Remove logo from Code Exports
              </p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#008761]" />
              <p className="font-semibold text-sm">App Generation</p>
            </li>
          </ul>
          <button
            className="py-3 px-10 border bg-[#00a376] border-[#00a376] rounded-lg
          hover:bg-[#008761] hover:border-[#008761]"
          >
            Get Super
          </button>
        </div>

        {/* Super Team */}
        <div
          className="p-6 rounded-2xl bg-[hsla(0,0%,100%,.03)]
            flex flex-col justify-between gap-7 md:w-[400px]"
        >
          <h2 className="text-start text-2xl uppercase">SUPER TEAM</h2>
          <p className="text-start text-xl text-gray-600">
            <span className="text-2xl font-semibold text-white">
              {active ? "40$" : "50$"}
            </span>
            / per team editor/ month
            <small className={active ? "block text-sm" : "hidden"}>
              Billed annually
            </small>
            <p className="text-[#a189ff]">2000 AI credits / month</p>
          </p>
          <p className="text-start text-gray-400 font-semibold">
            Everything on SUPER, plus:
          </p>
          <ul className="grow text-gray-300">
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">Unlimited team files</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">Unlimited team folders</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">Unlimited team projects</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">
                All editors get SUPER benefits
              </p>
            </li>
          </ul>
          <button
            className="py-3 px-10 border bg-[#915eff] border-[#915eff] rounded-lg
          hover:bg-[#7448d4] hover:border-[#7448d4]"
          >
            Get Super Team
          </button>
        </div>
      </div>

      {/* Enterprise */}
      <div
        className="flex mx-auto md:p-14 p-6 rounded-2xl bg-[hsla(0,0%,100%,.03)]
            justify-between md:gap-20 md:flex-row flex-col w-full gap-2 md:w-auto"
      >
        <div className="basis-1/2 order-1">
          <h2 className="text-start text-2xl uppercase mb-5">Enterprise</h2>
          <p className="text-[1rem] font-semibold text-gray-500 md:mb-10 mb-4">
            Enterprise features needed for large organizations & teams.
          </p>
          <button
            className="py-3 px-28 border bg-[#915eff] border-[#915eff] rounded-lg
          hover:bg-[#7448d4] hover:border-[#7448d4] order-3 hidden md:block"
          >
            Contact Us
          </button>
        </div>
        <button
          className="py-3 px-28 border bg-[#915eff] border-[#915eff] rounded-lg
          hover:bg-[#7448d4] hover:border-[#7448d4] order-3 md:order-2 md:hidden"
        >
          Contact Us
        </button>
        <div className="basis-1/2 order-2 md:order-3">
          <p className="text-[1rem] font-semibold text-gray-500 mb-4">
            Everything on Super & Super Team, plus:
          </p>
          <ul className="grow text-gray-300">
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">SAML Single Sign On (SSO)</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">Enterprise Security</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">Priority Support</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">Increased AI credits</p>
            </li>
            <li className="flex gap-2 mb-2">
              <FaCheck size={9} className="mt-[6px] text-[#7448d4]" />
              <p className="font-semibold text-sm">
                All editors get SUPER benefits
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
