import './about.scss'

export default function About() {
  return (
    <div className='about' id='about'>
        <div className="left">
          <div className="wrapper">
            <h1>About Me.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure rem suscipit excepturi officiis. Eligendi laudantium debitis dolor veritatis ipsum nisi officiis voluptatibus laboriosam? Sint recusandae dolor dolore, ratione amet dolorem?</p>
          </div>
        </div>
        <div className="right">
            <div className="imgContainer">
                <img src="assets/man2.png" alt="" />
            </div>
        </div>
    </div>
  )
}
