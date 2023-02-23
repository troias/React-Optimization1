import type { ChangeEvent } from 'react'

interface MyInputProps {
    label: string
    value: string
  
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
  
  }

export default function MyInput({ label, value, onChange }: MyInputProps) {
    return (
      <div className="" >
        <label htmlFor="my-input" className=""  >{label}</label>
        <br />
  
       
  
        <input id="my-input" value={value} onChange={onChange} />
      </div>
    )
  }