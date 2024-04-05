import { useEffect , useState , useRef } from 'react'
import { Colors } from "../../../public/styles/colors/colors";
import { Spacer } from "../common/spacer";
import { Button } from "../../../src/components/common/button"

interface TabButtonsProps{
  setTab: React.Dispatch<React.SetStateAction<string>>;
  tabArray: string[];
  tab: string;
}

export const TabButtons:React.FC<TabButtonsProps> = ({tab , setTab , tabArray}) => {

  return (
    <>
      <div>
        {
          tabArray.map(( myArray , index )=>{
            return(
              <Button
              key = {index} 
              backgroundColor = {Colors.black}
              color = {tab === myArray ? Colors.white : Colors.gray}
              label = {`${myArray}`}
              size = "large"
              purpose="event"
              onClick = {() => setTab(myArray)}
            />
          )})
        }
      </div>
    </>
  );
};
