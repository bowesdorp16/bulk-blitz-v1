import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Dumbbell,
  Scale,
  Trophy,
  Target
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Noise overlay */}
      <div className="noise" />

      {/* Hero section */}
      <div className="flex-1 w-full py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-12 text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-giant font-black tracking-tighter">
                BULK
                <span className="gradient-text">BLITZ</span>
              </h1>
              <p className="text-huge text-muted-foreground">
                Build Your Legacy
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="hover-lift">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift">
                <Link href="/auth/signup">Start Building Muscle</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling text */}
      <div className="py-8 bg-primary text-primary-foreground overflow-hidden whitespace-nowrap">
        <div className="flex marquee">
          <span className="text-2xl font-black mx-4">TRACK • ANALYZE • GROW</span>
          <span className="text-2xl font-black mx-4">TRACK • ANALYZE • GROW</span>
          <span className="text-2xl font-black mx-4">TRACK • ANALYZE • GROW</span>
          <span className="text-2xl font-black mx-4">TRACK • ANALYZE • GROW</span>
        </div>
      </div>

      {/* Features section */}
      <div className="w-full py-24 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group hover-lift">
              <div className="flex flex-col items-center text-center space-y-4">
                <Scale className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-black">Track Progress</h3>
                <p className="text-muted-foreground">
                  Monitor your caloric surplus and protein intake for optimal muscle growth
                </p>
              </div>
            </div>
            
            <div className="group hover-lift">
              <div className="flex flex-col items-center text-center space-y-4">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-black">Set Goals</h3>
                <p className="text-muted-foreground">
                  Get personalized bulking strategies based on your body type and goals
                </p>
              </div>
            </div>
            
            <div className="group hover-lift">
              <div className="flex flex-col items-center text-center space-y-4">
                <Trophy className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-black">Achieve Results</h3>
                <p className="text-muted-foreground">
                  Monitor your gains with advanced metrics and progress tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}