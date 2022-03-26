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

export const BackgroundImageStyle = tw.section`
  flex
  items-center
  justify-center
  flex-col
  font-semibold
  bg-folder2
  bg-left-top
  bg-cover
  w-full
  h-screen
  leading-10
`;

export const TitleHome = tw.h1`
  text-5xl
  font-bold
  bg-red-100
  opacity-70
  text-black
  w-full
  text-center
`;

export const PHome = tw.p`
  text-xl
  bg-yellow-50
  opacity-70
  text-black
  w-full
  text-center
`;

export const AboutHome = tw.a`
  border-solid 
  border-white
  bg-red-700
  text-white
  px-16
  py-1
  hover:bg-rose-600 duration-500
  border-black
  rounded-4xl
  mt-10
`;

export const ContainerAbout = tw.div`
  shadow-xl
  bg-stone-900
  text-white
  w-2/4
  p-10
  rounded-lg
`;

export const TitleAbout = tw.h2`
  text-2xl
  pb-6
  text-red-600
  font-semibold
`;

export const Span = tw.span`
  text-4xl
`;

export const TechContainer = tw.ul`
  bg-yellow-50
  rounded-lg
  w-3/5
  py-6
`;

export const Title = tw.h2`
  mb-5
  text-2xl
  text-red-600
  font-semibold
  text-center
`;

export const ProjectP = tw.p`
  mb-5
  px-5
  text-center
  font-normal
  leading-normal
`;

export const CardTech = tw.a`
  hover:grayscale
  flex
  flex-col
  items-center
  justify-evelyn
  box-border
  font-semibold
  w-32 m-2
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
  border
  text-center
  py-2
  px-16
  rounded-4xl 
`;

export const ButtonSearch = tw.button`
  border
  px-16
  py-2
  my-4
  bg-red-600
  text-white
  rounded-4xl
  hover:bg-rose-600
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
  shadow-xl
  mb-4
  hover:opacity-60
`;

export const ImageProjects = tw.img`
  w-full
  border
`;

export const SectionStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  bg-yellow-50
  text-black
  w-2/3
  rounded-lg
  py-10
`;

export const ContainerContacts = tw.div`
  flex
  items-center
  justify-evenly
  w-full
`;

export const StyleP = tw.p`
  text-lg
  font-semibold
`;

export const Titleh3 = tw.h3`
  text-lg
  font-semibold
`;

export const LocationItemStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  text-black
  text-center
`;

export const ContainerMidias = tw.div`
  flex
  items-center
  justify-center
  w-full
  mb-5
`;

export const InputContact = tw.input`
  flex
  items-center
  justify-center
  border-2
  text-center
  m-2
  px-48
  rouded-lg
`;

export const TextAreaContact = tw.textarea`
  text-center
  border-2
  m-2
  px-52
  rouded-lg
`;