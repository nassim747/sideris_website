"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CONTACT_EMAIL = "contact@sideristerra.com";
const NAV_ITEMS = [["Home", "/"], ["Pilots", "/pilots"]] as const;

export function Brand() {
  return <Link href="/" className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="Sideris Terra, back to home"><img src="/logo.png" alt="Sideris Terra" className="h-[4.5rem] w-auto object-contain" /></Link>;
}

export function SiteHeader() {
  const pathname = usePathname();
  return <header className="site-header"><div className="site-width header-inner"><Brand /><nav className="site-nav" aria-label="Primary navigation">{NAV_ITEMS.map(([label, href]) => { const current = pathname === href; return <Link key={label} href={href} className="nav-link" aria-current={current ? "page" : undefined}>{label}</Link>; })}</nav></div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-width footer-inner"><div><Brand /><p>Parcel-level agricultural intelligence.</p><div className="affiliation"><img src="/enginelogo.png" alt="Engine at McGill University" /><span>Part of the TechAccel program at Engine, McGill University</span></div></div><div className="footer-meta"><a href={`mailto:${CONTACT_EMAIL}`}>Email</a><a href="https://www.linkedin.com/company/sideris-terra/" target="_blank" rel="noreferrer" aria-label="Sideris Terra on LinkedIn">LinkedIn</a><span>(c) 2026 Sideris Terra</span></div></div></footer>;
}