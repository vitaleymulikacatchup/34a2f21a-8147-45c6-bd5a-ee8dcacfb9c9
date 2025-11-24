"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Scissors, Star } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Blestiashiy Barbershop"
          description="Premium grooming services for the modern gentleman. Experience traditional craftsmanship with contemporary style."
          tag="Premium Barbershop"
          tagIcon={Scissors}
          buttons={[
            {
              text: "Book Appointment",
              href: "/contact"
            },
            {
              text: "View Services",
              href: "#feature"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g3c0688c605bcad71d4f037696eccdf833532da61838a7fdd67e71347531f78d0dbf80f30e3ace3cea2e346d5c67178a21e11f1b155ca9135083a4aaf020581ae_1280.jpg",
              imageAlt: "Luxury barbershop interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g13c4b59e1ce4469beed978b6efe88896bbdcbc13aa659a86e57d87628d6066837c263103e7262ddc153627a33c91eba2f7588628894ae41953674d63b85cc5ef_1280.jpg",
              imageAlt: "Professional barber tools"
            },
            {
              imageSrc: "https://pixabay.com/get/g2c6acbfc961059b1b21c4d7478fb29750ac1fb1073e9d176899d5db79297dc900186f115a1ce5c8166d3944fe49e3ff609d0201de4135cd30fd959bbb1ac31ff_1280.jpg",
              imageAlt: "Professional haircut service"
            },
            {
              imageSrc: "https://pixabay.com/get/g30a330009587b75eecbb15edc3fdd7f69d8c5db6c6516fa47fc3e42dd90079b35111ac2e31cfd10e858f0d413c44c6061d3d9b0281201f9676c8e4b79da6d9e7_1280.jpg",
              imageAlt: "Beard grooming service"
            },
            {
              imageSrc: "https://pixabay.com/get/g13cd928f36e94a3ece50e2a7068412438ce7ea8e95b96edc607311a02482b5fae74bfba25386ca69109be18ae0f33d803dde81f7f2c45c27a7cf1d8a22b6213e_1280.jpg",
              imageAlt: "Hair styling service"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about" className="mx-auto px-4 md:px-6">
        <TagAbout
          tag="Our Story"
          description="At Blestiashiy, we combine traditional barbering techniques with modern style to deliver exceptional grooming experiences. Our master barbers bring decades of expertise to every cut, shave, and style, ensuring you leave looking and feeling your absolute best."
        />
      </div>

      <div id="feature" data-section="feature" className="mx-auto px-4 md:px-6">
        <FeatureCardOne
          title="Our Services"
          description="Professional grooming services tailored to your style and preferences"
          tag="Premium Services"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Service",
              href: "/contact"
            }
          ]}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Classic Haircuts",
              description: "Precision cuts tailored to your face shape and style preferences",
              imageSrc: "https://pixabay.com/get/g2c6acbfc961059b1b21c4d7478fb29750ac1fb1073e9d176899d5db79297dc900186f115a1ce5c8166d3944fe49e3ff609d0201de4135cd30fd959bbb1ac31ff_1280.jpg",
              imageAlt: "Professional haircut service",
              button: {
                text: "Learn More",
                href: "/services"
              }
            },
            {
              title: "Beard Grooming",
              description: "Expert beard trimming, shaping, and conditioning treatments",
              imageSrc: "https://pixabay.com/get/g30a330009587b75eecbb15edc3fdd7f69d8c5db6c6516fa47fc3e42dd90079b35111ac2e31cfd10e858f0d413c44c6061d3d9b0281201f9676c8e4b79da6d9e7_1280.jpg",
              imageAlt: "Beard grooming service",
              button: {
                text: "Learn More",
                href: "/services"
              }
            },
            {
              title: "Hair Styling",
              description: "Modern styling techniques for contemporary and classic looks",
              imageSrc: "https://pixabay.com/get/g13cd928f36e94a3ece50e2a7068412438ce7ea8e95b96edc607311a02482b5fae74bfba25386ca69109be18ae0f33d803dde81f7f2c45c27a7cf1d8a22b6213e_1280.jpg",
              imageAlt: "Hair styling service",
              button: {
                text: "Learn More",
                href: "/services"
              }
            },
            {
              title: "Traditional Shave",
              description: "Hot towel treatments and straight razor shaves for the ultimate experience",
              imageSrc: "https://pixabay.com/get/g23073ab3c4eb90f523a466af53e3a5a1060e7a1931e7db50a189a8fd5651ef66e1a767009fd12dfb5d468033fc3223e5a0e8345653f7908c2d25af5053f4f82c_1280.jpg",
              imageAlt: "Traditional wet shave service",
              button: {
                text: "Learn More",
                href: "/services"
              }
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
      />
    </ThemeProvider>
  );
}