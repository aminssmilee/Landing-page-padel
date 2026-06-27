import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { IconBolt, IconCode, IconDeviceDesktopAnalytics, IconLock, IconRocket, IconWand } from '@tabler/icons-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, delivering an unparalleled user experience.',
    icon: IconBolt,
  },
  {
    title: 'Secure by Default',
    description: 'Built with enterprise-grade security practices to keep your data safe and sound.',
    icon: IconLock,
  },
  {
    title: 'Modern Stack',
    description: 'Utilizing React, Vite, and Tailwind CSS for the best developer experience.',
    icon: IconCode,
  },
  {
    title: 'AI Integrated',
    description: 'Seamlessly connect with advanced AI agents to automate and enhance your workflow.',
    icon: IconWand,
  },
  {
    title: 'Analytics Ready',
    description: 'Track user behavior and metrics with our built-in analytics dashboard.',
    icon: IconDeviceDesktopAnalytics,
  },
  {
    title: 'Deploy Instantly',
    description: 'Push to production in seconds with our optimized build and deploy pipelines.',
    icon: IconRocket,
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Header animation
      gsap.fromTo(
        '.features-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-header',
            start: 'top 85%',
          },
        }
      );

      // Staggered cards animation
      gsap.fromTo(
        '.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="features-header text-center mb-16 opacity-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools and integrations necessary to build, deploy, and scale your applications faster than ever before.
          </p>
        </div>

        <div className="features-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Card key={idx} className="feature-card opacity-0 border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
