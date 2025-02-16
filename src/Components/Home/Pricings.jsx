export default function Pricing() {
    const plans = [
      {
        name: "Basic",
        price: "$9",
        features: ["10 reels/month", "720p quality", "Basic editing tools", "Email support"],
      },
      {
        name: "Pro",
        price: "$29",
        features: [
          "Unlimited reels",
          "1080p quality",
          "Advanced editing tools",
          "Priority support",
          "Analytics dashboard",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: ["Custom reel length", "4K quality", "API access", "Dedicated account manager", "Custom integrations"],
      },
    ]
  
    return (
      <section id="pricing" className="py-20 px-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">
                  {plan.price}
                  <span className="text-sm text-gray-500">/month</span>
                </p>
                <ul className="mb-6 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded ${index === 1 ? "bg-primary text-white" : "bg-gray-200 text-gray-800"} hover:bg-opacity-90 transition duration-300`}
                >
                  {index === 2 ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  