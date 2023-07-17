export interface IFormValues {
    name: string,
    email: string,
    password: string,
}

export interface IFormProps {
    submit: (data: IFormValues) => void;
}

export interface DataArray {
  _id: string;
  title: string;
  thumbnail: {
    regular: { small: string };
    trending?: { small: string; large: string };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  image: string;
}