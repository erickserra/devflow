import * as z from 'zod';

export const QuestionFormSchema = z.z.object({
  title: z
    .string()
    .min(5, { message: 'Title must be at least 5 characters' })
    .max(130, { message: 'Title must have a maximum of 130 characters' }),
  explanation: z.string().min(100, { message: 'Explanation must have at least 100 characters' }),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: 'A Tag name is required' })
        .max(15, { message: 'Tag name must have a maximum of 15 characters' })
    )
    .min(1, { message: 'You must give at least one tag to the question' })
    .max(3, { message: 'You can give a maximum of 3 tags to the question' }),
});
