"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Calendar, Instagram, Facebook } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function ContactPage() {
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

      <div id="contact" data-section="contact" className="mx-auto px-4 md:px-6">
        <ContactSplit
          tag="Book Appointment"
          title="Ready for Your Next Cut?"
          description="Schedule your appointment today and experience the Blestiashiy difference. We look forward to serving you."
          tagIcon={Calendar}
          mediaPosition="right"
          imageSrc="https://pixabay.com/get/gbfeeb54361b41b86374911017b5044174ea6c4288b81c4c881dd30ddc2dacef7ff1af49808c6d589c4083379898b88c80545be320646311cb049b8133f417cd4_1280.jpg"
          imageAlt="Barbershop appointment booking"
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking, you agree to our terms and conditions. We respect your privacy and will contact you to confirm your appointment."
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