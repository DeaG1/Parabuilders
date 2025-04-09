import Image from 'next/image';
import logo from '@/assets/images/logoWithName.png';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Results', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Social Media', href: '#' },
];

export default function Navbar() {
  return (
    <>
    <nav className="bg-[#01121a] w-full py-4">
      <div className="w-full flex justify-between items-center px-32">
        <div className="flex items-center">
          <Image src={logo} alt="Parabuilders logo" className="h-16 w-auto" />
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-white/50 text-base transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 origin-left"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
          <div className="h-6 border-r border-gray-500" />
          <div className="relative flex items-center justify-center">
            <div className="absolute top-1 left-0 right-0 h-full bg-orange-500 rounded-full z-0 scale-y-125" />
            <button className="relative px-5 py-2 text-sm font-medium text-black bg-white border-1 border-orange-500 rounded-full z-10 hover:bg-orange-500 hover:text-white transition-all">
              Social codorna
            </button>
          </div>
        </div>
      </div>
    </nav>
    <div className="w-full h-[1px] bg-sky-800" />
    </>
  );
}
