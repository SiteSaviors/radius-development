import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useNavScroll } from "@/hooks/useNavScroll";

const ArrowRight = () => (
  <span className="arrow-right" />
);

const Index = () => {
  useScrollReveal();
  const { scrolled, light } = useNavScroll();

  return (
    <>
      {/* NAV */}
      <nav className={`site-nav ${scrolled ? "scrolled" : ""} ${light && !scrolled ? "light" : ""}`}>
        <a href="#hero" className="nav-logo">
          <div className="nav-logo-icon"><div className="nav-logo-inner" /></div>
          <span className="nav-logo-text syne" style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em" }}>
            Radius
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#investors">Investors</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        <div className="hero-circle" style={{ width: 600, height: 600, top: "-10%", right: "-5%" }} />
        <div className="hero-circle" style={{ width: 300, height: 300, bottom: "10%", left: "30%" }} />
        <div className="hero-content">
          <div className="hero-label reveal">Development &amp; Investment</div>
          <h1 className="hero-headline reveal reveal-delay-1">
            Building<br />
            <span className="gradient-text">Tomorrow's</span><br />
            Landmarks
          </h1>
          <p className="hero-sub reveal reveal-delay-2">
            Premium real estate development across commercial, residential, and mixed-use sectors — 
            creating value through visionary design and strategic execution.
          </p>
          <a href="#portfolio" className="btn-primary reveal reveal-delay-3">
            View Portfolio <ArrowRight />
          </a>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* STATS */}
      <div id="stats">
        {[
          { num: "$2.4B", label: "Assets Under Development" },
          { num: "47", label: "Completed Projects" },
          { num: "12M", label: "Square Feet Developed" },
          { num: "18", label: "Years of Excellence" },
        ].map((s, i) => (
          <div className={`stat-item reveal reveal-delay-${i + 1}`} key={i}>
            <div className="stat-number gradient-text">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="section-label reveal">Selected Work</div>
        <h2 className="section-title reveal reveal-delay-1">
          Featured<br />Projects
        </h2>
        <div className="portfolio-grid">
          {[
            { ph: "ph-1", tag: "Commercial", name: "Azure Tower", loc: "Financial District, NYC" },
            { ph: "ph-2", tag: "Mixed-Use", name: "The Meridian Complex", loc: "Downtown Austin, TX" },
            { ph: "ph-3", tag: "Residential", name: "Horizon Residences", loc: "Waterfront, Miami" },
            { ph: "ph-4", tag: "Hospitality", name: "Vertex Hotel & Spa", loc: "Midtown, Chicago" },
            { ph: "ph-5", tag: "Industrial", name: "Nexus Logistics Hub", loc: "Port District, LA" },
            { ph: "ph-6", tag: "Retail", name: "Prism Marketplace", loc: "SoHo, New York" },
          ].map((p, i) => (
            <div className={`project-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
              <div className={`project-card-placeholder ${p.ph}`}>
                <div className="arch-lines" />
                <div className="arch-accent" />
                {i % 2 === 0 && <div className="arch-shape" />}
                {i % 2 === 1 && <div className="arch-shape-2" />}
              </div>
              <div className="project-overlay">
                <div className="project-info">
                  <div className="project-tag">{p.tag}</div>
                  <div className="project-name">{p.name}</div>
                  <div className="project-location">{p.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="section-label reveal">What We Do</div>
        <h2 className="section-title reveal reveal-delay-1">
          Full-Spectrum<br />Development
        </h2>
        <div className="services-grid">
          {[
            {
              num: "01",
              title: "Ground-Up Development",
              desc: "From site acquisition through certificate of occupancy, we manage the entire development lifecycle with precision and accountability.",
              items: ["Site Selection & Acquisition", "Entitlements & Permitting", "Design Management", "Construction Oversight"],
            },
            {
              num: "02",
              title: "Value-Add Repositioning",
              desc: "Strategic renovation and repositioning of underperforming assets to unlock hidden value and maximize returns.",
              items: ["Market Analysis", "Capital Planning", "Renovation Management", "Lease-Up Strategy"],
            },
            {
              num: "03",
              title: "Investment Management",
              desc: "Disciplined capital allocation and portfolio management delivering consistent risk-adjusted returns to our investment partners.",
              items: ["Deal Sourcing", "Underwriting & Due Diligence", "Asset Management", "Investor Reporting"],
            },
            {
              num: "04",
              title: "Advisory Services",
              desc: "Expert guidance for landowners, institutions, and municipalities seeking to maximize the potential of their real estate holdings.",
              items: ["Highest & Best Use Analysis", "Public-Private Partnerships", "Development Feasibility", "Strategic Planning"],
            },
          ].map((s, i) => (
            <div className={`service-item reveal reveal-delay-${(i % 2) + 1}`} key={i}>
              <div className="service-num gradient-text">{s.num}</div>
              <div className="service-body">
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <ul className="service-list">
                  {s.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <div id="about">
        <div className="about-visual reveal">
          <div className="about-img-main">
            <div className="arch-lines" />
          </div>
          <div className="about-img-accent">
            <div className="arch-lines" />
          </div>
          <div className="about-radius-circle" />
          <div className="about-radius-circle-2" />
        </div>
        <div>
          <div className="section-label reveal">About Us</div>
          <h2 className="section-title reveal reveal-delay-1">
            Precision Meets<br />Vision
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, lineHeight: 1.8, color: "#444", marginBottom: 24 }}>
            Founded in 2006, Radius Development Group has established itself as a premier real estate development 
            firm with a portfolio spanning commercial towers, luxury residences, mixed-use complexes, and 
            institutional facilities across major metropolitan markets.
          </p>
          <p className="reveal reveal-delay-3" style={{ fontSize: 15, lineHeight: 1.8, color: "#444", marginBottom: 40 }}>
            Our approach combines rigorous financial discipline with bold architectural vision. Every project 
            begins with a deep understanding of market dynamics, community needs, and the potential to create 
            spaces that transcend the ordinary.
          </p>
          <a href="#contact" className="btn-secondary reveal reveal-delay-4">
            Learn More <ArrowRight />
          </a>
        </div>
      </div>

      {/* INVESTORS */}
      <section id="investors">
        <div className="section-label reveal">For Investors</div>
        <h2 className="section-title reveal reveal-delay-1">
          Strategic<br />Partnerships
        </h2>
        <div className="investors-inner">
          <div className="investment-thesis reveal reveal-delay-2">
            <h3>Our Investment Philosophy</h3>
            <p>
              We target opportunities in high-barrier-to-entry markets where our operational expertise 
              and local relationships create a measurable competitive advantage. Our disciplined approach 
              to underwriting ensures we only pursue projects that meet our rigorous return thresholds.
            </p>
            <h3>Track Record</h3>
            <p>
              Across 47 completed projects, Radius has delivered a weighted average IRR of 22% to our 
              limited partners. Our focus on risk-adjusted returns and capital preservation has resulted 
              in zero principal losses across our investment history.
            </p>
            <h3>Current Opportunities</h3>
            <p>
              We are currently raising capital for Fund IV, targeting $500M in equity commitments focused 
              on mixed-use and multifamily developments in Sun Belt and gateway markets.
            </p>
          </div>
          <div className="portal-card reveal reveal-delay-3">
            <div className="portal-tag">Investor Portal</div>
            <div className="portal-title">Access Your Dashboard</div>
            <div className="portal-desc">
              Existing investors can access real-time portfolio performance, quarterly reports, K-1 
              documents, and capital call notifications through our secure portal.
            </div>
            <ul className="portal-features">
              {["Real-Time Portfolio Analytics", "Quarterly Performance Reports", "K-1 Tax Documents", "Capital Call Management", "Document Library"].map(
                (f, i) => (
                  <li key={i}>
                    <span className="portal-dot" />
                    {f}
                  </li>
                )
              )}
            </ul>
            <button className="btn-portal">
              Investor Login <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className="section-label reveal">Leadership</div>
        <h2 className="section-title reveal reveal-delay-1">Our Team</h2>
        <div className="team-grid">
          {[
            { initials: "MR", name: "Michael Reynolds", role: "Chief Executive Officer" },
            { initials: "SC", name: "Sarah Chen", role: "Chief Investment Officer" },
            { initials: "DM", name: "David Martinez", role: "EVP, Development" },
            { initials: "RK", name: "Rachel Kim", role: "VP, Design & Architecture" },
          ].map((t, i) => (
            <div className={`team-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="team-photo">
                <div className="team-photo-inner">
                  <div className="team-photo-placeholder">
                    <span className="team-initials">{t.initials}</span>
                  </div>
                  <div className="team-color-overlay" />
                </div>
              </div>
              <div className="team-name">{t.name}</div>
              <div className="team-title-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label reveal">Get in Touch</div>
        <h2 className="section-title reveal reveal-delay-1">
          Let's Build<br />Together
        </h2>
        <div className="contact-grid">
          <div className="reveal reveal-delay-2">
            <div className="contact-info-label">Headquarters</div>
            <div className="contact-info-value">
              One World Trade Center<br />Suite 8500<br />New York, NY 10007
            </div>
            <div className="contact-info-label">General Inquiries</div>
            <div className="contact-info-value">info@radiusdevelopment.com</div>
            <div className="contact-info-label">Phone</div>
            <div className="contact-info-value">+1 (212) 555-0180</div>
            <div className="contact-info-label">Investment Inquiries</div>
            <div className="contact-info-value">invest@radiusdevelopment.com</div>
            <div className="map-placeholder">
              <div className="map-grid" />
              <div className="map-pin">
                <div className="map-pin-dot" />
                <div className="map-pin-label">NYC HQ</div>
              </div>
            </div>
          </div>
          <form className="reveal reveal-delay-3" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" placeholder="John Smith" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Inquiry Type</label>
              <select className="form-select">
                <option>Development Partnership</option>
                <option>Investment Opportunity</option>
                <option>General Inquiry</option>
                <option>Career Opportunities</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" placeholder="Tell us about your project or inquiry..." />
            </div>
            <button type="submit" className="btn-submit">
              Send Message <ArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="nav-logo-icon"><div className="nav-logo-inner" /></div>
              <span className="syne" style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Radius</span>
            </div>
            <div className="footer-tagline">Building tomorrow's landmarks with precision and vision.</div>
            <div className="footer-sub">
              Premium real estate development across commercial, residential, and mixed-use sectors.
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Projects</div>
            <ul className="footer-links">
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#">Current</a></li>
              <li><a href="#">Completed</a></li>
              <li><a href="#">Pipeline</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Connect</div>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#investors">Investors</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 Radius Development Group. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
