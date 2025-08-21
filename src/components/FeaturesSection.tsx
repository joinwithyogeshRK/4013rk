import { Gamepad, Map, Users, Droplet, Brush, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Gamepad className="h-10 w-10 text-primary" />,
    title: 'Immersive Gameplay',
    description: 'Experience the most realistic and immersive GTA gameplay ever created with advanced physics and AI.',
  },
  {
    icon: <Map className="h-10 w-10 text-primary" />,
    title: 'Expansive Open World',
    description: 'Explore the vast, detailed recreation of Vice City and beyond with the largest map in GTA history.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Compelling Characters',
    description: 'Meet a diverse cast of characters with deep storylines and complex motivations in a narrative-driven experience.',
  },
  {
    icon: <Droplet className="h-10 w-10 text-primary" />,
    title: 'Dynamic Weather',
    description: 'Experience realistic weather patterns including tropical storms, hurricanes, and scorching heat waves.',
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: 'Stunning Visuals',
    description: 'Witness breathtaking graphics with ray tracing, advanced lighting, and photorealistic environments.',
  },
  {
    icon: <Headphones className="h-10 w-10 text-primary" />,
    title: 'Immersive Audio',
    description: 'Get lost in the sounds of Vice City with a dynamic soundtrack, realistic ambient audio, and stellar voice acting.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 neon-text">Game Features</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            GTA VI pushes the boundaries of open-world gaming with revolutionary features and unparalleled attention to detail.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card bg-black/50 border-none hover:bg-black/70 transition-all group">
              <CardContent className="p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
