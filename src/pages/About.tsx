import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, TrendingUp, Heart, ArrowRight, Quote } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import warehouseImage from "@/assets/warehouse.jpg";

const values = [
  {
    icon: Target,
    title: "Professionalism",
    description: "Professionalism means delivering reliable, efficient, and ethical logistics services at all times.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your success is our top priority in everything we do.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Constantly improving our services with cutting-edge technology.",
  },
  {
    icon: Users,
    title: "Operational Excellence",
    description: "Collaborative approach to solve complex logistics challenges.",
  },
];

const milestones = [
  { year: "2004", title: "Company Founded", description: "Started with a single truck and a vision." },
  { year: "2010", title: "International Expansion", description: "Expanded operations to 15 countries." },
  { year: "2016", title: "Technology Revolution", description: "Launched real-time tracking platform." },
  { year: "2020", title: "Global Network", description: "Reached 50+ countries worldwide." },
  { year: "2024", title: "Industry Leader", description: "Recognized as top logistics provider." },
];

const testimonials = [
  {
    quote: "Dumplink Logistics transformed our supply chain. Their reliability and professionalism are unmatched.",
    author: "Sarah Johnson",
    company: "TechCorp Inc.",
  },
  {
    quote: "The best logistics partner we've ever worked with. On-time delivery, every time.",
    author: "Michael Chen",
    company: "GlobalTrade Co.",
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 opacity-0 animate-fade-in">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              About <span className="text-accent">Dumplink Logistics</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>

              </p>
            </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-slide-in-left">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy of <span className="text-accent">Excellence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  Dumplink Logistics was founded in 2025 with a simple mission: to make global shipping accessible, affordable, and reliable for businesses of all sizes.
                </p>
                <p className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  What started as a small regional transport company has grown into a global logistics powerhouse, serving over 10,000 businesses across 50+ countries.
                </p>
                <p className="opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  Our success is built on a foundation of trust, innovation, and an unwavering commitment to customer satisfaction. We don't just move packages—we build lasting partnerships.
                </p>
              </div>
              <div className="flex gap-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <Button variant="accent" className="group" asChild>
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-card rounded-xl p-6 shadow-custom-md hover-lift">
                    <div className="text-4xl font-bold text-accent mb-2">20+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="bg-accent rounded-xl p-6 text-accent-foreground hover-lift shadow-accent">
                    <div className="text-4xl font-bold mb-2">15K+</div>
                    <div className="opacity-80">Daily Deliveries</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-primary rounded-xl p-6 text-primary-foreground hover-lift">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="opacity-80">Countries</div>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-custom-md hover-lift">
                    <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                    <div className="text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      {/* <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden shadow-custom-lg">
            <img 
              src={teamImage} 
              alt="Our team" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  Meet Our Team
                </h3>
                <p className="text-primary-foreground/80 max-w-xl">
                  Over 500 dedicated professionals working around the clock to ensure your cargo reaches its destination safely and on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-custom-md hover-lift group opacity-0 animate-fade-in">
              <div className="p-4 rounded-xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:rotate-12">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
               DumpLink Logistics Limited Our mission at DumpLink Logistics Limited is to deliver reliable, efficient, and technology-driven logistics and haulage solutions across Nigeria’s construction and infrastructure sectors. We are committed to safely transporting bulk construction materials — including sand, laterite, granite, gravel, and other aggregates — from approved sourcing locations to project sites with professionalism and integrity. We leverage innovative digital platforms and mobile applications to connect customers, drivers, transporters, vendors, agents, 
               and service providers, improving efficiency, transparency, and service delivery. Through advisory and consulting services,
                we support logistics excellence, business growth, and economic development while building strong partnerships that advance Nigeria’s 
                logistics ecosystem.
            
               </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-custom-md hover-lift group opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="p-4 rounded-xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:rotate-12">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
               DumpLink Logistics Limited To become Nigeria’s leading technology-enabled haulage and logistics company, transforming the movement of construction materials through innovation, reliability,
                and operational excellence while setting new standards for efficiency, transparency, and customer satisfaction in the logistics industry.
              </p>
            </div>

            
          </div>
        </div>
      </section>

           {/* About Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-custom-md hover-lift group opacity-0 animate-fade-in">
              <div className="p-4 rounded-xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:rotate-12">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">About Us</h3>
              <p className="text-muted-foreground leading-relaxed">

               DumpLink Logistics Ltd. is a logistics and haulage company engaged in the provision of professional dump truck transportation services for the construction, infrastructure, and real estate sectors. The Company specializes in the haulage, delivery, and tipping of bulk construction materials including sand, laterite, granite, gravel, and other related aggregates from approved sourcing locations to construction sites, industrial facilities, and project locations.

               In addition to physical logistics operations, DumpLink Logistics Ltd. will operates technology-enabled platforms, including digital systems and mobile applications, designed to efficiently connect customers with drivers, transporters, vendors, agents, and other logistics service providers. Through these platforms, the Company will enhances transparency, coordination, and operational efficiency within the haulage and logistics value chain.
               </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-custom-md hover-lift group opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="p-4 rounded-xl bg-accent/10 text-accent w-fit mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:rotate-12">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Read More</h3>
              <p className="text-muted-foreground leading-relaxed">
              DumpLink Logistics Ltd. also functions as an intermediary and service enabler within the logistics ecosystem. The Company may act as an agent, contractor, subcontractor, or commission-based service provider, facilitating logistics, transportation, and delivery services between parties while ensuring service quality, reliability, and compliance with applicable standards.

Furthermore, the Company provides advisory, operational support, and management services related to logistics, transportation, and mobility solutions. These services are tailored to support individuals, businesses, and institutions seeking efficient, scalable, and cost-effective logistics operations.

To advance its business objectives, DumpLink Logistics Ltd. is empowered to enter into strategic partnerships, joint ventures, and collaborative arrangements with individuals, corporate entities, governmental bodies, and institutions, both locally and internationally, where such collaborations support the attainment of the Company’s objectives.

DumpLink Logistics Ltd. is committed to delivering dependable logistics solutions driven by professionalism, innovation, and operational excellence.


</p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover-lift group opacity-0 animate-zoom-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-4 rounded-full bg-accent/10 text-accent w-fit mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">Our History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Our <span className="text-accent">Journey</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-12 opacity-0 ${
                    index % 2 === 0 ? "justify-start animate-slide-in-left" : "justify-end animate-slide-in-right"
                  }`}
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-card rounded-xl p-6 shadow-custom-md hover-lift group">
                      <div className="text-accent font-bold text-xl mb-1 group-hover:scale-110 inline-block transition-transform">
                        {milestone.year}
                      </div>
                      <h3 className="text-foreground font-bold mb-2 group-hover:text-accent transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-accent animate-pulse-soft" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-custom-md hover-lift opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <p className="text-foreground text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-accent text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={warehouseImage} 
          alt="Our warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              State-of-the-Art Facilities
            </h3>
            <p className="text-primary-foreground/80 max-w-xl mx-auto px-4">
              Over 2 million sq ft of warehouse space across 30+ locations worldwide
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Award className="h-16 w-16 text-accent mx-auto mb-6 animate-bounce-gentle" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 opacity-0 animate-fade-in">
            Join Our Growing Family
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Partner with Dumplink logistics and experience the difference of working with industry leaders.
          </p>
          <Button variant="hero" size="xl" className="group pulse-glow opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
