import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const CONTACT_EMAIL = "contact@sideristerra.com";

export default function PilotsPage() {
  return <main className="min-h-screen overflow-hidden bg-background">
    <SiteHeader />
    <section className="inner-hero pilot-page-hero"><div className="site-width"><h1>We are looking for pilot partners.</h1><p className="inner-hero-lede">Sideris Terra is seeking pilot projects with growers, agricultural organizations, researchers, and industry partners interested in testing parcel-level crop stress monitoring in real-world conditions.</p></div></section>
    <section className="pilot-details"><div className="site-width pilot-details-layout"><div><h2>What a pilot helps us learn</h2></div><div className="pilot-detail-copy"><p>Pilot projects will help us validate the platform, understand real operational needs, and continue developing Sideris Terra alongside the people who would ultimately use it.</p><p>We are interested in working with partners who can bring practical field context, thoughtful questions, and a willingness to test an early technology in real conditions.</p></div></div></section>
    <section className="pilot-fit"><div className="site-width"><h2>Who we hope to work with</h2><div className="pilot-points"><div className="pilot-point"><p>Growers and farm teams interested in understanding crop conditions across their parcels.</p></div><div className="pilot-point"><p>Agricultural organizations and researchers working with field-level environmental information.</p></div><div className="pilot-point"><p>Industry and technology partners exploring practical applications for remote sensing and agricultural data.</p></div></div><a href={`mailto:${CONTACT_EMAIL}`} className="primary-link">Start a conversation <ArrowRight size={16} aria-hidden="true" /></a></div></section>
    <SiteFooter />
  </main>;
}