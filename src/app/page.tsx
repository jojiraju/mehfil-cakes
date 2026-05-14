import LoadingScreen from "@/components/LoadingScreen";
import PremiumNavbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AmulPartnership from "@/components/AmulPartnership";
import FeaturedCakes from "@/components/FeaturedCakes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cream">
      <LoadingScreen />
      <PremiumNavbar />
      <Hero />
      <AmulPartnership />
      <FeaturedCakes />
      
      {/* Brand Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-chocolate mb-10 leading-tight">
              A Legacy of <span className="text-gold italic font-normal">Sweetness</span> & Passion
            </h2>
            <div className="prose prose-lg mx-auto text-chocolate/70 leading-relaxed space-y-6">
              <p>
                Founded in 2015, Mehfil Cakes began with a simple vision: to elevate the art of baking into a sensory experience. What started as a small studio has grown into a destination for luxury cakes and a cozy sanctuary for dessert lovers.
              </p>
              <p>
                Our master bakers blend traditional techniques with modern innovation, ensuring every cake is not just a dessert, but a masterpiece designed to be the centerpiece of your most cherished celebrations.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Years of Excellence", value: "11+" },
                 { label: "Cakes Created", value: "25k+" },
                 { label: "Happy Clients", value: "15k+" },
                 { label: "Awards Won", value: "12" }
               ].map((stat, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <span className="text-3xl md:text-5xl font-serif font-bold text-gold mb-2">{stat.value}</span>
                    <span className="text-[10px] uppercase tracking-widest text-chocolate/40 font-bold">{stat.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

