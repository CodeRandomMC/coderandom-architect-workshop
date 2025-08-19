"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  PenTool, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  Code2,
  Brain,
  Cpu
} from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: "ai-chatbot-development",
    title: "Building AI Chatbots: From Concept to Deployment",
    excerpt: "A deep dive into the development process of creating intelligent chatbots, covering everything from initial design to production deployment.",
    category: "AI Development",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    tags: ["AI", "Chatbots", "Python", "Development"],
    featured: true,
    status: "Published"
  },
  {
    id: "esp32-iot-guide",
    title: "ESP32 IoT Projects: A Complete Guide for Makers",
    excerpt: "Learn how to build connected IoT devices using ESP32 microcontrollers. From basic sensors to complex automation systems.",
    category: "IoT",
    readTime: "12 min read",
    publishDate: "2024-01-10",
    tags: ["ESP32", "IoT", "C++", "Arduino"],
    featured: true,
    status: "Published"
  },
  {
    id: "robotics-prototyping",
    title: "Rapid Prototyping in Robotics: Lessons Learned",
    excerpt: "Sharing insights from building multiple robotics prototypes, including common pitfalls and best practices for makers.",
    category: "Robotics",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    tags: ["Robotics", "Prototyping", "3D Printing", "Electronics"],
    featured: false,
    status: "Published"
  },
  {
    id: "ai-education-platform",
    title: "Designing AI-Powered Educational Tools",
    excerpt: "Exploring the challenges and solutions in creating AI tools specifically designed for educational purposes.",
    category: "AI Education",
    readTime: "15 min read",
    publishDate: "2024-01-01",
    tags: ["AI", "Education", "UX Design", "React"],
    featured: false,
    status: "Published"
  },
  {
    id: "local-llm-setup",
    title: "Setting Up Local LLMs: A Practical Guide",
    excerpt: "Step-by-step guide to running large language models locally for privacy-conscious AI development.",
    category: "AI Development",
    readTime: "20 min read",
    publishDate: "2023-12-28",
    tags: ["AI", "Local LLM", "Python", "Machine Learning"],
    featured: false,
    status: "Published"
  },
  {
    id: "maker-community-building",
    title: "Building a Maker Community: Strategies and Insights",
    excerpt: "Lessons learned from building and growing a community of makers, developers, and innovators.",
    category: "Community",
    readTime: "6 min read",
    publishDate: "2023-12-20",
    tags: ["Community", "Makers", "Open Source", "Collaboration"],
    featured: false,
    status: "Published"
  }
];

const categories = [
  { name: "AI Development", icon: Brain, color: "bg-blue-500/10 text-blue-500" },
  { name: "IoT", icon: Cpu, color: "bg-green-500/10 text-green-500" },
  { name: "Robotics", icon: Code2, color: "bg-purple-500/10 text-purple-500" },
  { name: "AI Education", icon: Brain, color: "bg-orange-500/10 text-orange-500" },
  { name: "Community", icon: PenTool, color: "bg-pink-500/10 text-pink-500" }
];

export function BlogSection() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 4);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PenTool className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Blog & Articles</h2>
            <PenTool className="h-6 w-6 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and stories from my maker journey. Sharing knowledge and experiences in AI, robotics, and electronics.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className={categories.find(c => c.name === post.category)?.color}>
                      {post.category}
                    </Badge>
                    <Badge className="bg-green-500/10 text-green-500">
                      {post.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <Badge className="bg-green-500/10 text-green-500 text-xs">
                      {post.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="text-center p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-2">
                  {blogPosts.filter(post => post.category === category.name).length} articles
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>More articles coming soon</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm constantly writing about new projects, experiments, and insights from the maker world. 
            Subscribe to stay updated with the latest articles and tutorials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="#">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/CodeRandomMC" target="_blank">
                Follow on GitHub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
