import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandTwitter, IconBrandDiscord } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const year = new Date().getFullYear();

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.footer-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
          }
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="border-t border-border bg-background pt-16 pb-8">
      <div className="footer-content container mx-auto px-4 sm:px-6 lg:px-8 opacity-0">
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <span className="bg-primary/20 p-1.5 rounded-lg">
                <IconBrandGithub className="h-6 w-6 text-primary" />
              </span>
              StarterKit
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building the future of web applications with speed, security, and exceptional developer experience.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconBrandTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconBrandGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconBrandDiscord className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Changelog</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} StarterKit. All rights reserved.</p>
          <p>
            Built by <a href="https://github.com/doinel1a" className="text-primary hover:underline">doinel1a</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
