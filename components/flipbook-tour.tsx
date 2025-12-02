"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const FlipbookTour = () => {
  const [currentStop, setCurrentStop] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"forward" | "backward">("forward")

  const tourStops = [
    {
      title: "The Tree Cradles The Sunrise",
      location: "Poleta, Bishop",
      year: "2023",
      aesthetic: "sublime",
      image:
        "public/Tree in The morning (1).png",
      description:
        "A gentle quietude settles beneath the canopy of autumn branches. Their gold tones form a natural cornice, guiding the eye outward to the low-lying plain and the mountains reclining in soft blue distance. Nothing here calls for attention; the scene’s beauty rests in its restraint, a landscape content to breathe lightly.",
      burkeanAnalysis:
       "Gilpin would immediately note the foreground “screen”, a device he considered essential to a well-ordered picturesque composition. The tree’s irregular curves introduce visual texture, that “negligent grace” he so prized. The distant mountains, partially obscured by atmospheric softness, contribute to what Burke calls “the sublime of obscurity”, a mild but perceptible stirring of awe where forms fade into uncertainty.Thus, the image registers as gently picturesque, yet tinged with the emotional hush of Burke’s softer sublime, beauty deepened by distance, not disrupted by it."
      commentary:
        "This scene aligns with contemporary aesthetics of pastoral calm. Its framing could easily appear in modern landscape photography, revealing how Gilpin’s compositional principles continue to inform visual taste, even as Burke’s sense of atmospheric immensity lingers in the muted horizon.",
    },
    {
      title: "Follow The Paved Way",
      location: "White Mountain, Bishop",
      year: "1782",
      aesthetic: "picturesque",
      image:
        "public/Morning Sun Rise (1).png",
      description:
        "Sunrise flares across the path, striking the earth with an almost ceremonial brilliance. Two walkers move toward the light, their figures modest against the radiance. The landscape becomes a threshold, something lived and something luminous at once.",
      gilpinAnalysis:
        "Gilpin would appreciate the winding perspective of the road, which draws the viewer inward, offering a sense of unfolding narrative. The human figures animate the scene without disturbing its equilibrium.Yet it is Burke who speaks most forcefully here: this sunrise embodies the Sublime of overwhelming brightness. Its intensity borders on excess. The emotional force that produces Burke’s “delight blended with astonishment.” Light becomes more than illumination; it becomes an emotional event.",
      commentary:
        "The image mirrors cinematic tropes of awakening and journey. Gilpin’s compositional discipline meets Burke’s sensory power, producing a scene that feels vividly contemporary in its emotional pitch.",
    },
    {
      title: "Gold Garnish",
      location: "The English Channel",
      year: "2023",
      aesthetic: "sublime",
      image:
        "public/Mountains with Trees in Forground.png",
      description:
        "The ridge rises in pale, jagged stone, its harsh edges pressed against a sky swirling with cobalt and white. Pines gather below, dark and orderly, while golden grasses tremble at the base. The landscape feels charged, as though pulled taut between stillness and movement.",
      burkeanAnalysis:
        "Gilpin would celebrate the bold irregularity of the mountains, their fractured lines, shifting angles, and rugged textures. The forest stands as a counterweight of vertical forms, grounding the eye. Burke would claim the scene as an example of the Sublime of magnitude: the ridge’s stark confrontation, the storm-tinged sky, the suggestion of geological immensity. It evokes awe without violence, power felt at a contemplative distance.",
      commentary:
        "The aesthetic resembles modern portrayals of wilderness as a site of renewal and confrontation. Romantic principles persist here, translated into contemporary sensibilities of vastness and natural drama.",
    },
    {
      title: "Loom Over Steep Slopes",
      location: "Yosemite, California",
      year: "2023",
      aesthetic: "picturesque",
      image:
        "public/Loom over the steep slopes.png",
      description:
        "A chain of mountains recedes beneath brooding clouds. The rocky foreground appears ancient, worn smooth by time. Above, the sky holds the restrained tension of a storm yet to fully reveal itself.",
      gilpinAnalysis:
        "Gilpin would praise the layered recession, foreground, middle distance, far peaks, each contributing to spatial clarity. The rough foreground produces the textural complexity he viewed as indispensable. But Burke reads the sky as the true emotional center. Its “magnificent gloom” creates a sublime atmosphere where tension and uncertainty dominate. The landscape’s grandeur lies not in form alone, but in meteorological mood.",
      commentary:
        "This image anticipates the aesthetic of cinematic storm sequences. Its emotional resonance lies in the charged atmosphere, echoing Burke’s theory of fear diluted by safety.",
    },
    {
      title: "Composure of the Pines",
      location: "Coulterville",
      year: "2023",
      aesthetic: "sublime",
      image:
        "public/Trees.png",
      description:
        "Dark pines rise from a rocky clearing, their trunks strong and straight beneath a sky mottled with heavy clouds. The forest feels solemn as though gathering its breath before an unseen change in weather."
      burkeanAnalysis:
        "Gilpin would value the variation in height, spacing, and texture, which prevents monotony and creates a natural rhythm. The stones scattered throughout bring necessary roughness, enhancing the scene’s tactile depth. Burke would locate the Sublime in atmospheric pressure, the weight of the clouds, the suggestion of imminent disturbance. The forest remains grounded, but the sky exerts a psychological force that colors the entire scene."
      commentary:
        "This composition aligns closely with contemporary imagery of “the calm before the storm.” Gilpin’s structural control meets Burke’s emotional charge, generating a landscape dense with expectation.",
    },
    {
      title: "Rocky Horror",
      location: "Inyo National Forest",
      year: "2023",
      aesthetic: "picturesque",
      image:
        "public/Rocky Horror.png"
      description:
        "The cliff face rises in monumental folds of shadowed limestone, its vertical planes carved by time into austere expressions. Above, storm clouds gather in iron-grey masses, interrupted only by a narrow rupture of blue.Gilpin would call attention to the cliff’s rugged projection, a quintessential picturesque attribute, though he might caution that the severity approaches the overwhelming. Foreground stones soften this danger, restoring some compositional balance. Burke would claim the image for the Sublime of obscurity and power: immense, shadowed forms; unclear depths; the sense of nature asserting a force beyond human scale. This cliff is not hostile, but it is undeniably indifferent."
      commentary:
        "The cliff evokes modern associations with geological awe and the Romantic imagination. It is a portrait of nature as something to be confronted rather than merely observed.",
    },
    {
      title: "Reflect Peace",
      location: "May Lake",
      year: "2023",
      aesthetic: "sublime",
      image:
        "public/Reflect Peace.png",
      description:
        "A lake lies perfectly still, mirroring the pale stone ridges and the muted sky. Pines fringe the far shore with quiet discipline, their reflections pooling like ink. The scene feels suspended, a double world held delicately in place.",
      burkeanAnalysis:
        "Gilpin appreciated reflections when slightly broken by movement, and here the faint ripples preserve irregularity, keeping the composition dynamically picturesque. The rough shoreline stones introduce tactile grounding. Burke would identify a gentle Sublime: immensity and clarity combine to produce astonishment without fear. The mirrored mountains evoke the uncanny doubling that Burke associates with heightened feeling.",
      commentary:
        "The image resonates with contemporary notions of peaceful retreat, a landscape that invites meditation yet subtly gestures toward deeper emotional horizons.",
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