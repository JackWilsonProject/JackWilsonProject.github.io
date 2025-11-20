"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const FlipbookTour = () => {
  const [currentStop, setCurrentStop] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"forward" | "backward">("forward")

  const tourStops = [
    {
      title: "The Sublime Terror of Mont Blanc",
      location: "Chamonix Valley, Savoy",
      year: "1775",
      aesthetic: "sublime",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Caspar_Wolf_-_The_Lauteraar_Glacier.jpg/800px-Caspar_Wolf_-_The_Lauteraar_Glacier.jpg",
      description:
        "Stand here, dear traveller, and feel your soul contract with delicious terror! The mountain rears before us like Nature's cathedral - so vast, so terrible in its magnificence that we are reduced to mere insects before its awful grandeur. The glaciers groan and crack with sounds like thunder, threatening at any moment to send avalanches cascading down to obliterate all traces of human presumption.",
      burkeanAnalysis:
        "Burke teaches us that the Sublime arises from whatever excites ideas of PAIN and DANGER - not immediate destruction, but a delightful horror that keeps us at a safe distance. Observe: the vastness that makes our vision fail, the obscurity of mists shrouding the peaks, the POWER of ice that could crush villages like eggshells. Your quickened pulse, your breathlessness - this is the physiological proof of the Sublime working upon your animal spirits!",
      commentary:
        "Before Burke's 1757 'A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful,' mountains were considered ugly deformities on Earth's surface. Burke revolutionized aesthetics by arguing that terror, properly experienced, could be pleasurable. The Alps became tourist destinations precisely because they scared people - the 18th century's version of a horror movie.",
    },
    {
      title: "A Picturesque Ruin in Wales",
      location: "Tintern Abbey, Monmouthshire",
      year: "1782",
      aesthetic: "picturesque",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Joseph_Mallord_William_Turner_-_Tintern_Abbey_-_Google_Art_Project.jpg/800px-Joseph_Mallord_William_Turner_-_Tintern_Abbey_-_Google_Art_Project.jpg",
      description:
        "Behold how exquisitely Nature and Time have collaborated! The ruined arches frame the sky like a painter's composition, while ivy creeps across the Gothic stonework in the most agreeable irregularity. A few cattle graze amongst the fallen columns - observe how they provide the perfect staffage, giving scale and rustic charm to the scene. The River Wye winds below in serpentine beauty.",
      gilpinAnalysis:
        "Gilpin instructs us that the Picturesque requires ROUGHNESS, IRREGULARITY, and the appearance of age. These ruins are too perfect in their decay! Were I to improve this scene with an artist's license, I might blast away that over-symmetrical window, add a gnarled oak leaning at an oblique angle, perhaps introduce a hermit in tattered robes for human interest. The Picturesque delights in what is 'rough,' what would make an excellent subject for a landscape painting.",
      commentary:
        "William Gilpin basically invented scenic tourism by publishing illustrated guides to 'picturesque' Britain in the 1780s. He literally carried a 'Claude Glass' - a tinted convex mirror - so he could turn around and view landscapes as if they were paintings. Tourists would judge real scenery by whether it looked enough like art. Reality had to imitate art!",
    },
    {
      title: "The Sublime Ocean Storm",
      location: "The English Channel",
      year: "1770",
      aesthetic: "sublime",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Claude_Joseph_Vernet_-_A_Shipwreck_in_Stormy_Seas_-_WGA24732.jpg/800px-Claude_Joseph_Vernet_-_A_Shipwreck_in_Stormy_Seas_-_WGA24732.jpg",
      description:
        "From our cliff-top vantage, witness the fury of the tempest! Mountains of water rise and crash with infinite power, while that unfortunate vessel is tossed like a child's toy. Lightning rends the blackened sky! The roar of wind and wave drowns all rational thought. We are safe upon this promontory, yet our hearts race as if we ourselves faced the drowning depths!",
      burkeanAnalysis:
        "Here is Burke's Sublime in its most violent aspect! VASTNESS - the endless expanse of heaving ocean. INFINITY - waves upon waves stretching to the horizon. POWER - the ship's helplessness before forces that mock human engineering. The darkness, the noise, the very privation of safety - all conspire to overwhelm the rational mind and produce that state of astonishment which is the effect of the Sublime. Notice how you cannot look away!",
      commentary:
        "Burke argued that the Sublime emotions were actually more intense than beauty - we're more powerfully moved by terrifying things than pretty ones. This was radical! Shipwreck paintings became wildly popular salon pieces. People would specifically go to coastlines during storms to experience 'delightful horror.' It's the same impulse that makes us watch disaster movies today.",
    },
    {
      title: "A Picturesque Cottage Scene",
      location: "The Lake District, Cumberland",
      year: "1786",
      aesthetic: "picturesque",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Thomas_Gainsborough_-_Cottage_Door_with_Girl_and_Pigs_-_Google_Art_Project.jpg/800px-Thomas_Gainsborough_-_Cottage_Door_with_Girl_and_Pigs_-_Google_Art_Project.jpg",
      description:
        "What charming rusticity! This cottage, with its thatched roof in agreeable disrepair, sits nestled amongst irregular trees. A peasant girl tends her pigs - how quaint! The path winds out of view in that most pleasing manner. The lake glimpsed through the foliage provides depth. The whole composition balances perfectly between cultivated and wild, decay and habitation.",
      gilpinAnalysis:
        "Gilpin would approve this scene for its 'happy union of simplicity and rudeness.' Note the broken fence - perfection is the enemy of the Picturesque! The twisted tree trunk provides foreground interest. The cottage is neither too neat nor too wretched. This is Nature improved by the lightest human touch, then softened by time. Could we but remove that straight modern chimney and replace it with something more crooked and smoke-stained!",
      commentary:
        "The Picturesque aesthetic led to a bizarre practice called 'improving' - wealthy landowners would literally hire 'ornamental hermits' to live in fake ruins on their estates, or build deliberately ruined towers to improve their views. Gilpin's tours taught the middle classes to appreciate carefully-constructed rusticity. It's essentially the 'shabby chic' movement of the 18th century.",
    },
    {
      title: "The Sublime Darkness of Fingal's Cave",
      location: "Isle of Staffa, Scotland",
      year: "1772",
      aesthetic: "sublime",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Fingal%27s_Cave%2C_Staffa%2C_Scotland.jpg/800px-Fingal%27s_Cave%2C_Staffa%2C_Scotland.jpg",
      description:
        "Descend with me into this cathedral carved by ancient volcanic forces! The basalt columns rise like organ pipes in some Cyclopean temple. The sea booms and echoes within, a sound that seems to come from the very bowels of the Earth. Above, the cave mouth frames a circle of light, but here in the depths, we are surrounded by primordial darkness and the suggestions of unfathomable antiquity.",
      burkeanAnalysis:
        "Burke identifies OBSCURITY as essential to the Sublime - 'to make anything terrible, obscurity seems necessary.' This cave provides it in abundance! The uncertain footing, the reverberating sounds whose source we cannot identify, the darkness that hides we know not what - all conspire to excite our imagination to terrors far worse than reality. The DIFFICULTY of accessing this place, the MAGNIFICENCE of its proportions - these are Burke's principles made manifest in stone!",
      commentary:
        "Fingal's Cave became a sensation after being 'discovered' (the locals obviously knew about it) in 1772. It inspired Mendelssohn's Hebrides Overture and became a pilgrimage site for Romantic tourists. The key insight of Burke's Sublime was that we could enjoy fear when we knew we were safe - emotional horror as entertainment, which paved the way for Gothic novels and eventually horror as a genre.",
    },
    {
      title: "The Picturesque River Wye",
      location: "Ross-on-Wye to Chepstow",
      year: "1783",
      aesthetic: "picturesque",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/The_River_Wye_at_Tintern_-_geograph.org.uk_-_1313061.jpg/800px-The_River_Wye_at_Tintern_-_geograph.org.uk_-_1313061.jpg",
      description:
        "We float down the Wye, that most celebrated of Picturesque rivers! Each bend reveals a new composition - here an ancient castle crowning a wooded hill, there a ferryman's cottage with washing hung to dry. The river winds in serpentine curves, never revealing its whole course. Trees overhang the banks in studied wildness. Every vista arranges itself as if Nature herself had studied the principles of landscape painting!",
      gilpinAnalysis:
        "This is Gilpin's own favorite tour, immortalized in his 'Observations on the River Wye' (1782)! He teaches us to view landscape through the principles of painting: foreground, middle ground, distance. The Wye provides endless variety within unity - each scene different, yet all harmoniously Picturesque. Note how the river's curves prevent monotony. Gilpin would deploy his Claude Glass here to check if each view meets the standard of a Claude Lorrain painting!",
      commentary:
        "Gilpin's Wye tour essentially invented the British holiday. His book taught people how to 'consume' scenery properly, complete with the best viewpoints and sketching stations. The Claude Glass (basically Instagram before electricity) let tourists literally turn their back on reality to view it as a filtered, tinted, composed image. The Picturesque was all about making the real world measure up to art.",
    },
    {
      title: "The Sublime: A Scottish Highland Storm",
      location: "Glencoe, Scottish Highlands",
      year: "1776",
      aesthetic: "sublime",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Horatio_McCulloch_-_Glencoe_-_Google_Art_Project.jpg/800px-Horatio_McCulloch_-_Glencoe_-_Google_Art_Project.jpg",
      description:
        "The mountains close in upon us like prison walls! Mists descend with supernatural swiftness, obscuring now this peak, now that precipice. The wind howls like the ghosts of the massacred MacDonalds. These barren crags offer no comfort, no softness - only the terrible indifference of ancient geology. One feels the weight of solitude, the insignificance of mankind, the awful eternity of stone!",
      burkeanAnalysis:
        "Glencoe exemplifies Burke's concept of the Sublime through PRIVATION - the absence of light (these dark rocks), of safety (those precipices), of human scale (those towering peaks). The VASTNESS operates in the vertical dimension - we crane our necks upward until vision fails. The historical associations of massacre add Burke's concept of TERROR through association. The very DIFFICULTY of this landscape - its resistance to cultivation or comfort - intensifies its Sublime effect upon the soul!",
      commentary:
        "Glencoe's fame as a Sublime destination was enhanced by its dark history - the 1692 massacre. Burke argued that historical associations amplified aesthetic effects, so tourist guides would gleefully recount stories of violence and death to heighten the experience. The Sublime aesthetic essentially gave people permission to be drawn to dark, difficult, even traumatic places - making tragedy into tourism.",
    },
  ]

  const nextStop = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection("forward")
    setTimeout(() => {
      setCurrentStop((prev) => (prev + 1) % tourStops.length)
      setIsFlipping(false)
    }, 600)
  }

  const prevStop = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setFlipDirection("backward")
    setTimeout(() => {
      setCurrentStop((prev) => (prev - 1 + tourStops.length) % tourStops.length)
      setIsFlipping(false)
    }, 600)
  }

  const currentLocation = tourStops[currentStop]

  return (
    <div
      className="min-h-screen p-4 md:p-8 flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #2d1810 0%, #4a3426 50%, #2d1810 100%)",
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
          transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
          transform-origin: left center;
        }

        .flipbook-page.flipping-forward {
          animation: flipForward 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
        }

        .flipbook-page.flipping-backward {
          animation: flipBackward 0.6s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
        }

        @keyframes flipForward {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(-180deg);
          }
        }

        @keyframes flipBackward {
          0% {
            transform: rotateY(-180deg);
          }
          100% {
            transform: rotateY(0deg);
          }
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
      `}</style>

      <div className="max-w-6xl w-full">
        <div className="flipbook-container">
          <div className={`flipbook-page ${isFlipping ? `flipping-${flipDirection}` : ""}`}>
            {/* Book spine effect */}
            <div className="book-spine" />

            <div className="aged-paper decorative-border page-shadow ml-5 overflow-hidden max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div
                className="p-6 border-b-2 border-[#8b6e46]"
                style={{
                  background:
                    currentLocation.aesthetic === "sublime"
                      ? "linear-gradient(to bottom, #3a3226, #2d2416)"
                      : "linear-gradient(to bottom, #a0826d, #8b6e46)",
                }}
              >
                <div className="text-center">
                  <p className="text-[#f9f5eb] text-xs mb-2 tracking-widest uppercase opacity-80">
                    {currentLocation.aesthetic === "sublime" ? "— The Sublime —" : "— The Picturesque —"}
                  </p>
                  <h2 className="title-text text-2xl md:text-3xl text-[#f9f5eb] mb-2">{currentLocation.title}</h2>
                  <p className="ink-text text-sm text-[#f9f5eb] opacity-90">{currentLocation.location}</p>
                  <p className="ink-text text-xs text-[#f9f5eb] opacity-75 mt-1">Anno Domini {currentLocation.year}</p>
                </div>
              </div>

              {/* Image */}
              <div className="p-6">
                <div className="aged-image">
                  <img
                    src={currentLocation.image || "/placeholder.svg"}
                    alt={currentLocation.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <p className="ink-text text-xs text-center mt-3 italic opacity-60">— From a Contemporary Sketch —</p>
              </div>

              {/* Content Sections */}
              <div className="p-6 space-y-6">
                {/* Observer's Account */}
                <div className="border-l-4 border-[#8b6e46] pl-4 pr-2">
                  <p className="ink-text text-xs uppercase tracking-wide mb-3 opacity-60">The Observer's Account</p>
                  <p className="ink-text text-base leading-loose italic">{currentLocation.description}</p>
                  <div className="text-right mt-2 ornament text-sm">❦</div>
                </div>

                {/* Philosophical Disquisition */}
                <div className="border-t-2 border-b-2 border-[#8b6e46] py-4">
                  <p className="ink-text text-xs uppercase tracking-wide text-center mb-3 opacity-60">
                    ⸙ Philosophical Disquisition ⸙
                  </p>
                  <p className="ink-text text-sm leading-loose px-2">
                    {currentLocation.aesthetic === "sublime"
                      ? currentLocation.burkeanAnalysis
                      : currentLocation.gilpinAnalysis}
                  </p>
                </div>

                {/* Editor's Note */}
                <div className="bg-[#f5eee0] p-4 border border-[#d4c4a8]">
                  <p className="ink-text text-xs uppercase tracking-wide mb-2 opacity-60">
                    [Editor's Annotation, Modern Era]
                  </p>
                  <p className="ink-text text-sm leading-relaxed">{currentLocation.commentary}</p>
                </div>
              </div>

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
