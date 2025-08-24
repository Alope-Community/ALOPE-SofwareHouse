import React from "react";

type PricingCardProps = {
  title: string;
  price?: string;
  unit?: string;
  description?: string;
  users?: string;
  discountText?: string;
  footerText?: string;
  isContact?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  unit,
  description,
  users,
  discountText,
  footerText = "Ajukan Sekarang",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col justify-between min-h-[450px]">
      <div className="p-6 text-center space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="p-6 text-center space-y-3 flex-1 flex flex-col justify-center">
          {price && (
            <>
              <div className="text-3xl font-bold">
                {price}
                <span className="text-base font-normal">{unit}</span>
              </div>
              {discountText && (
                <div className="text-gray-600">{discountText}</div>
              )}
            </>
          )}

          {description && (
            <p className="text-gray-700 text-center">{description}</p>
          )}
          {users && <p className="text-gray-700 text-center">{users}</p>}
        </div>
      </div>

      <div className="bg-gradient-to-b from-blue-500 to-blue-200 text-white py-3 text-center rounded-b-xl cursor-pointer flex items-center justify-center gap-1 text-sm font-medium">
        {footerText}
      </div>
    </div>
  );
};

export default PricingCard;
