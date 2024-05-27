import { NewColors } from "../../public/styles/colors/colors";

export interface BorderProps {
    borderColor: NewColors;
    borderWidth: number;
    borderRadius: number;
}

export interface ColorProps {
    backgroundColor: NewColors;
    color: NewColors;
}

export interface SizeProps {
    width: number;
    height: number;
    padding: string;
}

export interface FontProps {
    fontSize: number;
    fontWeight: number;
}