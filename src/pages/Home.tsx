import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Ship, Plane, Package, Clock, Shield, Globe, ArrowRight, CheckCircle, Play } from "lucide-react";
import heroImage from "@/assets/hero-logistics.jpg";
import warehouseImage from "@/assets/warehouse.jpg";
import airFreightImage from "@/assets/air-freight.jpg";
import seaFreightImage from "@/assets/sea-freight.jpg";
import roadTransportImage from "@/assets/road-transport.jpg";

const stats = [
  { value: "15K+", label: "Deliveries Daily" },
  { value: "50+", label: "Countries Served" },
  { value: "99.8%", label: "On-Time Rate" },
  { value: "24/7", label: "Support" },
];

const services = [
  {
    icon: Truck,
    title: "Dump Truck Haulage Services",
    description: "Transportation and tipping of construction and bulk materials such as sand, laterite, granite, gravel, and related materials from approved sources to designated project sites.",
    image: roadTransportImage,
  },
  {
    icon: Truck,
    title: "Logistics Platform & Digital Solutions",
    description: "Development and operation of digital platforms and mobile applications that connect customers, drivers, transporters, vendors, and agents for seamless logistics coordination and service delivery.",
    image: roadTransportImage,
  },
  {
    icon: Truck,
    title: "Agency & Intermediary Services",
    description: "Acting as agents, contractors, subcontractors, or commission-based intermediaries in logistics and transportation transactions.",
    image: roadTransportImage,
  },
  {
    icon: Package,
    title: "Logistics Advisory & Management Services",
    description: "Provision of advisory, operational planning, and management services in logistics, transportation, and mobility-related operations.",
    image: warehouseImage,
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

const clients = [
  "TechCorp", "GlobalTrade", "FastShip", "MegaMart", "IndustrialCo"
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Global logistics operations"
            className="w-full h-full object-cover animate-scale-in"
          />
          <div className="absolute inset-0 gradient-hero opacity-85" />
          
          {/* Animated elements */}
          <div className="absolute bottom-20 left-0 right-0 overflow-hidden opacity-20">
            <Truck className="h-12 w-12 text-primary-foreground animate-truck-move" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-6 opacity-0 animate-fade-in backdrop-blur-sm border border-accent/30">
              <Truck className="h-4 w-4 animate-bounce-gentle" />
              <span className="text-sm font-medium">Trusted by 10,000+ businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Delivering Excellence<br />
              <span className="text-accent relative">
                Across the Globe
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 100 4 150 6C200 8 250 4 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-pulse-soft"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Swift, secure, and reliable logistics solutions for your business. From air freight to last-mile delivery, we've got you covered.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" className="group pulse-glow" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="group" asChild>
                <Link to="/services">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse-soft" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-8 bg-primary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
            <span className="text-primary-foreground/60 text-sm font-medium">Trusted by:</span>
            {clients.map((client, index) => (
              <span 
                key={client} 
                className="text-primary-foreground/80 font-bold text-lg opacity-0 animate-fade-in hover:text-accent transition-colors cursor-default"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {client}
              </span>
            ))}
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
                className="text-center group opacity-0 animate-slide-up-fade"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Comprehensive logistics solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover-lift opacity-0 animate-zoom-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  
                  {/* Icon overlay */}
                  <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-accent text-accent-foreground shadow-accent group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                  >
                    Learn More 
                    <ArrowRight className="h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button variant="outline" size="lg" className="group" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-in-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Why Choose <span className="text-accent">DumpLink ?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 20 years of experience in the logistics industry, we've built a reputation for reliability, efficiency, and customer satisfaction.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 group opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.2 + 0.15 * index}s` }}
                  >
                    <div className="p-3 rounded-xl bg-accent/10 text-accent h-fit group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:rotate-12">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
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

            <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="bg-card rounded-2xl p-8 shadow-custom-lg hover:shadow-glow transition-shadow duration-500">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Quick Quote Request
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  />
                  <input
                    type="contact"
                    placeholder="Phone Number..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 text-muted-foreground">
                  <option value="">Select a service</option>
                    <option value="Dump Truck">Dump Truck Haulage Services</option>
                    <option value="Logistics Platform & Digital Solutions">Logistics Platform & Digital Solutions</option>
                    <option value="Agency & Intermediary Services">Agency & Intermediary Services</option>
                    <option value="Logistics Advisory & Management Services">Logistics Advisory & Management Services</option>
                    <option value="Partnerships & Joint Ventures">Partnerships & Joint Ventures</option>
                   
                  </select>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
                  />
                  <Button variant="accent" className="w-full group shimmer" size="lg">
                    Get Free Quote
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="py-4 bg-primary">
        <div className="flex gap-4 animate-truck-move" style={{ animationDuration: "30s" }}>
          {[...services, ...services].map((service, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <Truck className="h-16 w-16 text-accent mx-auto mb-6 animate-bounce-gentle" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in">
              Ready to  Dispatch with Confidence?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Join thousands of businesses that trust Dumplink Logistics for their dispatching needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" className="group pulse-glow" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
