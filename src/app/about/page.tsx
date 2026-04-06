"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterCard from "@/components/sections/footer/FooterCard";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import { Camera, Instagram, Facebook } from "lucide-react";

export default function AboutPage() {
    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="entrance-slide"
            borderRadius="rounded"
            contentWidth="medium"
            sizing="medium"
            background="none"
            cardStyle="solid"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="solid"
            headingFontWeight="medium"
        >
            <ReactLenis root>
                <NavbarLayoutFloatingInline
                    navItems={[
                        { name: "Home", id: "/" },
                        { name: "About", id: "/about" },
                        { name: "Portfolio", id: "/portfolio" },
                        { name: "Services", id: "/services" },
                        { name: "Contact", id: "/contact" },
                    ]}
                    brandName="Retro Glass"
                    button={{ text: "Book a Session", href: "/contact" }}
                />
                <div id="about" data-section="about">
                    <TestimonialAboutCard
                        tag="About Retro Glass"
                        tagIcon={Camera}
                        title="Capturing Timeless Moments"
                        description="Retro Glass Photography is a boutique Winnipeg-based studio specializing in cinematic, vintage-inspired imagery. We believe that photography is more than just clicking a button; it's about preserving the soul of a moment with the unique character of 35mm film aesthetics."
                        subdescription="Founded on a passion for authentic storytelling, we merge modern professional techniques with nostalgic textures and tones. Our mission is to transform your memories into heirlooms—capturing the grain, the emotion, and the fleeting beauty of your most important chapters so they resonate for generations."
                        icon={Camera}
                        imageSrc="http://img.b2bpic.net/free-photo/photographer-using-vintage-camera_53876-15325.jpg?_wi=1"
                        imageAlt="Photographer with vintage camera"
                        useInvertedBackground={false}
                        mediaAnimation="opacity"
                    />
                </div>
                <FooterCard
                    logoText="Retro Glass"
                    socialLinks={[
                        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                        { icon: Facebook, href: "#", ariaLabel: "Facebook" },
                    ]}
                />
            </ReactLenis>
        </ThemeProvider>
    );
}