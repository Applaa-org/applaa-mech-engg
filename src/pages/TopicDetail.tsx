import { Link, useLoaderData } from '@tanstack/react-router';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookCheck } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const TopicDetailPage = () => {
  const topic = useLoaderData({ from: '/topics/$topicSlug' });
  
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-800',
    Advanced: 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800',
  };

  const assignmentDifficultyColors = {
    Easy: 'text-green-600 dark:text-green-400',
    Medium: 'text-yellow-600 dark:text-yellow-400',
    Hard: 'text-red-600 dark:text-red-400',
  }

  return (
    <div className="container max-w-4xl mx-auto py-12">
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/topics">Topics</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{topic.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">{topic.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <Badge variant="secondary">{topic.category}</Badge>
            <Badge className={difficultyColors[topic.difficulty]}>{topic.difficulty}</Badge>
          </div>
        </div>
        <img src={topic.image.replace('600/400', '800/400')} alt={topic.title} className="rounded-lg mb-8 w-full" />
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </article>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold flex items-center mb-4">
          <BookCheck className="mr-3 h-6 w-6 text-primary" />
          Assignments
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {topic.assignments.map((assignment) => (
            <AccordionItem value={`item-${assignment.id}`} key={assignment.id}>
              <AccordionTrigger>
                <div className="flex justify-between w-full pr-4 items-center">
                  <span>{assignment.title}</span>
                  <span className={`text-sm font-semibold ${assignmentDifficultyColors[assignment.difficulty]}`}>
                    {assignment.difficulty}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{assignment.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="capitalize">{tag}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link to="/topics" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all topics
        </Link>
      </div>
    </div>
  );
};

export default TopicDetailPage;