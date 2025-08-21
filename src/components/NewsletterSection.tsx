import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail('');
      toast({
        title: "Subscription successful!",
        description: "You're now subscribed to GTA VI updates.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 neon-text">Stay Updated</h2>
            <p className="text-lg text-white/70">
              Subscribe to our newsletter for exclusive GTA VI news, behind-the-scenes content, and early access to trailers.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
              <Input
                type="email"
                placeholder="Your email address"
                className="pl-10 bg-black/50 border-primary/30 text-white focus:border-primary h-12"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-white h-12"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">Subscribing...</span>
              ) : (
                <span className="flex items-center">
                  Subscribe <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              )}
            </Button>
          </form>
          
          <p className="text-white/50 text-sm mt-4 text-center">
            By subscribing, you agree to receive marketing emails from Rockstar Games. 
            Your information will be handled as detailed in our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
