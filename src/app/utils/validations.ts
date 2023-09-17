import * as Yup from 'yup';

const urlRegex = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

export const EventSchema = Yup.object().shape({
  title: Yup.string().trim().min(2, 'Too short').max(50, 'Too long').required('Title required'),
  start: Yup.date().typeError('Date').required('Required'),
  end: Yup.date()
    .typeError('Date')
    .min(Yup.ref('start'), "End date can't be before start date")
    .required('Required'),
  resource: Yup.string().matches(urlRegex,'URL is not valid').nullable()
});

export const LabelSchema = Yup.object().shape({
  title: Yup.string().trim().min(2, 'Too short').max(50, 'Too long').required('Title required'),
  color: Yup.string().required('Required'),
});