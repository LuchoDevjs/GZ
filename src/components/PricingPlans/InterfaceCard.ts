export interface CardProps {
  border: string;
  text: string;
  bg?: string;
  bgButton: string;
  textButton: string;
  borderButton?: string;
  plan: string;
  price: string;
  description: string;
  items: { iconColor: string; text: string }[];
}
