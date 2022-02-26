import tw from "tailwind-styled-components";
// import folder from '../images/folder.JPG';

export const AboutStyle = tw.section`
  flex
  items-center
  justify-evenly
  flex-row
  text-center
  text-l
  bg-rose-700
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
  bg-folder2
  bg-center
  bg-no-repeat
  bg-cover
  w-full
  text-white
  h-screen
  tracking-tight
  leading-10
`;

export const TechToolStyle = tw.section`
  flex
  items-center
  justify-center
  text-center
  text-xl
  flex-col
  bg-folder2
  w-full
  h-screen
  tracking-tight
  pt-10
`;

export const ProjectStyle = tw.section`
  flex
  flex-col
  items-center
  justify-center
  text-center
  py-10
  bg-rose-50
`;

export const FlexCenter = tw.div`
  flex
  flex-row
  items-center
  justify-evenly
  w-full
  pt-10
`;

export const CardImageProject = tw.div`
  flex
  flex-col
  items-center
  justify-center
  text-rose-50
  bg-rose-700
  rounded-lg
  box-content
  h-64
  w-64
  p-4
`;


