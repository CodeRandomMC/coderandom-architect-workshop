import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Star, Search, Filter, Package, Truck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store | CodeRandom - Maker Tools & Components",
  description: "Quality maker tools, electronic components, and DIY kits. From ESP32 development boards to robotics kits and AI development tools.",
};

const products = [
  {
    id: "esp32-dev-kit",
    name: "ESP32 Development Kit",
    description: "Complete ESP32 development kit with breadboard, sensors, and components for IoT projects.",
    price: 29.99,
    originalPrice: 39.99,
    category: "Electronics",
    rating: 4.8,
    reviews: 127,
    image: "/store/esp32-kit.jpg",
    tags: ["ESP32", "IoT", "Development Kit"],
    inStock: true,
    featured: true,
  },
  {
    id: "robotics-starter-kit",
    name: "Robotics Starter Kit",
    description: "Everything you need to build your first robot. Includes motors, sensors, and Arduino board.",
    price: 89.99,
    originalPrice: 119.99,
    category: "Robotics",
    rating: 4.6,
    reviews: 89,
    image: "/store/robotics-kit.jpg",
    tags: ["Robotics", "Arduino", "Motors", "Sensors"],
    inStock: true,
    featured: true,
  },
  {
    id: "ai-development-toolkit",
    name: "AI Development Toolkit",
    description: "Professional AI development tools including local LLM setup and model training utilities.",
    price: 149.99,
    originalPrice: 199.99,
    category: "AI Tools",
    rating: 4.9,
    reviews: 45,
    image: "/store/ai-toolkit.jpg",
    tags: ["AI", "LLM", "Development", "Python"],
    inStock: true,
    featured: false,
  },
  {
    id: "sensor-pack",
    name: "Sensor Pack Bundle",
    description: "Collection of 20+ sensors for IoT and robotics projects. Temperature, humidity, motion, and more.",
    price: 49.99,
    originalPrice: 69.99,
    category: "Electronics",
    rating: 4.7,
    reviews: 203,
    image: "/store/sensor-pack.jpg",
    tags: ["Sensors", "IoT", "Bundle"],
    inStock: true,
    featured: false,
  },
  {
    id: "3d-printed-parts",
    name: "3D Printed Robot Parts",
    description: "High-quality 3D printed parts for custom robotics projects. Various designs and sizes available.",
    price: 19.99,
    originalPrice: 24.99,
    category: "Robotics",
    rating: 4.5,
    reviews: 67,
    image: "/store/3d-parts.jpg",
    tags: ["3D Printing", "Robotics", "Custom"],
    inStock: true,
    featured: false,
  },
  {
    id: "breadboard-kit",
    name: "Premium Breadboard Kit",
    description: "Professional breadboard kit with jumper wires, resistors, and essential components.",
    price: 34.99,
    originalPrice: 44.99,
    category: "Electronics",
    rating: 4.4,
    reviews: 156,
    image: "/store/breadboard-kit.jpg",
    tags: ["Breadboard", "Components", "Prototyping"],
    inStock: false,
    featured: false,
  },
];

const categories = ["All", "Electronics", "Robotics", "AI Tools"];
const priceRanges = ["All", "Under $50", "$50-$100", "$100+"];

export default function StorePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Store</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Quality maker tools, electronic components, and DIY kits. From ESP32 development boards 
          to robotics kits and AI development tools.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="All">
              <SelectTrigger className="w-[140px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="All">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.filter(p => p.featured).map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={product.inStock ? "secondary" : "destructive"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive">Sale</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
                    {product.rating} ({product.reviews})
                  </div>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button disabled={!product.inStock} asChild>
                    <Link href={`/platform/store/${product.id}`}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* All Products */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant={product.inStock ? "secondary" : "destructive"} className="text-xs">
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="destructive" className="text-xs">Sale</Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">{product.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {product.rating} ({product.reviews})
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-muted-foreground line-through text-sm">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm" disabled={!product.inStock} asChild>
                    <Link href={`/platform/store/${product.id}`}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add" : "Out"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Shipping Info */}
      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders over $50</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">2-5 business days</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Star className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Quality Guarantee</h3>
                  <p className="text-sm text-muted-foreground">30-day returns</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
