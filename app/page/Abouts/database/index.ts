export type areaTypes = 'Front-End' | 'Back-End' | 'Others'

export const ModalAreaDescriptions = (area: areaTypes, year: number) => {
  const descriptions = {
    'Front-End': `
      With ${year} years of experience as a Frontend Developer,
      I specialize in building dynamic web applications and
      create interactive, efficient user interfaces,
      focusing on intuitive design and staying updated
      with the latest frontend trends.
    `,
    'Back-End': `
      With ${year} years of experience as a BackEnd Developer,
      I have learned to create sustainable and scalable 
      processes, robust databases that are easy to use
      and easy to understand, ensuring that if another
      developer needs to work on my code, they can do
      it easily without worries. for not
      understanding my code.
    `,
    'Others': `
      In these ${year} years of experience,
      I have learned to analyze, create and 
      optimize system processes to streamline and
      make efficient the use of the system by users.
    `
  }


  return descriptions[area]
}