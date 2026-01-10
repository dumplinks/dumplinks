import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
          <div style={{
        position:"fixed",
        bottom:"70px",
        background:" #37CA2A",
        width:"55px",
        height:"55px",
        borderRadius:"50%",
        right:"20px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1000
       

      }}>

         <div
        style={{
          width:"45px",
        height:"45px",
        borderRadius:"50%",
        borderWidth:"2px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
        >
        <a href="https://wa.me/+2349011192901">     
        <FaWhatsapp color='white' size={25} />
      </a>
        </div>
      </div>


       <div style={{
        position:"fixed",
        bottom:"150px",
      
        width:"55px",
        height:"55px",
        borderRadius:"50%",
        right:"50px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        zIndex:1000
       

      }}>
        <div className="md:block">
                    <Button variant="accent" asChild>
                      <Link to="/how">How it works </Link>
                    </Button>
                  </div>
      </div>

    </div>
  );
};

export default Layout;
