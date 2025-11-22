import { roboticsTopics } from '@/data/robotics-topics';
import { TopicCard } from '@/components/TopicCard';

const TopicsPage = () => {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Explore Robotics Topics</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          From foundational kinematics to advanced AI, dive into the world of robotics.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roboticsTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default TopicsPage;