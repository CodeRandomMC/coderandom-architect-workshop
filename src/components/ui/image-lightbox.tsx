"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function ImageLightbox({
  isOpen,
  onClose,
  src,
  alt,
}: ImageLightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Reset zoom and position when dialog opens/closes
  useEffect(() => {
    if (isOpen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    } else {
      // Reset cursor when dialog closes
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }
  }, [isOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "+":
        case "=":
          e.preventDefault();
          setZoom((prev) => Math.min(prev + 0.2, 3));
          break;
        case "-":
          e.preventDefault();
          setZoom((prev) => Math.max(prev - 0.2, 0.5));
          break;
        case "0":
          e.preventDefault();
          handleReset();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleReset]);

  // Handle scroll wheel zoom
  useEffect(() => {
    if (!isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (e.deltaY < 0) {
        setZoom((prev) => Math.min(prev + 0.2, 3));
      } else {
        setZoom((prev) => Math.max(prev - 0.2, 0.5));
      }
    };

    // Add event listener to the entire document when dialog is open
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;

    e.preventDefault();
    e.stopPropagation();

    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    // Set cursor to grabbing immediately
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      // Reset cursor
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none [&>button]:hidden">
        <DialogTitle className="sr-only">Image Viewer: {alt}</DialogTitle>
        <div className="relative w-full h-full">
          {/* Control Bar */}
          <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleZoomOut}
              disabled={zoom <= 0.5}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleReset}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleZoomIn}
              disabled={zoom >= 3}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Zoom Level Indicator */}
          <div className="absolute top-4 left-4 z-50">
            <div className="bg-white/10 text-white px-3 py-1 rounded text-sm">
              {Math.round(zoom * 100)}%
            </div>
          </div>

          {/* Image Container */}
          <div
            className={`w-full h-full overflow-hidden flex items-center justify-center select-none ${
              zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"
            }`}
            onMouseDown={handleMouseDown}
            style={{ userSelect: "none" }}
          >
            <div
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${
                  position.y / zoom
                }px)`,
                transition: zoom === 1 ? "transform 0.3s ease" : "none",
              }}
              className="max-w-none"
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="max-w-none h-auto pointer-events-none"
                style={{ maxHeight: "90vh", width: "auto" }}
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-white/10 text-white px-4 py-2 rounded text-sm text-center">
              {zoom > 1 ? "Click and drag to pan • " : ""}Use zoom controls,
              scroll wheel, or keyboard (+/-/0) to zoom
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
