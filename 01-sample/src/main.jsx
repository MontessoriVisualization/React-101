import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
function Main() {
  return(
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
    Visit Google
  </a>

  )


}
const costumeElement = {
  tag: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  children: 'Visit Google'
}

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  'Visit Google'
)

createRoot(document.querySelector('#root')).render(
  reactElement

)
