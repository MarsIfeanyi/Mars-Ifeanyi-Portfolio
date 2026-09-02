type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return <main className="pt-22">{children}</main>;
};

export default PageContainer;
