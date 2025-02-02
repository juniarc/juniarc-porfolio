export interface WorkItemType {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  image: string;
  description: string;
  position?: string;
  yPercent?: string;
  startTrigger?: string;
}

export interface DetailWorkType {
  id: number;
  name: string;
  year: string;
  role: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}
