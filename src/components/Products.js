import React from 'react';

const Products = () => {
  return (
    <>
      <div className="my-16 py-12 bg-north-bg text-north-text" id="experiences">
        <h2 className="my-4 text-center text-4xl md:text-5xl font-serif font-bold tracking-wide text-north-glow">
          Sacred Rituals of Renewal
        </h2>
        <div className="flex justify-center">
          <div className="w-32 border-b-4 border-north-glow/60 mb-10 rounded"></div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="300">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            
            {/* Sauna */}
            <div className="bg-north-wood/30 backdrop-blur-sm transition-all ease-in-out duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-north-glow/20 rounded-2xl p-6 border border-north-wood/40">
              <img 
                src="/images/a-close-up-of-a-stove-with-rocks-in-the-background.png" 
                alt="Cedar sauna glowing warmly in the twilight forest at NORTHFORREST, Alberta" 
                className="w-full h-48 object-cover rounded-xl mb-5" 
              />
              <h4 className="font-serif font-semibold text-xl md:text-2xl text-center text-north-glow mb-3">
                The Cedar Whisper
              </h4>
              <p className="text-base leading-relaxed opacity-90 text-center">
                Gentle waves of cedar-scented heat rise like a slow sunrise. Let every pore open, every worry dissolve, every cell remember it was born of fire.
              </p>
            </div>

            {/* Cold Plunge */}
            <div className="bg-north-wood/30 backdrop-blur-sm transition-all ease-in-out duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-north-glow/20 rounded-2xl p-6 border border-north-wood/40">
              <img 
                src="/images/woman-in-pink-knit-cap-and-brown-shirt-climbing-on-rock.png" 
                alt="Guest emerging renewed from the crystal-clear cold plunge tub surrounded by Alberta wilderness" 
                className="w-full h-48 object-cover rounded-xl mb-5" 
              />
              <h4 className="font-serif font-semibold text-xl md:text-2xl text-center text-north-glow mb-3">
                The Icy Awakening
              </h4>
              <p className="text-base leading-relaxed opacity-90 text-center">
                A single plunge into living water — sharp, pure, alive. The shock that returns you to your body, the silence that returns you to your soul.
              </p>
            </div>

            {/* Forest Bathing */}
            <div className="bg-north-wood/30 backdrop-blur-sm transition-all ease-in-out duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-north-glow/20 rounded-2xl p-6 border border-north-wood/40">
              <img 
                src="/images/woman-in-red-jacket-and-blue-denim-jeans-walking-on-forest-during-daytime.png" 
                alt="Person practicing shinrin-yoku forest bathing among ancient pines in Rocky View County" 
                className="w-full h-48 object-cover rounded-xl mb-5" 
              />
              <h4 className="font-serif font-semibold text-xl md:text-2xl text-center text-north-glow mb-3">
                Shinrin-Yoku
              </h4>
              <p className="text-base leading-relaxed opacity-90 text-center">
                Walk slowly beneath the trees. Let the forest exhale oxygen into your lungs and quiet wisdom into your heart. No path. Only presence.
              </p>
            </div>

            {/* Forest Yoga */}
            <div className="bg-north-wood/30 backdrop-blur-sm transition-all ease-in-out duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-north-glow/20 rounded-2xl p-6 border border-north-wood/40">
              <img 
                src="/images/woman-in-black-pants-and-pink-shirt-standing-on-green-grass-field-during-daytime.png" 
                alt="Gentle forest yoga flow under a canopy of leaves at NORTHFORREST wellness retreat" 
                className="w-full h-48 object-cover rounded-xl mb-5" 
              />
              <h4 className="font-serif font-semibold text-xl md:text-2xl text-center text-north-glow mb-3">
                Flow with the Trees
              </h4>
              <p className="text-base leading-relaxed opacity-90 text-center">
                Gentle movement beneath a living cathedral of leaves. Breath syncs with wind. Body becomes part of the breathing forest.
              </p>
            </div>

            {/* River Swimming */}
            <div className="bg-north-wood/30 backdrop-blur-sm transition-all ease-in-out duration-500 overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-north-glow/20 rounded-2xl p-6 border border-north-wood/40">
              <img 
                src="/images/woman-in-black-bikini-sitting-on-white-sand-during-daytime.png"
                alt="Person swimming in the clear, cold waters of the river near NORTHFORREST, Alberta" 
                className="w-full h-48 object-cover rounded-xl mb-5" 
              />
              <h4 className="font-serif font-semibold text-xl md:text-2xl text-center text-north-glow mb-3">
                The River’s Embrace
              </h4>
              <p className="text-base leading-relaxed opacity-90 text-center">
                Surrender to the clear, cold current. Let it carry away what no longer serves and return you lighter, wilder, whole.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Products;