import { Link } from 'react-router-dom';
import '../styles/MedicineCard.css';

export function MedicineCard({ medicine }) {
  return (
    <Link to={`/medicine/${medicine.id}`} className="medicine-card-link">
      <div className="medicine-card">
        <img src={medicine.image} alt={medicine.name} className="medicine-image" />
        <h3>{medicine.name}</h3>
        <p className="compound-name">{medicine.compoundName}</p>
        <p className="description">{medicine.description.substring(0, 100)}...</p>
        <div className="medicine-footer">
          <span className="price">{medicine.price} {medicine.currency}</span>
          <button className="view-btn">View Details</button>
        </div>
      </div>
    </Link>
  );
}
