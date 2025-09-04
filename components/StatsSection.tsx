export default function StatsSection() {
  const stats = [
    { number: "100+", text: "happy & satisfied clients" },
    { number: "6+", text: "years of content expertise" },
    { number: "1000+", text: "successful campaigns executed" },
    { number: "500+", text: "content creators onboarded" },
  ];

  return (
    <section className="w-full py-12">
      <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center border-y border-gray-700 py-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-2xl font-bold text-green-500">{stat.number}</h3>
            <p className="mt-2 text-sm font-bold leading-relaxed">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
