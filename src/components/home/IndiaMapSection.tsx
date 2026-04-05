import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom red marker icon
const redIcon = new L.DivIcon({
  className: '',
  html: `<div style="width:20px;height:20px;border-radius:50%;background:#D62828;border:3px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -14],
});

const locations = [
  {
    name: 'West Bengal',
    description: 'Community outreach, welfare initiatives, and festive distribution drives.',
    lat: 22.9868,
    lng: 87.855,
  },
  {
    name: 'Bangalore, Karnataka',
    description: 'Water distribution and community support initiatives.',
    lat: 12.9716,
    lng: 77.5946,
  },
];

export const IndiaMapSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Where We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Our Presence Across India
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Extending compassion and service across regions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-elevated border border-border"
          style={{ height: '500px' }}
        >
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
            attributionControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
              <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={redIcon}>
                <Popup>
                  <div className="p-1">
                    <h4 className="font-semibold text-sm mb-1" style={{ color: '#1E4DB7' }}>{loc.name}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{loc.description}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          We are growing steadily to reach more communities across India.
        </motion.p>
      </div>
    </section>
  );
};
