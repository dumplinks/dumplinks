import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Truck, Package, FileCheck, MapPin, Clock, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
    features: [
      "Express delivery options",
      "Real-time tracking",
      "Temperature-controlled cargo",
      "Customs clearance support",
    ],
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping solutions for large volume cargo.",
    features: [
      "FCL & LCL options",
      "Port-to-port service",
      "Container tracking",
      "Multi-modal solutions",
    ],
  },
  {
    icon: Truck,
    title: "Road Transport",
    description: "Efficient ground transportation network across continents.",
    features: [
      "Full truckload (FTL)",
      "Less than truckload (LTL)",
      "Cross-border shipping",
      "Last-mile delivery",
    ],
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Secure storage and distribution solutions for your inventory.",
    features: [
      "Climate-controlled storage",
      "Inventory management",
      "Pick and pack services",
      "Distribution services",
    ],
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description: "Expert customs brokerage services for smooth international trade.",
    features: [
      "Import/export documentation",
      "Tariff classification",
      "Duty optimization",
      "Compliance support",
    ],
  },
  {
    icon: MapPin,
    title: "Supply Chain Management",
    description: "End-to-end visibility and optimization of your supply chain.",
    features: [
      "Demand forecasting",
      "Inventory optimization",
      "Vendor management",
      "Analytics & reporting",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Request Quote",
    description: "Tell us about your shipping needs and get a competitive quote.",
  },
  {
    step: "02",
    title: "Schedule Pickup",
    description: "Choose your preferred pickup time and location.",
  },
  {
    step: "03",
    title: "Track Shipment",
    description: "Monitor your cargo in real-time with our tracking system.",
  },
  {
    step: "04",
    title: "Delivery Complete",
    description: "Receive your goods safely at the destination.",
  },
];

const benefits = [
  { icon: Clock, title: "Fast Delivery", description: "Express options available" },
  { icon: Shield, title: "Secure Handling", description: "Insurance coverage included" },
  { icon: Zap, title: "Real-Time Tracking", description: "24/7 shipment visibility" },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Comprehensive logistics solutions tailored to meet your unique business needs, from air freight to supply chain management.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-3 text-accent-foreground">
                <benefit.icon className="h-6 w-6" />
                <div>
                  <div className="font-bold">{benefit.title}</div>
                  <div className="text-sm opacity-80">{benefit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We <span className="text-accent">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from our wide range of logistics services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-2xl border border-border p-8 hover:border-accent/50 hover:shadow-custom-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-4 rounded-xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It <span className="text-accent">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple and transparent shipping process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative bg-card rounded-xl p-6 text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="text-6xl font-bold text-accent/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-custom-lg">
              <div className="bg-primary p-8 text-center">
                <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                  Custom Pricing for Your Needs
                </h2>
                <p className="text-primary-foreground/80">
                  Get a personalized quote based on your specific requirements
                </p>
              </div>
              
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 rounded-xl bg-secondary">
                    <div className="text-accent font-bold text-lg mb-1">Flexible</div>
                    <p className="text-muted-foreground text-sm">Volume-based discounts</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary">
                    <div className="text-accent font-bold text-lg mb-1">Transparent</div>
                    <p className="text-muted-foreground text-sm">No hidden fees</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-secondary">
                    <div className="text-accent font-bold text-lg mb-1">Competitive</div>
                    <p className="text-muted-foreground text-sm">Best market rates</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button variant="accent" size="xl" asChild>
                    <Link to="/contact">
                      Get Your Free Quote
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Ship?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect logistics solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us Now
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
