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
    backgroundColor: NewColors.userCard,
    color: NewColors.userCard,
    label: "대마왕",
    onClick: () => {
      console.log("대마왕 로그");
    },
    disabled: false,
    width: 120,
    height: 40,
    padding: "12px",
    fontSize: 16,
    fontWeight: 500,
  },
};
