"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Users, MessageSquare, Instagram, Facebook } from "lucide-react";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function AboutPage() {
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