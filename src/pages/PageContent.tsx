type PageContentProps = {
  children?: React.ReactNode;
};

export default function PageContent(props: PageContentProps) {
  return (
    <div className="w-full px-4 pt-4 md:px-9 xl:px-72 2xl:px-96 pb-8" >
      {props.children}
    </div>
  );
}
