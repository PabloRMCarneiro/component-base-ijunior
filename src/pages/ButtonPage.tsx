import React from 'react'

import Button from '../Components/Button'

function ButtonPage() {
  return (
    <div style ={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
    }}>
    <Button
      message="Hello World"
      size = {{width: "4xl", height: "xl"}}
      font = {{size: "sm", color: "primaryLightContrast", fontWeight: 500}}  
      radius = "md"
      color = "primarySolidContrast"
      hover = {{color: "primaryLightContrast", fontColor: "white"}}
      onClick={() => console.log("Hello World")}
      bordered  
      />
    <br />
    <br />
    <br />
    <Button
      message="Hello World"
      size = {{width: "6xl", height: "2xl"}}
      font = {{size: "sm", color: "primaryLightContrast", fontWeight: 500}}  
      radius = "lg"
      color = "primarySolidContrast"
      hover = {{color: "primaryLightContrast", fontColor: "white"}}
      />
    <br />
    <br />
    <br />
    <Button
      message="World"
      size = {{width: "3xl", height: "2xl"}}
      font = {{size: "md", color: "primaryBorderHover", fontWeight: 900}}  
      radius = "2xl"
      color = "primaryLightActive"
      hover = {{color: "primaryLightContrast", fontColor: "white"}}
      shadow = "xl"
      />
    <br />
    <br />
    <br />
    <Button
      message="World"
      size = {{width: "5xl", height: "lg"}}
      font = {{size: "sm", color: "primaryBorderHover", fontWeight: 400}}  
      radius = "xs"
      color = "primaryLightActive"
      hover = {{color: "primaryLightContrast", fontColor: "white"}}
      bordered
      />
    </div>
  )
}

export default ButtonPage