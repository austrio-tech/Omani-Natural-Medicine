import '../styles/Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src="/logo.png" alt="Omani Natural Medicine Logo" className="footer-logo" />
        </div>
        
        <div className="footer-content-right">
          <h3>Omani Natural Medicine</h3>
          <p>Traditional healing medicines for modern wellness</p>
          <div className="footer-contact">
            <p><strong>Contact:</strong></p>
            <p>Email: info@omanmedicine.com</p>
            <p>Phone: +968 XX XXX XXXX</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Omani Natural Medicine. All rights reserved.</p>
      </div>
    </footer>
  );
}
