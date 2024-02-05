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
  phones: string[]
  address?: string
}

export type LanguagesForm = {
  languages: string[],
}


export type FeatureType = {
  name: string,
  price: number
}

export type FeaturesForm = {
  features: Array<FeatureType>
}

export type CoworkingData = {
  general: GeneralForm | null,
  languages: LanguagesForm | null,
  features: FeaturesForm | null
}