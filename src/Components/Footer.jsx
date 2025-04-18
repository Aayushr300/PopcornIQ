import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="  bottom-0 w-full bg-zinc-900 text-white py-10 mt-10 m flex flex-col ">
      <div className=" flex items-center justify- max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 ">
        <div className="">
          <h4 className="font-semibold mb-3">PopcornIQ</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <a href="#">About PopcornIQ</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Help</h4>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-zinc-300">
            <a href="#">
              <FaFacebook size={20} />
            </a>
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <FaTwitter size={20} />
            </a>
            <a href="#">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} PopcornIQ for You. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
