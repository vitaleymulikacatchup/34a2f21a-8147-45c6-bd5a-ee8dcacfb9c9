"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Scissors, Star, Users, MessageSquare, Crown } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
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

      <div id="team" data-section="team" className="mx-auto px-4 md:px-6">
        <TeamCardOne
          title="Meet Our Team"
          description="Skilled master barbers with years of experience in the art of grooming"
          tag="Our Barbers"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "master-barber",
              name: "Alex Rodriguez",
              role: "Master Barber",
              imageSrc: "https://pixabay.com/get/g19f52b6d02c12dadd699eecec3221a1b6af7e3f46e694e82e134b76c8d4f686ae2bd33469ddb46e615e7408e0aeb3693566f601280a7c88fb900dc05753bf688_1280.jpg",
              imageAlt: "Alex Rodriguez, Master Barber at Blestiashiy"
            },
            {
              id: "senior-barber",
              name: "Marcus Thompson",
              role: "Senior Barber",
              imageSrc: "https://pixabay.com/get/g7f497b49d0ac4c82e29c3decdd4948c9fcf75ec0f8eabd62dc88bfda15218ce8912b9fa7fbf709d4a22936aacc8fe3762625207da7c81674f64dd584034f8ba3_1280.jpg",
              imageAlt: "Marcus Thompson, Senior Barber at Blestiashiy"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial" className="mx-auto px-4 md:px-6">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="Read testimonials from our satisfied customers"
          tag="Client Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Business Executive",
              testimonial: "Exceptional service and attention to detail. The best barbershop experience I've had in years. Highly professional and skilled barbers.",
              imageSrc: "https://pixabay.com/get/ga1218fbdc3a7db780196c547747958937776f23a7a89409b742c87ca5d86bc60bb4cbf934b65637783059fa086322ccf73ca5eccd91fb1211f554908ddf26387_1280.jpg",
              imageAlt: "Michael Johnson testimonial"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Marketing Director",
              testimonial: "Amazing atmosphere and top-notch service. They really know how to make you look and feel your best. Will definitely be returning.",
              imageSrc: "https://pixabay.com/get/g7f497b49d0ac4c82e29c3decdd4948c9fcf75ec0f8eabd62dc88bfda15218ce8912b9fa7fbf709d4a22936aacc8fe3762625207da7c81674f64dd584034f8ba3_1280.jpg",
              imageAlt: "David Chen testimonial"
            },
            {
              id: "3",
              name: "Robert Martinez",
              role: "Entrepreneur",
              testimonial: "The perfect blend of traditional barbering and modern style. Great attention to detail and excellent customer service.",
              imageSrc: "https://pixabay.com/get/g1f366510eeee8d0167ca903c037f2a3138243f4224ffa611aea725ae5baa915b6475b0dba32aaba24f8a9efbf9c2a5a59c1a42a720a02bb199b66cd9d63be3c8_1280.jpg",
              imageAlt: "Robert Martinez testimonial"
            },
            {
              id: "4",
              name: "James Wilson",
              role: "Creative Director",
              testimonial: "Outstanding quality and professionalism. The barbers here are true artists. Couldn't be happier with the results.",
              imageSrc: "https://pixabay.com/get/g9428850fc974249776312ad463f5c676b640caf3c095ad8d52071b8c42e327b893fd01a430f0781cf9dbd7b3af3eaecaf257b2c2d7646173d44eb6a24128a72f_1280.jpg",
              imageAlt: "James Wilson testimonial"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing" className="mx-auto px-4 md:px-6">
        <PricingCardOne
          title="Premium Services"
          description="Experience our luxury barbering services with transparent pricing"
          tag="Our Rates"
          tagIcon={Crown}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "classic-cut",
              badge: "Most Popular",
              price: "$35",
              subtitle: "Professional haircut with consultation",
              features: [
                "Consultation and styling advice",
                "Precision cut with professional tools",
                "Hair wash and conditioning",
                "Styling and finishing"
              ]
            },
            {
              id: "beard-grooming",
              badge: "Signature Service",
              price: "$25",
              subtitle: "Complete beard grooming experience",
              features: [
                "Beard trimming and shaping",
                "Hot towel treatment",
                "Beard oil application",
                "Mustache grooming"
              ]
            },
            {
              id: "full-package",
              badge: "Complete Package",
              price: "$55",
              subtitle: "The ultimate grooming experience",
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
      />
    </ThemeProvider>
  );
}