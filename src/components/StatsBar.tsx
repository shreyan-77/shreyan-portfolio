import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "90%+", label: "Model Accuracy" },
  { value: "10+", label: "Technologies" },
  { value: "200+", label: "Bugs Caught by AI" },
];

const StatsBar = () => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <div className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <AnimatedCounter key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
