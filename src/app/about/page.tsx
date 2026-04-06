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
                        tag="Our Story"
                        tagIcon={Camera}
                        title="Capturing Timeless Moments"
                        description="Retro Glass Photography was founded on the belief that every moment, big or small, deserves to be preserved with a cinematic, vintage soul. Based in Winnipeg, we specialize in blending modern photography techniques with the nostalgic aesthetic of 35mm film."
                        subdescription="Our approach is rooted in authentic storytelling. We don't just take pictures; we capture the emotion, the grain, and the fleeting beauty of your most important chapters, ensuring they stand the test of time."
                        icon={Camera}
                        imageSrc="http://img.b2bpic.net/free-photo/photographer-using-vintage-camera_53876-15325.jpg?_wi=1"
                        imageAlt="Photographer with vintage camera"
                        useInvertedBackground={false}
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