import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Edition = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlight?: boolean;
};

type Platform = {
  id: string;
  name: string;
  editions: Edition[];
};

const platforms: Platform[] = [
  {
    id: 'ps5',
    name: 'PlayStation 5',
    editions: [
      {
        id: 'standard-ps5',
        name: 'Standard Edition',
        price: 69.99,
        description: 'The base game experience for PlayStation 5',
        features: [
          'Full GTA VI game',
          'PlayStation exclusive character skins',
          'Digital manual',
        ],
      },
      {
        id: 'deluxe-ps5',
        name: 'Deluxe Edition',
        price: 99.99,
        description: 'Enhanced experience with bonus content',
        features: [
          'Full GTA VI game',
          'PlayStation exclusive character skins',
          'Digital art book',
          'Digital soundtrack',
          'Bonus in-game currency ($1,000,000 GTA$)',
          'Exclusive vehicle customizations',
        ],
        highlight: true,
      },
      {
        id: 'collectors-ps5',
        name: 'Collector's Edition',
        price: 149.99,
        description: 'The ultimate GTA VI experience for collectors',
        features: [
          'Full GTA VI game',
          'PlayStation exclusive character skins',
          'Digital art book',
          'Digital soundtrack',
          'Bonus in-game currency ($2,000,000 GTA$)',
          'Exclusive vehicle customizations',
          'Physical collectible steelbook case',
          'Vice City map poster',
          'Exclusive Vice City themed controller skin',
        ],
      },
    ],
  },
  {
    id: 'xbox',
    name: 'Xbox Series X|S',
    editions: [
      {
        id: 'standard-xbox',
        name: 'Standard Edition',
        price: 69.99,
        description: 'The base game experience for Xbox Series X|S',
        features: [
          'Full GTA VI game',
          'Xbox exclusive character skins',
          'Digital manual',
        ],
      },
      {
        id: 'deluxe-xbox',
        name: 'Deluxe Edition',
        price: 99.99,
        description: 'Enhanced experience with bonus content',
        features: [
          'Full GTA VI game',
          'Xbox exclusive character skins',
          'Digital art book',
          'Digital soundtrack',
          'Bonus in-game currency ($1,000,000 GTA$)',
          'Exclusive vehicle customizations',
        ],
        highlight: true,
      },
      {
        id: 'collectors-xbox',
        name: 'Collector's Edition',
        price: 149.99,
        description: 'The ultimate GTA VI experience for collectors',
        features: [
          'Full GTA VI game',
          'Xbox exclusive character skins',
          'Digital art book',
          'Digital soundtrack',
          'Bonus in-game currency ($2,000,000 GTA$)',
          'Exclusive vehicle customizations',
          'Physical collectible steelbook case',
          'Vice City map poster',
          'Exclusive Vice City themed controller skin',
        ],
      },
    ],
  },
  {
    id: 'pc',
    name: 'PC',
    editions: [
      {
        id: 'standard-pc',
        name: 'Standard Edition',
        price: 59.99,
        description: 'The base game experience for PC',
        features: [
          'Full GTA VI game',
          'PC exclusive character skins',
          'Digital manual',
        ],
      },
      {
        id: 'deluxe-pc',
        name: 'Deluxe Edition',
        price: 89.99,
        description: 'Enhanced experience with bonus content',
        features: [
          'Full GTA VI game',
          'PC exclusive character skins',
          'Digital art book',
          'Digital soundtrack',
          'Bonus in-game currency ($1,000,000 GTA$)',
          'Exclusive vehicle customizations',
        ],
        highlight: true,
      },
      {
        id: 'collectors-pc',
        name: 'Collector's Edition',
        price: 129.99,
        description: 'The ultimate GTA VI experience for collectors',
        features: [
          'Full GTA VI game',
          'PC exclusive character skins',
          'Digital art book',
          'Digital soundtrack',
          'Bonus in-game currency ($2,000,000 GTA$)',
          'Exclusive vehicle customizations',
          'Physical collectible box',
          'Vice City map poster',
          'Exclusive Vice City themed mousepad',
        ],
      },
    ],
  },
];

const PreOrderSection = () => {
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});

  const toggleFeatures = (editionId: string) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [editionId]: !prev[editionId],
    }));
  };

  return (
    <section className="py-20 preorder-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 neon-text">Pre-order Now</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Secure your copy of GTA VI and get exclusive bonuses. Choose your platform and edition below.
          </p>
        </div>

        <Tabs defaultValue="ps5" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-black/50">
            {platforms.map((platform) => (
              <TabsTrigger 
                key={platform.id} 
                value={platform.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {platform.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {platforms.map((platform) => (
            <TabsContent key={platform.id} value={platform.id} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {platform.editions.map((edition) => (
                  <Card 
                    key={edition.id} 
                    className={`bg-black/70 border-none ${edition.highlight ? 'ring-2 ring-primary neon-border' : ''}`}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-white">
                        {edition.name}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {edition.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-white mb-6">
                        ${edition.price.toFixed(2)}
                      </p>
                      <div className="space-y-2">
                        {edition.features.slice(0, expandedFeatures[edition.id] ? undefined : 3).map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                        {edition.features.length > 3 && (
                          <button
                            type="button"
                            onClick={() => toggleFeatures(edition.id)}
                            className="flex items-center text-primary hover:text-primary/80 mt-2"
                          >
                            {expandedFeatures[edition.id] ? (
                              <>
                                <span>Show less</span>
                                <ChevronUp className="ml-1 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                <span>Show more</span>
                                <ChevronDown className="ml-1 h-4 w-4" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Pre-order Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 p-6 bg-black/50 rounded-lg border border-primary/30">
          <h3 className="text-xl font-bold mb-4 text-white">Pre-order Bonus</h3>
          <p className="text-white/80 mb-4">
            Pre-order any edition of GTA VI before the release date and receive:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span className="text-white/80">Early access to the game 3 days before official release</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span className="text-white/80">Exclusive "Vice City Veteran" in-game outfit</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
              <span className="text-white/80">Bonus $500,000 GTA$ for GTA Online</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PreOrderSection;
