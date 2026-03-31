import Image from "next/image";

export default function AboutSections() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 justify-center">
        <div className="relative w-full md:w-1/2 h-100">
          <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 -z-10 opacity-10"></div>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVBuVVpg-PzxH6AVgwzE_gJQsDfNx-sLzLQ&s"
            alt="College Campus"
            height={500}
            width={500}
            className="w-full h-full object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            About Our Institution
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight text-gray-900">
            Dedicated to Nurturing <br />
            <span className="text-primary">The Leaders of Tomorrow</span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Founded in 2011, **[College Name]** has been a beacon of academic
            excellence in our community. We believe in providing a balanced
            education that combines rigorous academics with character building
            and modern skill development.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our campus is more than just a place to study; it’s a vibrant
            ecosystem where students are encouraged to think critically,
            innovate, and pursue their passions. From advanced laboratories to
            diverse cultural clubs, we provide every tool necessary for a
            student&apos;s success.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium text-gray-700">Digital Library</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium text-gray-700">
                Modern Sports Complex
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium text-gray-700">Skilled Faculty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="font-medium text-gray-700">
                Career Counseling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
