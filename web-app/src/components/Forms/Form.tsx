const Form = ({ children, ...attr }: any) => {
  return <form {...attr}>{children}</form>;
};

export default Form;
