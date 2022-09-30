import { Center } from "@chakra-ui/react";

export default function Box1({ src, name1, name2, name4, name5, name3 }) {
    return (
      <div
        style={{
          border: "1px solid black",
          width: "400px",
          margin: "auto",
          borderRadius: "10px",
          textAlign:Center,
          
          
        }}
      >
        <img
          width="250px"
        
          src={src}
          alt="Abacus-Images"
          style={{ borderRadius: "10px" ,margin:"auto"}}
        />
  
        <h2 style={{textAlign:"center",fontWeight:"bold"}}> {name1}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <h2> {name2}</h2>
  
          <h2> {name3}</h2>
          <h3>{name4}</h3>
        </div>
        <p style={{textAlign:"center",fontWeight:"bold"}}>{name5}</p>
      </div>
    );
  }