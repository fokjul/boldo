export const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading_XXXL: "font-manrope font-normal text-[64px] leading-[84px] w-full",
    heading_XXL: "font-manrope font-normal text-[2.5rem] lg:text-[3rem] leading-[3.5rem] lg:leading-[4.5rem] w-full",
    heading_XL: "font-manrope font-normal text-[36px] leading-[56px] w-full",
    heading_L: "font-manrope font-normal text-[28px] leading-[48px] w-full",

    paragraph_M: "font-opensans font-normal text-[1.5rem] leading-[2.25rem",
    paragraph_S: "font-opensans  text-[1.25rem] leading-[2rem]",
    paragraph_XS: "font-opensans text-[1rem] leading-[28px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    button_M: "font-body font-bold  text-[1rem] lg:text-[1.25rem] leading-[1.25rem] lg:leading-[1.75rem] rounded-[3.5rem] py-4 px-[40px] lg:px-[56px]",

  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

    serviceSection: 'flex flex-1 md:flex-row flex-col justify-between items-center w-full my-[64px] p-4 sm:gap-8 gap-6',
  };
  
