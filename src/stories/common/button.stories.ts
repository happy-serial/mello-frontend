import type { Meta, StoryObj } from "@storybook/react";
import { NewColors } from "../../../public/styles/colors/colors";

import { EventButton } from "../../components/common/button";

const meta = {
  title: "Common/Button",
  component: EventButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    borderColor: { control: "color" },
  },
} satisfies Meta<typeof EventButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    label: "로그인",
    backgroundColor: NewColors.transparent,
    color: NewColors.blackTransparent,
    disabled: false,
    OnClick: () => {
      console.log("asdf");
    },
    width: 12,
    height: 12,
    fontSize: 12,
    fontWeight: 400,
    padding: "12px",
  },
};
