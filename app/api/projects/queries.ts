export const GET_PROJECT_BY_ID = `
  select p.id, p."name", p.description,
  p.link, p.git, p.enabled, (
    select json_build_object(
      'id', pi.id,
      'project_id', pi.project_id,
      'public_id', pi.public_id,
      'url', pi.url
      )
    from  project_images pi 
    where pi.project_id = p.id 
  ) as image,
  (select array_agg(json_build_object(
    'id', te.id,
    'name', te.name,
    'description', te.description,
    'show_type', te.show_type,
    'area_type', te.area_type,
    'enabled', te.enabled,
    'image', (
      select json_build_object(
        'id', ti.id,
        'public_id', ti.public_id,
        'tech_id', ti.tech_id,
        'url', ti.url
      )
      from  tech_images ti
      where ti.tech_id = te.id
    )
  ))
  from  tech_projects tp
  join  techs te ON te.id = tp.tech_id
  where tp.project_id = p.id
  ) as tech
  from  projects p
  where p.id = $1
  group by p.id;
`


export const GET_PROJECTS = `
  select p.id, p."name", p.description,
  p.link, p.git, p.enabled, (
    select json_build_object(
      'id', pi.id,
      'project_id', pi.project_id,
      'public_id', pi.public_id,
      'url', pi.url
      )
    from  project_images pi 
    where pi.project_id = p.id 
  ) as image,
  (select array_agg(json_build_object(
    'id', te.id,
    'name', te.name,
    'description', te.description,
    'show_type', te.show_type,
    'area_type', te.area_type,
    'enabled', te.enabled,
    'image', (
      select json_build_object(
        'id', ti.id,
        'public_id', ti.public_id,
        'tech_id', ti.tech_id,
        'url', ti.url
      )
      from  tech_images ti
      where ti.tech_id = te.id
    )
  ))
  from  tech_projects tp
  join  techs te ON te.id = tp.tech_id
  where tp.project_id = p.id
  ) as tech
  from  projects p
  group by p.id
  order by enabled desc, name asc;
`

export const GET_PROJECTS_ENABLE = `
  select p.id, p."name", p.description,
  p.link, p.git, p.enabled, (
    select json_build_object(
      'id', pi.id,
      'project_id', pi.project_id,
      'public_id', pi.public_id,
      'url', pi.url
      )
    from  project_images pi 
    where pi.project_id = p.id 
  ) as image,
  (select array_agg(json_build_object(
    'id', te.id,
    'name', te.name,
    'description', te.description,
    'show_type', te.show_type,
    'area_type', te.area_type,
    'enabled', te.enabled,
    'image', (
      select json_build_object(
        'id', ti.id,
        'public_id', ti.public_id,
        'tech_id', ti.tech_id,
        'url', ti.url
      )
      from  tech_images ti
      where ti.tech_id = te.id
    )
  ))
  from  tech_projects tp
  join  techs te ON te.id = tp.tech_id
  where tp.project_id = p.id
  ) as tech
  from  projects p
  where p.enabled = true
  group by p.id
  order by enabled desc, name asc;
`