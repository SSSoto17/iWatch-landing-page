import ButtonCTA from "./ButtonCTA";
import ColorIndicator from "./ColorIndicator";
import PageIndicator from "./PageIndicator";
import WatchShowcase from "./WatchShowcase";

const Hero = () => {
  return (
    <section className="grid grid-cols-5">
      <article className="col-span-3 grid auto-rows-auto gap-y-10 place-items-start">
        <h1 className="text-6xl leading-relaxed cursor-default">
          <span className="font-bold">The Perfect Moment</span> Between Past And
          Future.
        </h1>
        <ButtonCTA label="Buy Now" />
        <PageIndicator page="1" />
      </article>
      <WatchShowcase option="Navy" />
    </section>
  );
};

export default Hero;
