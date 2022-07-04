export interface IModel {
  id: number;
  created_at: string;
  updated_at: string;
}
export interface IResource<Type> {
  data: Type;
}
export interface IAuthUser {
  id: number;
  email: string;
  name: string;
  image?: any;
}

export interface ICategory extends IModel {
  name: string;
  user_id: number;
  img?: any;
  is_public: boolean;
}
export interface IPosts extends IModel {
  user_id: number;
  category_id: number;
  word: string;
  meaning: string;
  body: string;
}

export interface ILinks {
  first?: string;
  last?: string;
  prev?: string;
  next?: string;
}

export interface IMeta {
  next_cursor?: string;
  prev_cursor?: string;
  per_page: number;
  path: string;
}

export interface IData<Type> {
  data: Type;
  links: ILinks;
  meta: IMeta;
}

export interface IListIcon<Type> {
  list: Type;
}

export type IChildren = {
  children?: React.ReactNode;
};

export interface Iicon {
  name: string;
  delay: string;
  Icon: any;
}

export interface ICartPost {
  id: number;
  body: string;
  word: string;
  meaning: string;
  categoryId:string
}