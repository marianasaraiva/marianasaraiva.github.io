import tw from "tailwind-styled-components";

export const HeaderStyle = tw.header`
  flex
  items-center
  justify-evenly
  flex-column
  lg: flex-row
  w-full
  text-stone-900
  bg-yellow-50
  lg:py-4
  text-md
  lg:text-xl
  font-semibold
  p-2
  opacity-70
`;

export const HeaderStyleP = tw.div`
  flex
  flex-column
  lg: flex-row
  items-center
  justify-between
  lg:flex-wrap
  w-full
  lg:w-1/4
  text-md
  lg:text-xl
`;

export const FooterStyled = tw.footer`
  text-center
  relative
  bottom-0
  w-full
  text-sm
  lg:text-l
  text-orange-900
  py-4
`;
