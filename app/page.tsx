"use client";

import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [equipment, setEquipment] = useState([
    {
      name: "Multivac #5",
      area: "Packaging",
      manufacturer: "MULTIVAC",
      model: "R145",
      serial: "247455",
      type: "Thermoforming packaging machine",
    },
  ]);

  const [documents, setDocuments] = useState([
    { name: "R145_247455 - Instruction Manual", category: "Manual", pages: 558 },
    { name: "R145_247455 - Electric-Pneumatic", category: "Schematic", pages: 172 },
    { name: "Spare Parts Catalogue-Mch", category: "Parts", pages: 405 },
    { name: "Spare Parts Catalogue-RTF", category: "Parts", pages: 111 },
  ]);

  const [repairs, setRepairs] = useState([
    {
      issue: "Weak vacuum",
      cause: "Possible gasket leak or vacuum pump issue",
      action: "Inspect gasket, pump oil, hoses, and vacuum fittings",
      downtime: "45",
    },
    {
      issue: "Poor seal quality",
      cause: "Possible seal bar temperature issue or contamination",
      action: "Inspect seal bar, film path, and product buildup",
      downtime: "30",
    },
  ]);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function generateTroubleshooting() {
    const q = question.toLowerCase();

    let output = "";

    if (q.includes("vacuum")) {
      output = `AI Troubleshooting Response:

Issue: ${question}

Likely causes:
1. Worn or damaged chamber gasket.
2. Vacuum pump oil is low, dirty, or overdue for service.
3. Leak in vacuum hose, fitting, valve, or seal surface.
4. Pneumatic supply issue affecting valve operation.
5. Sensor or solenoid not completing the vacuum sequence.

First checks:
1. Follow lockout/tagout before physical inspection.
2. Inspect the chamber gasket and sealing surface.
3. Check vacuum pump oil level and oil condition.
4. Inspect hoses, fittings, valves, and clamps for leaks.
5. Verify air pressure and regulator settings.
6. Review the electric/pneumatic schematic for related valves, sensors, and solenoids.

Parts/tools to inspect:
- Chamber gasket
- Vacuum pump oil
- Vacuum hose/fittings
- Solenoid valves
- Pressure/vacuum sensors
- Seal components

Work order notes to document:
- Problem found
- Root cause
- Parts used
- Downtime
- Corrective action
- Whether issue is repeat failure`;
    } else if (q.includes("seal") || q.includes("sealing")) {
      output = `AI Troubleshooting Response:

Issue: ${question}

Likely causes:
1. Seal bar temperature out of range.
2. Product contamination in seal area.
3. Film misalignment.
4. Worn seal strip or heating element.
5. Pneumatic pressure issue at sealing station.

First checks:
1. Follow lockout/tagout before inspection.
2. Inspect seal bar surface for damage or buildup.
3. Verify film path and alignment.
4. Check air pressure to the sealing station.
5. Inspect heating element, thermocouple, and wiring.
6. Confirm correct machine settings for product and film.

Corrective actions:
- Clean seal area.
- Adjust film tracking.
- Replace worn seal components.
- Verify temperature control.
- Document parts and downtime.`;
    } else if (q.includes("cylinder") || q.includes("pneumatic") || q.includes("air")) {
      output = `AI Troubleshooting Response:

Issue: ${question}

Likely causes:
1. Low plant air pressure.
2. Failed solenoid valve.
3. Sticking air cylinder.
4. Bad sensor or missing input signal.
5. Flow control valve closed or restricted.
6. Damaged air line or fitting leak.

First checks:
1. Follow lockout/tagout and release stored energy before working.
2. Verify air pressure at the FRL/regulator.
3. Check for air leaks.
4. Confirm solenoid valve is receiving signal.
5. Check manual override on solenoid if allowed by procedure.
6. Inspect cylinder rod, mounting, and mechanical binding.
7. Use the pneumatic schematic to identify upstream valves and sensors.

Document:
- Air pressure reading
- Failed component
- Repair made
- Parts used
- Downtime`;
    } else {
      output = `AI Troubleshooting Response:

Issue: ${question}

General safe troubleshooting path:
1. Follow lockout/tagout before inspection or repair.
2. Identify the affected station or component.
3. Check obvious mechanical issues first: guards, jams, buildup, loose parts, belts, bearings, and alignment.
4. Check utilities: air pressure, power, vacuum, and controls.
5. Review the machine manual and schematic for related sensors, solenoids, motors, and interlocks.
6. Document the issue, root cause, corrective action, downtime, and parts used.

Recommended next step:
Search the Multivac manual and electric/pneumatic schematic for the affected component, then compare the issue to previous repair logs.`;
    }

    setAnswer(output);
  }

  function addRepair(formData: FormData) {
    const newRepair = {
      issue: String(formData.get("issue")),
      cause: String(formData.get("cause")),
      action: String(formData.get("action")),
      downtime: String(formData.get("downtime")),
    };

    setRepairs([newRepair, ...repairs]);
  }

  function addDocument(formData: FormData) {
    const newDoc = {
      name: String(formData.get("name")),
      category: String(formData.get("category")),
      pages: Number(formData.get("pages")),
    };

    setDocuments([newDoc, ...documents]);
  }

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f3f4f6", minHeight: "100vh" }}>
      <div style={{ background: "#111827", color: "white", padding: "18px 30px" }}>
        <h1 style={{ margin: 0 }}>Maintenance AI Hub</h1>
        <p style={{ margin: "6px 0 0" }}>
          Centralized troubleshooting, repair history, machine manuals, schematics, PMs, and AI support.
        </p>
      </div>

      <div style={{ padding: "25px", display: "grid", gridTemplateColumns: "260px 1fr", gap: "20px" }}>
        <aside style={panelStyle}>
          <h2 style={{ marginTop: 0 }}>Menu</h2>
          <button style={menuButton} onClick={() => setActiveTab("dashboard")}>Dashboard</button>
          <button style={menuButton} onClick={() => setActiveTab("equipment")}>Equipment</button>
          <button style={menuButton} onClick={() => setActiveTab("documents")}>Documents</button>
          <button style={menuButton} onClick={() => setActiveTab("troubleshoot")}>AI Troubleshooter</button>
          <button style={menuButton} onClick={() => setActiveTab("repairs")}>Repair Logs</button>
          <button style={menuButton} onClick={() => setActiveTab("predictive")}>Predictive Summary</button>
        </aside>

        <section>
          {activeTab === "dashboard" && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", marginBottom: "20px" }}>
                <div style={cardStyle}><h3>Total Machines</h3><h1>{equipment.length}</h1><p>Equipment records</p></div>
                <div style={cardStyle}><h3>Documents</h3><h1>{documents.length}</h1><p>Manuals and schematics</p></div>
                <div style={cardStyle}><h3>Repair Logs</h3><h1>{repairs.length}</h1><p>Maintenance history</p></div>
                <div style={cardStyle}><h3>Risk Level</h3><h1>Medium</h1><p>Sample prediction</p></div>
              </div>

              <div style={panelStyle}>
                <h2>Project Goal</h2>
                <p>
                  This system will centralize machine PDFs, schematics, repair history, troubleshooting steps,
                  PMs, and predictive summaries into one maintenance knowledge hub.
                </p>
              </div>
            </>
          )}

          {activeTab === "equipment" && (
            <div style={panelStyle}>
              <h2>Equipment</h2>
              {equipment.map((item, index) => (
                <div key={index} style={rowStyle}>
                  <h3>{item.name}</h3>
                  <p><strong>Area:</strong> {item.area}</p>
                  <p><strong>Manufacturer:</strong> {item.manufacturer}</p>
                  <p><strong>Model:</strong> {item.model}</p>
                  <p><strong>Serial:</strong> {item.serial}</p>
                  <p><strong>Type:</strong> {item.type}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "documents" && (
            <div style={panelStyle}>
              <h2>Document Library</h2>

              <form action={addDocument} style={{ marginBottom: "20px" }}>
                <input name="name" placeholder="Document name" style={inputStyle} required />
                <input name="category" placeholder="Category: Manual, Schematic, Parts, PM" style={inputStyle} required />
                <input name="pages" placeholder="Page count" type="number" style={inputStyle} required />
                <button style={primaryButton}>Add Document Record</button>
              </form>

              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#e5e7eb" }}>
                    <th style={thStyle}>Document</th>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>Pages</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr key={index}>
                      <td style={tdStyle}>{doc.name}</td>
                      <td style={tdStyle}>{doc.category}</td>
                      <td style={tdStyle}>{doc.pages}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "troubleshoot" && (
            <div style={panelStyle}>
              <h2>AI Troubleshooter</h2>
              <p>Type a maintenance problem and click generate.</p>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Example: Multivac #5 is not pulling full vacuum"
                style={{ ...inputStyle, minHeight: "110px" }}
              />

              <button style={primaryButton} onClick={generateTroubleshooting}>
                Generate Troubleshooting Response
              </button>

              {answer && (
                <div style={{ marginTop: "20px", background: "#f9fafb", border: "1px solid #d1d5db", padding: "18px", borderRadius: "10px" }}>
                  <pre style={{ whiteSpace: "pre-wrap", fontFamily: "Consolas, monospace" }}>{answer}</pre>
                </div>
              )}
            </div>
          )}

          {activeTab === "repairs" && (
            <div style={panelStyle}>
              <h2>Repair Logs</h2>

              <form action={addRepair} style={{ marginBottom: "20px" }}>
                <input name="issue" placeholder="Issue / symptom" style={inputStyle} required />
                <input name="cause" placeholder="Cause found" style={inputStyle} required />
                <input name="action" placeholder="Corrective action" style={inputStyle} required />
                <input name="downtime" placeholder="Downtime minutes" type="number" style={inputStyle} required />
                <button style={primaryButton}>Add Repair Log</button>
              </form>

              <table style={tableStyle}>
                <thead>
                  <tr style={{ background: "#e5e7eb" }}>
                    <th style={thStyle}>Issue</th>
                    <th style={thStyle}>Cause</th>
                    <th style={thStyle}>Action</th>
                    <th style={thStyle}>Downtime</th>
                  </tr>
                </thead>
                <tbody>
                  {repairs.map((repair, index) => (
                    <tr key={index}>
                      <td style={tdStyle}>{repair.issue}</td>
                      <td style={tdStyle}>{repair.cause}</td>
                      <td style={tdStyle}>{repair.action}</td>
                      <td style={tdStyle}>{repair.downtime} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "predictive" && (
            <div style={panelStyle}>
              <h2>Predictive Maintenance Summary</h2>
              <p>
                Based on the sample repair history, the system flags vacuum loss, seal quality,
                and pneumatic actuation as high-value troubleshooting categories for Multivac #5.
              </p>

              <div style={rowStyle}>
                <h3>Equipment at Risk</h3>
                <p><strong>Multivac #5:</strong> Medium risk due to repeated vacuum/sealing related issues.</p>
              </div>

              <div style={rowStyle}>
                <h3>PM Opportunity</h3>
                <p>Add routine inspection for chamber gaskets, vacuum pump oil, hoses, seal bars, and pneumatic fittings.</p>
              </div>

              <div style={rowStyle}>
                <h3>Parts to Stock</h3>
                <p>Gaskets, fittings, sensors, solenoids, seal components, and vacuum pump oil.</p>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

const panelStyle = {
  background: "white",
  borderRadius: "14px",
  padding: "22px",
  marginBottom: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,.08)"
};

const cardStyle = {
  background: "white",
  borderRadius: "14px",
  padding: "18px",
  boxShadow: "0 2px 8px rgba(0,0,0,.08)"
};

const rowStyle = {
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  padding: "15px",
  marginBottom: "12px",
  background: "#f9fafb"
};

const menuButton = {
  display: "block",
  width: "100%",
  marginBottom: "10px",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  background: "#111827",
  color: "white",
  cursor: "pointer",
  textAlign: "left" as const
};

const primaryButton = {
  background: "#111827",
  color: "white",
  border: "none",
  borderRadius: "8px",
  padding: "12px 16px",
  cursor: "pointer",
  fontWeight: "bold"
};

const inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  marginBottom: "12px",
  padding: "11px",
  borderRadius: "8px",
  border: "1px solid #d1d5db"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const
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
