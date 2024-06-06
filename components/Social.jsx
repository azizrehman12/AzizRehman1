import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
//this is social page
const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaYoutube />, path: '' },
  { icon: <FaTwitter />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
