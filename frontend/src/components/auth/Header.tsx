type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <div className="text-2xl font-bold">{title}</div>;
}

export default Header;
