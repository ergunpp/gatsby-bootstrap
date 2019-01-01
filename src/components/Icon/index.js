import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

import {
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  
  
} from '@fortawesome/free-brands-svg-icons'
import './style.scss'

import{
  faBars
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faApple,
  faAws,
  faFacebook,
  faGithub,
  faHtml5,
  faJs,
  faNode,
  faPhp,
  faReact,
  faTwitter,
  faVuejs,
  faBars
)

const Icon = ({ name,prefix }) => (
  
    <FontAwesomeIcon icon={[prefix, name]} />
  
)

export default Icon
