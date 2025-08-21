import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateTimeLeft = (): TimeLeft => {
  // Set release date to December 1, 2025
  const releaseDate = new Date('2025-12-01T00:00:00').getTime();
  const now = new Date().getTime();
  const difference = releaseDate - now;

  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 neon-text">Coming Soon</h2>
          <p className="text-lg text-white/70">
            The countdown to Vice City begins now
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {timeUnits.map((unit) => (
            <Card key={unit.label} className="bg-black border-primary/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
              <CardContent className="p-6 text-center relative">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 animate-neon-pulse">
                  {unit.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  {unit.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white/60 text-sm">
            Release date subject to change. Stay tuned for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
