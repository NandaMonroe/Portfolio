// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl">
      <Link href={''} className="hover:text-amber-500 transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={''} className="hover:text-amber-500 transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={''} className="hover:text-amber-500 transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={''} className="hover:text-amber-500 transition-all duration-300">
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
