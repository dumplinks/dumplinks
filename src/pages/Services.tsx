import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Truck, Package, FileCheck, MapPin, Clock, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import airFreightImage from "@/assets/air-freight.jpg";
import partnership from "@/assets/partner.jpg";
import roadTransportImage from "@/assets/road-transport.jpg";
import warehouseImage from "@/assets/warehouse.jpg";

const services = [
  {
    icon: Truck,
    title: "Dump Truck Haulage Services",
    description: "Transportation and tipping of construction and bulk materials such as sand, laterite, granite, gravel, and related materials from approved sources to designated project sites.",
    image: roadTransportImage,
    features: [
      "Transportation of construction and bulk materials using dump trucks",
      "Haulage of sand, laterite, granite, gravel, and related aggregates",
      "Sourcing and transport of materials from approved quarries and suppliers",
      "Tipping and offloading of materials at specified locations",
    ],
  },
  {
    icon: Truck,
    title: "Logistics Platform & Digital Solutions",
    description: "Development and operation of digital platforms and mobile applications that connect customers, drivers, transporters, vendors, and agents for seamless logistics coordination and service delivery.",
    image: roadTransportImage,
    features: [
      "Mobile application solutions for real-time coordination and tracking",
      "Customer-facing platforms for booking, monitoring, and service management",
      "Real-time communication and data exchange between all logistics stakeholders",
      "Driver and transporter apps for job allocation, navigation, and status updates",
      "Scalable, secure, and user-friendly digital infrastructure for service delivery",

    ],
  },
  {
    icon: Truck,
    title: "Agency & Intermediary Services",
    description: "Acting as agents, contractors, subcontractors, or commission-based intermediaries in logistics and transportation transactions.",
    image: roadTransportImage,
    features: [
      "Acting as logistics and transportation agents on behalf of clients",
      "Facilitating transportation arrangements between customers and service providers",
      "Operating as commission-based intermediaries in logistics transactions",
      "Coordinating shipments, freight bookings, and delivery services",
      "Managing negotiations, documentation, and service agreements",
      "Representing vendors, transporters, and service partners",
      "Ensuring smooth execution of logistics contracts and transactions",
    ],
  },

  {
    icon: Package,
    title: "Logistics Advisory & Management Services",
    description: "Provision of advisory, operational planning, and management services in logistics, transportation, and mobility-related operations.",
    image: warehouseImage,
    features: [
      "Providing strategic advisory services in logistics and transportation",
      "Offering operational planning and optimization solutions",
      "Managing end-to-end logistics and mobility-related operations",
      "Conducting logistics assessments and performance evaluations",
    ],
  },
  {
    icon: FileCheck,
    title: "Partnerships & Joint Ventures",
    description: "Strategic collaborations with individuals, companies, and institutions to expand logistics capacity, market reach, and service offerings.",
    image: partnership,
    features: [
      "Strategic alliances with logistics providers to expand transportation capacity and geographic coverage",
      "Joint ventures with warehousing and fulfillment companies to enhance storage and distribution capabilities",
      "Partnerships with manufacturers and distributors to streamline end-to-end logistics solutions",
      "Collaborations with technology firms to integrate advanced tracking, automation, and supply chain management systems",
    ],
  },

];

const processSteps = [
  {
    step: "01",
    title: "Request Quote",
    description: "Tell us about your shipping needs and get a competitive quote.",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Schedule Pickup",
    description: "Choose your preferred pickup time and location.",
    icon: Clock,
  },
  {
    step: "03",
    title: "Track Shipment",
    description: "Monitor your goods in real-time with our tracking system.",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Delivery Complete",
    description: "Receive your goods safely at the destination.",
    icon: CheckCircle,
  },
];

const benefits = [
  { icon: Clock, title: "Fast Delivery", description: "Express options available" },
  { icon: Shield, title: "Secure Handling", description: "Insurance coverage for s surcharge included" },
  { icon: Zap, title: "Real-Time Tracking", description: "24/7 transport visibility" },
];

const Services = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 opacity-0 animate-fade-in">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
               <span className="text-accent">Logistics</span> Solutions and
                   <span className="text-accent ml-2">Haulage</span>  Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              From last-mile  delivery to full-scale haulage, we offer end-to-end solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-8 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 shimmer" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="flex items-center gap-3 text-accent-foreground opacity-0 animate-fade-in group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <benefit.icon className="h-6 w-6 group-hover:rotate-12 transition-transform" />
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our <span className="text-accent">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Choose from our wide range of logistics services
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center opacity-0 ${
                  index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden shadow-custom-lg group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 p-4 rounded-xl bg-accent text-accent-foreground shadow-accent group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li 
                        key={feature} 
                        className="flex items-center gap-3 text-foreground opacity-0 animate-fade-in"
                        style={{ animationDelay: `${0.3 + 0.1 * i}s` }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="accent" className="group" asChild>
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">Simple Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              How It <span className="text-accent">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Simple and transparent shipping process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative bg-card rounded-2xl p-8 text-center hover-lift group opacity-0 animate-zoom-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                {/* Step number */}
                <div className="text-7xl font-bold text-accent/10 absolute top-4 left-1/2 transform -translate-x-1/2 group-hover:text-accent/20 transition-colors">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="relative z-10 p-4 rounded-xl bg-accent/10 text-accent w-fit mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                  <step.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 relative z-10 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground relative z-10">
                  {step.description}
                </p>
                
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-accent animate-bounce-gentle" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-custom-lg hover-lift">
              <div className="bg-primary p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 shimmer" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2 relative z-10">
                  Custom Pricing for Your Needs
                </h2>
                <p className="text-primary-foreground/80 relative z-10">
                  Get a personalized quote based on your specific requirements
                </p>
              </div>
              
              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {[
                    { title: "Flexible", desc: "Volume-based discounts" },
                    { title: "Transparent", desc: "No hidden fees" },
                    { title: "Competitive", desc: "Best market rates" },
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="text-center p-6 rounded-xl bg-secondary group hover:bg-accent transition-colors duration-300 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="text-accent font-bold text-lg mb-1 group-hover:text-accent-foreground transition-colors">{item.title}</div>
                      <p className="text-muted-foreground text-sm group-hover:text-accent-foreground/80 transition-colors">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="accent" size="xl" className="group pulse-glow" asChild>
                    <Link to="/contact">
                      Get Your Free Quote
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Truck className="h-16 w-16 text-accent mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in">
            Ready to Dispatch ?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Let our experts help you find the perfect logistics solution for your business.
          </p>
          <Button variant="hero" size="xl" className="group pulse-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} asChild>
            <Link to="/contact">
              Contact Us Now
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
