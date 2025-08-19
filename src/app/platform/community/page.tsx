import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, Calendar, MapPin, Github, ExternalLink, Heart, Share2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community | CodeRandom - Connect with Makers",
  description: "Join the CodeRandom community of makers, developers, and innovators. Share projects, collaborate, and learn from fellow enthusiasts.",
};

const communityStats = {
  members: 1247,
  projects: 89,
  tutorials: 156,
  events: 12,
};

const recentDiscussions = [
  {
    id: 1,
    title: "Best ESP32 sensors for home automation?",
    author: "Sarah Chen",
    avatar: "/avatars/sarah.jpg",
    replies: 23,
    views: 156,
    category: "Electronics",
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    title: "Showcase: My AI-powered garden monitoring system",
    author: "Mike Rodriguez",
    avatar: "/avatars/mike.jpg",
    replies: 45,
    views: 289,
    category: "AI Projects",
    lastActivity: "5 hours ago",
  },
  {
    id: 3,
    title: "Tutorial request: Local LLM setup guide",
    author: "Alex Thompson",
    avatar: "/avatars/alex.jpg",
    replies: 12,
    views: 98,
    category: "AI",
    lastActivity: "1 day ago",
  },
  {
    id: 4,
    title: "Robotics meetup in San Francisco - anyone interested?",
    author: "Emma Wilson",
    avatar: "/avatars/emma.jpg",
    replies: 8,
    views: 67,
    category: "Events",
    lastActivity: "2 days ago",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "AI & Robotics Workshop",
    date: "2024-02-15",
    time: "10:00 AM PST",
    location: "San Francisco, CA",
    attendees: 45,
    maxAttendees: 50,
    description: "Hands-on workshop covering AI integration in robotics projects.",
    organizer: "CodeRandom Team",
    type: "Workshop",
  },
  {
    id: 2,
    title: "ESP32 IoT Hackathon",
    date: "2024-02-22",
    time: "9:00 AM PST",
    location: "Online",
    attendees: 78,
    maxAttendees: 100,
    description: "24-hour hackathon focused on IoT projects using ESP32.",
    organizer: "IoT Community",
    type: "Hackathon",
  },
  {
    id: 3,
    title: "Maker Showcase & Networking",
    date: "2024-03-01",
    time: "6:00 PM PST",
    location: "Oakland, CA",
    attendees: 32,
    maxAttendees: 60,
    description: "Show off your projects and connect with fellow makers.",
    organizer: "Bay Area Makers",
    type: "Networking",
  },
];

const featuredProjects = [
  {
    id: 1,
    title: "Smart Home Energy Monitor",
    author: "David Kim",
    avatar: "/avatars/david.jpg",
    description: "Real-time energy monitoring system using ESP32 and cloud analytics.",
    likes: 127,
    comments: 23,
    tags: ["ESP32", "IoT", "Energy", "Analytics"],
    image: "/projects/energy-monitor.jpg",
  },
  {
    id: 2,
    title: "AI-Powered Plant Care Robot",
    author: "Lisa Park",
    avatar: "/avatars/lisa.jpg",
    description: "Autonomous robot that monitors and cares for indoor plants using computer vision.",
    likes: 89,
    comments: 15,
    tags: ["Robotics", "AI", "Computer Vision", "Plants"],
    image: "/projects/plant-robot.jpg",
  },
];

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Community</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Connect with fellow makers, developers, and innovators. Share your projects, 
          collaborate on ideas, and learn from the community.
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="pt-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{communityStats.members.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground">Members</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Github className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{communityStats.projects}</div>
            <p className="text-sm text-muted-foreground">Projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <MessageCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{communityStats.tutorials}</div>
            <p className="text-sm text-muted-foreground">Tutorials</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{communityStats.events}</div>
            <p className="text-sm text-muted-foreground">Events</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="discussions" className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            <Button asChild>
              <Link href="/platform/community/discussions/new">
                Start Discussion
              </Link>
            </Button>
          </div>
          
          <div className="space-y-4">
            {recentDiscussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src={discussion.avatar} />
                      <AvatarFallback>{discussion.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold hover:text-primary cursor-pointer">
                          {discussion.title}
                        </h3>
                        <Badge variant="outline">{discussion.category}</Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>by {discussion.author}</span>
                        <span>{discussion.replies} replies</span>
                        <span>{discussion.views} views</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Upcoming Events</h2>
            <Button asChild>
              <Link href="/platform/community/events/new">
                Create Event
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{event.type}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{event.attendees}/{event.maxAttendees}</div>
                    <div className="text-xs">Attendees</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">by {event.organizer}</span>
                    <Button size="sm" variant="outline">
                      Join Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <Button asChild>
              <Link href="/platform/community/projects/new">
                Share Project
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={project.avatar} />
                      <AvatarFallback>{project.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">by {project.author}</p>
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-semibold mb-4">Ready to Join?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with makers from around the world. Share your projects, get feedback, 
              and collaborate on innovative ideas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/platform/community/discussions">
                  Browse Discussions
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/platform/community/projects">
                  View Projects
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
