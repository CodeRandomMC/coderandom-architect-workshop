"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with the form data
      const mailtoLink = `mailto:jack@coderandom.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(formData.message)}`;

      // Open the user's email client
      window.location.href = mailtoLink;

      // Show success message
      toast({
        title: "Email client opened!",
        description:
          "Your email client should open with the pre-filled message.",
      });

      // Reset form and close modal
      setFormData({ subject: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'd love to collaborate on robotics, AI, or maker projects. Reach out if you're building something cool.
          </p>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Send Me an Email
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Send Email to Jack</DialogTitle>
                <DialogDescription>
                  This will open your default email client with a pre-filled
                  message to jack@coderandom.com. Just add your message details
                  below and we'll handle the rest!
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or question..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    required
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || !formData.subject || !formData.message
                    }
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      "Opening..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Email
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              Or reach out directly:{" "}
              <span className="font-medium">jack@coderandom.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
