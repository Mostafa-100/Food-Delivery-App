type InfoProps = {
  text: string;
  label: string;
  onClick: () => void;
};

function Info({ text, label, onClick }: InfoProps) {
  return (
    <div className="text-sm text-center">
      <span>{text}</span>
      <button
        className="ml-px text-orange-600 hover:underline"
        onClick={onClick}
        type="button"
      >
        {label}
      </button>
    </div>
  );
}

export default Info;
