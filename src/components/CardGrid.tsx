// Responsive card grid component with dynamic calculations and gap handling

interface Card {
  title: string;
  desc: string;
  color: string;
  img_tag: string;
}

interface CardGridProps {
  cards: Card[];
}

export default function CardGrid({ cards }: CardGridProps) {

  return (
    // Main container with responsive margins
    <div className=" mx-[5%] lg:mt-[6%] mt-[13%] py-12 ">
      
      {/* Responsive heading - larger on desktop, smaller on mobile */}
      <h2 className="lg:text-3xl text-8xl font-bold text-center sm:mb-10 mb-20">My Missions</h2>
      
      {/* Flex container with responsive gaps */}
      <div className="flex flex-wrap lg:gap-x-6 lg:gap-y-14 sm:gap-x-10 sm:gap-y-16 gap-y-36  justify-center">
        
        {/* No results found message */}
        {cards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No results found
            </p>
          </div>
        )}
        
        {/* Map through cards and create responsive card elements */}
        {cards.map((card, i) => (
          <div
            key={i}
            // 
            // RESPONSIVE WIDTH CALCULATIONS:
            // - Mobile: w-full (100%)
            // - Tablet: calc(50% - 2.5rem) = 2 columns with gaps
            // - Desktop: calc(33.333% - 1.5rem) = 3 columns with gaps
            // Gap compensation ensures perfect spacing between cards
            //
            className="card w-full sm:w-[calc(50%-2.5rem)] lg:w-[calc(33.333%-1.5rem)] aspect-[4/3]  rounded-[4%] shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            
            {/* Card header with dynamic color and image */}
            <div className={`h-[65%] p-[1%]`}>
              {/* Dynamic image loading based on img_tag */}
              <img src={`/${card.img_tag}.jpg`} alt="" className="w-full h-full object-fit rounded " />
            </div>
            
            {/* Card content with responsive spacing */}
            <div className="px-[8%] py-[4%] sm:space-y-[1%] space-y-[3%] dark:text-white ">
              
              {/* Responsive title - larger on desktop */}
              <h3 className="card-title font-semibold lg:text-2xl sm:text-4xl text-7xl  ">{card.title}</h3>
              
              {/* Responsive description - larger on desktop */}
              <p className="card-sub-title lg:text-[1rem] sm:text-2xl text-5xl ">{card.desc}</p>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}