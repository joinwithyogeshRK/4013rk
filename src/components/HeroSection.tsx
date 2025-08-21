import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayTrailer = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="hero-section">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {isVideoPlaying ? (
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/QdBZY2fkU-0?autoplay=1&mute=0&controls=1&showinfo=0"
            title="GTA VI Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2070&auto=format&fit=crop"
            alt="Vice City"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Content Overlay */}
      <div className="hero-content">
        <h1 className="hero-title neon-text">GRAND THEFT AUTO VI</h1>
        <p className="hero-subtitle">Welcome to Vice City</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            className="cta-button bg-primary text-white hover:bg-primary/90"
            onClick={handlePlayTrailer}
          >
            <Play className="mr-2 h-5 w-5" /> Watch Trailer
          </Button>
          
          <Button 
            variant="outline" 
            className="border-2 border-primary text-white hover:bg-primary/20 neon-border"
          >
            Pre-order Now
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;
