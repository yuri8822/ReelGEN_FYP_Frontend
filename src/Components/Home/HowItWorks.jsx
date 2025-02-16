export default function HowItWorks() {
    const steps = [
      { number: 1, title: "Upload Your Video", description: "Upload any football video or provide a YouTube link" },
      { number: 2, title: "AI Magic", description: "Our AI analyzes and selects the best parts of your video" },
      { number: 3, title: "Generate Reel", description: "Get your engaging 30-60 second reel in minutes" },
      { number: 4, title: "Share & Grow", description: "Post your reel and watch your engagement soar" },
    ]
  
    return (
      <section id="how-it-works" className="py-20 px-0">
        <div className="container mx-auto px-40">
          <h2 className="text-3xl font-bold text-center mb-12">How ReelGEN Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
            {steps.map((step) => (
              <div key={step.number} className="text-center px-10">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  