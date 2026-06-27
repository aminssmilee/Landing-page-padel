import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IconCheck } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for individuals and side projects.',
    features: ['1 Project', 'Basic Analytics', 'Community Support', '1GB Storage'],
    popular: false,
    buttonVariant: 'outline' as const
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'Ideal for growing teams and startups.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '10GB Storage', 'Custom Domains'],
    popular: true,
    buttonVariant: 'default' as const
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For large scale organizations.',
    features: ['Everything in Pro', 'Custom Integrations', '24/7 Phone Support', 'Unlimited Storage', 'SLA Guarantee'],
    popular: false,
    buttonVariant: 'outline' as const
  }
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        '.pricing-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        '.pricing-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 75%',
          }
        }
      );
    },
    { scope: sectionRef }
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: -10, scale: 1.02, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pricing-header text-center mb-16 opacity-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that best fits your needs. No hidden fees, ever.
          </p>
        </div>

        <div className="pricing-grid grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="pricing-card opacity-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Card className={`relative flex flex-col h-full ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-border'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                    {plan.price}
                    <span className="ml-1 text-xl font-medium text-muted-foreground">/mo</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/10 p-1">
                          <IconCheck className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant={plan.buttonVariant} className="w-full h-12 text-base">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
