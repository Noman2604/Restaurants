import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Image1 from "@/pages/Dubaidarbarlogo.png"
export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={Image1}
                alt="Dubai Darbar Logo"
                width={150}
                height={120}
                className="rounded-lg"
              />
            </Link>
            <p className="text-sm text-gray-300">
              Experience the royal taste of Dubai at Dubai Darbar. We serve authentic Middle Eastern cuisine in a luxurious setting.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">

              <li>
                <Link href={"/"} className="text-gray-300 hover:text-white transition-colors" >
                  Home
                </Link>
              </li>
              {[ 'Menu', 'Reservations', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <a href="mailto:contact@dubaidarbar.com" className="text-gray-300 hover:text-white transition-colors">
                  dubaidarbarofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+9715555555" className="text-gray-300 hover:text-white transition-colors">
                  +91-99305-88411
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={20} className="mt-1 " />
                <span className="text-gray-300">Delta Woods, Shop No. 7, 8/6,Mira Road East, Thane  401107 </span>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-2 mb-4 flex-col">
              <a href="https://www.facebook.com/share/p6etaM3R4AV6EU51/?mibextid=qi2Omg " target="_blank" rel="noopener noreferrer" className="text-gray-300 gap-3 flex hover:text-white transition-colors">
                <Facebook size={24} />Facebook
              </a>
              <a href="https://www.instagram.com/dubaidarbarofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-300 flex gap-3  hover:text-white transition-colors">
                <Instagram size={24} /> Instagram
              </a>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-900">
        <div className="container mx-auto px-4 py-4">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} Dubai Darbar. Designed by Noman Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}