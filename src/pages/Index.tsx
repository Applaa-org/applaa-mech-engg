import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';
import { roboticsTopics } from '@/data/robotics-topics';
import { TopicCard } from '@/components/TopicCard';

const Index = () => {
  const featuredTopics = roboticsTopics.slice(0, 3);

  return (
    <>
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
              <Bot className="h-4 w-4 mr-2" /> Your AI-Powered Robotics Learning Hub
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-6xl">
              Master the Principles of
              <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Robotics Engineering
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              Dive into comprehensive tutorials on kinematics, dynamics, control systems, and AI. Built for students, hobbyists, and professionals.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/topics">
                  Explore Topics <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#featured" className="scroll-smooth">
                  View Featured
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/robot-hero/800/600" 
              alt="Robotic Arm" 
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      <section id="featured" className="py-20 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Topics</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get started with some of our most popular tutorials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/topics">
                View All Topics
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;