interface ButtonProps {
	disabled?: boolean;
	label?: string;
	onClick: () => void;
}

export const Button = ({ disabled, label, onClick }: ButtonProps) => {
	return (
		<button disabled={disabled} onClick={onClick}>
			<span>{label}</span>
		</button>
	);
};
