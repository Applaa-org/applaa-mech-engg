import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import type { RoboticsTopic } from '@/data/robotics-topics';

interface TopicCardProps {
  topic: RoboticsTopic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300',
    Intermediate: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300',
    Advanced: 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300',
  };

  return (
    <Link to="/topics/$topicSlug" params={{ topicSlug: topic.slug }} className="block group">
      <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader>
          <div className="aspect-[3/2] w-full overflow-hidden rounded-md mb-4">
            <img
              src={topic.image}
              alt={topic.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex justify-between items-center">
            <Badge variant="secondary">{topic.category}</Badge>
            <Badge className={difficultyColors[topic.difficulty]}>{topic.difficulty}</Badge>
          </div>
          <CardTitle className="pt-2">{topic.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{topic.excerpt}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-sm font-semibold text-primary">
            Read more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}