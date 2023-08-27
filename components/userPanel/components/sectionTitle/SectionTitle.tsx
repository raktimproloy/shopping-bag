import React from 'react'

interface TitleConfig{
    title: String
}

function SectionTitle({title}:TitleConfig) {
  return (
    <p className='text-2xl font-bold text-slate-500 mb-2'>{title}</p>
  )
}

export default SectionTitle