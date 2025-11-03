interface PlugLinkProps {
  children?: React.ReactNode;
  className?: string;
}

export const PlugLink: React.FC<PlugLinkProps> = ({ children, className }) => {
  return (
    <a href="https://ya.ru/?npr=1" target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};
