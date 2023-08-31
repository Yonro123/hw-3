export default function Input({
  placeholder,
  value,
  className,
  onChange,
  onKeyPress,
}) {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
