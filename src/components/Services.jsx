import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient, PhotoChatMessage, VideoBar } from "./design/Services";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container mx-auto px-4">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
          className="text-center"
        />

        {/* Service 1  */}
        <div className="relative flex justify-center mb-10">
          <div className="relative z-1 flex items-center h-[39rem] p-8 border border-neutral-100/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] max-w-4xl w-full">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                alt="Smartest AI"
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 text-4xl">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-neutral-300">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-neutral-600"
                  >
                    <img width={24} height={24} src={check} alt="Check icon" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-1/2 bottom-8 transform -translate-x-1/2 border-neutral-100/10 border" />
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative flex justify-center mb-10">
          <div className="relative z-1 border border-n-1/10 rounded-3xl overflow-hidden max-w-4xl w-full">
            <img
              src={service2}
              alt="robot"
              className="h-full w-full object-cover"
              width={630}
              height={750}
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-8 bg-gradient-to-b from-transparent to-black">
              <h4 className="text-4xl h4 mb-4 text-white">Photo editing</h4>
              <p className="body-2 mb-[3rem] text-white">
                Automatically enhance your photos using our AI app&apos;s photo
                editing feature. Try it now!
              </p>
            </div>
            <PhotoChatMessage />
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative flex justify-center">
          <div className="relative z-1  rounded-3xl overflow-hidden max-w-4xl w-full  p-8 lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8 text-center">
              <h4 className="text-4xl h4 mb-4 text-white">Video generation</h4>
              <p className="body-2 text-neutral-300">
                The world’s most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <ul className="flex items-center justify-between mt-7">
                {brainwaveServicesIcons.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.5 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-neutral-600 md:w-14 md:h-14 "
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-neutral-700 rounded-[1rem] "
                          : ""
                      }
                    >
                      <img src={item} alt={item} width={24} height={24} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[20rem] bg-neutral-800 rounded-xl overflow-hidden md:h-[25rem] ">
              <img
                src={service3}
                alt="Scary robot"
                className="w-full h-full object-cover "
                width={520}
                height={400}
              />

              <p className="absolute top-15 left-4 text-white text-3xl bg-black/50 px-4 py-2 rounded-lg z-10">
                Video generated!
              </p>
              <VideoBar />
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Services;
