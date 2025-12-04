"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const FlipbookTour = () => {
  const [currentStop, setCurrentStop] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"forward" | "backward">("forward")

  const tourStops = [
    // 1. INTRODUCTION
    {
      type: "blank",
      title: "The Digital Claude Glass",
      location: "A Picturesque Tour of Bishop, California",
      year: "2025",
      aesthetic: "",
      image: "",
      description: (
        <>
          <p className="mb-4">
            <strong>Have you ever looked at a mountain and felt fear instead of peace? That feeling has a history.</strong> In the mid-eighteenth century, travel was redefined. It ceased to be merely about transit and became an exercise in aesthetics. Tourists flocked to the British countryside equipped with a specific tool: the "Claude glass," a small, tinted mirror that framed the unruly natural world into a composed, painterly image.
          </p>
          <p className="mb-4">
            Guided by the theories of William Gilpin, Edmund Burke, and later William Wordsworth, these travelers learned to analyze nature through three distinct lenses: the <strong>Beautiful</strong> (smooth, gentle, pleasing), the <strong>Picturesque</strong> (rough, irregular, interesting), and the <strong>Sublime</strong> (vast, obscure, terrifying).
          </p>
          <p>
            This digital tour applies these eighteenth-century lenses to the twenty-first-century landscape of the Eastern Sierra. As we move from Bishop up into the high country, we will not just look at scenery; we will analyze it through the strict criteria of 1790s aesthetic theory. Your screen is now your Claude glass.
          </p>
        </>
      ),
      theory: "",
      exercise: "",
    },
    // 2. MAP SECTION
    {
      type: "map",
      title: "The Itinerary",
      location: "Eastern Sierra Route",
      year: "2025",
      aesthetic: "",
      image: "",
      description: "",
      theory: "",
      exercise: "",
    },
    // 3. STOP 1
    {
      title: "Autumn Overlook",
      location: "The Beautiful",
      year: "2023",
      aesthetic: "picturesque",
      image: "Tree in The morning (1).png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> Welcome. We are starting our journey where eighteenth-century picturesque tourists always began: in gentle, pastoral country. I painted this view trying to capture what Gilpin called "a state of ease and tranquility." Take a breath. Let the golden autumn settle around you before we climb toward something more intense.</p>
          <p><strong>The View:</strong> Notice how the tree branches create a natural frame. Gilpin called this a "foreground screen," and he insisted every proper picturesque view needed one. Your eye should not crash into a scene; it should be invited through layers. See how the composition guides you: golden canopy, then middle plain, then those soft blue mountains dissolving into distance?</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">Gilpin argued in his <em>Three Essays on Picturesque Beauty</em> (1792) that landscapes required "rough, irregular, and intricate" elements to achieve picturesque status.</p>
          <blockquote className="border-l-2 border-[#8b6e46] pl-4 italic my-2 text-[#5a4632]">
            "Roughness forms the most essential point of difference between the beautiful and the picturesque."
          </blockquote>
          <p>Yet Burke also contributes to this scene. The vanishing horizon adds Burkean depth to Gilpin's compositional framework. You feel both the structural pleasure of picturesque arrangement and the emotional pull of sublime obscurity.</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">Why You Must Visit</p>
          <p className="mb-2">I have captured the composition, but I cannot paint the crisp air. Gilpin urges you to visit this spot to practice the art of "correcting" nature.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> When you stand here, hold up your hands to frame the view just as the trees do in the painting.</li>
            <li><strong>The Reward:</strong> You will find that here—unlike the messy chaos of the city—nature orders itself perfectly for your pleasure. It is the perfect introduction to the wild.</li>
          </ul>
        </>
      ),
    },
    // 4. STOP 2
    {
      title: "Sunrise Path",
      location: "The Sublime of Light",
      year: "2023",
      aesthetic: "sublime",
      image: "Morning Sun Rise (1).png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> The path curves ahead, and suddenly - sunrise explodes across the landscape. Can you feel the difference from our first stop? We have left tranquility behind. Two figures walk toward that light, and we are going to follow them into what Burke called "the Sublime of overwhelming brightness."</p>
          <p><strong>The View:</strong> The walkers give scale - they are tiny against this radiance. Gilpin always said human figures "animate" a landscape without disturbing it, and here they serve another purpose: they show us how overwhelming this light actually is. Look at how the road winds toward that glowing horizon. It pulls you forward, does it not?</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">Burke developed an entire theory about light as a sublime force. Moderate light produces beauty, but extreme light produces the sublime through sensory overwhelm.</p>
          <blockquote className="border-l-2 border-[#8b6e46] pl-4 italic my-2 text-[#5a4632]">
            "Extreme light, by overcoming the organs of sight, obliterates all objects, so as in its effect exactly to resemble darkness."
          </blockquote>
          <p>This sunrise is not gentle. It is almost blinding. It produces what Burke described as "delight blended with astonishment."</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">The Physical Challenge</p>
          <p className="mb-2">A painting is static; the real sunrise is violent. You must walk this path at dawn to test Burke's theory yourself.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> Walk toward the rising sun until you are forced to squint. Let the light "obliterate" the world around you.</li>
            <li><strong>The Reward:</strong> You will feel the exact moment where "Beauty" dissolves into the "Sublime." It is an experience of delightful terror that no canvas can fully capture.</li>
          </ul>
        </>
      ),
    },
    // 5. STOP 3
    {
      title: "Gold Garnish",
      location: "The Sublime of Magnitude",
      year: "2023",
      aesthetic: "sublime",
      image: "Mountains with Trees in Forground.png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> You are standing at the base of the English Channel cliffs now, and everything has changed. Feel how the air shifts? Those pale, jagged ridges rise like fortifications against a turbulent sky. This is where Burke's theory truly awakens.</p>
          <p><strong>The View:</strong> I struggled with this painting more than any other. I kept asking: how do you paint immensity? Those fractured limestone edges, the dark pines below, the golden grasses trembling - I was trying to capture what Burke called "the artificial infinite," where broken, irregular lines make something feel endless.</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">Burke argued that vastness was one of the primary sources of the sublime. But mere size was not enough - the form of that vastness mattered.</p>
          <blockquote className="border-l-2 border-[#8b6e46] pl-4 italic my-2 text-[#5a4632]">
            "Greatness of dimension is a powerful cause of the sublime."
          </blockquote>
          <p>When I painted these cliffs, I kept thinking: would Burke feel awe here? That mixture of attraction and fear he described? The cliff is not hostile, but it is undeniably indifferent.</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">Experience the Magnitude</p>
          <p className="mb-2">On a screen, these cliffs are small. In reality, they are monsters. You must stand at the base to feel the "Vastness" Burke described.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> Stand at the treeline and look straight up. Feel the strain in your neck and the vertigo in your mind.</li>
            <li><strong>The Reward:</strong> A rare feeling of insignificance. In a world where we control everything, come here to stand beside something that ignores you completely.</li>
          </ul>
        </>
      ),
    },
    // 6. STOP 4
    {
      title: "Loom Over Steep Slopes",
      location: "Atmospheric Tension",
      year: "2023",
      aesthetic: "sublime",
      image: "Loom over the steep slopes.png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> We have reached Yosemite now, and the atmosphere has thickened. Those mountains receding beneath heavy clouds - can you feel the weight pressing down? This is what Burke meant by "magnificent gloom."</p>
          <p><strong>The View:</strong> I painted this trying to capture layers - Gilpin's obsession with spatial recession. But look up - that sky is the real subject, is it not? Brooding, restrained, holding back violence.</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">Burke transformed atmospheric conditions into emotional experiences. Darkness, obscurity, and threatening weather were not mere backdrop - they were sources of the sublime.</p>
          <blockquote className="border-l-2 border-[#8b6e46] pl-4 italic my-2 text-[#5a4632]">
            "To make any thing very terrible, obscurity seems in general to be necessary."
          </blockquote>
          <p>That sky creates what Burke called "magnificent gloom" - psychological pressure. The sublime happens when danger is present but at a distance that allows contemplation rather than panic.</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">A Tour of Obscurity</p>
          <p className="mb-2">Why travel to see a view that is hidden by clouds? Because, as Burke argues, the imagination is stronger than the eye.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> Visit on a storm day. Do not wait for the sun. Watch the peak vanish and try to guess how tall it truly is.</li>
            <li><strong>The Reward:</strong> Your mind will build a mountain twice as high and twice as terrifying as the real one. You must go there to let your imagination run wild.</li>
          </ul>
        </>
      ),
    },
    // 7. STOP 5
    {
      title: "Composure of the Pines",
      location: "Before the Storm",
      year: "2023",
      aesthetic: "sublime",
      image: "Trees.png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> Step into the clearing. Dark pines surround you, their trunks like sentinels, and those mottled clouds overhead - they are not raining yet, but they will. The forest is holding its breath.</p>
          <p><strong>The View:</strong> The scattered stones at their base provide the "roughness" Gilpin demanded. But notice: you are not looking at the trees. You are looking through them to that heavy sky. The trees frame the real subject - atmospheric tension.</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">Burke's theory of anticipation dominates here. He argued that the sublime could arise not just from present danger but from impending events.</p>
          <p>The clouds exert psychological force. I tried to paint that heaviness, that sense of the atmosphere itself becoming a presence. Burke would recognize this as the sublime of expectation - where tension precedes actual violence.</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">The Auditory Experience</p>
          <p className="mb-2">My brush cannot paint silence. This stop is not for the eyes, but for the ears.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> Step into the pines and stop moving. Listen to the "Privation" of sound before the thunder rolls.</li>
            <li><strong>The Reward:</strong> The heaviness of the air here creates a physical weight on the chest. It is the thrill of anticipation, the moment before the hammer falls.</li>
          </ul>
        </>
      ),
    },
    // 8. STOP 6
    {
      title: "Rocky Horror",
      location: "Terror and Indifference",
      year: "2023",
      aesthetic: "sublime",
      image: "Rocky Horror.png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> Look up. No - really look up. That cliff face rises in shadowed limestone folds like a geological cathedral. This is where I nearly failed Burke's test. Is this Sublime enough?</p>
          <p><strong>The View:</strong> Gilpin would love those rugged projections - quintessentially picturesque. But Burke? Burke would demand more. He would want those cliffs larger, those shadows deeper. When I painted this, I kept thinking: am I making a pretty picture or am I making something that produces astonishment?</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">This is where Gilpin and Burke split completely. Gilpin wrote about cliffs as compositional elements. But Burke pursued something darker and more psychological:</p>
          <blockquote className="border-l-2 border-[#8b6e46] pl-4 italic my-2 text-[#5a4632]">
            "The passion caused by the great and sublime in nature... is Astonishment; and astonishment is that state of the soul, in which all its motions are suspended, with some degree of horror."
          </blockquote>
          <p>That word - horror. Not fear exactly, but something that arrests you, that makes you aware of your own insignificance.</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">The Ultimate Test</p>
          <p className="mb-2">This is the most difficult stop on our tour. It is not "pretty." It is overwhelming.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> Do not look for a "frame" or a "composition." Simply confront the sheer wall of stone.</li>
            <li><strong>The Reward:</strong> Astonishment. The feeling of your mind hitting a wall it cannot climb. It is a cleansing shock that only the true Sublime can provide.</li>
          </ul>
        </>
      ),
    },
    // 9. STOP 7
    {
      title: "Reflect Peace",
      location: "Sublime Tranquility",
      year: "2023",
      aesthetic: "sublime",
      image: "Reflect Peace.png",
      description: (
        <>
          <p className="mb-2"><strong>Arrival:</strong> You have reached May Lake. Sit down. The journey has been intense - cliffs, storms, gathering dread. But here? Here everything mirrors itself. This is where the tour changes one last time.</p>
          <p><strong>The View:</strong> Gilpin had strong opinions about reflections. He liked them slightly broken by movement. But something stranger is happening. That perfect doubling - the mountains and their mirrored mountains - creates what Burke might call "the uncanny." You see twice the landscape, twice the immensity.</p>
        </>
      ),
      theory: (
        <>
          <p className="mb-2">Wordsworth offers a third voice here. In <em>Lines Written a Few Miles Above Tintern Abbey</em> (1798), he described moments when nature produces profound internal quiet:</p>
          <blockquote className="border-l-2 border-[#8b6e46] pl-4 italic my-2 text-[#5a4632]">
            "Until, the breath of this corporeal frame... And even the motion of our human blood... Almost suspended, we are laid asleep In body, and become a living soul"
          </blockquote>
          <p>This lake invites that Wordsworthian meditation. Yet the doubling also creates what Burke might recognize as the sublime through multiplication.</p>
        </>
      ),
      exercise: (
        <>
          <p className="font-bold mb-1 text-[#8b6e46]">The Final Reflection</p>
          <p className="mb-2">After the terror of the cliffs, you will need this water. This is the only place in the Sierra where the world doubles itself perfectly.</p>
          <ul className="list-disc pl-5">
            <li><strong>On-Site Directive:</strong> Sit by the water's edge. Look only at the reflection, not the mountain.</li>
            <li><strong>The Reward:</strong> Wordsworth's "Living Soul." The adrenaline of the tour will fade, replaced by a profound, mirror-like clarity. You will leave this spot changed.</li>
          </ul>
        </>
      ),
    },
    // 10. CONCLUSION
    {
      type: "blank",
      title: "End of Tour",
      location: "",
      year: "2025",
      aesthetic: "",
      image: "",
      description: (
        <>
          <p className="mb-4">
            You have walked through seven painted attempts to translate eighteenth-century aesthetic theory into visual experience. Some succeeded better than others - that is the honest truth.
          </p>
          <p className="mb-4">
            Gilpin, Burke, and Wordsworth were not just describing nature; they were teaching people <em>how to feel</em> about nature. The picturesque taught composition. The sublime taught awe. And Wordsworth taught contemplative peace.
          </p>
          <p>
            These categories still shape how we see. When you frame a photograph, you are channeling Gilpin. When a storm makes you pause in wonder, you are experiencing Burke. When a quiet landscape brings internal stillness, you are finding Wordsworth.
          </p>
          <div className="mt-8 text-center text-[#8b6e46] text-sm font-serif italic">
            <p>The Digital Claude Glass: A Picturesque Tour of Bishop, California</p>
            <p className="mt-2">Curated by Jackqueline (Jack) Wilson</p>
            <p className="mt-1">2025</p>
          </div>
        </>
      ),
      theory: "",
      exercise: "",
    },
  ]

  const nextStop = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection("forward")
    setTimeout(() => {
      setCurrentStop((prev) => (prev + 1) % tourStops.length)
      setIsFlipping(false)
    }, 800)
  }

  const prevStop = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection("backward")
    setTimeout(() => {
      setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length)
      setIsFlipping(false)
    }, 800)
  }

  const currentLocation = tourStops[currentStop]

  // RENDERER FOR THE MAP PAGE
  const renderMapPage = () => (
    <div className="flex-1 flex flex-col p-8 md:p-12 overflow-hidden">
      <div className="map-container w-full h-full flex flex-col">
        <h2 className="title-text text-2xl md:text-3xl text-[#2d2416] mb-6 text-center border-b-2 border-[#8b6e46] pb-4">
          Our Route Through the Eastern Sierra
        </h2>
       
        <div
          className="route-map flex-1 p-6 rounded-lg overflow-y-auto custom-scrollbar"
          style={{
            background: "rgba(249, 245, 235, 0.5)",
            border: "1px dashed #8b6e46"
          }}
        >
          <p className="italic text-[#8b6e46] mb-6 text-center font-serif">
            From Bishop, California, radiating outward through seven locations
          </p>
         
          <div className="location-list grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 1, name: "Autumn Overlook", desc: "The Beautiful" },
              { id: 2, name: "Sunrise Path", desc: "Light as Force" },
              { id: 3, name: "English Channel Cliffs", desc: "The Sublime of Magnitude" },
              { id: 4, name: "Yosemite Vista", desc: "Atmospheric Dread" },
              { id: 5, name: "Coulterville Pines", desc: "Before the Storm" },
              { id: 6, name: "Inyo Forest Cliff", desc: "Terror and Indifference" },
              { id: 7, name: "May Lake", desc: "Sublime Tranquility" },
            ].map((stop) => (
              <div
                key={stop.id}
                className="location-item p-4 rounded bg-white border-l-4 border-[#8b6e46] shadow-sm hover:bg-[#f5eee0] transition-colors"
              >
                <div className="font-bold text-[#5a4632] text-sm uppercase tracking-wide mb-1">
                  Stop {stop.id}
                </div>
                <div className="font-serif text-lg text-[#2d2416] leading-tight">
                  {stop.name}
                </div>
                <div className="text-sm text-[#8b6e46] italic mt-1">
                  {stop.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center ornament text-2xl shrink-0">❦</div>
      </div>
    </div>
  )

  return (
    <div
      className="min-h-screen p-4 md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f5eee0 0%, #e8dcc4 50%, #f5eee0 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=IM+Fell+English+SC&display=swap');
       
        .aged-paper {
          background: #f9f5eb;
          background-image:
            linear-gradient(0deg, transparent 24%, rgba(139, 110, 70, .03) 25%, rgba(139, 110, 70, .03) 26%, transparent 27%, transparent 74%, rgba(139, 110, 70, .03) 75%, rgba(139, 110, 70, .03) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 110, 70, .03) 25%, rgba(139, 110, 70, .03) 26%, transparent 27%, transparent 74%, rgba(139, 110, 70, .03) 75%, rgba(139, 110, 70, .03) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          box-shadow:
            inset 0 0 80px rgba(139, 110, 70, 0.1),
            0 0 20px rgba(139, 110, 70, 0.15);
        }
       
        .decorative-border {
          border: 3px solid #8b6e46;
          border-image: repeating-linear-gradient(
            45deg,
            #8b6e46,
            #8b6e46 10px,
            #a0826d 10px,
            #a0826d 20px
          ) 1;
        }
       
        .ink-text {
          color: #2d2416;
          font-family: 'IM Fell English', serif;
          line-height: 1.8;
          font-size: 1.1rem;
        }
       
        .title-text {
          font-family: 'IM Fell English SC', serif;
          color: #2d2416;
          letter-spacing: 0.05em;
        }
       
        .aged-image {
          filter: sepia(0.3) contrast(0.9);
          border: 8px solid #d4c4a8;
          box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
        }
        .ornament {
          color: #8b6e46;
          font-size: 1.5em;
        }

        /* Flipbook Animation Styles */
        .flipbook-container {
          perspective: 2000px;
          position: relative;
        }

        .flipbook-page {
          transform-style: preserve-3d;
          transition: transform 0.8s ease-in-out;
          transform-origin: left center;
        }

        .flipbook-page.flipping-forward {
          animation: flipForward 0.8s ease-in-out forwards;
        }

        .flipbook-page.flipping-backward {
          animation: flipBackward 0.8s ease-in-out forwards;
        }

        @keyframes flipForward {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }

        @keyframes flipBackward {
          0% { transform: rotateY(-180deg); }
          100% { transform: rotateY(0deg); }
        }

        .book-spine {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 20px;
          background: linear-gradient(to right, #5a4632, #8b6e46, #5a4632);
          box-shadow: inset -2px 0 10px rgba(0,0,0,0.4);
        }

        .page-shadow {
          box-shadow:
            -10px 0 20px rgba(0,0,0,0.2),
            10px 0 20px rgba(0,0,0,0.1),
            0 10px 40px rgba(0,0,0,0.3);
        }
       
        /* Custom scrollbar for map/content */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1ebd8;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #a0826d;
          border-radius: 20px;
        }
      `}</style>

      <div className="max-w-6xl w-full">
        <div className="flipbook-container">
          <div className={`flipbook-page ${isFlipping ? `flipping-${flipDirection}` : ""}`}>
            {/* Book spine effect */}
            <div className="book-spine" />

            <div className="aged-paper decorative-border page-shadow ml-5 overflow-hidden h-[85vh] flex flex-col">
              {/* RENDER LOGIC */}
              {currentLocation.type === "map" ? (
                renderMapPage()
              ) : currentLocation.type === "blank" ? (
                <div className="flex-1 flex flex-col p-8 md:p-12 text-center overflow-hidden">
                  <h1 className="title-text text-3xl md:text-4xl mb-6 shrink-0">{currentLocation.title}</h1>
                  {currentLocation.location && (
                    <p className="ink-text text-lg text-[#8b6e46] mb-8 italic shrink-0">{currentLocation.location}</p>
                  )}
                  <div className="flex-1 overflow-y-auto custom-scrollbar px-4">
                    <div className="max-w-2xl mx-auto">
                      <div className="ink-text text-base md:text-lg leading-loose text-left">
                        {currentLocation.description}
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 ornament text-2xl shrink-0">❦</div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Header */}
                  <div
                    className="p-4 border-b-2 border-[#8b6e46] shrink-0"
                    style={{
                      background: "linear-gradient(to bottom, #a0826d, #8b6e46)",
                    }}
                  >
                    <div className="text-center">
                      <p className="text-[#f9f5eb] text-xs mb-1 tracking-widest uppercase opacity-80">
                        {currentLocation.aesthetic === "sublime" ? "— The Sublime —" : "— The Picturesque —"}
                      </p>
                      <h2 className="title-text text-2xl text-[#f9f5eb] mb-1">{currentLocation.title}</h2>
                      <div className="flex justify-center gap-4 text-[#f9f5eb] opacity-90">
                        <p className="ink-text text-xs">{currentLocation.location}</p>
                        <p className="ink-text text-xs">Anno Domini {currentLocation.year}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 overflow-hidden p-6 grid md:grid-cols-2 gap-8">
                    {/* Left Column - Image & Observer */}
                    <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="aged-image shrink-0">
                        <img
                          src={currentLocation.image || "/placeholder.svg"}
                          alt={currentLocation.title}
                          className="w-full h-auto max-h-[35vh] object-cover"
                        />
                      </div>
                      <p className="ink-text text-xs text-center italic opacity-60 -mt-2">— From a Contemporary Sketch —</p>
                     
                      <div className="border-l-4 border-[#8b6e46] pl-4 pr-2">
                        <p className="ink-text text-xs uppercase tracking-wide mb-2 opacity-60">The Observer's Account</p>
                        <div className="ink-text text-sm leading-relaxed italic">{currentLocation.description}</div>
                        <div className="text-right mt-1 ornament text-xs">❦</div>
                      </div>
                    </div>

                    {/* Right Column - Analysis */}
                    <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
                      <div className="border-t-2 border-b-2 border-[#8b6e46] py-4">
                        <p className="ink-text text-xs uppercase tracking-wide text-center mb-3 opacity-60">
                          ⸙ Philosophical Disquisition ⸙
                        </p>
                        <div className="ink-text text-sm leading-relaxed px-2">
                          {currentLocation.theory}
                        </div>
                      </div>

                      <div className="bg-[#f5eee0] p-4 border border-[#d4c4a8]">
                        <div className="ink-text text-sm leading-relaxed">{currentLocation.exercise}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div
                className="border-t-2 border-[#8b6e46] p-4"
                style={{
                  background: "linear-gradient(to bottom, #f5eee0, #e8dcc4)",
                }}
              >
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevStop}
                    disabled={isFlipping}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-[#8b6e46] bg-[#f9f5eb] hover:bg-[#e8dcc4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'IM Fell English', serif" }}
                  >
                    <ChevronLeft className="w-4 h-4" style={{ color: "#2d2416" }} />
                    <span style={{ color: "#2d2416" }}>Previous</span>
                  </button>

                  <div className="text-center">
                    <p className="ink-text text-xs opacity-70">
                      Page {currentStop + 1} of {tourStops.length}
                    </p>
                    <div className="flex gap-2 mt-2 justify-center">
                      {tourStops.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 border border-[#8b6e46] transition-colors ${
                            idx === currentStop ? "bg-[#8b6e46]" : "bg-[#f9f5eb]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={nextStop}
                    disabled={isFlipping}
                    className="flex items-center gap-2 px-4 py-2 border-2 border-[#8b6e46] bg-[#f9f5eb] hover:bg-[#e8dcc4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: "'IM Fell English', serif" }}
                  >
                    <span style={{ color: "#2d2416" }}>Next</span>
                    <ChevronRight className="w-4 h-4" style={{ color: "#2d2416" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aged-paper decorative-border page-shadow p-6 mt-8 ml-5">
          <p className="title-text text-center text-xl mb-4">⸙ Key to the Aesthetic Categories ⸙</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-2 border-[#2d2416] pl-4">
              <p className="title-text text-base mb-2">THE SUBLIME</p>
              <p className="ink-text text-sm leading-relaxed">
                Terror, Vastness, Power, Obscurity, Infinity. Experiences that overwhelm reason and produce "delightful
                horror" — we enjoy fear when safely experienced.
              </p>
            </div>
            <div className="border-l-2 border-[#8b6e46] pl-4">
              <p className="title-text text-base mb-2">THE PICTURESQUE</p>
              <p className="ink-text text-sm leading-relaxed">
                Roughness, Irregularity, Variety within Unity. Landscapes that would make good paintings — reality
                judged by artistic standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipbookTour