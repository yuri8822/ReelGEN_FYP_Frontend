import fb2 from "../../Assets/fb2.png";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary text-white py-40   ">
      {/* Background Gradient */}

      {/* Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${fb2})` }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Football Videos into Viral Reels
        </h1>
        <p className="text-xl mb-8">
          Create engaging 30-60 second reels from any Football video with just a few clicks
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Start Creating Reels
        </button>
      </div>
    </section>
  );
}
