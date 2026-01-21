export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>

      {/* HERO */}
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
  <a
    href="#contact"
    style={{
      background: "#22c55e",
      color: "black",
      padding: "12px 16px",
      borderRadius: "12px",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
    }}
  >
    Get a free quote
  </a>

  <a
    href="tel:+353851698471"
    style={{
      background: "#111",
      color: "white",
      padding: "12px 16px",
      borderRadius: "12px",
      fontWeight: 700,
      textDecoration: "none",
      display: "inline-block",
      border: "1px solid #333",
    }}
  >
    Call / WhatsApp
  </a>
</div>

      <section style={{ marginBottom: "50px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Gutter Gurus – Exterior Cleaning Services
        </h1>
        <p style={{ fontSize: "20px", color: "#444" }}>
          Professional exterior & interior cleaning in Dublin and Wicklow
        </p>
        <p style={{ fontSize: "18px", marginTop: "15px" }}>
          📞 Tel / WhatsApp: <strong>085 169 8471</strong>
        </p>
      </section>

      {/* ABOUT */}
      <section style={{ marginBottom: "40px" }}>
        <h2>About Us</h2>
        <p>
          Gutter Gurus provides reliable and professional cleaning services for
          private homeowners. We work using professional hot water and steam
          cleaning equipment to deliver the best results safely and efficiently.
        </p>
      </section>

      {/* SERVICES */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Our Services</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>✔ Gutter cleaning</li>
          <li>✔ Roof cleaning & moss removal</li>
          <li>✔ Driveway & patio pressure washing</li>
          <li>✔ Wheelie bin cleaning</li>
          <li>✔ Window cleaning</li>
          <li>✔ Facade & brick cleaning</li>
          <li>✔ Carpet & upholstery cleaning</li>
        </ul>
        {/* ROOF GALLERY */}
<h3 style={{ marginTop: "25px" }}>Roof cleaning – gallery</h3>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
    marginTop: "12px",
  }}
>
  <img
    src="/images/roof/20251210_103044.jpg"
    alt="Roof cleaning"
    style={{ width: "100%", borderRadius: "10px" }}
  />

  <img
    src="/images/roof/20251212_115523.jpg"
    alt="Roof cleaning"
    style={{ width: "100%", borderRadius: "10px" }}
  />
  <img
    src="/images/roof/20251210_110856.jpg"
    alt="Roof cleaning"
    style={{ width: "100%", borderRadius: "10px" }}
  />
  <img
    src="/images/roof/20251212_115439.jpg"
    alt="Roof cleaning"
    style={{ width: "100%", borderRadius: "10px" }}
  />
</div>

      </section>
{/* GUTTER CLEANING – GALLERY */}
<section style={{ marginBottom: "40px" }}>
  <h2>Gutter cleaning – gallery</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    }}
  >
    <img
      src="/images/gutters/20251210_103036.jpg"
      alt="Gutter cleaning"
      style={{ width: "100%", borderRadius: "10px" }}
    />

    <img
      src="/images/gutters/20251210_123108.jpg"
      alt="Gutter cleaning"
      style={{ width: "100%", borderRadius: "10px" }}
    />

    <img
      src="/images/gutters/20251210_133209.jpg"
      alt="Gutter cleaning"
      style={{ width: "100%", borderRadius: "10px" }}
    />

    <img
    src="/images/gutters/20251210_133214.jpg"
      alt="Gutter cleaning"
      style={{ width: "100%", borderRadius: "10px" }}
   /> 
     <img
    src="/images/gutters/20251210_155511.jpg"
      alt="Gutter cleaning"
      style={{ width: "100%", borderRadius: "10px" }}
   /> 
  </div>

</section>
{/* DRIVEWAY GALLERY */}
<section style={{ marginBottom: "40px" }}>
  <h3 style={{ marginTop: "25px" }}>Driveway cleaning – gallery</h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    }}
  >

 <img
  src="/images/driveway/20250312_131854.jpg"
  alt="Driveway cleaning"
  style={{ width: "100%", borderRadius: "10px" }}
/>

<img
  src="/images/driveway/20250312_131857.jpg"
  alt="Driveway cleaning"
  style={{ width: "100%", borderRadius: "10px" }}
/>

<img
  src="/images/driveway/20250312_131905.jpg"
  alt="Driveway cleaning"
  style={{ width: "100%", borderRadius: "10px" }}
/>

<img
  src="/images/driveway/20250312_133702.jpg"
  alt="Driveway cleaning"
  style={{ width: "100%", borderRadius: "10px" }}
/>

<img
  src="/images/driveway/20251216_104402.jpg"
  alt="Driveway cleaning"
  style={{ width: "100%", borderRadius: "10px" }}
/>

<img
  src="/images/driveway/20251216_104409.jpg"
  alt="Driveway cleaning"
  style={{ width: "100%", borderRadius: "10px" }}
/>


 </div>

 </section>
 {/* CARPET GALLERY */}
<section style={{ marginBottom: "40px" }}>
  <h3 style={{ marginTop: "25px" }}>Carpet cleaning – gallery</h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    }}
  >
    <img
      src="/images/carpet/20240916_145026.jpg"
      alt="Carpet cleaning"
      style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }}
    />
    <img
      src="/images/carpet/20240916_152027.jpg"
      alt="Carpet cleaning"
      style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }}
    />
    <img
      src="/images/carpet/20240916_153724.jpg"
      alt="Carpet cleaning"
      style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }}
    />
    <img
      src="/images/carpet/20250829_101051.jpg"
      alt="Carpet cleaning"
      style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }}
    />
    <img
      src="/images/carpet/20250829_115933.jpg"
      alt="Carpet cleaning"
      style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }}
    />
   
  </div>
</section>
{/* SERVICES */}
<section style={{ marginBottom: "40px" }}>
  <h2>Services</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    }}
  >
    {[
      "Gutter cleaning",
      "Roof cleaning",
      "Driveway & patio cleaning",
      "Wheelie bin cleaning",
      "Window cleaning",
      "Facade / brick cleaning",
      "Carpet & upholstery cleaning",
    ].map((s) => (
      <div
        key={s}
        style={{
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          padding: "14px",
          background: "#0f0f0f",
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: "6px" }}>{s}</div>
        <div style={{ opacity: 0.85, fontSize: "14px", lineHeight: "1.5" }}>
          Fast quotes • Dublin & Wicklow • Insured
        </div>
      </div>
    ))}
  </div>
</section>


      {/* WHY US */}
  
    <section style={{ marginBottom: "40px" }}>
        <h2>Why Choose Gutter Gurus?</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>✅ Professional equipment (hot water & steam)</li>
          <li>✅ Experienced & insured</li>
          <li>✅ Affordable prices</li>
          <li>✅ Dublin & Wicklow coverage</li>
        </ul>
      </section>
{/* SERVICES */}
<section style={{ marginBottom: "40px" }}>
  <h2>Services</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    }}
  >
    {[
      "Gutter cleaning",
      "Roof cleaning",
      "Driveway & patio cleaning",
      "Wheelie bin cleaning",
      "Window cleaning",
      "Facade / brick cleaning",
      "Carpet & upholstery cleaning",
    ].map((s) => (
      <div
        key={s}
        style={{
          border: "1px solid #2a2a2a",
          borderRadius: "12px",
          padding: "14px",
          background: "#0f0f0f",
        }}
      >
        <div style={{ fontWeight: 700, marginBottom: "6px" }}>{s}</div>
        <div style={{ opacity: 0.85, fontSize: "14px", lineHeight: "1.5" }}>
          Fast quotes • Dublin & Wicklow • Insured
        </div>
      </div>
    ))}
  </div>
</section>
{/* PRICES FROM */}
<section style={{ marginTop: "50px" }}>
  <h2>Prices – from</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "12px",
      marginTop: "12px",
    }}
  >
    <div className="card">Gutter cleaning – from €80</div>
    <div className="card">Roof cleaning – from €570</div>
    <div className="card">Driveway & patio – from €50</div>
    <div className="card">Wheelie bin cleaning – from €15</div>
    <div className="card">Window cleaning – from €40</div>
    <div className="card">Facade / brick cleaning – from €120</div>
    <div className="card">Carpet & upholstery – from €60</div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact"
       style={{ borderTop: "1px solid #ddd", paddingTop: "30px" }}>
        <h2>Contact</h2>
        <p>📍 Dublin & Wicklow</p>
        <p>📞 Tel / WhatsApp: <strong>085 169 8471</strong></p>
        <p>✉️ Email: <strong>gutterguru1972@gmail.com</strong></p>
        <form
  action="mailto:gutterguru1972@gmail.com"
  method="post"
  encType="text/plain"
  style={{
    marginTop: "16px",
    display: "grid",
    gap: "10px",
    maxWidth: "420px",
  }}
>
  <input
    name="Name"
    placeholder="Your name"
    style={{ padding: "10px", borderRadius: "10px" }}
  />

  <input
    name="Phone"
    placeholder="Phone number"
    style={{ padding: "10px", borderRadius: "10px" }}
  />

  <input
    name="Area"
    placeholder="Area (e.g. Tallaght)"
    style={{ padding: "10px", borderRadius: "10px" }}
  />

  <textarea
    name="Service"
    placeholder="What service do you need? (gutter, roof, driveway, bins, carpet...)"
    rows={4}
    style={{ padding: "10px", borderRadius: "10px" }}
  />

  <button
    type="submit"
    style={{
      padding: "12px",
      borderRadius: "12px",
      fontWeight: 700,
      background: "#22c55e",
      border: "none",
      cursor: "pointer",
    }}
  >
    Send enquiry
  </button>
</form>

      </section>

    </main>
  );
}
