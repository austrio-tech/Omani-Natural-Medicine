import { medicines } from '../data/medicines';
import { MedicineCard } from './MedicineCard';
import '../styles/HomePage.css';

export function HomePage() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Omani Natural Medicine</h1>
          <p>Discover traditional Omani healing medicines for modern wellness</p>
        </div>
      </section>

      <section className="about-section">
        <h2>About Our Medicines</h2>
        <p>
          Our collection features authentic Omani natural medicines that have been used for centuries 
          in traditional healing practices. Each product is carefully selected and documented with detailed 
          information about composition, usage, and safety guidelines.
        </p>
      </section>

      <section className="history-section">
        <h2>Our History</h2>
        <p>
          Rooted in ancient Omani traditions, our company is dedicated to preserving and sharing the wisdom 
          of traditional herbal medicine. For generations, these natural remedies have been trusted by families 
          across the Arabian Peninsula for their healing properties and wellness benefits. We continue this 
          legacy by bringing authentic, quality-tested natural medicines to the modern world.
        </p>
      </section>

      <section className="medicines-section">
        <h2>Our Medicines</h2>
        <div className="medicines-grid">
          {medicines.map(medicine => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      </section>
    </div>
  );
}
