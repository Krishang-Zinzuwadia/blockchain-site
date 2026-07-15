import {
  ArrowRight,
  Box,
  Braces,
  Check,
  CircuitBoard,
  Database,
  Fingerprint,
  Gauge,
  Hexagon,
  Layers3,
  LockKeyhole,
  Menu,
  Network,
  ScanLine,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { FaqAccordion } from "./components/FaqAccordion";
import { MotionEffects } from "./components/MotionEffects";

const stack = [
  [Hexagon, "Ethereum"],
  [Braces, "Solidity"],
  [Database, "IPFS"],
  [Zap, "FastAPI"],
  [Network, "Web3.py"],
  [LockKeyhole, "AES-256"],
] as const;

const flow = [
  {
    number: "01",
    label: "ENCRYPT",
    title: "Anchor the design",
    copy: "Encrypt every design, move the payload to IPFS, and commit only its CID and hash on-chain.",
    icon: LockKeyhole,
  },
  {
    number: "02",
    label: "AUTHORIZE",
    title: "Coordinate the fleet",
    copy: "Smart contracts approve the operator, reserve an available printer, and record every transition.",
    icon: Workflow,
  },
  {
    number: "03",
    label: "VERIFY",
    title: "Prove the outcome",
    copy: "Secret sensor samples and geometry checks produce a verdict the operator cannot rewrite.",
    icon: Fingerprint,
  },
];

const outcomes = [
  {
    state: "VERIFIED",
    metric: "20 / 20",
    title: "Legitimate production run",
    copy: "Every committed snapshot matches the expected printing envelope.",
    color: "green",
  },
  {
    state: "TAMPERED",
    metric: "SAMPLE 07",
    title: "False completion signal",
    copy: "Idle telemetry exposes a forged job before payment can unlock.",
    color: "pink",
  },
  {
    state: "REJECTED",
    metric: "HASH ≠",
    title: "Modified design payload",
    copy: "The received ciphertext fails its ledger commitment before execution.",
    color: "yellow",
  },
];

const architecture = [
  ["01", "Fleet dashboard", "Live printers, job state, verification results", ScanLine],
  ["02", "Gateway + API", "Authentication, encryption, scheduling, sampling", ServerCog],
  ["03", "Off-chain data", "Encrypted payloads and private sensor evidence", Database],
  ["04", "Ethereum ledger", "Roles, commitments, lifecycle events, verdicts", Layers3],
] as const;

const safeguards = [
  ["01", "Hash-anchored integrity", "Every file is checked against its on-chain commitment before a printer can execute it."],
  ["02", "Private by default", "CAD and G-code stay encrypted off-chain; only compact integrity anchors reach the ledger."],
  ["03", "Role-bound execution", "Solidity access controls reject unauthorized uploads, assignments, and state changes."],
] as const;

const milestones = [
  ["MONTH 01", "Protocol foundation", "Freeze interfaces, deploy the local chain, and validate the contract model."],
  ["MONTH 02", "Secure pipeline", "Connect AES-256, IPFS, contracts, printer simulation, and telemetry datasets."],
  ["MONTHS 03—04", "Physical verification", "Build secret sampling, geometry checks, scheduling, and fleet monitoring."],
  ["MONTHS 05—06", "Integrated proof", "Exercise tamper scenarios, measure the system, and deliver the complete MVP."],
] as const;

const faq = [
  [
    "Why use a blockchain for a printer fleet?",
    "The ledger gives authorizations, schedule changes, file commitments, and verification verdicts one shared timestamped history that no operator can silently edit.",
  ],
  [
    "Are design files stored publicly on-chain?",
    "No. Designs are encrypted with AES-256 and stored off-chain on IPFS. The chain receives only hashes, CIDs, commitments, and verdicts.",
  ],
  [
    "How can Rubyx prove a print physically happened?",
    "The gateway commits to secret random sample times before execution, records sensor evidence during the job, and reveals the schedule afterward. An attacker never knows which moments must look real.",
  ],
  [
    "Does the prototype need physical printers?",
    "No. The six-month MVP uses simulated printers and sensor profiles with a real local Ethereum network, so the complete protocol can be demonstrated on one machine.",
  ],
  [
    "What powers the system?",
    "Solidity and Hardhat for contracts, Python and FastAPI for orchestration, Web3.py for chain calls, IPFS for encrypted payloads, and a React dashboard for the fleet and audit trail.",
  ],
] as const;

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path className="ruby-outline" d="M24 2 43 14 37 37 24 46 11 37 5 14Z" />
      <path className="ruby-top" d="M24 2 43 14 33 20H15L5 14Z" />
      <path className="ruby-left" d="m5 14 10 6 9 26-13-9Z" />
      <path className="ruby-right" d="m43 14-10 6-9 26 13-9Z" />
      <path className="ruby-core" d="m15 20 9-18 9 18-9 26Z" />
      <path className="ruby-x" d="m19 25 10 10m0-10L19 35" />
    </svg>
  );
}

function CutButton({ href, children, tone = "dark" }: { href: string; children: React.ReactNode; tone?: "dark" | "green" | "pink" | "outline" }) {
  return <a className={`cut-button cut-button--${tone}`} href={href}>{children}</a>;
}

function Rule({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`measure-rule${dark ? " measure-rule--dark" : ""}`}><span>{children}</span></div>;
}

function PrinterIllustration() {
  return (
    <div className="hero-machine" aria-label="A printer gateway coordinating a verified manufacturing network">
      <div className="hero-glow" />
      <svg viewBox="0 0 650 590" role="img" aria-hidden="true">
        <defs>
          <pattern id="heroDots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.35" fill="#3d3b4f" />
          </pattern>
          <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#28e99f" stopOpacity=".88" />
            <stop offset="1" stopColor="#28e99f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="machine-wire" d="M90 126H203M447 126h116M124 452h98M431 452h116" />
        <path className="machine-body" d="M210 84h232l38 64-37 74H209l-40-74z" />
        <path className="machine-face" d="M228 105h194l24 43-24 43H228l-24-43z" />
        <path className="machine-halftone" fill="url(#heroDots)" d="M210 84h232l38 64-37 74H209l-40-74z" />
        <rect className="machine-screen" x="258" y="128" width="134" height="40" />
        <text x="325" y="153" textAnchor="middle">JOB_0084 · VERIFIED</text>
        <path className="machine-neck" d="M285 222h80l20 70-33 40h-54l-33-40z" />
        <path fill="url(#beam)" d="M294 312h63l76 209H218z" />
        <path className="object-wire" d="M218 505c18-87 58-139 107-139s89 52 107 139M239 505c22-65 51-98 86-98s64 33 86 98M272 505c13-39 31-58 53-58s40 19 53 58" />
        <path className="object-base" d="M184 505h282l-25 49H209z" />
        <circle className="signal signal--a" cx="90" cy="126" r="8" />
        <circle className="signal signal--b" cx="563" cy="126" r="8" />
        <circle className="signal signal--c" cx="124" cy="452" r="8" />
        <circle className="signal signal--d" cx="547" cy="452" r="8" />
      </svg>
      <span className="machine-tag machine-tag--one">AES-256</span>
      <span className="machine-tag machine-tag--two">IPFS CID</span>
      <span className="machine-tag machine-tag--three">BLOCK 18,492</span>
    </div>
  );
}

function ProtocolVisual({ number }: { number: string }) {
  if (number === "01") {
    return (
      <div className="flow-visual protocol-diagram protocol-diagram--encrypt" aria-label="A design file is encrypted, stored on IPFS, and anchored by its hash on Ethereum">
        <span className="flow-number">01</span>
        <div className="diagram-node diagram-node--file"><Box /><small>DESIGN<br />GCODE</small></div>
        <div className="diagram-step"><LockKeyhole /><small>AES-256</small></div>
        <div className="diagram-node diagram-node--ipfs"><Database /><small>IPFS<br />bafy…7e2a</small></div>
        <div className="diagram-anchor"><Hexagon /><small>HASH<br />ON-CHAIN</small></div>
      </div>
    );
  }

  if (number === "02") {
    return (
      <div className="flow-visual protocol-diagram protocol-diagram--fleet" aria-label="An authorized operator schedules a job through a smart contract to an available printer">
        <span className="flow-number">02</span>
        <svg className="fleet-links" viewBox="0 0 500 210" aria-hidden="true"><path d="M82 105H196M304 105H354M304 105L354 48M304 105l50 57" /></svg>
        <div className="operator-node"><ShieldCheck /><small>OPERATOR<br />AUTHORIZED</small></div>
        <div className="contract-node"><Braces /><small>JOB<br />CONTRACT</small></div>
        <div className="printer-stack"><span><Box />P-01 <b>BUSY</b></span><span><Box />P-02 <b>READY</b></span><span><Box />P-03 <b>IDLE</b></span></div>
        <span className="assignment-chip">ASSIGNED → P-02</span>
      </div>
    );
  }

  return (
    <div className="flow-visual protocol-diagram protocol-diagram--verify" aria-label="Secret sensor samples are compared with the expected print profile to produce a verified verdict">
      <span className="flow-number">03</span>
      <div className="sensor-chart">
        <span>LIVE SENSOR TRACE</span>
        <svg viewBox="0 0 280 80" aria-hidden="true"><path d="M4 56 C28 55 30 18 54 22 S82 68 106 42 S138 13 160 31 S190 66 214 36 S249 17 276 27" /><circle cx="54" cy="22" r="4" /><circle cx="160" cy="31" r="4" /><circle cx="276" cy="27" r="4" /></svg>
        <div><small>t03</small><small>t09</small><small>t14</small></div>
      </div>
      <div className="profile-match"><Fingerprint /><span><small>REFERENCE MATCH</small><b>20 / 20</b></span><Check /></div>
      <span className="verdict-chip">VERDICT · VERIFIED</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <div className="announcement">
        <CircuitBoard size={17} />
        <span>Introducing ProofMesh: physical print verification on-chain.</span>
        <a href="#proof">Learn more <ArrowRight size={14} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rubyx home"><BrandMark /><span>Rubyx</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#protocol"><Box />Protocol</a>
          <a href="#architecture"><Network />Architecture</a>
          <a href="#security"><ShieldCheck />Security</a>
          <a href="#roadmap"><Gauge />Roadmap</a>
          <a href="#faq"><Braces />Resources</a>
        </nav>
        <div className="nav-actions">
          <CutButton href="#architecture">View system</CutButton>
          <CutButton href="#protocol" tone="green">Explore demo</CutButton>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu className="menu-open" /><X className="menu-close" /></summary>
          <nav><a href="#protocol">Protocol</a><a href="#architecture">Architecture</a><a href="#security">Security</a><a href="#roadmap">Roadmap</a><a href="#faq">FAQ</a></nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="registration-marks" aria-hidden="true" />
        <div className="hero-copy">
          <h1>The Trust Layer<br />for 3D Printing.</h1>
          <p>A blockchain-secured control plane for printer fleets—protecting design IP, authorizing every job, and proving every physical run.</p>
          <div className="joined-actions">
            <CutButton href="#architecture">See architecture</CutButton>
            <CutButton href="#proof" tone="green">How proof works</CutButton>
          </div>
          <a className="mono-link" href="#protocol">read the implementation plan <ArrowRight size={14} /></a>
        </div>
        <PrinterIllustration />
      </section>

      <section className="stack-strip" aria-label="Technology stack">
        {stack.map(([Icon, name]) => <span key={name}><Icon />{name}</span>)}
      </section>

      <section className="quote-section">
        <div className="quote-mark"><BrandMark /></div>
        <blockquote>“We don&apos;t just store a log. We can <em>prove the log is true</em>—without trusting the machine or its operator.”</blockquote>
        <div className="quote-source"><strong>THE CORE GUARANTEE</strong><span>Snapshot-commitment verification</span></div>
      </section>

      <section className="dark-section protocol-section" id="protocol">
        <div className="section-head section-head--dark">
          <p className="eyebrow">[ PROTOCOL ]</p>
          <h2>How Rubyx secures every print</h2>
          <p>Every critical action moves through a verifiable chain—from encrypted design upload to an immutable final verdict.</p>
        </div>
        <Rule dark>HOW IT WORKS</Rule>
        <div className="flow-grid">
          {flow.map(({ number, label, title, copy }) => (
            <article key={number}>
              <ProtocolVisual number={number} />
              <p className="eyebrow">[ {label} ]</p>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section outcomes-section">
        <div className="center-head">
          <p className="eyebrow">[ DETECTION ]</p>
          <h2>Catch every kind of tampering</h2>
          <p>From forged completion signals to swapped payloads and failed geometry checks.</p>
        </div>
        <Rule dark>THREE JOBS THAT SHOULD NEVER REACH PRODUCTION.</Rule>
        <div className="outcome-grid">
          {outcomes.map((item, index) => (
            <article key={item.state} className={`outcome-card outcome-card--${item.color}`}>
              <div className="repo-row"><span>☆ 0{index + 1}</span><span>⑂ JOB_{84 + index}</span><span>{item.state}</span></div>
              <div className="outcome-file">▱ encrypted/design_{index + 1}.gcode</div>
              <div className="diff-lines"><i /><i /><i /><i /></div>
              <div className="outcome-copy"><small>RUBYX</small><h3>{item.title}</h3><p>{item.copy}</p></div>
              <div className="outcome-result"><span>{item.metric}</span><ArrowRight size={15} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="personalization-section" id="security">
        <div className="center-head center-head--light">
          <p className="eyebrow">[ PRIVATE BY DESIGN ]</p>
          <h2>Your design. Your rules. Your proof.</h2>
          <p>Confidential manufacturing data stays private while its integrity remains independently verifiable.</p>
        </div>
        <div className="personal-grid">
          <article>
            <div className="payload-demo">
              <div className="cad-card"><Box /><b>DESIGN.GCODE</b><small>12.8 MB</small></div>
              <div className="encrypt-path"><LockKeyhole /><span>AES-256</span></div>
              <div className="cid-card"><Database /><b>IPFS CID</b><small>bafy...7e2a</small></div>
            </div>
            <p className="eyebrow">[ PAYLOAD PROTECTION ]</p><h3>Secrets stay off-chain</h3><p>Only encrypted payloads leave the client. The ledger receives integrity anchors, never the source design.</p>
          </article>
          <article>
            <div className="roles-demo">
              <span className="learning-chip"><Sparkles /> 3 verified roles</span>
              {[["ADMIN", "GRANT"], ["CLIENT", "UPLOAD"], ["OPERATOR", "EXECUTE"]].map(([role, action]) => <div key={role}><span>{role}</span><Check /><small>{action}</small></div>)}
            </div>
            <p className="eyebrow">[ ACCESS CONTROL ]</p><h3>Every action has an owner</h3><p>Contract-level role checks gate every state-changing call before the fleet receives it.</p>
          </article>
        </div>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="section-head">
          <p className="eyebrow">[ YOUR STACK ]</p>
          <h2>The Central Validation Layer.</h2>
          <p>One coordinated system joins the operator interface, edge gateway, private storage, printers, and immutable ledger.</p>
          <CutButton href="#proof">See the proof</CutButton>
        </div>
        <div className="architecture-grid">
          {architecture.map(([number, title, copy, Icon]) => (
            <article key={number}>
              <div className="architecture-visual"><Icon /><span>{number} / 04</span><div className="arch-orbit" /></div>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>COMMIT · SAMPLE · VERIFY · REVEAL · COMMIT · SAMPLE · VERIFY · REVEAL ·&nbsp;</span><span>COMMIT · SAMPLE · VERIFY · REVEAL · COMMIT · SAMPLE · VERIFY · REVEAL ·&nbsp;</span></div>

      <section className="proof-section" id="proof">
        <div className="proof-heading"><p className="eyebrow">[ PROOFMESH ]</p><h2>Autonomously Verify Every Print</h2><p>Secret sampling catches false jobs and missed edge cases.</p><CutButton href="#faq">Explore the method</CutButton></div>
        <div className="proof-pipeline" aria-label="The ProofMesh commit, sample, reveal, and verification sequence">
          <article className="proof-stage proof-stage--commit">
            <span className="proof-stage-number">01</span><p className="eyebrow">COMMIT</p><h3>Lock the sample plan</h3>
            <div className="commit-card"><LockKeyhole /><small>H(seed + times)</small><code>0x8e4f…c219</code></div>
            <p>Publish the commitment before the printer starts. The sample times remain secret.</p>
          </article>
          <article className="proof-stage proof-stage--sample">
            <span className="proof-stage-number">02</span><p className="eyebrow">SAMPLE</p><h3>Observe the real job</h3>
            <div className="mini-trace"><svg viewBox="0 0 250 72" aria-hidden="true"><path d="M2 48 C20 45 23 12 44 20 S69 65 91 40 S120 9 143 28 S170 63 191 34 S224 16 248 24" /><circle cx="44" cy="20" r="4" /><circle cx="143" cy="28" r="4" /><circle cx="248" cy="24" r="4" /></svg><span>t03</span><span>t09</span><span>t14</span></div>
            <p>Capture power, thermal, filament, and geometry evidence only at committed moments.</p>
          </article>
          <article className="proof-stage proof-stage--reveal">
            <span className="proof-stage-number">03</span><p className="eyebrow">REVEAL</p><h3>Open the schedule</h3>
            <div className="reveal-card"><code>[ 03, 09, 14 ]</code><span><Check /> COMMITMENT MATCH</span></div>
            <p>Reveal the seed after execution so anyone can reproduce and verify the sample plan.</p>
          </article>
          <article className="proof-stage proof-stage--verdict">
            <span className="proof-stage-number">04</span><p className="eyebrow">VERIFY</p><h3>Finalize the verdict</h3>
            <div className="verdict-card"><Fingerprint /><strong>20 / 20</strong><span>SNAPSHOTS VALID</span><b><Check /> VERIFIED</b></div>
            <p>The contract records one immutable result and unlocks the authorized next action.</p>
          </article>
        </div>
      </section>

      <section className="safeguards-section">
        <div className="section-head">
          <p className="eyebrow">[ SECURITY-FIRST DESIGN ]</p>
          <h2>Built for sensitive manufacturing</h2>
          <p>Independent controls protect intellectual property, prevent unauthorized execution, and keep the full lifecycle queryable.</p>
        </div>
        <div className="safeguard-grid">
          {safeguards.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-lead"><p className="eyebrow">[ SIX-MONTH MVP ]</p><h2>From protocol to verifiable fleet.</h2><CutButton href="#architecture">View system</CutButton></div>
        <div className="roadmap-grid">
          {milestones.map(([date, title, copy], index) => <article key={date}><div><span>0{index + 1}</span><small>{date}</small></div><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-intro">
          <p className="eyebrow">[ TECHNICAL FAQ ]</p>
          <h2>Questions,<br />answered.</h2>
          <p>The short version of how Rubyx handles trust, privacy, physical proof, and prototype scope.</p>
          <div className="faq-meta"><strong>05</strong><span>CORE QUESTIONS<br />ABOUT THE PROTOCOL</span></div>
        </div>
        <FaqAccordion items={faq} />
      </section>

      <section className="final-cta">
        <div className="cta-copy"><h2>Secure the design.<br />Prove the print.<br />Trust the outcome.</h2><div className="joined-actions"><CutButton href="#architecture" tone="outline">View system</CutButton><CutButton href="#protocol" tone="pink">Start now</CutButton></div></div>
        <div className="cta-network" aria-hidden="true"><Fingerprint /><span /><span /><span /><span /><div>VERDICT<br /><b>VERIFIED</b></div></div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand"><BrandMark /><strong>rubyx</strong><span><i /> OPERATIONAL</span></div>
          <div><b>PRODUCT</b><a href="#protocol">PROTOCOL</a><a href="#architecture">ARCHITECTURE</a><a href="#security">SECURITY</a><a href="#proof">PROOFMESH</a></div>
          <div><b>PROJECT</b><a href="#roadmap">ROADMAP</a><a href="#faq">FAQ</a><a href="#top">OVERVIEW</a><a href="#architecture">TECHNICAL STACK</a></div>
          <div><b>INFRASTRUCTURE</b><a href="https://ethereum.org">ETHEREUM</a><a href="https://ipfs.tech">IPFS</a><a href="https://soliditylang.org">SOLIDITY</a><a href="https://fastapi.tiangolo.com">FASTAPI</a></div>
          <div><b>CONNECT</b><a href="#top">SOURCE PROJECT</a><a href="#security">SECURITY MODEL</a><a href="#faq">DOCUMENTATION</a></div>
        </div>
        <div className="footer-cubes" aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <i key={i} />)}</div>
        <p className="footer-note">© 2026 RUBYX · RESEARCH PROTOTYPE</p>
      </footer>
    </main>
  );
}
