export interface ProjectMeta {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  backgroundImage: string;
  detailsImage1: string;
  detailsImage2: string;
  detailsImage3: string;
  cardImage: string;
  meta: ProjectMeta[];
}
