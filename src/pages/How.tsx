
import { Plane, Ship, Truck, Package, FileCheck, MapPin, Clock, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import airFreightImage from "@/assets/air-freight.jpg";
import React from "react";



export default function How (){
    const processSteps = [
  {
    step: "01",
    title: "Request Quote",
    description: "Tell us about your transport needs and get a competitive quote.",
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



    return(
         <section className="py-24 bg-secondary overflow-hidden">
                <div className="container mx-auto px-4">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider opacity-0 animate-fade-in">Simple Process</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      How It <span className="text-accent">Works</span>
                    </h2>
                    <p className="text-muted-foreground text-lg opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                      Simple and transparent transport process
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

    )
}