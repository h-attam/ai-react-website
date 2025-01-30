import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3 flex flex-col min-h-[40rem]" 
        >
          <h4 className="h4 mb-4 text-white text-4xl">{item.title}</h4>

          <p className="text-neutral-300">{item.description}</p>

          <div className="flex items-center text-white mt-4">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[3rem] font-bold ml-1 leading-none">{item.price}</div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@info.com"}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul className="flex-1"> 
            {item.features.map((feature, index) => (
              <li key={index} className="flex items-start py-5 border-t border-neutral-600 gap-2 mb-3">
                <img src={check} alt="Check" width={24} height={24} />
                <p className="body-2 ml-4 text-neutral-300">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;