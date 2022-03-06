import tw from "tailwind-styled-components";

export const AboutStyle = tw.section`
  flex
  items-center
  justify-evenly
  flex-row
  text-center
  text-l
  bg-white
  w-full
  h-screen
  tracking-tight
`;

export const NameStyle = tw.section`
  flex
  items-center
  justify-center
  flex-col
  text-xl
  font-semibold
  bg-folder2
  bg-left-top
  grayscale-40
  bg-cover
  w-full
  h-screen
  tracking-tight
  leading-10
  pt-16
`;

export const TechToolStyle = tw.section`
  flex
  items-center
  justify-center
  text-center
  text-xl
  flex-col
  bg-folder2
  bg-left-top
  grayscale-40
  bg-cover
  w-full
  h-screen
`;

export const TechContainer = tw.ul`
  bg-rose-50 rounded-lg w-3/5 py-6
`;

export const Title = tw.h2`
mb-10 text-2xl text-rose-900 font-semibold
`;

export const CardTech = tw.button`
  hover:grayscale-[90%]
  flex
  flex-col
  items-center
  justify-evelyn
  box-border
  font-semibold
  w-1/4 m-2
`;

export const ProjectStyle = tw.section`
  flex
  flex-col
  items-center
  justify-center
  text-center
  py-10
`;

export const ContainerInput = tw.div`
  flex
  items-center
  w-2/4
  justify-evenly
`;

export const InputSearch = tw.input`
  border-2
  text-center
  py-2
  px-16
  rounded-lg
`;

export const ButtonSearch = tw.button`
  border-2
  px-16
  py-2
  my-4
  bg-rose-900
  text-white
  rounded-lg
  hover:bg-green-900
`;

export const FlexCenter = tw.div`
  flex
  flex-row
  flex-wrap
  items-center
  justify-evenly
  w-full
`;

export const CardImageProject = tw.button`
  flex
  flex-col
  items-center
  justify-evenly
  box-border
  rounded-lg
  h-72
  w-96
  shadow-lg
  hover:opacity-60
`;

export const ImageProjects = tw.img`
  w-full
  border
`;

export const ContactStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  bg-folder2
  bg-left-top
  grayscale-40
  bg-cover
  h-screen
  text-white
`;

export const SectionStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  bg-black
  w-2/3
  rounded-lg
`;

export const LocationStyle = tw.div`
  flex
  items-start
  justify-center
  pb-4
`;

export const LocationItemStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  text-white
  px-10
  m-4
  rounded-lg
`;
