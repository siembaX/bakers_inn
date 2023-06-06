import { Navbar } from '../js/components/Navbar'
import { Footer } from '../js/components/Footer'
import '../fonts/all/fonts.css'
import Columns from '../js/components/Columns';
import IMAGES from '../images/index1'

export default function Kids() {
  
    return (
      <div className="wrapper">
        <Navbar />
        <section className="kids_hero">

        </section>

        <div className='gap-below'></div>

        <section className='spaceship-maze' id='sect-color-blue'>
          <div className="row">
            <div className="col-lg-6" id='spaceship-txt'>
              <Columns h2='Spaceship Maze' />
              <Columns p='Help the spaceship through the maze to get back to earth. 
              Move through levels with increasing difficulty; each puzzle starts the 
              ship in a different location.' />

              <Columns p='Develop kids’ skills in strategizing, spatial awareness, hand-eye 
              coordination, problem solving and more! Free to play, priceless for learning.' />

              <a target='_blank' href='https://toytheater.com/maze/' rel="noreferrer">PLAY GAME</a>
            </div>

            <div className="col-lg-6" id='maze-puzzle-image'>
              <Columns images={IMAGES.mazepuzzle} />
            </div>
          </div>
        </section>

        <div className='gap-below'></div>

        <section className='spaceship-maze' id='sect-color-red'>
          <div className="row">
            <div className="col-lg-6" id='spaceship-txt'>
              <Columns h2='Risky Way' />
              <Columns p="Risky Way is a free instant game. The highways of the future 
              are risky and if you want to survive you'll need to be smarter than all of 
              them combined. All you have to do in this nerve-tingling racing game is click, 
              hold, and let go. Of course, if you want to be an effective driver who is able to 
              survive you'll have to know when to click, how long to hold, and only let go at the 
              appropriate time." />
              <a target='_blank' href='https://toytheater.com/maze/' className='redbtn' rel="noreferrer">PLAY GAME</a>
            </div>

            <div className="col-lg-6" id='maze-puzzle-image'>
              <Columns images={IMAGES.cuties} />
            </div>
          </div>
        </section>

        <div className='gap-below'></div>

        <section className='spaceship-maze' id='sect-color-deepblue'>
          <div className="row">
            <div className="col-lg-6" id='spaceship-txt'>
              <Columns h2='Risky Way' />
              <Columns p="Risky Way is a free instant game. The highways of the future 
              are risky and if you want to survive you'll need to be smarter than all of 
              them combined. All you have to do in this nerve-tingling racing game is click, 
              hold, and let go. Of course, if you want to be an effective driver who is able to 
              survive you'll have to know when to click, how long to hold, and only let go at the 
              appropriate time." />
              <a target='_blank' href='https://www.pacman1.net/' rel="noreferrer">PLAY GAME</a>
            </div>

            <div className="col-lg-6" id='maze-puzzle-image'>
              <Columns images={IMAGES.pacman} />
            </div>
          </div>
        </section>
        <div className='gap-below'></div>
        
        
         
        
      </div>
    );
  }