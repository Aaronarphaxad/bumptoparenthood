import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { Heart, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar({ services }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesToMap, setServicesToMap] = useState(services);
  const router = useRouter();

  useEffect(() => {
    if (services) {
      setServicesToMap(() => {
        return services?.map((item) => ({
          name: item?.title,
          href: item?.slug.current,
          description: item?.text,
        }));
      });
    }
  }, [services]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          {/* Services Dropdown - Desktop */}
          <div className="relative group">
            <button className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
              Services <ChevronRight className="h-4 w-4 transform group-hover:rotate-90 transition-transform" />
            </button>
            <div className="absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[60]">
              <div className="py-1">
                {servicesToMap?.map((item) => (
                  <Link
                    key={item.name}
                    href={`/services/${item.href}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About Me
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/appointment">
            <Button className="bg-pink-500 hover:bg-pink-700 rounded-full">
              Book an Appointment
            </Button>
          </Link>
        </div>

        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 px-4 md:px-6">
          <nav className="flex flex-col space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Services</div>
              <div className="pl-4 space-y-2 border-l-2 border-rose-100">
                {servicesToMap?.map((item) => (
                  <Link
                    key={item.name}
                    href={`/services/${item.href}`}
                    className="block text-sm text-muted-foreground hover:text-rose-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </Link>
            
            <Link href="/appointment" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-rose-600 hover:bg-rose-700">
                Book an Appointment
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
