const StatisticsBar = () => (
  <section className="py-16 bg-tech-dark border-y border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { value: "3.2M+", label: "Active Users" },
          { value: "99.9%", label: "Uptime" },
          { value: "24/7", label: "Support" }
        ].map((stat, index) => (
          <div key={index} className="group">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
              {stat.value}
            </div>
            <div className="text-tech-gray text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatisticsBar; 