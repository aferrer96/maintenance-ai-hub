export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      <div style={{ background: "#111827", color: "white", padding: "18px 30px" }}>
        <h1 style={{ margin: 0 }}>Maintenance AI Hub</h1>
        <p style={{ margin: "6px 0 0" }}>
          Centralized troubleshooting, repair history, machine manuals, schematics, PMs, and AI support.
        </p>
      </div>

      <div style={{ padding: "25px", display: "grid", gridTemplateColumns: "260px 1fr", gap: "20px" }}>
        <aside style={{ background: "white", borderRadius: "14px", padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,.08)" }}>
          <h2 style={{ marginTop: 0 }}>Menu</h2>
          <p>Dashboard</p>
          <p>Equipment</p>
          <p>Documents</p>
          <p>AI Troubleshooter</p>
          <p>Repair Logs</p>
          <p>Predictive Summaries</p>
        </aside>

        <section>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", marginBottom: "20px" }}>
            <div style={cardStyle}>
              <h3>Total Machines</h3>
              <h1>1</h1>
              <p>Multivac #5 added</p>
            </div>

            <div style={cardStyle}>
              <h3>Documents</h3>
              <h1>4</h1>
              <p>Manuals and schematics</p>
            </div>

            <div style={cardStyle}>
              <h3>Open Issues</h3>
              <h1>3</h1>
              <p>Sample repair items</p>
            </div>

            <div style={cardStyle}>
              <h3>Risk Level</h3>
              <h1>Medium</h1>
              <p>Based on sample history</p>
            </div>
          </div>

          <div style={panelStyle}>
            <h2>Equipment Profile: Multivac #5</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
              <p><strong>Manufacturer:</strong> MULTIVAC</p>
              <p><strong>Model:</strong> R145</p>
              <p><strong>Serial Number:</strong> 247455</p>
              <p><strong>Machine Type:</strong> Thermoforming packaging machine</p>
              <p><strong>Area:</strong> Packaging</p>
              <p><strong>Status:</strong> Demo record active</p>
            </div>
          </div>

          <div style={panelStyle}>
            <h2>Document Library</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#e5e7eb" }}>
                  <th style={thStyle}>Document</th>
                  <th style={thStyle}>Category</th>
                  <th style={thStyle}>Pages</th>
                  <th style={thStyle}>Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>R145_247455 - Instruction Manual</td>
                  <td style={tdStyle}>Manual</td>
                  <td style={tdStyle}>558</td>
                  <td style={tdStyle}>Operation, maintenance, troubleshooting</td>
                </tr>
                <tr>
                  <td style={tdStyle}>R145_247455 - Electric-Pneumatic</td>
                  <td style={tdStyle}>Schematic</td>
                  <td style={tdStyle}>172</td>
                  <td style={tdStyle}>Electrical and pneumatic troubleshooting</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Spare Parts Catalogue-Mch</td>
                  <td style={tdStyle}>Parts</td>
                  <td style={tdStyle}>405</td>
                  <td style={tdStyle}>Mechanical parts and exploded views</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Spare Parts Catalogue-RTF</td>
                  <td style={tdStyle}>Parts</td>
                  <td style={tdStyle}>111</td>
                  <td style={tdStyle}>Replacement parts reference</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={panelStyle}>
            <h2>AI Troubleshooting Assistant</h2>
            <p><strong>Sample issue:</strong> Multivac #5 is not pulling full vacuum.</p>

            <div style={{ background: "#f9fafb", border: "1px solid #d1d5db", borderRadius: "10px", padding: "15px" }}>
              <h3>AI Suggested Checks</h3>
              <ol>
                <li>Follow lockout/tagout before physical inspection.</li>
                <li>Inspect chamber gasket, seal surfaces, and vacuum leaks.</li>
                <li>Check vacuum pump oil level and condition.</li>
                <li>Inspect vacuum hoses, fittings, valves, and connections.</li>
                <li>Verify pneumatic supply pressure and regulator settings.</li>
                <li>Check related sensors, solenoids, and electrical/pneumatic schematic references.</li>
                <li>Document findings, repair action, downtime, and parts used in the repair log.</li>
              </ol>
            </div>
          </div>

          <div style={panelStyle}>
            <h2>Sample Repair Log</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#e5e7eb" }}>
                  <th style={thStyle}>Issue</th>
                  <th style={thStyle}>Likely Cause</th>
                  <th style={thStyle}>Action</th>
                  <th style={thStyle}>Downtime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Weak vacuum</td>
                  <td style={tdStyle}>Gasket leak or pump issue</td>
                  <td style={tdStyle}>Inspect gasket, pump oil, hoses</td>
                  <td style={tdStyle}>45 min</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Poor seal quality</td>
                  <td style={tdStyle}>Seal bar temperature or contamination</td>
                  <td style={tdStyle}>Inspect seal bar, film path, product buildup</td>
                  <td style={tdStyle}>30 min</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Cylinder not actuating</td>
                  <td style={tdStyle}>Air supply, solenoid, sensor, or valve issue</td>
                  <td style={tdStyle}>Check air pressure and schematic circuit</td>
                  <td style={tdStyle}>25 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={panelStyle}>
            <h2>Predictive Summary</h2>
            <p>
              Based on sample repair history, the system flags vacuum loss, seal quality, and pneumatic actuation
              as high-value troubleshooting categories for Multivac #5.
            </p>
            <ul>
              <li><strong>Watch:</strong> Vacuum pump condition, seals, air leaks, and pneumatic components.</li>
              <li><strong>PM opportunity:</strong> Add routine inspection for gaskets, pump oil, hoses, and seal bars.</li>
              <li><strong>Parts to stock:</strong> Gaskets, fittings, sensors, solenoids, seal components, and vacuum pump oil.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "white",
  borderRadius: "14px",
  padding: "18px",
  boxShadow: "0 2px 8px rgba(0,0,0,.08)"
};

const panelStyle = {
  background: "white",
  borderRadius: "14px",
  padding: "22px",
  marginBottom: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,.08)"
};

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
  borderBottom: "1px solid #d1d5db"
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb"
};
