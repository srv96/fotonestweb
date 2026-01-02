import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen w-full bg-radial-brand text-white overflow-x-hidden font-sans selection:bg-primary-500/30">
            <Navbar />
            <main className="relative z-10">
                <Hero />
                <HowItWorks />
                <Features />
                <Pricing />
            </main>
            <Footer />
        </div>
    );
}

export default App;
