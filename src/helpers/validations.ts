import {z} from "zod";


const messageRequired = 'This field is required'

const phonesSchema = z.array(
  z.object({
    value: z.string().min(1, {message: 'This field must contain as minimum 1 phone'})
  })
)


export  const generalSchema = z.object({
  name: z.string()
    .min(1, {message: messageRequired})
    .max(20, {message: '20 symbols max'}),

  description: z.string().min(1, {message: messageRequired}),
  phones: phonesSchema,
  address: z.string().optional()
});

// extracting the type
export type GeneralSchema = z.infer<typeof generalSchema>;


export const languageSchema = z.object({
  language: z.string().min(1, {message: messageRequired})
});


export type LanguageSchema = z.infer<typeof languageSchema>;
