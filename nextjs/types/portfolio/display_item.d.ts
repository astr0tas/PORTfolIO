export interface DisplayItem {
  id: string;
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
  component: JSX.Element;
}
