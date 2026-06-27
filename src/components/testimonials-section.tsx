import { useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IconQuote } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "This starter kit saved us weeks of development time. The integration between React, Tailwind, and Shadcn is seamless.",
    author: "Sarah Johnson",
    role: "CTO at TechFlow",
    avatar: "SJ"
  },
  {
    quote: "The GSAP animations are incredibly smooth and performant. Our landing page conversion rate increased by 40% after the redesign.",
    author: "Michael Chen",
    role: "Lead Designer at CreateCo",
    avatar: "MC"
  },
  {
    quote: "A must-have template for any modern SaaS. Clean code, great architecture, and beautiful components out of the box.",
    author: "Elena Rodriguez",
    role: "Frontend Engineer",
    avatar: "ER"
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      tl.fromTo('.testi-header', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(
          '.testi-card',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'back.out(1.2)' },
          '-=0.2'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/4 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="testi-header text-center mb-16 opacity-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by Developers</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what the community has to say about our platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testi, idx) => (
            <Card key={idx} className="testi-card opacity-0 relative bg-card border-border shadow-sm">
              <IconQuote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    {testi.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testi.author}</h4>
                    <p className="text-sm text-muted-foreground">{testi.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testi.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
