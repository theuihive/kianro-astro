export interface ProjectMeta {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  backgroundImage: string;
  cardImage: string;
  meta: ProjectMeta[];
}
