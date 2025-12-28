import { useParams, Link } from 'react-router-dom';
import { medicines } from '../data/medicines';
import '../styles/MedicineDetail.css';

export function MedicineDetail() {
  const { id } = useParams();
  const medicine = medicines.find(m => m.id === parseInt(id));

  if (!medicine) {
    return (
      <div className="detail-container">
        <h1>Medicine not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">← Back to Medicines</Link>
      
      <div className="detail-content">
        <div className="detail-image-section">
          <img src={medicine.image} alt={medicine.name} className="detail-image" />
        </div>

        <div className="detail-info-section">
          <h1>{medicine.name}</h1>
          
          <div className="info-grid">
            <div className="info-item">
              <label>Compound Name:</label>
              <p>{medicine.compoundName}</p>
            </div>

            <div className="info-item">
              <label>Price:</label>
              <p className="price-large">{medicine.price} {medicine.currency}</p>
            </div>

            <div className="info-item full-width">
              <label>Description:</label>
              <p>{medicine.description}</p>
            </div>

            <div className="info-item full-width">
              <label>Usage Instructions:</label>
              <p>{medicine.usageInstructions}</p>
            </div>

            <div className="info-item">
              <label>Storage Temperature Range:</label>
              <p>{medicine.storageTemperatureRange}</p>
            </div>

            <div className="info-item full-width">
              <label>Storage Instructions:</label>
              <p>{medicine.storageInstructions}</p>
            </div>

            <div className="info-item">
              <label>Suitable Age Limit:</label>
              <p>{medicine.ageLimit}</p>
            </div>

            <div className="info-item full-width">
              <label>Warnings:</label>
              <div className="warning-box">
                <p>{medicine.warnings}</p>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <Link to="/" className="back-button-mobile">Back to Medicines</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
