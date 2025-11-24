"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { DollarSign, Sparkles, Crown, Award, Instagram, Facebook } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function ServicesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="gradientBars"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Blestiashiy"
          button={{
            text: "Book Now",
            href: "/contact"
          }}
        />
      </div>

      <div id="pricing" data-section="pricing" className="mx-auto px-4 md:px-6">
        <PricingCardTwo
          title="Service Pricing"
          description="Transparent pricing for all our premium barbershop services"
          tag="Our Rates"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "haircut",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$35",
              subtitle: "Professional haircut with consultation",
              buttons: [
                {
                  text: "Book Now",
                  href: "/contact"
                },
                {
                  text: "Learn More",
                  onClick: () => console.log('Haircut details')
                }
              ],
              features: [
                "Consultation and styling advice",
                "Precision cut with professional tools",
                "Hair wash and conditioning",
                "Styling and finishing"
              ]
            },
            {
              id: "beard-grooming",
              badge: "Premium Service",
              badgeIcon: Crown,
              price: "$25",
              subtitle: "Complete beard grooming experience",
              buttons: [
                {
                  text: "Book Now",
                  href: "/contact"
                },
                {
                  text: "Learn More",
                  onClick: () => console.log('Beard grooming details')
                }
              ],
              features: [
                "Beard trimming and shaping",
                "Hot towel treatment",
                "Beard oil application",
                "Mustache grooming"
              ]
            },
            {
              id: "full-service",
              badge: "Complete Package",
              badgeIcon: Award,
              price: "$55",
              subtitle: "The ultimate grooming experience",
              buttons: [
                {
                  text: "Book Now",
                  href: "/contact"
                },
                {
                  text: "Learn More",
                  onClick: () => console.log('Full service details')
                }
              ],
              features: [
                "Haircut with consultation",
                "Beard grooming and shaping",
                "Hot towel shave",
                "Hair and beard styling",
                "Premium aftercare products"
              ]
            }
          ]}
        />
      </div>

      <FooterSocial
        logoText="Blestiashiy"
        copyrightText="© 2025 Blestiashiy Barbershop. All rights reserved."
        columns={[
          {
            title: "Services",
            items: [
              {
                label: "Haircuts",
                href: "/services"
              },
              {
                label: "Beard Grooming",
                href: "/services"
              },
              {
                label: "Traditional Shave",
                href: "/services"
              },
              {
                label: "Hair Styling",
                href: "/services"
              }
            ]
          },
          {
            title: "About",
            items: [
              {
                label: "Our Story",
                href: "/about"
              },
              {
                label: "Our Team",
                href: "/about"
              },
              {
                label: "Testimonials",
                href: "/about"
              }
            ]
          },
          {
            title: "Contact",
            items: [
              {
                label: "Book Appointment",
                href: "/contact"
              },
              {
                label: "Pricing",
                href: "/services"
              },
              {
                label: "Location",
                href: "/contact"
              }
            ]
          }
        ]}
        socialLinks={[
          {
            icon: Instagram,
            href: "https://instagram.com/blestiashiy",
            ariaLabel: "Follow us on Instagram"
          },
          {
            icon: Facebook,
            href: "https://facebook.com/blestiashiy",
            ariaLabel: "Follow us on Facebook"
          }
        ]}
      />
    </ThemeProvider>
  );
}