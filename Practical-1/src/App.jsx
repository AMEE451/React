import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Greeting from './Greeting'
import UserProfileCard from './UserProfileCard'
import StyledComponent from './StyledComponent'

const App = () => {
  const [isStyled, setIsStyled] = useState(false);

  const userData = {
    profilePicture: "https://rett24.no/moving-people/current/john-terje-larsen-ny-senioradvokat-i-dla-piper/_/image/902ae7b6-2668-4e77-9f05-fdce578e9078:218c31837f0bb5aac30a4cf8a2185ca62fad7367/block-500-600/John%20Terje%20Larsen.jpg.jpeg?quality=85",
    name: 'Jane Smith',
    age: 25,
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam voluptas impedit eum laudantium ullam aliquid et tempore possimus dolores, animi mollitia in commodi omnis nam incidunt est sequi ducimus",
    location: 'New York, USA',
  };

  return (
    <div>
      <Greeting name="John" />
      {/* <UserProfileCard profilePicture="https://rett24.no/moving-people/current/john-terje-larsen-ny-senioradvokat-i-dla-piper/_/image/902ae7b6-2668-4e77-9f05-fdce578e9078:218c31837f0bb5aac30a4cf8a2185ca62fad7367/block-500-600/John%20Terje%20Larsen.jpg.jpeg?quality=85" name="John" age="25" location="Shicago" bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis exercitationem recusandae quidem, corporis dolores voluptatum molestiae ut velit beatae quia tempore ea nostrum odio dolorem, incidunt harum autem numquam." /> */}
      <StyledComponent isStyled={isStyled} userData={userData} />
      <button onClick={() => setIsStyled(!isStyled)} className='btn'>
        Change Style
      </button>
    </div>
  )
}

export default App
