import { useEffect, useState, useCallback } from "react";
import { featuredProjectMedia, portfolioProjectMedia } from "@/data/projectMedia";

const useScrollReveal = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const useNavScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(true);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link-item");
    const navCta = document.getElementById("nav-cta");

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
        setLight(false);
        navLinks.forEach((l) => (l as HTMLElement).style.color = "#000");
        if (navCta) navCta.style.background = "var(--grad)";
      } else {
        setScrolled(false);
        setLight(true);
        navLinks.forEach((l) => (l as HTMLElement).style.color = "#fff");
      }
    };
    // Initial state
    if (navbar) navbar.classList.add("light");
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, light };
};

const ArrowRight = () => <span className="arrow-right" />;

const HERO_VIDEO_SRC = "/RADIUS-LOOP%20VIDEO.mp4";
const FEATURED_PROJECT_IMAGE_STYLE = featuredProjectMedia.imageSrc ?
{
  backgroundImage: `url('${featuredProjectMedia.imageSrc}')`,
  backgroundSize: "cover",
  backgroundPosition: "center"
} :
undefined;
const FEATURED_PROJECT_ACCENT_IMAGE_STYLE = featuredProjectMedia.accentImageSrc ?
{
  backgroundImage: `url('${featuredProjectMedia.accentImageSrc}')`,
  backgroundSize: "cover",
  backgroundPosition: "center"
} :
undefined;

const Index = () => {
  useScrollReveal();
  const { scrolled, light } = useNavScroll();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector(".btn-submit");
    if (btn) btn.innerHTML = "✓ Inquiry Received";
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <nav id="navbar" className={`site-nav ${scrolled ? "scrolled" : ""} ${light && !scrolled ? "light" : ""}`}>
        <a href="#hero" className="nav-logo">
          <span className="nav-wordmark">radius</span>
        </a>
        <ul className="nav-links" id="nav-links">
          <li><a href="#about" style={{ color: "#fff" }} className="nav-link-item">About</a></li>
          <li><a href="#portfolio" style={{ color: "#fff" }} className="nav-link-item">Projects</a></li>
          <li><a href="#services" style={{ color: "#fff" }} className="nav-link-item">Services</a></li>
          <li><a href="#investors" style={{ color: "#fff" }} className="nav-link-item">Investors</a></li>
          <li><a href="#team" style={{ color: "#fff" }} className="nav-link-item">Team</a></li>
          <li><a href="#contact" style={{ color: "#fff" }} className="nav-link-item">Contact</a></li>
        </ul>
        <a
          href="#investors"
          className="btn-primary"
          style={{ fontSize: 10, padding: "14px 28px", textDecoration: "none" }}
          id="nav-cta">
          
          Investor Portal
        </a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="hero-circle" style={{ width: 600, height: 600, top: "50%", right: -200, transform: "translateY(-50%)" }} />
        <div className="hero-circle" style={{ width: 400, height: 400, top: "50%", right: -100, transform: "translateY(-50%)", borderColor: "rgba(56,189,248,0.08)" }} />
        <div className="hero-content">
          <div className="hero-label reveal">Raleigh-Durham · Research Triangle · NC</div>
          <h1 className="hero-headline">
            <div className="reveal">BUILDING</div>
            <div className="reveal reveal-delay-1"><span className="gradient-text">BEYOND</span></div>
            <div className="reveal reveal-delay-2">LIMITS.</div>
          </h1>
          <p className="hero-sub reveal reveal-delay-3">
            Full-cycle real estate development across the Research Triangle — from site acquisition to strategic exit.
          </p>
          <div className="reveal reveal-delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#portfolio" className="btn-primary">
              View Projects <span className="arrow-right" style={{ background: "#fff" }} />
            </a>
            <a href="#investors" className="btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
              Investor Access
            </a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <div id="stats">
        <div className="stat-item reveal">
          <div className="stat-number gradient-text">$240M+</div>
          <div className="stat-label">Assets Under Development</div>
        </div>
        <div className="stat-item reveal reveal-delay-1">
          <div className="stat-number">18</div>
          <div className="stat-label">Active Projects</div>
        </div>
        <div className="stat-item reveal reveal-delay-2">
          <div className="stat-number gradient-text">360°</div>
          <div className="stat-label">Full-Cycle Approach</div>
        </div>
        <div className="stat-item reveal reveal-delay-3">
          <div className="stat-number">12</div>
          <div className="stat-label">Years in Research Triangle</div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about">
        <div className="about-visual reveal">
          <div className={`about-img-main ${featuredProjectMedia.imageSrc ? "about-img-photo" : ""}`} style={FEATURED_PROJECT_IMAGE_STYLE}>
            <div className="arch-lines" />
            <div style={{ position: "absolute", bottom: 32, left: 32 }}>
              <div style={{ fontFamily: "'Sackers Gothic Std Light', serif", fontSize: 8, letterSpacing: "0.2em", color: "#fff", textTransform: "uppercase", marginBottom: 8 }}>{featuredProjectMedia.label}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 23, fontWeight: 700, color: "#fff" }}>{featuredProjectMedia.name}</div>
            </div>
          </div>
          <div className={`about-img-accent ${featuredProjectMedia.accentImageSrc ? "about-img-photo" : ""}`} style={FEATURED_PROJECT_ACCENT_IMAGE_STYLE}>
            <div className="arch-lines" />
          </div>
        </div>
        <div>
          <div className="section-label reveal">Our Purpose</div>
          <h2 className="section-title reveal">
            The Radius<br />
            <span className="gradient-text">Philosophy</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#444", marginBottom: 28 }} className="reveal">
            We see opportunity where others see complexity. Radius Development Group operates at the intersection of data-driven site selection and architectural vision — acquiring, developing, and positioning high-value residential and mixed-use properties across North Carolina's Research Triangle.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#444", marginBottom: 40 }} className="reveal">
            Our 360-degree model means we control every stage — from identifying undervalued land to delivering fully realized developments that define their neighborhoods.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="reveal">
            <div style={{ borderTop: "2px solid", borderImage: "var(--grad) 1", paddingTop: 20 }}>
              <div className="syne" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>
                <span className="gradient-text">Cary, NC</span>
              </div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#888", textTransform: "uppercase", marginTop: 4 }}>Headquarters</div>
            </div>
            <div style={{ borderTop: "2px solid #000", paddingTop: 20 }}>
              <div className="syne" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>Triangle</div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: "#888", textTransform: "uppercase", marginTop: 4 }}>Primary Market</div>
            </div>
          </div>
        </div>
      </div>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="section-label reveal">Our Work</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <h2 className="section-title reveal">Featured<br /><span className="gradient-text">Projects</span></h2>
          <a href="#contact" className="btn-secondary reveal" style={{ marginBottom: 8 }}>View All Projects</a>
        </div>
        <div className="portfolio-grid">
          {portfolioProjectMedia.map((project, i) => {
            const revealDelayClass = i > 0 ? `reveal-delay-${Math.min(i, 3)}` : "";
            const projectImageStyle = project.imageSrc ?
            {
              backgroundImage: project.disableImageOverlay ?
              `url('${project.imageSrc}')` :
              `linear-gradient(160deg, rgba(10, 18, 32, 0.18), rgba(10, 18, 32, 0.4)), url('${project.imageSrc}')`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            } :
            undefined;

            return (
              <div className={`project-card reveal ${revealDelayClass}`} key={project.name}>
                <div
                  className={`project-card-placeholder ${project.placeholderClass} ${project.imageSrc ? "project-card-has-image" : ""}`}
                  style={{ minHeight: project.minHeight, ...projectImageStyle }}>
                  <div className="arch-lines" />
                  {project.headline && !project.disableImageOverlay ?
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800, color: "rgba(255,255,255,0.06)", letterSpacing: "-0.04em" }}>{project.headline}</div>
                      </div>
                    </div> :
                  null}
                  {project.accent === "circle" ?
                  <div style={{ position: "absolute", bottom: project.minHeight ? "30%" : "auto", top: project.minHeight ? "auto" : 30, left: project.minHeight ? "50%" : "auto", right: project.minHeight ? "auto" : 30, transform: project.minHeight ? "translateX(-50%) rotate(45deg)" : "none", width: project.minHeight ? 80 : 60, height: project.minHeight ? 80 : 60, borderRadius: "50%", border: "1px solid rgba(56,189,248,0.2)" }} /> :
                  null}
                  <div className="arch-accent" />
                </div>
                <div className="project-overlay">
                  <div className="project-info">
                    <div className="project-tag">{project.tag}</div>
                    <div className="project-name">{project.name}</div>
                    <div className="project-location">{project.location}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-label reveal">What We Do</div>
        <h2 className="section-title reveal" style={{ color: "#fff" }}>
          360° Development<br /><span className="gradient-text">Process</span>
        </h2>
        <div className="services-grid">
          {[
          {
            num: "01",
            title: "Site Sourcing & Acquisition",
            desc: "We identify high-potential land and assets through proprietary data analysis, local market intelligence, and a deep network of off-market relationships across the Research Triangle.",
            items: ["Off-market deal sourcing", "Feasibility & zoning analysis", "Acquisition financing", "Environmental due diligence"]
          },
          {
            num: "02",
            title: "Entitlement & Planning",
            desc: "Navigating the regulatory landscape requires expertise. We manage municipal relationships, architect selection, and entitlement processes to unlock maximum value from every site.",
            items: ["Rezoning & variance management", "Architect & engineer selection", "Community engagement", "Permitting & approvals"]
          },
          {
            num: "03",
            title: "Construction & Development",
            desc: "From groundbreaking to ribbon-cutting, we manage all phases of construction with trusted general contractors, rigorous cost controls, and an uncompromising commitment to quality.",
            items: ["GC selection & oversight", "Value engineering", "Budget & schedule management", "Quality control protocols"]
          },
          {
            num: "04",
            title: "Capital & Exit Strategy",
            desc: "We structure capital stacks to maximize investor returns and manage dispositions with precision — whether through portfolio sale, recapitalization, or long-term asset management.",
            items: ["Equity & debt structuring", "Investor reporting", "Asset stabilization", "Disposition & refinancing"]
          }].
          map((s, i) =>
          <div className={`service-item reveal ${i % 2 === 1 ? "reveal-delay-1" : ""}`} key={i}>
              <div className="service-num gradient-text">{s.num}</div>
              <div className="service-body">
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-list">
                  {s.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* INVESTORS */}
      <section id="investors">
        <div className="section-label reveal">Capital Partners</div>
        <h2 className="section-title reveal">The Investment<br /><span className="gradient-text">Opportunity</span></h2>
        <div className="investors-inner">
          <div className="investment-thesis">
            <h3 className="reveal">Why the Research Triangle?</h3>
            <p className="reveal">
              Home to Duke, UNC, and NC State, the Research Triangle is one of the fastest-growing metros in the US — combining elite research institutions, a surging tech sector, and housing supply that cannot keep pace with demand. We are positioned at the center of this structural imbalance.
            </p>
            <h3 className="reveal">Our Track Record</h3>
            <p className="reveal">
              Radius has deployed and returned capital across 12+ successful projects, delivering consistent risk-adjusted returns to our investor base. Our vertical integration — owning the development process from acquisition to exit — creates margin advantages unavailable to traditional developers.
            </p>
            <h3 className="reveal">Who We Partner With</h3>
            <p className="reveal">
              We work with family offices, high-net-worth individuals, and institutional capital partners who share a long-term view and an appreciation for real assets in high-growth markets. Minimum investments begin at $250,000.
            </p>
            <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }} className="reveal">
              <a href="#contact" className="btn-primary">Request Information</a>
              <a href="#contact" className="btn-secondary">Schedule a Call</a>
            </div>
          </div>
          <div className="portal-card reveal">
            <div className="portal-tag">Secure Access</div>
            <div className="portal-title">Investor<br /><span className="gradient-text">Portal</span></div>
            <p className="portal-desc">
              Existing capital partners access live deal flow, project dashboards, financials, and distribution schedules through our secure investor portal.
            </p>
            <ul className="portal-features">
              {["Live project tracking & dashboards", "Quarterly financial reporting", "Distribution history & projections", "Deal pipeline & co-invest access", "Document vault & tax documents"].map(
                (f, i) =>
                <li key={i}>
                    <span className="portal-dot" />
                    {f}
                  </li>

              )}
            </ul>
            <a href="#contact" className="btn-portal">
              Access Investor Portal
              <ArrowRight />
            </a>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <span className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "#aaa", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <rect x="3" y="7" width="10" height="8" rx="1" stroke="#aaa" strokeWidth="1.2" />
                  <path d="M5 7V5a3 3 0 016 0v2" stroke="#aaa" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                Bank-level SSL encryption
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" style={{ background: "#f8f8f8" }}>
        <div className="section-label reveal">The Visionaries</div>
        <h2 className="section-title reveal">Our <span className="gradient-text">Team</span></h2>
        <p style={{ maxWidth: 500, fontSize: 16, lineHeight: 1.8, color: "#555", marginTop: 16 }} className="reveal">
          Decades of combined experience in real estate development, finance, and architecture — unified by a single vision.
        </p>
        <div className="team-grid">
          {[
          { initials: "JR", name: "James Rafferty", role: "Founder & CEO", bg: "linear-gradient(135deg, #1a1a2e, #0f3460)" },
          { initials: "MC", name: "Morgan Chen", role: "Chief Investment Officer", bg: "linear-gradient(135deg, #1e293b, #0f172a)" },
          { initials: "DP", name: "David Park", role: "VP of Development", bg: "linear-gradient(135deg, #1c2333, #161b22)" },
          { initials: "SE", name: "Sarah Elliott", role: "Director of Capital Markets", bg: "linear-gradient(135deg, #0c1624, #0f2137)" }].
          map((t, i) =>
          <div className={`team-card reveal ${i > 0 ? `reveal-delay-${i}` : ""}`} key={i}>
              <div className="team-photo">
                <div className="team-photo-inner">
                  <div className="team-photo-placeholder">
                    <div className="team-initials" style={{
                    background: t.bg,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: i === 0 ? "rgba(56,189,248,0.4)" : i === 1 ? "rgba(29,78,216,0.4)" : i === 2 ? "rgba(14,165,233,0.35)" : "rgba(56,189,248,0.3)"
                  }}>
                      <span className="team-initials">{t.initials}</span>
                    </div>
                  </div>
                  <div className="team-color-overlay" />
                </div>
              </div>
              <div className="team-name">{t.name}</div>
              <div className="team-title-role">{t.role}</div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label reveal">Start the Connection</div>
        <h2 className="section-title reveal">Let's Build<br /><span className="gradient-text">Together</span></h2>
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-info-label">Office</div>
            <div className="contact-info-value">
              1100 Crescent Green, Suite 200<br />
              Cary, North Carolina 27518
            </div>
            <div className="contact-info-label">Phone</div>
            <div className="contact-info-value">(919) 555-0180</div>
            <div className="contact-info-label">Email</div>
            <div className="contact-info-value" style={{ background: "var(--grad-text)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              hello@radiusdevgroup.com
            </div>
            <div className="contact-info-label">Hours</div>
            <div className="contact-info-value">Monday – Friday, 9AM – 6PM EST</div>
            <div className="map-placeholder">
              <div className="map-grid" />
              {/* Stylized roads */}
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <div style={{ position: "absolute", top: "40%", left: 0, right: 0, height: 1, background: "rgba(0,0,0,0.1)" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "35%", width: 1, background: "rgba(0,0,0,0.1)" }} />
                <div style={{ position: "absolute", top: 0, bottom: 0, left: "60%", width: 1, background: "rgba(0,0,0,0.08)" }} />
                <div style={{ position: "absolute", top: "65%", left: 0, right: 0, height: 1, background: "rgba(0,0,0,0.08)" }} />
              </div>
              <div className="map-pin">
                <div className="map-pin-dot" />
                <div className="map-pin-label">Cary, NC</div>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <select className="form-select">
                  <option value="" style={{ color: "#ccc" }}>Select an inquiry type</option>
                  <option>Investor Partnership</option>
                  <option>Project Collaboration</option>
                  <option>Land / Site Acquisition</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" placeholder="Tell us about your project or inquiry..." rows={4} />
              </div>
              <button type="submit" className="btn-submit">
                Submit Inquiry <ArrowRight />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
              <div className="nav-logo-icon"><div className="nav-logo-inner" /></div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span className="syne" style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.02em", color: "#fff" }}>RADIUS</span>
                <span className="mono" style={{ fontSize: 9, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Development Group</span>
              </div>
            </div>
            <p className="footer-tagline">Building Beyond<br /><span className="gradient-text">Limits.</span></p>
            <p className="footer-sub">Full-cycle real estate development across North Carolina's Research Triangle — from acquisition to exit.</p>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#team">Our Team</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="#services">Acquisition</a></li>
              <li><a href="#services">Development</a></li>
              <li><a href="#services">Capital Markets</a></li>
              <li><a href="#services">Asset Management</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Investors</div>
            <ul className="footer-links">
              <li><a href="#investors">Investor Portal</a></li>
              <li><a href="#investors">Investment Thesis</a></li>
              <li><a href="#contact">Request Info</a></li>
              <li><a href="#contact">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2025 Radius Development Group, LLC. All rights reserved.</div>
          <div className="footer-copy" style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none", fontFamily: "'DM Mono', monospace", fontSize: 11 }}>Privacy Policy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none", fontFamily: "'DM Mono', monospace", fontSize: 11 }}>Terms of Use</a>
          </div>
        </div>
      </footer>
    </>);

};

export default Index;
