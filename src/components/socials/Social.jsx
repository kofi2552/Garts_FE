import React from 'react';
import { FaXTwitter, FaYoutube,FaThreads } from "react-icons/fa6";
import { FaFacebook, FaInstagram,FaTiktok, FaSnapchat,FaVimeo } from "react-icons/fa";
import "./Social.css"

const Social = ({ socials }) => {

  if (!socials || !Array.isArray(socials) || socials.length === 0) {
    return null; // Return null or some default content if socials is not defined or is not an array
  }
  // Mapping of social platforms to their corresponding icons
  const platformIcons = {
    Facebook: FaFacebook,
    Instagram: FaInstagram,
    Twitter: FaXTwitter,
    Youtube: FaYoutube,
    Titktok: FaTiktok,
    Threads: FaThreads,
    Snapchat: FaSnapchat,
    Vimeo: FaVimeo,
    // Add more platforms and icons as needed
  };

  return (
    <div className="user-socials">
      {socials.map((social, index) => {
        const IconComponent = platformIcons[social.platform];
        return (
          <div key={index} className="social-item">
              <IconComponent className="social-icon" />
            <span className="social-username">{social.username}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Social;