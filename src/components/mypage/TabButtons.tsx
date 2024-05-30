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
              borderColor={NewColors.primary}
              borderWidth={75}
              borderRadius={16}
              backgroundColor={NewColors.primary}
              color={NewColors.fontWhite}
              label="보내기"
              disabled={false}
              OnClick={() => setTab(myArray)}
              width={75}
              height={22}
              padding="19px 97px"
              fontSize={14}
              fontWeight={400}
            />
            // <Button
            //   key={index}
            //   backgroundColor={Colors.black}
            //   color={tab === myArray ? Colors.white : Colors.gray}
            //   label={`${myArray}`}
            //   size="large"
            //   purpose="event"
            //   onClick={() => setTab(myArray)}
            // />
          );
        })}
      </div>
    </>
  );
};
