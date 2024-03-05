import { useEffect , useState , useRef } from 'react'
import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { Button } from "../../../src/components/common/button"

export const TabButtons = ({setTab}) => {
  const myArray = ["ActivityLog","Friends"]

  return (
    <>
      <div>
        {
          myArray.map(( myArray , index )=>{
            return(
              <Button
              key = {index} 
              backgroundColor = {Colors.purple}
              color = {Colors.white}
              label = {`${myArray}`}
              size = "middle"
              purpose="event"
              onClick = {(e) => setTab(e.target.textContent)}
            />
          )})
        }
      </div>
    </>
  );
};
