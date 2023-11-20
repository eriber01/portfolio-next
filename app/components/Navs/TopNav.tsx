'use client'
import { useState } from 'react'

type Languages = 'esp' | 'eng'
type Themes = 'light' | 'dark'

type State = {
  lang: Languages
  theme: boolean
}

const TopNav = () => {
  const [state, setState] = useState<State>({ lang: 'eng', theme: true })

  const onChange = (path: string, value: string | boolean) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  return (
    <main className='box-border flex justify-end h-7 items-center text-sm px-2 md:px-6 bg-transparent'
    >
      <div className='flex justify-between w-3/12 md:w-[10%] xl:md:w-[5%]'>
        <div className={`${state.lang === 'esp' && 'lang-selected'} general-font-size`}>
          <button
            onClick={() => onChange('lang', 'esp')}
          >ESP</button>
        </div>
        <div className='border'></div>
        <div className={`${state.lang === 'eng' && 'lang-selected'} general-font-size`}>
          <button
            onClick={() => onChange('lang', 'eng')}
          >ENG</button>
        </div>
      </div>
    </main>
  )
}

export default TopNav