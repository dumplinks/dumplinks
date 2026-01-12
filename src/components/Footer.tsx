import { Link } from "react-router-dom";
import { Truck, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const handles=[{
    name:"Facebook", icon:Facebook, url:"#"
  },{
    name:"Twitter", icon:Twitter, url:"https://x.com/DumplinkInfo"
  },{
    name:"Linkedin", icon:Linkedin, url:"https://www.linkedin.com/in/dumplink-logistics-1320383a5/"
  },{
    name:"Instagram", icon:Instagram, url:"https://www.instagram.com/dumplink_logistics/"
  }]
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent text-accent-foreground">
                <Truck className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">
                DumpLink <span className="text-accent">Logistics</span>
              </span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in national logistics solutions and Hualage services. We deliver excellence across land.
            </p>
            <div className="flex gap-4">
              {handles.map((handle, i) => (
                <a
                  key={i}
                  href={handle.url}
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <handle.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {["Dump Truck Haulage Services", "Logistics Platform & Digital Solutions", "Agency & Intermediary Services", "Logistics Advisory & Management Services", "Partnerships & Joint Ventures"].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  10 Aighimien street, Off Ekhator Street,<br />
                  Off Ogiemwenken, Benin City,Edo State.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+2348103117158" className="text-primary-foreground/80 hover:text-accent transition-colors">
                +2348103117158        
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@dumplinklogisticsltd.net" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@dumplinklogisticsltd.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 DumpLink Logistics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/Privacy" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
