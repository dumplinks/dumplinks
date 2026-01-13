
import { Plane, Ship, Truck, Package, FileCheck, MapPin, Clock, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import airFreightImage from "@/assets/air-freight.jpg";
import React from "react";



export default function How (){
    const processSteps = [
  {
    step: "01",
    title: "You Buy the Truck/ Dump Trucks",
    description: "New or fairly used trucks (guidelines provided by DumpLink).",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Register Truck",
    description: "Truck Is Registered Under a Managed Contract Ownership remains with you while DumpLink manages daily operations.",
    icon: CheckCircle,
    
  },
  {
    step: "03",
    title: "Dumplink Operates the Truck",
    description: "Driver recruitment and management, job sourcing and logistics contracts, fuel management, scheduling and routing, and maintenance coordination",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Monthly Earnings",
    description: "You Earn Monthly Earnings Net profit is shared monthly with transparent performance reporting.",
    icon: CheckCircle,
  },

];



    return(
         <section className="py-24 bg-secondary overflow-hidden">
          <h1 className="text-center text-3xl">Own a  Truck.We Manage it. You Earn Monthly.</h1>
                <div className="container mx-auto px-4">
                  <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold text-sm  tracking-wider opacity-0 animate-fade-in">DumpLink Logistics Ltd offers  investors a hand-off truck ownership program with professional fleet management and monthly earnings.</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                      How The Program <span className="text-accent">Works</span>
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