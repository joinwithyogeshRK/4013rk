import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const locations = [
  {
    id: 1,
    name: 'Downtown Vice City',
    description: 'The bustling heart of Vice City, filled with skyscrapers, nightclubs, and corporate intrigue.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop',
    tags: ['Urban', 'Nightlife', 'Business'],
  },
  {
    id: 2,
    name: 'Vice Beach',
    description: 'Sun-soaked beaches, luxury hotels, and a vibrant boardwalk make this the playground of the rich and famous.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    tags: ['Beach', 'Luxury', 'Tourism'],
  },
  {
    id: 3,
    name: 'Gator Keys',
    description: 'A sprawling wetland region with small islands, airboat tours, and hidden criminal operations.',
    image: 'https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=2070&auto=format&fit=crop',
    tags: ['Wilderness', 'Water', 'Smuggling'],
  },
  {
    id: 4,
    name: 'Port Vice',
    description: 'A massive industrial harbor where legitimate shipping operations provide cover for illicit activities.',
    image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=2036&auto=format&fit=crop',
    tags: ['Industrial', 'Shipping', 'Crime'],
  },
  {
    id: 5,
    name: 'Little Havana',
    description: 'A vibrant neighborhood with rich cultural heritage, authentic cuisine, and tight-knit community bonds.',
    image: 'https://images.unsplash.com/photo-1594309524508-42d5bbc73f68?q=80&w=2070&auto=format&fit=crop',
    tags: ['Cultural', 'Residential', 'Food'],
  },
  {
    id: 6,
    name: 'Everglades Outskirts',
    description: 'The wild frontier beyond the city limits, home to off-grid communities and hidden dangers.',
    image: 'https://images.unsplash.com/photo-1575527048208-933d8f4e9248?q=80&w=1974&auto=format&fit=crop',
    tags: ['Rural', 'Wilderness', 'Danger'],
  },
];

const LocationsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 neon-text">Explore Vice City</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover the diverse locations that make up the vibrant world of GTA VI, from sun-soaked beaches to gritty urban streets.
          </p>
        </div>

        <div className="location-gallery">
          {locations.map((location) => (
            <div 
              key={location.id} 
              className="peer location-item group relative overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(location.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {location.name}
                </h3>
                <p className={`text-white/80 mb-4 transition-opacity duration-300 ${hoveredId === location.id ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                  {location.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-primary text-white bg-black/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
