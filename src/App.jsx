import "./proyecto.css";
import img1 from '/imagenes/img1.jpg';
import img2 from '/imagenes/img2.jpg';
import img3 from '/imagenes/img3.jpg';
import img4 from '/imagenes/img4.jpg';
import img5 from '/imagenes/img5.jpg';
import img6 from '/imagenes/img6.jpg';
import img7 from '/imagenes/img7.jpg';
import img8 from '/imagenes/img8.jpg';
import img9 from '/imagenes/img9.jpg';
import img10 from '/imagenes/img10.jpg';
import img11 from '/imagenes/img11.jpg';
import img12 from '/imagenes/img12.jpg';
import img13 from '/imagenes/img13.jpg';
import img14 from '/imagenes/img14.jpg';
import img15 from '/imagenes/img15.jpg';



export default function App() {
  return (
  <div>
    <div className="fondo">
      <div className="">
        <div className="titulo-">
        <h1 className="juan">
      Hi, I'm Juan Felipe Suarez Rodriguez
    </h1>
        </div>
        <div className="titulo">
        <h3 className="el-h">
    I have knowledge in web application development in which I employ different technologies such as: Node, React, HTML5, Bootstrap, CSS, Flexbox, JavaScript, PHP with MySQL database; I'm looking for my first experience as a developer to demonstrate my qualities and perfect each one of them. I consider myself a versatile person to work on high-quality projects. worth; I stand out for my ability to work as a team and for the easy understanding of new concepts and methodologies in web development.
    </h3>
        </div>

      </div>

    </div>

    <div className="educacion">
      <h1 className="juan titulo-">Educations</h1>
    </div>

    <div className="certificaciones">
      <a className="botones-certifica" href="frontend.html"><h2 className="tituloss1">Frontend React</h2></a>
      <a className="botones-certifica" href="bachiller.html"><h2 className="tituloss1">Bachiller Academico</h2></a>
      <a className="botones-certifica" href="alfabetizacion.html"><h2 className="tituloss">Alfabetización Informática</h2></a>
      <a className="botones-certifica" href="excel.html"><h2 className="tituloss4">Manejo Basico De La Herramienta De Hojas De Calculo Excel</h2></a>
    </div>

    <div>
      <div>
        <h1 className="titulo- juan juan1">Portafolio</h1>
      </div>
      <div>
        <h1 className="juan juan3">Featured Projects</h1>
        <h2 className="el-h juan4">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</h2>
      </div>
    </div>

    <div className="fondo-img">
      <h1 className="juan2 juan1 juan3">Clon - Pinterest</h1>
      <div className="fotos">
      <div className="imagen"><img className="imgg" src={img1} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img2} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img3} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img4} alt="" /></div>
      </div>
    </div>

    <div className="fondo-img1">
      <h1 className="juan2 juan1 juan3">Nike Shoes</h1>
      <div className="fotos">
      <div className="imagen"><img className="imgg" src={img5} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img6} alt="" /></div>
      </div>
    </div>

    <div className="fondo-img">
      <h1 className="juan2 juan1 juan3">Frontend Store</h1>
      <div className="fotos">
      <div className="imagen"><img className="imgg" src={img7} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img8} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img9} alt="" /></div>
      </div>
    </div>

    <div className="fondo-img">
      <h1 className="juan2 juan1 juan3">Pokemos page JF</h1>
      <div className="fotos">
      <div className="imagen"><img className="imgg" src={img10} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img11} alt="" /></div>
      </div>
    </div>

    <div className="fondo-img">
      <h1 className="juan2 juan1 juan3">FreeLancer JF</h1>
      <div className="fotos">
      <div className="imagen"><img className="imgg" src={img12} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img13} alt="" /></div>
      <div className="imagen"><img className="imgg" src={img14} alt="" /></div>
      </div>
    </div>

    <div className="fondo-img">
      <h1 className="juan2 juan1 juan3">Tokners</h1>
      <div className="fotos">
      <div className="imagen"><img className="imgg" src={img15} alt="" /></div>
      </div>
    </div>

    <div className="ultimo">
      <div className="distancia"><h1 className="ultimo2 ultimo1">Contact me</h1></div>
      <div><h2 className="ultimo1">WhatsApp: +57 304 2125 861</h2></div>
    </div>


</div>
  )
}