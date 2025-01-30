import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {tag && <Tagline className=" md:justify-center ml-52 mb-15">{tag}</Tagline>}
      {title && <h1 className="text-3xl font-bold mb-4">{title}</h1>}
      {text && <p className="body-2 mt-4 text-neutral-400">{text}</p>}
    </div>
  );
};

export default Heading;
