export default function Home() {
  return (
    <main style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Maintenance AI Hub</h1>
      <p>
        Centralized maintenance troubleshooting, repair history, machine manuals,
        schematics, PMs, and AI-assisted troubleshooting.
      </p>

      <section style={{ marginTop: "25px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>Demo Machine: Multivac #5</h2>
        <p><strong>Manufacturer:</strong> MULTIVAC</p>
        <p><strong>Model:</strong> R145</p>
        <p><strong>Serial Number:</strong> 247455</p>
        <p><strong>Machine Type:</strong> Thermoforming packaging machine</p>
      </section>

      <section style={{ marginTop: "25px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>Document Library</h2>
        <ul>
          <li>Instruction Manual — 558 pages</li>
          <li>Electric / Pneumatic Schematics — 172 pages</li>
          <li>Mechanical Spare Parts Catalogue — 405 pages</li>
          <li>RTF Spare Parts Catalogue — 111 pages</li>
        </ul>
      </section>

      <section style={{ marginTop: "25px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>Sample AI Troubleshooting Output</h2>
        <p><strong>Issue:</strong> Multivac #5 is not pulling full vacuum.</p>
        <p><strong>Likely checks:</strong></p>
        <ul>
          <li>Follow lockout/tagout before physical inspection.</li>
          <li>Inspect chamber gasket and sealing surfaces.</li>
          <li>Check vacuum pump oil level and condition.</li>
          <li>Check vacuum hoses, fittings, and air leaks.</li>
          <li>Verify pneumatic supply pressure.</li>
          <li>Check sensors, solenoids, and related schematic references.</li>
          <li>Document findings, parts used, downtime, and corrective action.</li>
        </ul>
      </section>

      <section style={{ marginTop: "25px", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>Program Goal</h2>
        <p>
          The full version will allow maintenance to upload machine PDFs, search manuals,
          understand schematics, log repairs, identify repeat failures, and generate
          predictive maintenance summaries.
        </p>
      </section>
    </main>
  );
}
