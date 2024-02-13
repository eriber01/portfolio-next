import { Techs } from "../../techs/interface";
import { Projects } from "../interfaces";


export const TechArr: Techs[] = [
  {
    id: 1,
    name: 'Html',
    description: 'Prueba Html',
    status: true,
    image: 'https://res.cloudinary.com/eriber/image/upload/v1682477601/Portafolio/TechImage/Html_llxzgt.png',
    show_type: 2
  },
  {
    id: 2,
    name: 'Next',
    status: false,
    description: 'Prueba',
    image: 'https://res.cloudinary.com/eriber/image/upload/v1682565804/Portafolio/TechImage/Netx_bil5ho.png',
    show_type: 2
  },
  {
    id: 3,
    name: 'Next',
    status: true,
    description: 'Prueba',
    image: 'https://res.cloudinary.com/eriber/image/upload/v1682565804/Portafolio/TechImage/Netx_bil5ho.png',
    show_type: 2
  },
  {
    id: 15,
    name: 'Next',
    description: 'Prueba',
    image: 'https://res.cloudinary.com/eriber/image/upload/v1682565804/Portafolio/TechImage/Netx_bil5ho.png',
    show_type: 2
  }
]

export const ProjectsArr: Projects[] = [
  {
    id: null,
    name: 'Prueba 1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugiat odio possimus nemo, vel animi dolorem saepe.',
    git: '',
    image: 'https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Smart_Letters_sxucdc.png',
    link: '',
    techs: TechArr,
    status: true
  },
  {
    id: null,
    name: 'Prueba 2',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugiat odio possimus nemo, vel animi dolorem saepe.',
    git: '',
    image: 'https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Daily_Task_App_xxvshx.png',
    link: '',
    techs: TechArr,
    status: false
  },
  {
    id: null,
    name: 'Prueba 3',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugiat odio possimus nemo, vel animi dolorem saepe.',
    git: '',
    image: 'https://res.cloudinary.com/eriber/image/upload/v1696122008/Portafolio/ProjectImage/Next_Dashboard_iygi2r.png',
    link: '',
    techs: TechArr,
    status: false
  }
]

