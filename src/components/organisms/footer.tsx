import { Icon } from "@iconify/react";

const contactinfo = [
  {
    icon: 'mdi:email',
    text: 'olivernhansen@gmail.com',
  },
  {
    icon: 'mdi:phone',
    text: '+45 60153577',
  },
  {
    icon: 'mdi:map-marker',
    text: '4700, Mogenstrup, Næstved, Denmark',
  },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#040d12] pb-10">
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Thanks for visiting, and feel free to reach out!
      </h1>

      <div className="mt-6 flex justify-center">
        <div className="bg-[#040d12] rounded-lg border-2 border-[#103758] px-4 py-4">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Contact</h2>

          {contactinfo.map((info, index) => (
            <div key={index} className="flex items-center gap-2 py-2 text-start text-base lg:text-lg">
              <Icon icon={info.icon} />
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </footer >
  );
}
export default Footer;