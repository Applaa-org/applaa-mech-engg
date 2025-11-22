import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  notFound
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Layout } from '@/components/Layout';
import Index from "./pages/Index";
import TopicsPage from './pages/Topics';
import TopicDetailPage from './pages/TopicDetail';
import NotFoundPage from './pages/NotFound';
import { roboticsTopics } from './data/robotics-topics';

const queryClient = new QueryClient();

// Create root route with Layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  ),
  notFoundComponent: NotFoundPage,
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create topics route
const topicsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/topics',
  component: TopicsPage,
})

// Create topic detail route
const topicDetailRoute = createTanStackRoute({
  getParentRoute: () => topicsRoute,
  path: '$topicSlug',
  component: TopicDetailPage,
  loader: ({ params }) => {
    const topic = roboticsTopics.find((t) => t.slug === params.topicSlug);
    if (!topic) {
      throw notFound();
    }
    return topic;
  },
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  topicsRoute.addChildren([topicDetailRoute]),
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;