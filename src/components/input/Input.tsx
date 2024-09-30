interface InputProps {
	value: string;
	handleOnChange?: (value: string) => void;
	type: string;
	placeholder?: string;
	disabled?: boolean;
}

// needs improvement
export const Input = (props: InputProps) => {
	const {
		value,
		handleOnChange,
		type,
		placeholder = '',
		disabled = false,
	} = props;
	return (
		<input
			disabled={disabled}
			value={value}
			type={type}
			placeholder={placeholder}
			onChange={e => handleOnChange && handleOnChange(e.target.value)}
			style={{ width: '100%' }}
		/>
	);
};
