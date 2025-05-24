type AlertProps = {
	children: React.ReactNode;
};
const Alert = ({ children }: AlertProps) => {
	return <div className="text-red-700 italic text-sm">{children}</div>;
};
export { Alert };
