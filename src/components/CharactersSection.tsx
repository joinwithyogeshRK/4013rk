import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Character = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
};

const characters: Character[] = [
  {
    id: 1,
    name: 'Lucia',
    role: 'Protagonist',
    description: 'A former cartel enforcer seeking a new life in Vice City, Lucia is as deadly as she is cunning.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Jason',
    role: 'Protagonist',
    description: 'An ex-military drifter with a troubled past, Jason forms an unlikely partnership with Lucia.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Ricardo Diaz',
    role: 'Crime Lord',
    description: 'The ruthless kingpin of Vice City's drug trade, Diaz rules his empire with an iron fist.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Elena Vega',
    role: 'Federal Agent',
    description: 'A determined DEA agent with her own agenda, Elena's investigation brings her into the protagonists' orbit.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Marcus Reynolds',
    role: 'Nightclub Owner',
    description: 'The charismatic face of Vice City's nightlife, Marcus has connections throughout the criminal underworld.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
];

const CharactersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? characters.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === characters.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Meet the Characters</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            GTA VI features a diverse cast of complex characters with their own stories, motivations, and secrets.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full h-12 w-12"
            onClick={handlePrev}
            aria-label="Previous character"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full h-12 w-12"
            onClick={handleNext}
            aria-label="Next character"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div 
            className="overflow-hidden"
            ref={sliderRef}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {characters.map((character) => (
                <div key={character.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={character.image} 
                        alt={character.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-2/3 text-left">
                      <h3 className="text-3xl font-bold mb-2 text-white">{character.name}</h3>
                      <p className="text-xl text-white/90 mb-4">{character.role}</p>
                      <p className="text-white/80 text-lg mb-6">{character.description}</p>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <p className="text-white/70 italic">
                          "Every character in Vice City has a story. Some are just waiting to be written."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {characters.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to character ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;