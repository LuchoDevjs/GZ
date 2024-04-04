export interface CardProps {
  border: string;
  text: string;
  bg?: string;
  bgButton: string;
  hoverButton: string;
  textButton: string;
  borderButton?: string;
  plan: string;
  price: string;
  description: string;
  separatorColor: string;
  items: { iconColor: string; text: string }[];
}
