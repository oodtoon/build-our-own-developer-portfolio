export type SkillType = {
  title: string;
  content: string;
  id: string;
  experience: string;
  href: string;
  group: string;
};

export type DeveloperInfoType = {
  name: string;
  occupation: string;
  style: string;
  imagePath: string;
  attackingImagePath: string;
  skills: SkillType[];
  projects: string[];
};

export type SkillFieldType = {
  label: string;
  group: string;
};
