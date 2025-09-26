
const SectionGrid = ({ items }: { items: any[] }) => (
  <>
    {items.map((section, index) => (
      <div
        key={index}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10 mt-10"
      >
        {index % 2 === 0 ? (
          <>
            <div className="space-y-4 order-2 lg:order-1 w-full">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{section.title}</h2>
              <p className="text-gray-600 text-justify text-sm sm:text-base">{section.description}</p>
            </div>
            <div className="w-full order-1 lg:order-2">
              <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                <img
                  src={section.image}
                  alt="Project Detail"
                  className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                <img
                  src={section.image}
                  alt="Project Detail"
                  className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                />
              </div>
            </div>
            <div className="space-y-4 w-full">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{section.title}</h2>
              <p className="text-gray-600 text-justify text-sm sm:text-base">{section.description}</p>
            </div>
          </>
        )}
      </div>
    ))}
  </>
);

export default SectionGrid;