import React from 'react';

const Cta = () => {
  // Inline style for calming forest background (replace URL with your uploaded image)
  const sectionStyle = {
    backgroundImage: `url('/images/woman-in-black-tank-top-and-black-shorts-sitting-on-black-asphalt-road-during-daytime.png')`, // ← Change this to your serene forest/river image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // subtle parallax feel on scroll
  };

  return (
    <div 
      className="w-full min-h-[70vh] flex items-center justify-center text-north-text relative overflow-hidden"
      style={sectionStyle}
      id="contact"
    >
      {/* Dark overlay for readability & calming mood */}
      <div className="absolute inset-0 bg-north-bg/65 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-6 py-20 md:py-32 text-center lg:text-left max-w-5xl z-10">
        <div className="flex flex-col items-center lg:items-start space-y-8 bg-north-wood/20 backdrop-blur-md p-10 md:p-12 rounded-3xl border border-north-glow/20 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-wide text-north-glow">
            Let the Forest Call You Home
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl opacity-90">
            Step away from the noise. Return to the quiet rhythm of cedar heat, icy waters, and whispering pines. 
            Whether you're seeking your first breath of true stillness or a deeper return to yourself — we are here.
          </p>

          <div className="space-y-6 mt-8 text-lg md:text-xl">
            <p>
              Reach out when the trees begin to speak your name.<br />
              <a 
                href="mailto:hello@northforrest.ca" 
                className="text-north-glow hover:text-white underline transition-colors duration-300"
              >
                hello@northforrest.ca
              </a>
            </p>
            
            <p>
              Or call when the river feels near:<br />
              <a 
                href="tel:+14039690333" 
                className="text-north-glow hover:text-white underline transition-colors duration-300"
              >
                (403) 969-0333
              </a>
            </p>
          </div>

          <a
            href="#book"
            className="mt-10 inline-block bg-north-glow/80 hover:bg-north-glow text-north-bg font-medium text-lg px-12 py-5 rounded-full transition-all duration-500 shadow-lg hover:shadow-north-glow/40 transform hover:-translate-y-1"
          >
            Begin Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
