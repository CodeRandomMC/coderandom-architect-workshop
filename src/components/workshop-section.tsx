"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Cpu, Wrench } from "lucide-react";

interface WorkshopItem {
  title: string;
  description: string;
  status: "in-progress" | "experimenting" | "planning";
  category: "electronics" | "ai" | "robotics" | "tools";
  tags: string[];
}

const workshopItems: WorkshopItem[] = [
  {
    title: "ESP32-S3 RGB LED Experiments",
    description: "Testing an ESP32-S3 with onboard RGB LED for various lighting patterns and effects.",
    status: "experimenting",
    category: "electronics",
    tags: ["ESP32-S3", "RGB LED", "Arduino", "Lighting"],
  },
  {
    title: "Small Robot Platform",
    description: "Working on a small robot platform with ultrasonic sensors for obstacle avoidance.",
    status: "in-progress",
    category: "robotics",
    tags: ["Arduino", "Ultrasonic", "Motors", "Chassis"],
  },
  {
    title: "Embedded ML Models",
    description: "Exploring embedded machine learning models for edge computing applications.",
    status: "experimenting",
    category: "ai",
    tags: ["TensorFlow Lite", "ESP32", "Edge AI", "Python"],
  },
  {
    title: "3D Printer Modifications",
    description: "Planning modifications to improve print quality and add new features.",
    status: "planning",
    category: "tools",
    tags: ["3D Printing", "Modifications", "Hardware", "Firmware"],
  },
  {
    title: "IoT Weather Station",
    description: "Building a weather station with multiple sensors and web dashboard.",
    status: "in-progress",
    category: "electronics",
    tags: ["IoT", "Sensors", "Web Dashboard", "Data Logging"],
  },
  {
    title: "Voice-Controlled Home Automation",
    description: "Experimenting with voice recognition for home automation projects.",
    status: "experimenting",
    category: "ai",
    tags: ["Voice Recognition", "Home Automation", "ESP32", "AI"],
  },
];

const statusConfig = {
  "in-progress": { label: "In Progress", color: "bg-blue-100 text-blue-800", icon: Clock },
  "experimenting": { label: "Experimenting", color: "bg-yellow-100 text-yellow-800", icon: Zap },
  "planning": { label: "Planning", color: "bg-gray-100 text-gray-800", icon: Wrench },
};

const categoryConfig = {
  electronics: { icon: Cpu, color: "text-green-600" },
  ai: { icon: Zap, color: "text-blue-600" },
  robotics: { icon: Cpu, color: "text-purple-600" },
  tools: { icon: Wrench, color: "text-orange-600" },
};

export function WorkshopSection() {
  return (
    <section id="workshop" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">In the Workshop</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ongoing experiments, half-finished builds, and things I'm currently tinkering with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopItems.map((item, index) => {
            const statusInfo = statusConfig[item.status];
            const categoryInfo = categoryConfig[item.category];
            const StatusIcon = statusInfo.icon;
            const CategoryIcon = categoryInfo.icon;

            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-dashed">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CategoryIcon className={`h-4 w-4 ${categoryInfo.color}`} />
                        <Badge variant="secondary" className={statusInfo.color}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {statusInfo.label}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            These projects show the messy, experimental side of making. Not everything works perfectly, 
            but that's part of the learning process.
          </p>
        </div>
      </div>
    </section>
  );
}
