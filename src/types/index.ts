export interface SignupForm {
  username: string
  email: string
  password: string
  repeatPassword: string
}

export interface SigninForm {
  email: string
}

export enum Steps {
  GENERAL = 'General',
  LANGUAGES = 'Language',
  FEATURES = 'Features'
}


export type GeneralForm = {
  name: string
  description: string
  phones: Array<{ value: string }>
  address?: string
}


export type TagType = {
  value: string
}
export type FeatureType = {
  name: string,
  price: number,
  tags: Array<TagType>
}

export type FeaturesForm = {
  features: Array<FeatureType>
}

export type CoworkingData = {
  general: GeneralForm | null,
  language: string,
  features: FeaturesForm | null
}