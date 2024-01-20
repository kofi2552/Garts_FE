import React from 'react';
import { FaXTwitter, FaYoutube,FaThreads } from "react-icons/fa6";
import { FaFacebook, FaInstagram,FaTiktok, FaSnapchat,FaVimeo } from "react-icons/fa";
import "./Social.css"
import { Link } from 'react-router-dom';

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
    Tiktok: FaTiktok,
    Threads: FaThreads,
    Snapchat: FaSnapchat,
    Vimeo: FaVimeo,
    // Add more platforms and icons as needed
  };

  return (
    <div className="user-socials">
      {socials.map((social, index) => {
        const IconComponent = platformIcons[social.platform];
        // Map the platform names to their respective URLs
        const platformUrls = {
          Instagram: 'https://www.instagram.com/',
          Facebook: 'https://www.facebook.com/',
          Twitter: 'https://www.twitter.com/',
          Youtube: 'https://www.youtube.com/',
          Tiktok: 'https://www.tiktok.com/',
          Threads: 'https://www.threads.com/',
          Snapchat: 'https://www.snapchat.com/',
          Vimeo: 'https://www.vimeo.com/',
          // Add more platforms as needed
        };

        // Build the URL based on the selected platform
        const platformUrl = platformUrls[social.platform] || 'https://www.example.com/';

        return (
          <Link to={`${platformUrl}${social.username}`} key={index} className="social-item">
          <div key={index} className="social-item">
              <IconComponent className="social-icon" />
            <span className="social-username">{social.username}</span>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Social;