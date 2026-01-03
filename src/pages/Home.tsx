import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Ship, Plane, Package, Clock, Shield, Globe, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";

const stats = [
  { value: "15K+", label: "Deliveries Daily" },
  { value: "50+", label: "Countries Served" },
  { value: "99.8%", label: "On-Time Rate" },
  { value: "24/7", label: "Support" },
];

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast and reliable air cargo services worldwide with real-time tracking.",
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description: "Cost-effective ocean shipping for large volume cargo.",
  },
  {
    icon: Truck,
    title: "Road Transport",
    description: "Efficient ground transportation across continents.",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Secure storage solutions with inventory management.",
  },
];

const features = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on punctuality and meeting your deadlines.",
  },
  {
    icon: Shield,
    title: "Secure Handling",
    description: "Your cargo is protected with our advanced security measures.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connected across 50+ countries for seamless logistics.",
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Global logistics operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero opacity-85" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 animate-fade-in">
              <Truck className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 10,000+ businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Delivering Excellence<br />
              <span className="text-accent">Across the Globe</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Swift, secure, and reliable logistics solutions for your business. From air freight to last-mile delivery, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-custom-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose <span className="text-accent">SwiftLogistics?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 20 years of experience in the logistics industry, we've built a reputation for reliability, efficiency, and customer satisfaction.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 opacity-0 animate-slide-in-left"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <div className="p-3 rounded-lg bg-accent/10 text-accent h-fit">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-custom-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Quick Quote Request
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-muted-foreground">
                  <option value="">Select Service</option>
                  <option value="air">Air Freight</option>
                  <option value="sea">Sea Freight</option>
                  <option value="road">Road Transport</option>
                  <option value="warehouse">Warehousing</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                />
                <Button variant="accent" className="w-full" size="lg">
                  Get Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust SwiftLogistics for their shipping needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
