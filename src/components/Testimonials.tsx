import { Star } from "lucide-react";

const reviews = [
  {
    name: "praful raj",
    rating: 5,
    text: "Trust me, after visiting almost ten venues, we picked Diamond Resort for our shaadi and it was the best decision we made. Welcome drinks, paan counter and ice cream cart, every detail was thought of. I mean, the groom's side and bride's side both had separate hospitality areas, which was such a thoughtful touch. Ngl, whenever a relative needed something, a staff member appeared within seconds. Some moments just stay with you. We had heard good things from people in Biharsharif, but seeing it in person, this is clearly the best resort in Biharsharif. We will absolutely be coming back, hopefully very soon."
  },
  {
    name: "Sasipriya Sasipriya",
    rating: 5,
    text: "Tbh, we just got married here and are coming back to write this before the feeling fades. Fireworks at the right moment, music at the right volume, everything timed beautifully. Whenever a relative needed something, a staff member appeared within seconds. It is honestly hard to find a proper venue in Bihar, Nalanda, but this one is on a different level, truly the best resort in Bihar. Already telling our whole family about this place."
  },
  {
    name: "Anant Verma",
    rating: 5,
    text: "After visiting almost ten venues, we picked Diamond Resort for our shaadi and it was the best decision we made. The bridal room was kept ready with snacks, water and a quiet corner for touch ups. Whenever a relative needed something, a staff member appeared within seconds. If you are anywhere near Bihar, Nalanda, please do yourself a favour and book this place, it is genuinely the best resort in Nalanda. Thank you to the entire team for making it so special."
  },
  {
    name: "Prabhat Kishor",
    rating: 5,
    text: "We came here for our anniversary and it turned out to be one of our best trips. What we paid for this stay felt very fair for the kind of experience we got. It is the kind of place where you actually slow down and breathe again. Living close to Bihar, Nalanda, I have tried a lot of stays around here and this is easily the best resort in Bihar I have ever been to. Will be recommending this resort to literally everyone I know."
  },
  {
    name: "AMITESH KUMAR",
    rating: 5,
    text: "We were looking for a calm getaway with the family and this place gave us exactly that. Whatever we asked for came quickly and with a kind word, never with that fake hotel politeness. The whole property has this quiet, green, peaceful vibe that is hard to put into words. The room was clean, fresh and so comfortable that I slept better than I do at home. For anyone planning a trip to Biharsharif, I would say just book this place, it is genuinely the best resort in Biharsharif. Trips like this are the reason we travel in the first place."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <span className="font-label font-bold text-xs tracking-[0.3em] uppercase text-burgundy/60 mb-4 block">Guest Experiences</span>
        <h2 className="font-display font-medium text-4xl lg:text-5xl text-burgundy tracking-tight">What Our Guests Say</h2>
      </div>

      <div className="w-full max-w-[100vw] overflow-hidden group">
        <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused] gap-6 px-6">
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="w-[350px] md:w-[450px] flex-none">
              <div className="bg-white p-8 rounded-3xl h-full flex flex-col border border-burgundy/5 shadow-lg hover:shadow-xl transition-shadow duration-500 ease-luxury">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-body text-lg text-burgundy/80 leading-relaxed flex-grow italic mb-8">
                  "{review.text}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-burgundy font-label font-bold">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-label font-bold text-sm tracking-wide text-burgundy">{review.name}</h4>
                    <span className="text-xs text-burgundy/50 font-label tracking-widest uppercase">Verified Guest</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
