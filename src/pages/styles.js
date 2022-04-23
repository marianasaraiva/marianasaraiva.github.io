import tw from "tailwind-styled-components";

export const AboutStyle = tw.section`
  flex
  items-center
  justify-evenly
  flex-col
  md:flex-row
  text-center
  text-l
  md:bg-yellow-50
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
  bg-folder
  bg-bottom
  bg-cover
  w-full
  h-screen
  leading-10
`;

export const BackgroundImageProject = tw.section`
  flex
  items-center
  justify-center
  flex-col
  font-semibold
  bg-folder
  bg-top
  bg-cover
  w-full
  py-2
  lg:py-8
  leading-10
`;

export const TitleHome = tw.h1`
  text-2xl
  md:text-3xl
  lg:text-5xl
  font-bold
  opacity-60
  bg-yellow-50
  text-black
  w-full
  text-center
`;

export const PHome = tw.p`
  text-md
  md: text-lg
  lg:text-xl
  bg-yellow-50
  opacity-50
  text-black
  w-full
  text-center
`;

export const AboutHome = tw.a`
  border-solid 
  border-white
  bg-orange-700
  text-white
  py-2
  px-8
  lg:px-16
  text-sm
  lg:text-lg
  hover:bg-stone-500 duration-500
  border-black
  rounded-4xl
  mt-10
`;

export const ContainerAbout = tw.div`
  shadow-xl
  bg-orange-200
  opacity-80
  text-orange-900 
  w-full
  text-sm
  lg:text-xl
  md:w-3/5
  p-2
  lg:p-10
`;

export const TitleAbout = tw.h2`
  text-2xl
  pb-6
  text-orange-900
  font-semibold
`;

export const Span = tw.span`
  text-xl
  lg:text-3xl
`;

export const TechContainer = tw.ul`
  flex
  flex-col
  items-center
  justify-evelyn
  w-full
  opacity-75
  w-5/6
  py-4
`;

export const Title = tw.h2`
  pb-5
  text-lg
  lg:text-2xl
  text-orange-900
  font-semibold
  text-center
  w-full
`;

export const ProjectP = tw.p`
  text-orange-900
  mb-5
  px-5
  text-center
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
  text-orange-900
  w-16
  lg:w-32
  m-4
`;

export const ProjectStyle = tw.section`
  flex
  flex-col
  items-center
  justify-center
  text-center
  py-10
  opacity-80
`;

// export const ContainerInput = tw.div`
//   flex
//   items-center
//   flex-col
//   md:flex-row
//   w-2/4
//   justify-evenly
// `;

export const InputSearch = tw.input`
  border
  text-center
  py-2
  px-8
  lg:px-16
  text-sm
  lg:text-lg
  w-2/4
  mb-2
  lg:mb-6
`;

export const ButtonSearch = tw.button`
  border-solid 
  border-white
  bg-orange-700
  text-white
  text-sm
  lg:text-lg
  px-4
  md:px-8
  lg:px-16
  py-2
  hover:bg-stone-500 duration-500
  rounded-4xl
`;

export const FlexCenter = tw.div`
  flex
  flex-row
  flex-wrap
  items-center
  justify-evenly
  md:w-4/5
`;

export const CardImageProject = tw.div`
  flex
  flex-col
  items-center
  justify-evenly
  box-border
  bg-yellow-50
  h-96
  w-96  
  shadow-xl
  my-4
`;

export const ImageProjects = tw.img`
  w-full
  border
  grayscale
  hover:grayscale-[10%]
`;

// sm:invisible
// lg:visible
// sx:w-0
export const ImageAbout = tw.img`
  rounded-full
  grayscale-[90%]
  opacity-80
  shadow-xl
  w-20
  md:w-48
  lg:w-72
`;

export const SectionStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  text-orange-900
  w-full
  py-2
  md:py-10
  opacity-75
`;

export const StyleP = tw.p`
  text-md
  lg:text-lg
  font-semibold
  text-center
`;

export const Titleh3 = tw.h3`
  text-sm
  lg:text-lg
  font-semibold
`;

export const LocationItemStyle = tw.div`
  flex
  items-center
  justify-center
  flex-col
  text-stone-500
  text-center
`;

export const ContainerMidias = tw.div`
  flex
  flex-col
  items-center
  justify-center
  md:flex-row
  text-sm
  lg:text-lg
  w-full
  lg:mb-4
`;

export const InputContact = tw.input`
  flex
  items-center
  justify-center
  border-2
  text-center
  mb-4
  w-11/12
  rouded-lg
`;

export const TextAreaContact = tw.textarea`
  text-center
  border-2
  mb-4
  w-11/12
  rouded-lg
`;

export const Form = tw.form`
  text-center
  w-8/12
  m-2
  flex
  flex-col
  items-center
  justify-evenly
`;

export const BlankLink = tw.div`
  flex
  flex-row
  items-center
  justify-evenly
`;

export const LinkButton = tw.div`
  w-full
  text-yellow-50
  bg-orange-700
  rounded-4xl
  font-bold
  m-2
  hover:bg-stone-500 duration-500
  sm:text-sm
  w-20
  lg:w-32
  py-2
`;