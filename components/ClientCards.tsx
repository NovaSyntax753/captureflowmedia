"use client"
import ribbon from "../assets/ribbon_Vector-p-2600.png"
import AnimatedTitle from './Animated';
import Card from './Card'
import conso from '../assets/company/conso.png';
import ark from '../assets/company/ark.png';
import dental from '../assets/company/dental.png';
import blissfull from '../assets/company/blissfull.png';
import quickfintax from '../assets/company/quickfintax.png';
import karma from '../assets/company/karma.png';
import Image from 'next/image';
const clients = [
  {
    name: 'CA Shubham Patel',
    title: 'Founder and CEO Conso AI',
    image: conso,
  },
  {
    name: 'Rohit Purohit',
    title: 'Managing Director ARK2Construct',
    image: ark,
  },
  {
    name: 'Dr. Ankita Agrawal',
    title: 'Co Founder Agrawal Dental Clinic',
    image: dental,
  },
  {
    name: 'Dr. Vrutika Patel',
    title: 'Founder Blissful hands',
    image: blissfull,
  },
  {
    name: 'CA CS Harshwardhan Bissa',
    title: 'Co-founder - Quick Fintax',
    image: quickfintax,
  },
  {
    name: 'Dr Shalini Deshmukh',
    title: 'Managing Director Karma Astrology',
    image: karma
  }
];

const ClientCards = () => {
  return (
    <section className="w-full py-10 md:py-16 relative overflow-hidden">
          <Image src={ribbon.src} fill alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#53c926] mb-8 text-center animate-fadeInUp">Top Clients We Have Served</h2>
        </AnimatedTitle>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {clients.map((client, idx) => (
            <Card
              key={idx}
              name={client.name}
              title={client.title}
              image={client.image.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCards; 