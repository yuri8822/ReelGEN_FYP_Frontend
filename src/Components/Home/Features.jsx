import { FaChartLine, FaMagic, FaRocket } from "react-icons/fa"

const features = [
  {
    icon: <FaRocket className="text-4xl mb-4 text-primary" />,
    title: "Quick Generation",
    description: "Create reels in minutes, not hours. Our AI-powered system does the heavy lifting for you.",
  },
  {
    icon: <FaMagic className="text-4xl mb-4 text-primary" />,
    title: "Smart Editing",
    description: "Our algorithm selects the most engaging parts of your video to create scroll-stopping reels.",
  },
  {
    icon: <FaChartLine className="text-4xl mb-4 text-primary" />,
    title: "Engagement Boost",
    description: "Increase your social media engagement with perfectly timed and crafted reels.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50  px-30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ReelGEN?</h2>
        <div className="grid md:grid-cols-3 gap-2 px-40">
          {features.map((feature, index) => (
            <div key={index} className="text-center px-5">
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

