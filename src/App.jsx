import React from "react"
import ChannelList from "./Components/ChannelList/ChannelList"
import Chatlist from "./Components/ChatList/ChatList"
function App() {

  const mensajes = [
    
      {
          hour: '11:06 PM',
          author: 'Pepe suarez',
          text: 'Hola a todos!',
          id: 1
      },
      {
          hour: '11:05 AM',
          author: 'Martina Sanchez',
          text: 'Que tal?',
          id: 2
      },
      {
          hour: '11:17 AM',
          author: 'Juancito',
          text: 'Muy mal, no se nada de HTML para el examen',
          id: 3
      }
  ]
/* ***********SON DIV SUELTOS
  [
    <div>
      <span>Pepe suarez 11:06</span>
      <p>Hola a todos</p>
    </div>,
    <div>
      <span>Pepe suarez 11:06</span>
      <p>Hola a todos</p>
    </div>
  ]
*/

  const canales =[
    {
      id: 1,
      nombre: 'Consultas'
    },
    {
        id: 2,
        nombre: 'General'
    },
    {
        id: 3,
        nombre: 'Tareas'
    }
  ]
  return (
    <>
      <h1>SLACK CLONE</h1>
      {/* AQUI IRIA LA LOGICA DEL MAPEO */}
    
    <Chatlist mensajes={mensajes}/>
    <ChannelList canales={canales} titulo={"canales importados"}/>
    <ChannelList canales={canales} titulo={"mensajes directos"}/>
    </>
  )
}

export default App
