import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const TourGuide = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      type: 'intro',
      title: 'A Picturesque Tour Through Yosemite Valley',
      subtitle: 'Following the Aesthetic Principles of William Gilpin',
      content: `Welcome, traveler, to a journey through Yosemite Valley guided by the aesthetic philosophy that revolutionized how the eighteenth century saw nature. In 1768, William Gilpin embarked on his tour of the River Wye, armed not merely with curiosity but with a systematic method for understanding landscape. As he wrote in his Observations on the River Wye, "we are most delighted when some grand scene, tho perhaps of incorrect composition, rising before the eye, strikes us beyond the power of thought."

Before we depart, understand this: in the mid-eighteenth century, landscape viewing transformed from passive observation into active aesthetic judgment. Travelers like Gilpin carried "Claude glasses," which were tinted mirrors that framed raw nature into composed tableaux. Your journey today requires a similar discipline of seeing.

We will analyze each vista through three aesthetic categories that dominated eighteenth-century thought:`
    },
    {
      type: 'categories',
      title: 'Key to the Aesthetic Categories',
      categories: [
        {
          name: 'THE SUBLIME',
          description: 'Terror, Vastness, Power, Obscurity, Infinity. Edmund Burke wrote that sublimity produces "delightful horror": we enjoy fear when safely experienced. "Greatness of dimension is a powerful cause of the sublime."'
        },
        {
          name: 'THE PICTURESQUE',
          description: 'Roughness, Irregularity, Variety within Unity. Gilpin insisted on "intricacy" and "roughness," or landscapes that reward continued observation. "In a mountainous country, we look not for the beauty of smoothness and verdure; but rather for that of wildness and irregularity."'
        },
        {
          name: 'THE BEAUTIFUL',
          description: 'Smoothness, Gradual Variation, Delicacy. Burke distinguished beauty from sublimity: where sublimity terrifies, beauty soothes. "The passion caused by the great and sublime in nature...is Astonishment; that produced by the beautiful is Love."'
        }
      ]
    },
    {
      type: 'map',
      title: 'The Route of Our Tour',
      content: 'Our journey follows a carefully designed circuit through Yosemite Valley, each station selected to demonstrate specific aesthetic principles. We begin at the Valley Entrance with overwhelming first impressions, proceed through sites of pure sublimity, pause at pastoral repose, and conclude with elevated perspective.'
    },
    // PART I: THE SUBLIME
    {
      type: 'section',
      title: 'PART I: THE SUBLIME',
      subtitle: 'Terror and Vastness in Nature',
      content: 'We begin our tour with what Burke called "the strongest emotion which the mind is capable of feeling." The sublime overwhelms reason, producing awe through dimensions that confound human scale. As you encounter these first stations, remember Burke\'s principle: "Whatever is fitted in any sort to excite the ideas of pain and danger...is a source of the sublime."'
    },
    {
      type: 'stop',
      number: 1,
      title: 'The Valley Entrance',
      subtitle: 'First Impressions of Grandeur',
      location: 'Tunnel View',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      photographer: 'Maarten van den Heuvel',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@mvdheuvel',
      content: `As we emerge from the Wawona Tunnel, the entire Yosemite Valley spreads before us in one tremendous sweep. This is what Gilpin called "the first glance," that crucial moment when landscape announces itself to the viewer. Notice how El Capitan rises on your left, Half Dome looms in the distance, and Bridalveil Falls cascades down the opposite wall.

Burke wrote in his Philosophical Enquiry that "greatness of dimension is a powerful cause of the sublime." Here, that principle manifests absolutely. The vertical granite faces rise three thousand feet, a dimension so vast it confounds the eye's ability to measure. Gilpin insisted that "the eye generally receives the most pleasure, when the proportion is about one to three," yet here the mountains break this rule spectacularly, producing what Burke termed "delightful horror": we stand in safety, yet feel the weight of these tremendous masses.

Notice particularly how the morning light strikes El Capitan's face. Gilpin observed that "side-screens are of great use in a composition; and their effect is often very picturesque." The shadowed foreground pines create precisely such screens, framing the illuminated granite beyond and producing what he called "leading lines," or visual pathways that guide the eye into the scene's depths.`,
      aesthetic: 'sublime'
    },
    {
      type: 'stop',
      number: 2,
      title: 'El Capitan Meadow',
      subtitle: 'The Sublime Made Vertical',
      location: 'El Capitan Meadow',
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
      photographer: 'Diego Jimenez',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@diegojimenez',
      content: `Our path now leads us to El Capitan Meadow, where we confront the most purely sublime object in the valley. Stand in the center of this clearing and tilt your head upward. That three-thousand-foot vertical wall represents what Burke called "perpendicularity," a quality that, he argued, "makes a more lasting impression on the imagination" than any horizontal extent.

Burke insisted that sublimity requires obscurity: "to make any thing very terrible, obscurity seems in general to be necessary." Observe how El Capitan's summit disappears into haze or cloud; you cannot see where it ends. This uncertainty magnifies its power. Gilpin would note the "roughness" of the granite surface, those vertical striations and dark water stains that prevent the eye from settling, creating what he termed "intricacy."

Yet even here, amidst this sublimity, notice the picturesque elements that temper pure terror. The meadow grasses in the foreground provide what Gilpin called "a beautiful catching light," while scattered pines create irregular silhouettes against the granite. The Merced River curves through the meadow, its banks thick with willow and cottonwood. This is what Gilpin meant by "variety": the scene offers savage stone above, gentle water below, and rough vegetation between. Three distinct textures unify into one composed whole.`,
      aesthetic: 'sublime'
    },
    {
      type: 'stop',
      number: 3,
      title: 'Yosemite Falls',
      subtitle: 'The Aesthetic of Motion',
      location: 'Lower Yosemite Fall Trail',
      image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=800',
      photographer: 'Johen Redman',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@johenredman',
      content: `We advance now to the base of Yosemite Falls, where water plunges 2,425 feet in three distinct stages. Here we encounter what Gilpin called "moving objects"—elements that introduce time into landscape. He wrote that "the cascade...is a capital feature in landscape" because it combines "the beauty of form" with "the beauty of motion."

Stand close enough to feel the mist. Burke argued that "the noise of vast cataracts...is sublime" because it overwhelms the senses. The roar here drowns conversation—you must shout to be heard. This is Burke's principle of "privation": the falls deprive us of our ordinary sensory experience, creating a kind of sensory terror that paradoxically delights.

Observe the upper fall first. Gilpin would note its "lofty elevation" and the way it creates what he termed "a foreground of great consequence"—the mist-shrouded rocks at the base draw the eye before it travels upward to the source. The middle cascades introduce "variety of line": the water breaks and reforms, following irregular stone ledges rather than falling in one uninterrupted column.

Wordsworth, standing before a waterfall in the Lakes, wrote of "sensations sweet / Felt in the blood, and felt along the heart." Here at Yosemite Falls, that visceral response intensifies. The ground trembles; the air tastes of minerals; you feel the falls as much as see them.`,
      aesthetic: 'sublime'
    },
    // PART II: THE PICTURESQUE
    {
      type: 'section',
      title: 'PART II: THE PICTURESQUE',
      subtitle: 'Roughness, Variety, and Composition',
      content: 'Having experienced pure sublimity, we now turn to what Gilpin considered the highest form of aesthetic pleasure: the picturesque. This quality exists between the sublime and the beautiful—it is nature composed as if for painting. Gilpin wrote that "roughness forms the most essential point of difference between the beautiful and the picturesque." Watch for irregularity, variety within unity, and what he called "happy accidents" of composition.'
    },
    {
      type: 'stop',
      number: 4,
      title: 'Mirror Lake',
      subtitle: 'Reflection and Symmetry',
      location: 'Mirror Lake Trail',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      photographer: 'Maarten van den Heuvel',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@mvdheuvel',
      content: `Our path now leads up Tenaya Creek to Mirror Lake, where we encounter one of Gilpin's most celebrated picturesque effects: reflection. He devoted considerable attention to water's reflective properties, noting that "the beauty of a calm lake, reflecting all the objects on its borders, is of the most elegant kind."

In late spring and early summer, when snowmelt keeps the lake full, Half Dome's reflection appears so perfectly in the still water that you cannot determine where reality ends and reflection begins. Yet Gilpin would caution against finding this too perfect. He wrote that "perfect symmetry...always hurts the eye." What saves this scene is the irregularity of the shoreline, the scattered boulders breaking the reflection, and the occasional ripple that fragments the mirrored image.

Burke argued that "smoothness" is a quality of beauty rather than sublimity. Here, the glassy water surface exemplifies that smoothness, creating what Burke called "the effect of beauty in proportion to the degree of lightness and reflection on surfaces." Yet the reflected Half Dome retains its sublime power—terror doubled and inverted.

Walk the shoreline slowly. Notice how your perspective changes with each step—the reflection shifts, Half Dome appears at different angles, foreground elements enter and exit the frame. Gilpin called this "the pleasure of pursuit": a scene that rewards continued observation and movement.`,
      aesthetic: 'picturesque'
    },
    {
      type: 'stop',
      number: 5,
      title: 'Sentinel Dome Trail',
      subtitle: 'The Ascent to Perspective',
      location: 'Sentinel Dome Summit',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      photographer: 'Maarten van den Heuvel',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@mvdheuvel',
      content: `We now undertake a more strenuous journey: the climb to Sentinel Dome. Gilpin understood that elevation transforms perception. He wrote that "a view from an eminence is always pleasing" because it provides what he termed "a comprehensive view of a country"—the ability to see landscape as a unified whole rather than fragmented glimpses.

As we ascend through Jeffrey pine forest, notice how the picturesque quality of "intricacy" manifests in the twisted trees, irregular granite outcrops, and the winding trail itself. Gilpin wrote that "a road winding through a valley...is pleasing" because the curve "draws the eye into the scene" and creates anticipation of what lies beyond each bend.

Upon reaching Sentinel Dome's summit, the valley spreads below in panoramic vastness. Burke would recognize this as sublimity achieved through "extension"—the eye cannot comprehend the entire view at once but must scan across it, from El Capitan in the west to Half Dome in the east.

Yet Gilpin would insist on analyzing this view systematically. Identify the "side-screens"—the forested ridges that frame the valley. Note the "foreground"—the bare granite beneath your feet. Observe the "middle-ground"—the valley floor with its meadows and river. Finally, examine the "distance"—the far peaks fading into atmospheric haze. This elevated perspective allows you to understand what Gilpin meant by "composition."`,
      aesthetic: 'picturesque'
    },
    // PART III: THE BEAUTIFUL
    {
      type: 'section',
      title: 'PART III: THE BEAUTIFUL',
      subtitle: 'Repose and Gradual Variation',
      content: 'After intensity, the eye requires rest. Burke distinguished the Beautiful from the Sublime through their opposite effects on the viewer: "The passion caused by the great and sublime in nature...is Astonishment; that produced by the beautiful is Love." In these final stations, we encounter smoothness, gentle curves, and what Gilpin called "scenes of repose"—necessary pauses that allow accumulated impressions to settle.'
    },
    {
      type: 'stop',
      number: 6,
      title: 'Leidig Meadow',
      subtitle: 'Pastoral Interlude',
      location: 'Valley Floor at Leidig Meadow',
      image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
      photographer: 'Karsten Winegeart',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@karsten116',
      content: `Having experienced sublimity in its most intense forms, we now descend to Leidig Meadow for what Gilpin would recognize as a necessary pause. He wrote that "after the eye has been long employed in examining grand objects, it wishes for rest; and the mind finds it in viewing such scenes of a gentler kind."

This meadow exemplifies what Gilpin termed "pastoral beauty": smooth, gentle, composed. The grass grows uniformly; the Merced meanders lazily; distant mountains provide "back-screens" that enclose without overwhelming. Burke distinguished the Beautiful from the Sublime precisely along these lines—where sublimity terrifies, beauty soothes.

Yet even here, Gilpin's principles demand careful observation. The meadow is not perfectly flat—it undulates gently. Pines cluster irregularly at its edges. The river curves rather than running straight. These elements of "variety" prevent the scene from becoming merely pretty, elevating it to the picturesque.

Notice particularly the balance between horizontal and vertical elements. Gilpin insisted that "the ground is that on which the whole composition rests." Here, the meadow's horizontal expanse perfectly balances the vertical cliffs behind it. This is what Gilpin called "a scene of repose"—necessary after intensity, but never passive.`,
      aesthetic: 'beautiful'
    },
    {
      type: 'stop',
      number: 7,
      title: 'Glacier Point at Sunset',
      subtitle: 'The Sublime Conclusion',
      location: 'Glacier Point',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      photographer: 'Maarten van den Heuvel',
      source: 'Unsplash',
      sourceUrl: 'https://unsplash.com/@mvdheuvel',
      content: `Our final station requires patience: we await sunset at Glacier Point. Gilpin wrote extensively about light's transformative power, noting that "the setting-sun...illuminates the landscape in the happiest manner." Burke added that "the setting sun...has something in it very affecting" because it combines beauty (the colors) with sublimity (the vastness of sky).

As we wait, observe the valley from this tremendous elevation. You stand 3,200 feet above the valley floor—higher even than El Capitan's summit. Burke wrote that "looking down from a precipice" produces sublimity through "the ideas of danger and height." Yet you stand safely behind railings, experiencing what he called "the artificial infinite"—terror made pleasurable through security.

The sun descends. Notice what Gilpin termed "catching lights"—those brilliant illuminations that pick out specific features while leaving others in shadow. Half Dome's face glows golden. El Capitan's summit catches fire. The valley floor darkens while the high peaks still blaze.

As darkness advances, Wordsworth's words seem written for this moment: "sensations sweet / Felt in the blood, and felt along the heart / And passing even into my purer mind / With tranquil restoration." The day's accumulated impressions now synthesize into a unified aesthetic experience.

The stars emerge. Burke wrote that "infinity has a tendency to fill the mind with that sort of delightful horror, which is the most genuine effect...of the sublime." The night sky above Yosemite manifests that infinity—countless stars suggesting endless space, producing the final sublime sensation of our journey.`,
      aesthetic: 'beautiful'
    },
    {
      type: 'conclusion',
      title: 'The Cultivated Eye',
      content: `We have completed our circuit of Yosemite Valley, but more importantly, we have trained our perception according to eighteenth-century aesthetic principles. Gilpin's mission was never merely to describe landscapes but to teach viewers how to see them properly. He wrote in his Three Essays that "the picturesque eye...is a sort of creative power...it furnishes...a scene more beautiful than any that exists."

You now possess that cultivated eye. You can distinguish sublime vastness from picturesque variety, identify foregrounds and back-screens, recognize the importance of roughness and irregularity, and understand why certain scenes compel while others merely please.

Burke believed that aesthetic experience connects us to fundamental human responses—terror, delight, awe. Gilpin believed it connects us to nature's essential structure. Wordsworth believed it connects us to something spiritual beyond both nature and self.

As you depart Yosemite, carry this lens with you. Every landscape now offers potential for analysis: Does it possess sublimity through vastness or obscurity? Does it achieve picturesqueness through variety and roughness? Does it balance vertical and horizontal elements?

The Claude glass has done its work. The mountains remain, but you have changed. As Wordsworth wrote, these are "beauteous forms" that, once properly seen, continue to work upon us "with an eye made quiet by the power / Of harmony, and the deep power of joy."`,
      references: true
    }
  ];

  const currentPageData = pages[currentPage];
  const totalPages = pages.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen text-stone-900" style={{ background: "#8b6e46" }}>
      <div className="max-w-4xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12 border-b-2 border-stone-300 pb-8">
          <h1 className="text-4xl font-serif mb-2">The Digital Claude Glass</h1>
          <p className="text-stone-600 italic">An 18th Century Tour of Yosemite Valley</p>
        </div>

        {/* Content Area */}
        <div className="bg-white shadow-lg p-12 mb-8 min-h-[600px]">
          {currentPageData.type === 'intro' && (
            <div>
              <h2 className="text-3xl font-serif mb-4">{currentPageData.title}</h2>
              <h3 className="text-xl italic text-stone-600 mb-8">{currentPageData.subtitle}</h3>
              <div className="prose prose-stone max-w-none leading-relaxed whitespace-pre-line">
                {currentPageData.content}
              </div>
            </div>
          )}

          {currentPageData.type === 'categories' && (
            <div>
              <h2 className="text-3xl font-serif text-center mb-12">⸙ {currentPageData.title} ⸙</h2>
              <div className="space-y-8">
                {currentPageData.categories.map((cat, idx) => (
                  <div key={idx} className="border-l-4 border-stone-400 pl-6">
                    <h3 className="text-2xl font-serif mb-3">{cat.name}</h3>
                    <p className="text-stone-700 leading-relaxed">{cat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPageData.type === 'map' && (
            <div>
              <h2 className="text-3xl font-serif text-center mb-8">{currentPageData.title}</h2>
              <div className="bg-stone-100 border-2 border-stone-300 p-8 mb-6 text-center">
                <MapPin className="inline-block w-16 h-16 text-stone-500 mb-4" />
                <p className="text-sm text-stone-500 italic">Interactive Map Placeholder</p>
                <div className="mt-6 text-left space-y-2">
                  <p className="text-stone-700">1. Tunnel View → El Capitan Meadow → Yosemite Falls</p>
                  <p className="text-stone-700">2. Mirror Lake → Sentinel Dome</p>
                  <p className="text-stone-700">3. Leidig Meadow → Glacier Point</p>
                </div>
              </div>
              <p className="text-stone-700 leading-relaxed">{currentPageData.content}</p>
            </div>
          )}

          {currentPageData.type === 'section' && (
            <div className="text-center py-12">
              <h2 className="text-4xl font-serif mb-4">{currentPageData.title}</h2>
              <h3 className="text-2xl italic text-stone-600 mb-8">{currentPageData.subtitle}</h3>
              <div className="max-w-2xl mx-auto text-stone-700 leading-relaxed">
                {currentPageData.content}
              </div>
            </div>
          )}

          {currentPageData.type === 'stop' && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl font-serif text-stone-400">{currentPageData.number}</div>
                <div>
                  <h2 className="text-3xl font-serif">{currentPageData.title}</h2>
                  <h3 className="text-xl italic text-stone-600">{currentPageData.subtitle}</h3>
                  <p className="text-sm text-stone-500 mt-1">📍 {currentPageData.location}</p>
                </div>
              </div>
             
              <img
                src={currentPageData.image}
                alt={currentPageData.title}
                className="w-full h-64 object-cover mb-2 border-2 border-stone-300"
              />
             
              {/* Image Credit */}
              {currentPageData.photographer && (
                <p className="text-xs text-stone-500 italic mb-6">
                  Photo by{' '}
                  <a
                    href={currentPageData.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-stone-700"
                  >
                    {currentPageData.photographer}
                  </a>
                  {' '}on {currentPageData.source}
                </p>
              )}
             
              <div className="prose prose-stone max-w-none leading-relaxed whitespace-pre-line mb-6">
                {currentPageData.content}
              </div>

              <div className="mt-6 pt-6 border-t border-stone-200">
                <span className="inline-block px-4 py-2 bg-stone-200 text-stone-700 text-sm uppercase tracking-wider">
                  {currentPageData.aesthetic}
                </span>
              </div>
            </div>
          )}

          {currentPageData.type === 'conclusion' && (
            <div>
              <h2 className="text-3xl font-serif mb-8 text-center">{currentPageData.title}</h2>
              <div className="prose prose-stone max-w-none leading-relaxed whitespace-pre-line mb-8">
                {currentPageData.content}
              </div>
              {currentPageData.references && (
                <div className="border-t-2 border-stone-300 pt-8 mt-8">
                  <h3 className="text-xl font-serif mb-4">⸙ References ⸙</h3>
                  <div className="mb-6">
                    <h4 className="font-semibold text-stone-800 mb-2">Primary Texts</h4>
                    <p className="text-sm text-stone-600 italic">
                      This tour synthesizes William Gilpin's <em>Observations on the River Wye</em> (1782),
                      <em> Three Essays on Picturesque Beauty</em> (1792), Edmund Burke's <em>Philosophical
                      Enquiry into the Origin of Our Ideas of the Sublime and Beautiful</em> (1757), and
                      William Wordsworth's <em>Lines Composed a Few Miles above Tintern Abbey</em> (1798).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Image Credits</h4>
                    <p className="text-xs text-stone-600">
                      All photographs sourced from Unsplash under the Unsplash License, which permits free use for educational purposes.
                      Individual photographer credits appear with each image throughout this tour.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="flex items-center gap-2 px-6 py-3 bg-stone-700 text-white disabled:bg-stone-300 disabled:cursor-not-allowed hover:bg-stone-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-stone-600 font-serif">
            Page {currentPage + 1} of {totalPages}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="flex items-center gap-2 px-6 py-3 bg-stone-700 text-white disabled:bg-stone-300 disabled:cursor-not-allowed hover:bg-stone-800 transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-stone-500">
          <p>❦</p>
          <p className="mt-2">Created by Jackqueline (Jack) Wilson, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TourGuide;
