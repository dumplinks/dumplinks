import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "We deliver on our promises, every single time.",
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
    title: "Teamwork",
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

const team = [
  { name: "James Mitchell", role: "CEO & Founder", initial: "JM" },
  { name: "Sarah Chen", role: "COO", initial: "SC" },
  { name: "Michael Brown", role: "Head of Operations", initial: "MB" },
  { name: "Emily Rodriguez", role: "Customer Success Director", initial: "ER" },
];

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
              About <span className="text-accent">SwiftLogistics</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              For over 20 years, we've been connecting businesses to the world through reliable, innovative logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SwiftLogistics was founded in 2004 with a simple mission: to make global shipping accessible, affordable, and reliable for businesses of all sizes.
                </p>
                <p>
                  What started as a small regional transport company has grown into a global logistics powerhouse, serving over 10,000 businesses across 50+ countries.
                </p>
                <p>
                  Our success is built on a foundation of trust, innovation, and an unwavering commitment to customer satisfaction. We don't just move packages—we build lasting partnerships.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button variant="accent" asChild>
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-custom-md">
                  <div className="text-4xl font-bold text-accent mb-2">20+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-accent rounded-xl p-6 text-accent-foreground">
                  <div className="text-4xl font-bold mb-2">15K+</div>
                  <div className="opacity-80">Daily Deliveries</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-primary rounded-xl p-6 text-primary-foreground">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="opacity-80">Countries</div>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-custom-md">
                  <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-custom-md">
              <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide world-class logistics solutions that empower businesses to grow, connecting them to markets worldwide with speed, reliability, and care.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-custom-md">
              <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit mb-4">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and innovative logistics partner globally, setting new standards for efficiency, sustainability, and customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-custom-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="p-4 rounded-full bg-accent/10 text-accent w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
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
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Journey</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
              
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-card rounded-xl p-6 shadow-custom-md">
                      <div className="text-accent font-bold text-lg mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="text-foreground font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership <span className="text-accent">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet the people driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-custom-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  {member.initial}
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-accent font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Growing Family
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Partner with SwiftLogistics and experience the difference of working with industry leaders.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
