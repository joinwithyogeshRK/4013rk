import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

type RequirementSpec = {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  os: string;
  directx: string;
  network: string;
  notes?: string;
};

type SystemRequirements = {
  minimum: RequirementSpec;
  recommended: RequirementSpec;
};

const pcRequirements: SystemRequirements = {
  minimum: {
    cpu: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
    gpu: 'NVIDIA GeForce GTX 1660 Super or AMD Radeon RX 5600 XT',
    ram: '16 GB RAM',
    storage: '150 GB available space (SSD recommended)',
    os: 'Windows 10 64-bit (version 1909 or higher)',
    directx: 'Version 12',
    network: 'Broadband Internet connection',
    notes: 'These specifications allow for 1080p gameplay at low to medium settings.',
  },
  recommended: {
    cpu: 'Intel Core i7-10700K or AMD Ryzen 7 5800X',
    gpu: 'NVIDIA GeForce RTX 3070 or AMD Radeon RX 6800 XT',
    ram: '32 GB RAM',
    storage: '150 GB available space (SSD required)',
    os: 'Windows 10/11 64-bit (latest update)',
    directx: 'Version 12',
    network: 'Broadband Internet connection',
    notes: 'These specifications allow for 1440p gameplay at high settings with ray tracing enabled.',
  },
};

const consoleRequirements = {
  ps5: {
    storage: '150 GB minimum',
    onlinePlay: 'PlayStation Plus subscription required for online features',
    notes: 'Enhanced features available on PlayStation 5 Pro',
  },
  xbox: {
    storage: '150 GB minimum',
    onlinePlay: 'Xbox Game Pass Ultimate or Xbox Live Gold required for online features',
    notes: 'Enhanced features available on Xbox Series X',
  },
};

const SystemRequirementsSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 neon-text">System Requirements</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Make sure your system is ready for the next generation of open-world gaming.
          </p>
        </div>

        <Tabs defaultValue="pc" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-black/50">
            <TabsTrigger 
              value="pc"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              PC
            </TabsTrigger>
            <TabsTrigger 
              value="ps5"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              PlayStation 5
            </TabsTrigger>
            <TabsTrigger 
              value="xbox"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Xbox Series X|S
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pc" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/50 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Minimum Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/50 text-sm">CPU</p>
                    <p className="text-white">{pcRequirements.minimum.cpu}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">GPU</p>
                    <p className="text-white">{pcRequirements.minimum.gpu}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">RAM</p>
                    <p className="text-white">{pcRequirements.minimum.ram}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">Storage</p>
                    <p className="text-white">{pcRequirements.minimum.storage}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">OS</p>
                    <p className="text-white">{pcRequirements.minimum.os}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">DirectX</p>
                    <p className="text-white">{pcRequirements.minimum.directx}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">Network</p>
                    <p className="text-white">{pcRequirements.minimum.network}</p>
                  </div>
                  {pcRequirements.minimum.notes && (
                    <>
                      <Separator className="bg-white/10" />
                      <div>
                        <p className="text-white/50 text-sm">Notes</p>
                        <p className="text-white">{pcRequirements.minimum.notes}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-black/50 border border-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-white">Recommended Requirements</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/50 text-sm">CPU</p>
                    <p className="text-white">{pcRequirements.recommended.cpu}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">GPU</p>
                    <p className="text-white">{pcRequirements.recommended.gpu}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">RAM</p>
                    <p className="text-white">{pcRequirements.recommended.ram}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">Storage</p>
                    <p className="text-white">{pcRequirements.recommended.storage}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">OS</p>
                    <p className="text-white">{pcRequirements.recommended.os}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">DirectX</p>
                    <p className="text-white">{pcRequirements.recommended.directx}</p>
                  </div>
                  <Separator className="bg-white/10" />
                  <div>
                    <p className="text-white/50 text-sm">Network</p>
                    <p className="text-white">{pcRequirements.recommended.network}</p>
                  </div>
                  {pcRequirements.recommended.notes && (
                    <>
                      <Separator className="bg-white/10" />
                      <div>
                        <p className="text-white/50 text-sm">Notes</p>
                        <p className="text-white">{pcRequirements.recommended.notes}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ps5">
            <div className="bg-black/50 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-white">PlayStation 5 Requirements</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm">Console</p>
                  <p className="text-white">PlayStation 5 or PlayStation 5 Pro</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="text-white/50 text-sm">Storage</p>
                  <p className="text-white">{consoleRequirements.ps5.storage}</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="text-white/50 text-sm">Online Play</p>
                  <p className="text-white">{consoleRequirements.ps5.onlinePlay}</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="text-white/50 text-sm">Notes</p>
                  <p className="text-white">{consoleRequirements.ps5.notes}</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="xbox">
            <div className="bg-black/50 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4 text-white">Xbox Series X|S Requirements</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm">Console</p>
                  <p className="text-white">Xbox Series X or Xbox Series S</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="text-white/50 text-sm">Storage</p>
                  <p className="text-white">{consoleRequirements.xbox.storage}</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="text-white/50 text-sm">Online Play</p>
                  <p className="text-white">{consoleRequirements.xbox.onlinePlay}</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="text-white/50 text-sm">Notes</p>
                  <p className="text-white">{consoleRequirements.xbox.notes}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SystemRequirementsSection;
