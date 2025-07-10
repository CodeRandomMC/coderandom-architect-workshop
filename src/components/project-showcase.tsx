"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectShowcaseProps {
  id: string;
  title: string;
  subtitle: string;
  description: string | string[];
  linkText: string;
  linkHref: string;
  videoUrl?: string;
  videoTitle?: string;
  images?: {
    src: string;
    alt: string;
  }[];
  backgroundColor?: "default" | "muted";
}

export function ProjectShowcase({
  id,
  title,
  subtitle,
  description,
  linkText,
  linkHref,
  videoUrl,
  videoTitle,
  images,
  backgroundColor = "default",
}: ProjectShowcaseProps) {
  const bgClass = backgroundColor === "muted" ? "bg-muted/30" : "bg-background";
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const renderMedia = () => {
    const hasVideo = !!videoUrl;
    const hasImages = images && images.length > 0;

    if (!hasVideo && !hasImages) return null;

    // If we have both video and images, or multiple media items, use carousel
    if ((hasVideo && hasImages) || (hasImages && images!.length > 1)) {
      const mediaItems = [];

      // Add video as first item if it exists
      if (hasVideo) {
        mediaItems.push({
          type: "video" as const,
          content: (
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                title={videoTitle || "Project Video"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ),
        });
      }

      // Add images
      if (hasImages) {
        images!.forEach((image, index) => {
          mediaItems.push({
            type: "image" as const,
            content: (
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            ),
          });
        });
      }

      return (
        <Card className="overflow-hidden border-2 border-border mb-8 shadow-2xl shadow-primary/10 relative group">
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {mediaItems.map((item, index) => (
                <CarouselItem key={index}>{item.content}</CarouselItem>
              ))}
            </CarouselContent>

            {/* Enhanced Previous Button */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white hover:bg-white border-2 border-primary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100">
              <ChevronLeft
                className="h-7 w-7 text-primary font-bold"
                strokeWidth={3}
              />
            </CarouselPrevious>

            {/* Enhanced Next Button */}
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 bg-white hover:bg-white border-2 border-primary hover:border-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100">
              <ChevronRight
                className="h-7 w-7 text-primary font-bold"
                strokeWidth={3}
              />
            </CarouselNext>

            {/* Interactive Dots Indicator */}
            {count > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index + 1 === current
                        ? "bg-primary scale-125"
                        : "bg-white/60 hover:bg-white/80 hover:scale-110"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </Card>
      );
    }

    // Single video only
    if (hasVideo && !hasImages) {
      return (
        <Card className="overflow-hidden border-2 border-border mb-8 shadow-2xl shadow-primary/10 aspect-video">
          <iframe
            className="w-full h-full"
            src={videoUrl}
            title={videoTitle || "Project Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>
      );
    }

    // Single image only
    if (hasImages && images!.length === 1 && !hasVideo) {
      return (
        <Card className="overflow-hidden border-2 border-border mb-8 shadow-2xl shadow-primary/10">
          <Image
            src={images![0].src}
            alt={images![0].alt}
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </Card>
      );
    }

    return null;
  };

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return description.map((paragraph, index) => (
        <p key={index} className="text-muted-foreground mb-6 leading-relaxed">
          {paragraph}
        </p>
      ));
    }
    return (
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
    );
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">{subtitle}</p>
          {renderMedia()}
          <div className="text-lg text-left max-w-3xl mx-auto">
            {renderDescription()}
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-primary hover:underline"
            >
              {linkText} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
