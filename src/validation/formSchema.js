import * as yup from "yup";

const formSchema = yup.object().shape({
   name: yup
      .string()
      .required()
      .min(2, 'name must be at least 2 characters'),
   size: yup
      .string()
      .oneOf(['small', 'medium', 'large'], ' we need to know what size'),
   // submitBtn: yup
   //    .string() 
   pepperoni: yup.boolean(),
   olives: yup.boolean(),
   chicken: yup.boolean(),
   pineapple: yup.boolean(),
   special: yup
      .string()
      .max(70, 'please keep your special requests below 50 characters'),

})

export default formSchema;