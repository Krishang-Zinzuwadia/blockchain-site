import {
  ArrowDownRight,
  ArrowRight,
  Box,
  Braces,
  Check,
  ChevronDown,
  CircleCheck,
  Cpu,
  Database,
  Fingerprint,
  Hexagon,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  Radio,
  ScanLine,
  ServerCog,
  ShieldCheck,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "STEP 01",
    title: "Encrypt & anchor",
    text: "AES-256 encrypts every design before IPFS storage. Only the CID and cryptographic hash are committed on-chain.",
    icon: LockKeyhole,
  },
  {
    number: "STEP 02",
    title: "Schedule & execute",
    text: "Smart contracts authorize the operator, select an available printer, and record every state transition.",
    icon: Workflow,
  },
  {
    number: "STEP 03",
    title: "Prove the print",
    text: "Secret, pre-committed sensor samples and geometry checks produce a verdict no operator can rewrite.",
    icon: Fingerprint,
  },
];

const scenarios = [
  {
    type: "VERIFIED",
    title: "Legitimate production run",
    detail: "20 / 20 snapshots match the printing envelope",
    status: "Geometry match confirmed",
    tone: "green",
  },
  {
    type: "TAMPERED",
    title: "False completion signal",
    detail: "Idle telemetry revealed at committed sample 07",
    status: "Payment remains locked",
    tone: "pink",
  },
  {
    type: "REJECTED",
    title: "Modified design payload",
    detail: "Received ciphertext hash differs from the ledger",
    status: "Execution blocked",
    tone: "amber",
  },
];

const faq = [
  {
    q: "Why use a blockchain for a printer fleet?",
    a: "The ledger gives every authorization, schedule change, file commitment, and verification verdict a shared timestamped history that no single operator can silently edit.",
  },
  {
    q: "Are the design files stored publicly on-chain?",
    a: "No. Designs are encrypted with AES-256 and stored off-chain on IPFS. The chain receives only compact hashes, CIDs, commitments, and verdicts.",
  },
  {
    q: "How does ForgeLedger prove a print physically happened?",
    a: "Before execution, the gateway commits to a secret random sampling schedule. During the job it hashes sensor snapshots at those moments. Revealing the schedule later lets the contract verify activity without giving an attacker the sample times in advance.",
  },
  {
    q: "Does the prototype require physical printers?",
    a: "No. The six-month MVP uses simulated printers and sensor profiles with a real local Ethereum network, making the full protocol demonstrable on one laptop.",
  },
  {
    q: "What stack powers the system?",
    a: "Solidity and Hardhat for contracts, Python and FastAPI for orchestration, Web3.py for chain calls, IPFS for encrypted payloads, and a React dashboard for fleet monitoring and audit queries.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy: string; light?: boolean }) {
  return (
    <div className={`section-intro${light ? " section-intro--light" : ""}`}>
      <p className="eyebrow">[ {eyebrow} ]</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span>Introducing ProofMesh: physical print verification on-chain.</span>
        <a href="#proof">Explore the protocol <ArrowRight size={14} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="ForgeLedger home">
          <BrandMark />
          <span>FORGELEDGER</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#protocol">Protocol</a>
          <a href="#architecture">Architecture</a>
          <a href="#security">Security</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav-actions">
          <a className="button button--dark button--small" href="#architecture">View system</a>
          <a className="button button--green button--small" href="#protocol">Explore demo</a>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu className="menu-open" /><X className="menu-close" /></summary>
          <nav>
            <a href="#protocol">Protocol</a>
            <a href="#architecture">Architecture</a>
            <a href="#security">Security</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#faq">FAQ</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker"><span>●</span> Verifiable manufacturing infrastructure</p>
          <h1>The Tamper-Proof<br />Print Network.</h1>
          <div className="hero-bottom">
            <p>
              A blockchain-secured control plane for fleets of 3D printers—protecting design IP,
              authorizing every job, and proving every physical run.
            </p>
            <div className="hero-actions">
              <a className="button button--dark" href="#architecture">See architecture</a>
              <a className="button button--green" href="#proof">How proof works</a>
            </div>
            <a className="text-link" href="#protocol">Read the implementation plan <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-network" aria-label="Live verifiable printer network illustration">
          <div className="network-header">
            <span><Radio size={14} /> NETWORK LIVE</span>
            <span>BLOCK 18,492</span>
          </div>
          <div className="network-canvas">
            <svg viewBox="0 0 640 300" role="img" aria-label="Three printers connected to the verification ledger">
              <path d="M320 146 L118 74 M320 146 L518 62 M320 146 L518 238" />
              <path className="pulse-path pulse-path--one" d="M320 146 L118 74" />
              <path className="pulse-path pulse-path--two" d="M320 146 L518 62" />
              <path className="pulse-path pulse-path--three" d="M320 146 L518 238" />
            </svg>
            <div className="ledger-node"><Hexagon /><span>LEDGER</span><small>FINALIZED</small></div>
            <div className="printer-node printer-node--a"><Box /><span>PRINTER 01</span><small>PRINTING · 68%</small></div>
            <div className="printer-node printer-node--b"><Box /><span>PRINTER 02</span><small>AVAILABLE</small></div>
            <div className="printer-node printer-node--c"><Box /><span>PRINTER 03</span><small>VERIFYING</small></div>
          </div>
          <div className="network-footer">
            <span><Check size={14} /> 04 contracts online</span>
            <span><ShieldCheck size={14} /> integrity 100%</span>
          </div>
        </div>
      </section>

      <section className="tech-strip" aria-label="Technology stack">
        <div className="strip-label"><span>Built on open infrastructure</span></div>
        <div className="tech-list">
          {[
            [Hexagon, "Ethereum"], [Braces, "Solidity"], [Database, "IPFS"],
            [Zap, "FastAPI"], [Network, "Web3.py"], [LockKeyhole, "AES-256"],
          ].map(([Icon, label]) => {
            const TechIcon = Icon as typeof Hexagon;
            return <span key={label as string}><TechIcon size={22} />{label as string}</span>;
          })}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-mark"><BrandMark /></div>
        <blockquote>
          “We don&apos;t just store a log. We can <em>prove the log is true</em>—without trusting the machine or its operator.”
        </blockquote>
        <div className="manifesto-meta">
          <span>THE CORE GUARANTEE</span>
          <p>Snapshot-commitment verification</p>
        </div>
      </section>

      <section className="dark-section protocol" id="protocol">
        <SectionIntro
          light
          eyebrow="PROTOCOL"
          title="How ForgeLedger secures every print"
          copy="Every critical action moves through a verifiable chain—from encrypted design upload to an immutable final verdict."
        />
        <div className="section-rule"><span>How it works</span></div>
        <div className="steps-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="step-card" key={step.number}>
                <div className="step-number">{step.number}</div>
                <Icon size={38} strokeWidth={1.35} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <div className="step-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="dark-section fraud-section">
        <SectionIntro
          light
          eyebrow="DETECTION"
          title="Catch every kind of tampering"
          copy="From forged completion signals to swapped payloads, each attack leaves cryptographic evidence before damage reaches production."
        />
        <div className="section-rule"><span>Three jobs. Three definitive outcomes.</span></div>
        <div className="scenario-grid">
          {scenarios.map((scenario, index) => (
            <article className={`scenario-card scenario-card--${scenario.tone}`} key={scenario.type}>
              <div className="scenario-top">
                <span>0{index + 1}</span>
                <span className="status-dot">{scenario.type}</span>
              </div>
              <div className="fake-code">
                <span>commitment</span>
                <code>0x{index === 0 ? "8e4f...c219" : index === 1 ? "4a91...77df" : "c201...0b4e"}</code>
              </div>
              <h3>{scenario.title}</h3>
              <p>{scenario.detail}</p>
              <div className="scenario-result"><CircleCheck size={17} />{scenario.status}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="light-section security-build" id="security">
        <SectionIntro
          eyebrow="SECURITY BY CONSTRUCTION"
          title="Your design. Your rules. Your proof."
          copy="ForgeLedger keeps valuable manufacturing data private while making its integrity independently verifiable."
        />
        <div className="security-panels">
          <article className="security-panel security-panel--wide">
            <div className="panel-visual cipher-visual">
              <div className="file-tile"><Box /><span>DESIGN.GCODE</span><small>12.8 MB</small></div>
              <div className="cipher-arrow"><LockKeyhole /><span>AES-256</span></div>
              <div className="file-tile file-tile--dark"><Database /><span>IPFS CID</span><small>bafy...7e2a</small></div>
            </div>
            <p className="eyebrow">[ PAYLOAD PROTECTION ]</p>
            <h3>Secrets stay off-chain</h3>
            <p>Only encrypted payloads leave the client. The public ledger receives compact integrity anchors—not your CAD data.</p>
          </article>
          <article className="security-panel">
            <div className="panel-visual role-visual">
              {[
                ["ADMIN", "GRANT"], ["CLIENT", "UPLOAD"], ["OPERATOR", "EXECUTE"],
              ].map(([role, action]) => <div key={role}><span>{role}</span><Check size={16} /><small>{action}</small></div>)}
            </div>
            <p className="eyebrow">[ ACCESS CONTROL ]</p>
            <h3>Every action has an owner</h3>
            <p>Role checks happen inside Solidity contracts before any state-changing call is accepted.</p>
          </article>
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <SectionIntro
          eyebrow="ARCHITECTURE"
          title="One validation layer. Five coordinated systems."
          copy="A practical hybrid architecture keeps large data private and fast while using the ledger where immutability matters most."
        />
        <div className="section-rule section-rule--dark"><span>Request flow · top to bottom</span></div>
        <div className="architecture-map">
          <div className="arch-layer arch-layer--app">
            <span>01</span><div><h3>Application</h3><p>Fleet dashboard · audit trail · verification results</p></div><ScanLine />
          </div>
          <ArrowDownRight className="arch-arrow" />
          <div className="arch-layer arch-layer--backend">
            <span>02</span><div><h3>Backend + Edge Gateway</h3><p>Auth · encryption · scheduling · snapshot engine</p></div><ServerCog />
          </div>
          <div className="arch-split">
            <div className="arch-layer"><span>03</span><div><h3>Printer Fleet</h3><p>Power · thermal · filament · acoustic signals</p></div><Cpu /></div>
            <div className="arch-layer"><span>04</span><div><h3>Off-chain Storage</h3><p>Encrypted design payloads on IPFS</p></div><Database /></div>
          </div>
          <ArrowDownRight className="arch-arrow" />
          <div className="arch-layer arch-layer--ledger">
            <span>05</span><div><h3>Ethereum Ledger</h3><p>AccessControl · PrinterRegistry · JobRegistry · Verification</p></div><Layers3 />
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>COMMIT · SAMPLE · VERIFY · REVEAL · COMMIT · SAMPLE · VERIFY · REVEAL ·</div>
        <div>COMMIT · SAMPLE · VERIFY · REVEAL · COMMIT · SAMPLE · VERIFY · REVEAL ·</div>
      </div>

      <section className="proof-section" id="proof">
        <div className="proof-visual">
          <div className="orbit orbit--one" />
          <div className="orbit orbit--two" />
          <div className="proof-core"><Fingerprint size={54} /><span>20 / 20</span><small>PROOFS VALID</small></div>
          {["HASH", "POWER", "THERMAL", "FILAMENT", "GEOMETRY"].map((label, index) => (
            <span className={`proof-chip proof-chip--${index + 1}`} key={label}>{label}</span>
          ))}
        </div>
        <div className="proof-copy">
          <p className="eyebrow">[ SNAPSHOT COMMITMENT ]</p>
          <h2>Proof a print physically ran.</h2>
          <p>
            Random sample times are committed before execution and revealed afterward. An attacker never knows which moments must look real.
          </p>
          <div className="proof-stat">
            <strong>2.5 × 10<sup>−27</sup></strong>
            <span>evasion probability when 95% of a reference job is faked</span>
          </div>
          <a className="button button--dark" href="#faq">Understand the guarantee</a>
        </div>
      </section>

      <section className="enterprise-section">
        <SectionIntro
          eyebrow="SECURITY-FIRST DESIGN"
          title="Built for sensitive manufacturing"
          copy="Four independent controls protect intellectual property, block unauthorized execution, and keep every lifecycle event queryable."
        />
        <div className="enterprise-grid">
          {[
            ["01", ShieldCheck, "Hash-anchored integrity", "The gateway re-verifies every file against its on-chain commitment before execution."],
            ["02", LockKeyhole, "Minimal exposure", "Printers receive only the encrypted G-code and job ID required for the assigned run."],
            ["03", Network, "Append-only audit", "JobRegistered, JobScheduled, SnapshotCommitted, and JobVerified become permanent events."],
            ["04", ScanLine, "Geometry verification", "A tolerance-based feature match confirms that the produced object is the intended one."],
          ].map(([number, Icon, title, text]) => {
            const CardIcon = Icon as typeof ShieldCheck;
            return (
              <article key={number as string}>
                <span>{number as string}</span>
                <CardIcon size={34} strokeWidth={1.4} />
                <h3>{title as string}</h3>
                <p>{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <SectionIntro
          eyebrow="DELIVERY"
          title="From zero to verifiable fleet in six months"
          copy="A focused three-person plan turns the research protocol into a complete, demonstrable software MVP."
        />
        <div className="roadmap-grid">
          {[
            ["MONTH 01", "Foundation", "Freeze interfaces, deploy the local chain, and validate the contract model."],
            ["MONTH 02", "Secure pipeline", "Generate datasets and connect AES-256, IPFS, contracts, and the simulator."],
            ["MONTHS 03—04", "Verification", "Build snapshot commitments, geometry checks, scheduling, and live monitoring."],
            ["MONTHS 05—06", "Integration", "Run all tamper scenarios, measure performance, and ship the final demonstration."],
          ].map(([date, title, text], index) => (
            <article key={date}>
              <span className="roadmap-index">0{index + 1}</span>
              <p className="eyebrow">{date}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <SectionIntro
          eyebrow="FAQ"
          title="The technical questions, answered"
          copy="A concise guide to the trust model, storage split, prototype scope, and implementation stack."
        />
        <div className="faq-list">
          {faq.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary><span>{item.q}</span><ChevronDown /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-grid" aria-hidden="true" />
        <p className="eyebrow">[ BUILD WHAT CAN BE PROVEN ]</p>
        <h2>Manufacturing trust should be verifiable.</h2>
        <p>Secure every design. Authorize every job. Prove every print.</p>
        <div>
          <a className="button button--pink" href="#architecture">View the system</a>
          <a className="button button--green" href="#protocol">Explore protocol</a>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <a className="brand brand--footer" href="#top"><BrandMark /><span>FORGELEDGER</span></a>
          <p>Verifiable infrastructure for digital manufacturing.</p>
        </div>
        <div className="footer-links">
          <div><span>Product</span><a href="#protocol">Protocol</a><a href="#architecture">Architecture</a><a href="#security">Security</a></div>
          <div><span>Project</span><a href="#roadmap">Roadmap</a><a href="#faq">FAQ</a><a href="#top">Overview</a></div>
          <div><span>Stack</span><a href="https://ethereum.org" target="_blank" rel="noreferrer">Ethereum</a><a href="https://ipfs.tech" target="_blank" rel="noreferrer">IPFS</a><a href="https://soliditylang.org" target="_blank" rel="noreferrer">Solidity</a></div>
          <div><span>Source</span><a href="https://github.com/Krishang-Zinzuwadia/blockchain-site" target="_blank" rel="noreferrer">↗ GitHub</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 ForgeLedger</span><span>Built for tamper-proof manufacturing.</span></div>
      </footer>
    </main>
  );
}
