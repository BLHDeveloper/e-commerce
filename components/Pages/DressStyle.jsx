export default function DressStyle() {
  const categories = [
    {
      title: "Casual",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=400&fit=crop",
      span: "md:col-span-1",
    },
    {
      title: "Formal",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=400&fit=crop",
      span: "md:col-span-2",
    },
    {
      title: "Party",
      image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?w=800&h=400&fit=crop",
      span: "md:col-span-2",
    },
    {
      title: "Gym",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
      span: "md:col-span-1",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="bg-[#F0F0F0] rounded-[20px] sm:rounded-[40px] p-6 sm:p-10 lg:p-16">
        <h2 className="text-center text-2xl sm:text-4xl lg:text-5xl font-bold font-['Integral_CF'] text-black mb-8 sm:mb-12">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {categories.map(({ title, image, span }) => (
            <a
              key={title}
              href="#"
              className={`group relative h-[190px] sm:h-[250px] md:h-[289px] rounded-[20px] overflow-hidden bg-white ${span}`}
            >
              <img
                src={image}
                alt={`${title} style clothing`}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
              <span className="absolute top-5 left-6 sm:top-6 sm:left-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg z-10">
                {title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
