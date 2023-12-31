import { Projects, Techs } from "../interfaces";


export const TechArr: Techs[] = [
  {
    id: 1,
    name: 'Html',
    description: 'Prueba',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1682477601/Portafolio/TechImage/Html_llxzgt.png',
  },
  {
    id: 2,
    name: 'Next',
    description: 'Prueba',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1682565804/Portafolio/TechImage/Netx_bil5ho.png',
  },
  {
    id: 2,
    name: 'Next',
    description: 'Prueba',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1682565804/Portafolio/TechImage/Netx_bil5ho.png',
  },
  {
    id: 2,
    name: 'Next',
    description: 'Prueba',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1682565804/Portafolio/TechImage/Netx_bil5ho.png',
  }
]

export const ProjectsArr: Projects[] = [
  {
    id: null,
    name: 'Prueba 1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugiat odio possimus nemo, vel animi dolorem saepe.',
    gitUrl: '',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Smart_Letters_sxucdc.png',
    linkUrl: '',
    techs: TechArr,
    status: true
  },
  {
    id: null,
    name: 'Prueba 2',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugiat odio possimus nemo, vel animi dolorem saepe.',
    gitUrl: '',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Daily_Task_App_xxvshx.png',
    linkUrl: '',
    techs: TechArr,
    status: false
  },
  {
    id: null,
    name: 'Prueba 3',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugiat odio possimus nemo, vel animi dolorem saepe.',
    gitUrl: '',
    imageUrl: 'https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Next_Dashboard_iygi2r.png',
    linkUrl: '',
    techs: TechArr,
    status: false
  }
]