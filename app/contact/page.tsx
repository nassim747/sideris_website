import { ArrowRight, Mail } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const CONTACT_EMAIL = "contact@sideristerra.com";

export default function ContactPage() {
  return <main className="min-h-screen overflow-hidden bg-background">
    <SiteHeader />
    <section className="inner-hero contact-page-hero"><div className="site-width"><h1>Contact</h1><p className="inner-hero-lede">We would be happy to speak with growers, researchers, agricultural organizations, and technology partners interested in Sideris Terra or a potential pilot project.</p><a href={`mailto:${CONTACT_EMAIL}`} className="contact-page-email"><Mail size={18} aria-hidden="true" />{CONTACT_EMAIL}<ArrowRight size={16} aria-hidden="true" /></a></div></section>
    <section className="contact-note"><div className="site-width"><p>We are a small team building carefully and learning from the people closest to agricultural decisions. If you would like to understand the work, discuss a pilot, or share a perspective, send us a note.</p></div></section>
    <SiteFooter />
  </main>;
}