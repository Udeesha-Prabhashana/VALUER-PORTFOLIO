import "./AboutSection.css"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-background">
        <img src="/images/about-bg.png" alt="Financial background" />
        <div className="about-overlay"></div>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
          </div>

          <div className="about-details">
            <div className="profile-image">
              <img
                src="https://res.cloudinary.com/dromuhnud/image/upload/v1752442211/Sunil_gangodawilage_ay01ph.png"
                alt="Mr. Sunil Gangodawilage"
              />
            </div>

            <div className="profile-info">
              <h3>Mr. Sunil Gangodawilage (B.Sc, AIV.)</h3>
              <div className="qualifications">
                <p>B.Sc. Estate Management & Valuation (Special), USJP Sri Lanka</p>
                <p>Professional Associate Member of Institute of Valuers of Sri Lanka</p>
                <p>IQASL (Inter) Quantity Surveying (NYSQ)</p>
                <p>
                  Professional experience in property valuation, consultation, and quantity surveying with expertise in
                  various valuation purposes including VISA applications, property transactions, and mortgage
                  assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
