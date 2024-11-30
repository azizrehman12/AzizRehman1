import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

// This is the socials array with unique id for each item
const socials = [
 // { id: 1, icon: <FaGithub />, path: '' },
  { id: 2, icon: <FaYoutube />, path: '' },
  { id: 3, icon: <FaTwitter />, path: '' },
  { id: 4, icon: <FaLinkedinIn />, path: '' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link key={item.id} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
