import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-neutral-900/40 backdrop-blur-2xl border-neutral-100/10 rounded-2xl gap-5 `}
    >

        <img src={notification1} alt="image" width={62} height={62} className="rounded-xl" />
      <div className="flex-1"> 
        <h6 className="mb-1 font-semibold justify-between ">{title}</h6>

        <div className="flex items-center text-base">
          <ul className="flex -m-0.5 ">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-neutral-200 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  alt={item}
                  className="w-full"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </ul>

          <div className="ml-8 body-2 text-neutral-500">
            1m ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
