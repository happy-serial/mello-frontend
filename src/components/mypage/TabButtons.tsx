import { NewColors } from "../../../public/styles/colors/colors";
import { EventButton } from "../../../src/components/common/button";

interface TabButtonsProps {
  setTab: React.Dispatch<React.SetStateAction<string>>;
  tabArray: string[];
  tab: string;
}

export const TabButtons: React.FC<TabButtonsProps> = ({
  tab,
  setTab,
  tabArray,
}) => {
  return (
    <>
      <div>
        {tabArray.map((myArray, index) => {
          return (
            <EventButton
              key={index}
              backgroundColor={NewColors.userCard}
              color={tab === myArray ? NewColors.fontWhite : NewColors.userCard}
              label={`${myArray}`}
              onClick={() => setTab(myArray)}
              disabled={false}
              width={120}
              height={40}
              padding={"12px"}
              fontSize={16}
              fontWeight={500}
            />
          );
        })}
      </div>
    </>
  );
};
