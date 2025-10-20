const SectionGrid = ({ items }: { items: any[] }) => (
  <>
    {items.map((section, index) => (
      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 my-16 md:my-20"
      >
        {index % 2 === 0 ? (
          <>
            <div className="order-2 lg:order-1 space-y-4 text-left sm:text-center lg:text-left px-4 sm:px-6">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold border-b-4 border-blue-500 inline-block pb-1">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {section.description}
              </p>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={section.image}
                alt="Project Detail"
                loading="lazy"
                className="
                  w-full max-w-[600px]
                  h-[200px] md:h-[300px]
                  rounded-2xl
                  shadow-lg hover:shadow-xl
                  transition-transform duration-500 ease-in-out
                  hover:scale-105
                  bg-transparent
                "
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <img
                src={section.image}
                alt="Project Detail"
                loading="lazy"
                className="
                  w-full max-w-[600px]
                  h-[200px] md:h-[300px]  lg:h-[300px]
                  rounded-2xl
                  shadow-lg hover:shadow-xl
                  transition-transform duration-500 ease-in-out
                  hover:scale-105
                  bg-transparent
                "
              />
            </div>

            <div className="order-2 lg:order-1 space-y-4 text-left sm:text-center lg:text-left px-4 sm:px-6">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold border-b-4 border-blue-500 inline-block pb-1">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {section.description}
              </p>
            </div>
          </>
        )}
      </div>
    ))}
  </>
);

export default SectionGrid;
